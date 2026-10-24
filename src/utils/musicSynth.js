// Web Audio API ambient chord synthesizer for Lipi's portfolio music player
// Provides soft, relaxing musical motifs for each song without needing external audio files.

let audioCtx = null;
let masterGain = null;
let activeLoopInterval = null;
let progressInterval = null;
let currentTrackId = null;

// Track harmonic chord progressions & frequencies (Hz)
const TRACK_HARMONIES = {
  'track-1': {
    // Piano Man (C - G - Am - F)
    name: 'Piano Man',
    type: 'piano',
    tempo: 1600, // ms per chord
    chords: [
      [261.63, 329.63, 392.00], // C4, E4, G4
      [246.94, 293.66, 392.00], // B3, D4, G4
      [220.00, 261.63, 329.63], // A3, C4, E4
      [174.61, 220.00, 261.63], // F3, A3, C4
      [196.00, 246.94, 293.66], // G3, B3, D4
      [261.63, 329.63, 523.25]  // C4, E4, C5
    ]
  },
  'track-2': {
    // Bohemian Rhapsody (Bb - Gm - Cm - F)
    name: 'Bohemian Rhapsody',
    type: 'ballad',
    tempo: 1900,
    chords: [
      [233.08, 293.66, 349.23], // Bb3, D4, F4
      [196.00, 233.08, 293.66], // G3, Bb3, D4
      [261.63, 311.13, 392.00], // C4, Eb4, G4
      [174.61, 220.00, 261.63, 311.13], // F3, A3, C4, Eb4
      [233.08, 293.66, 466.16]  // Bb3, D4, Bb4
    ]
  },
  'track-3': {
    // There Is a Light That Never Goes Out (E - F#m - A - B)
    name: 'There Is a Light That Never Goes Out',
    type: 'dreamy',
    tempo: 1800,
    chords: [
      [164.81, 207.65, 246.94, 329.63], // E3, G#3, B3, E4
      [185.00, 220.00, 277.18, 370.00], // F#3, A3, C#4, F#4
      [220.00, 277.18, 329.63, 440.00], // A3, C#4, E4, A4
      [246.94, 311.13, 370.00, 493.88]  // B3, D#4, F#4, B4
    ]
  }
};

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playChord(ctx, frequencies, type, duration) {
  if (!ctx || ctx.state === 'closed') return;

  const now = ctx.currentTime;
  const chordGain = ctx.createGain();
  chordGain.connect(masterGain);

  // Filter to create warm, cozy analog tone
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(type === 'piano' ? 950 : 650, now);
  filter.connect(chordGain);

  // Soft attack and gentle fade-out
  chordGain.gain.setValueAtTime(0.0001, now);
  chordGain.gain.exponentialRampToValueAtTime(0.18, now + 0.12);
  chordGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  frequencies.forEach((freq, i) => {
    const osc = ctx.createOscillator();
    
    // Choose wave shape based on track style
    if (type === 'piano') {
      osc.type = i % 2 === 0 ? 'sine' : 'triangle';
    } else if (type === 'ballad') {
      osc.type = 'sine';
    } else {
      osc.type = 'triangle';
    }

    // Gentle slight detune for lush analog warmth
    osc.detune.setValueAtTime((i - 1) * 4, now);
    osc.frequency.setValueAtTime(freq, now);

    osc.connect(filter);
    osc.start(now + (i * 0.04)); // Subtle arpeggiation delay
    osc.stop(now + duration + 0.2);
  });
}

export const musicPlayer = {
  playTrack(trackId, onTick, onEnd) {
    this.stop();

    const config = TRACK_HARMONIES[trackId];
    if (!config) return;

    const ctx = getAudioContext();
    if (!ctx) return;

    masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.7, ctx.currentTime);
    masterGain.connect(ctx.destination);

    currentTrackId = trackId;
    let chordIndex = 0;
    let elapsedSeconds = 0;
    const maxDuration = 32; // 32 seconds ambient sample preview

    const durationSec = (config.tempo / 1000) * 1.35;

    // Play first chord immediately
    playChord(ctx, config.chords[0], config.type, durationSec);
    chordIndex = 1;

    activeLoopInterval = setInterval(() => {
      if (chordIndex >= config.chords.length) {
        chordIndex = 0;
      }
      playChord(ctx, config.chords[chordIndex], config.type, durationSec);
      chordIndex++;
    }, config.tempo);

    progressInterval = setInterval(() => {
      elapsedSeconds += 1;
      if (onTick) onTick(elapsedSeconds, maxDuration);

      if (elapsedSeconds >= maxDuration) {
        this.stop();
        if (onEnd) onEnd();
      }
    }, 1000);
  },

  stop() {
    if (activeLoopInterval) {
      clearInterval(activeLoopInterval);
      activeLoopInterval = null;
    }
    if (progressInterval) {
      clearInterval(progressInterval);
      progressInterval = null;
    }
    if (masterGain && audioCtx) {
      try {
        masterGain.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
      } catch (e) {
        // Safe catch if context is already stopped
      }
      masterGain = null;
    }
    currentTrackId = null;
  },

  getCurrentTrack() {
    return currentTrackId;
  }
};

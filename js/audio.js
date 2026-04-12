/* ============================================================
   Petit Mot — audio.js
   Web Speech API wrapper for French text-to-speech.
   Exposes: window.PetitMot.Audio = { speak }
   ============================================================ */

window.PetitMot = window.PetitMot || {};

window.PetitMot.Audio = (function () {
  'use strict';

  var frVoice = null;

  /* ── Voice Initialisation ───────────────────────────────────
     Chrome loads voices asynchronously; listen for voiceschanged.
     Other browsers return voices synchronously from getVoices().
  ─────────────────────────────────────────────────────────── */
  function findFrVoice() {
    try {
      var voices = speechSynthesis.getVoices();
      for (var i = 0; i < voices.length; i++) {
        if (voices[i].lang.startsWith('fr')) {
          frVoice = voices[i];
          break;
        }
      }
      console.log('[audio] voices found:', voices.length, 'fr voice:', !!frVoice);
    } catch (e) {
      console.warn('[audio] Error scanning voices:', e);
    }
  }

  function init() {
    try {
      findFrVoice();
      if (typeof speechSynthesis.addEventListener === 'function') {
        speechSynthesis.addEventListener('voiceschanged', findFrVoice);
      }
    } catch (e) {
      console.warn('[audio] Speech synthesis not available:', e);
    }
  }

  /* ── speak ──────────────────────────────────────────────────
     Cancels any in-progress utterance, then speaks text in fr-FR.
     If no fr-FR voice is available, logs a warning and returns.
  ─────────────────────────────────────────────────────────── */
  function speak(text) {
    try {
      if (!window.speechSynthesis) {
        console.warn('[audio] No fr-FR voice available — skipping playback');
        return;
      }

      // Re-check in case voices loaded after init
      if (!frVoice) {
        findFrVoice();
      }

      if (!frVoice) {
        console.warn('[audio] No fr-FR voice available — skipping playback');
        return;
      }

      speechSynthesis.cancel();

      // 50ms delay after cancel — iOS Safari drops utterances if speak() is called immediately
      setTimeout(function () {
        var utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'fr-FR';
        utterance.rate = 0.7;
        if (frVoice) utterance.voice = frVoice;
        speechSynthesis.speak(utterance);
      }, 50);
    } catch (e) {
      console.warn('[audio] speak() error:', e);
    }
  }

  init();

  return { speak: speak };

}());

/* ============================================================
   Petit Mot — journal.js
   Journal read-along feature for the story completion screen.
   Exposes: window.PetitMot.Journal = { init }
   ============================================================ */

window.PetitMot = window.PetitMot || {};

window.PetitMot.Journal = (function () {
  'use strict';

  /* ── Highlight helper (same pattern as stories.js) ──────── */
  function buildSentenceNode(sentence, highlight) {
    var frag = document.createDocumentFragment();
    if (!highlight) { frag.appendChild(document.createTextNode(sentence)); return frag; }
    var lower = sentence.toLowerCase();
    var lowerH = highlight.toLowerCase();
    var idx = lower.indexOf(lowerH);
    if (idx === -1) { frag.appendChild(document.createTextNode(sentence)); return frag; }
    if (idx > 0) frag.appendChild(document.createTextNode(sentence.slice(0, idx)));
    var span = document.createElement('span');
    span.className = 'vocab-highlight';
    span.textContent = sentence.slice(idx, idx + highlight.length);
    frag.appendChild(span);
    if (idx + highlight.length < sentence.length) {
      frag.appendChild(document.createTextNode(sentence.slice(idx + highlight.length)));
    }
    return frag;
  }

  function _refresh() {
    if (window.PetitMot.Tooltips && typeof window.PetitMot.Tooltips.refresh === 'function') {
      window.PetitMot.Tooltips.refresh();
    }
  }

  /* ── Public: init ───────────────────────────────────────── */
  function init(dayNumber, containerElement) {
    if (!containerElement) return;

    /* ── Resolve journal data ─────────────────────────────── */
    var curriculum = window.PetitMot.curriculum || [];
    var dayData = null;
    for (var i = 0; i < curriculum.length; i++) {
      if (curriculum[i].day === dayNumber) { dayData = curriculum[i]; break; }
    }
    if (!dayData || !dayData.journal || !dayData.journal.lines || dayData.journal.lines.length === 0) return;

    var lines = dayData.journal.lines;

    /* ── Playback state ───────────────────────────────────── */
    var isPlaying = false;
    var currentSentence = 0;
    var pollInterval = null;
    var lineElements = [];

    /* ── Root wrapper ─────────────────────────────────────── */
    while (containerElement.firstChild) containerElement.removeChild(containerElement.firstChild);

    /* ── Heading ──────────────────────────────────────────── */
    var heading = document.createElement('h3');
    heading.className = 'journal-heading';
    heading.setAttribute('data-fr', 'Le petit journal de Paris');
    heading.setAttribute('data-en', 'The little Paris journal');
    heading.textContent = 'Le petit journal de Paris';
    containerElement.appendChild(heading);

    /* ── Controls ─────────────────────────────────────────── */
    var controls = document.createElement('div');
    controls.className = 'journal-controls';

    var btnPlay = document.createElement('button');
    btnPlay.className = 'btn-journal-play';
    btnPlay.setAttribute('data-fr', 'Écouter');
    btnPlay.setAttribute('data-en', 'Listen');
    btnPlay.textContent = '▶ Écouter';
    controls.appendChild(btnPlay);
    containerElement.appendChild(controls);

    /* ── Transcript ───────────────────────────────────────── */
    var transcript = document.createElement('div');
    transcript.className = 'journal-transcript';

    for (var j = 0; j < lines.length; j++) {
      (function (lineIdx, lineData) {
        var lineEl = document.createElement('div');
        lineEl.className = 'journal-line';

        /* ── French text row: text + audio icon ── */
        var frRow = document.createElement('div');
        frRow.className = 'journal-line-fr';
        frRow.appendChild(buildSentenceNode(lineData.fr, lineData.highlight));

        /* 🔊 audio hint icon */
        var audioIcon = document.createElement('span');
        audioIcon.className = 'story-audio-icon';
        audioIcon.setAttribute('aria-hidden', 'true');
        audioIcon.textContent = '\uD83D\uDD0A';
        frRow.appendChild(audioIcon);

        /* Tap French row → speak that line.
           If auto-play is running, stop it first. */
        frRow.addEventListener('click', function () {
          if (isPlaying) {
            clearPoll();
            try { window.speechSynthesis.cancel(); } catch (e) { /* ignore */ }
            setPlayState();
          }
          // Highlight this line
          for (var k = 0; k < lineElements.length; k++) {
            lineElements[k].classList.remove('journal-line--active');
          }
          lineEl.classList.add('journal-line--active');
          if (window.PetitMot.Audio && typeof window.PetitMot.Audio.speak === 'function') {
            window.PetitMot.Audio.speak(lineData.fr);
          }
        });

        lineEl.appendChild(frRow);

        /* ── English translation: always visible, starts dimmed ── */
        var enEl = document.createElement('div');
        enEl.className = 'journal-line-en journal-line-en--dimmed';
        enEl.textContent = lineData.en;

        /* Tap English → toggle dimmed/revealed */
        enEl.addEventListener('click', function (e) {
          e.stopPropagation(); // don't bubble to frRow
          if (enEl.classList.contains('journal-line-en--dimmed')) {
            enEl.classList.remove('journal-line-en--dimmed');
            enEl.classList.add('journal-line-en--revealed');
          } else {
            enEl.classList.remove('journal-line-en--revealed');
            enEl.classList.add('journal-line-en--dimmed');
          }
        });

        lineEl.appendChild(enEl);

        transcript.appendChild(lineEl);
        lineElements.push(lineEl);
      }(j, lines[j]));
    }

    containerElement.appendChild(transcript);

    /* ── Active line helpers ──────────────────────────────── */
    function setActive(idx) {
      for (var k = 0; k < lineElements.length; k++) {
        lineElements[k].classList.remove('journal-line--active');
      }
      if (idx >= 0 && idx < lineElements.length) {
        lineElements[idx].classList.add('journal-line--active');
        lineElements[idx].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }

    function clearPoll() {
      if (pollInterval !== null) {
        clearInterval(pollInterval);
        pollInterval = null;
      }
    }

    function setPlayState() {
      isPlaying = false;
      btnPlay.setAttribute('data-fr', 'Écouter');
      btnPlay.setAttribute('data-en', 'Listen');
      btnPlay.textContent = '▶ Écouter';
    }

    function setPauseState() {
      isPlaying = true;
      btnPlay.setAttribute('data-fr', 'Pause');
      btnPlay.setAttribute('data-en', 'Pause');
      btnPlay.textContent = '⏸ Pause';
    }

    function resetPlayback() {
      clearPoll();
      setPlayState();
      currentSentence = 0;
      for (var k = 0; k < lineElements.length; k++) {
        lineElements[k].classList.remove('journal-line--active');
      }
    }

    /* ── Speak current sentence in auto-play mode ─────────── */
    function speakCurrent() {
      if (currentSentence >= lines.length) {
        resetPlayback();
        return;
      }

      setActive(currentSentence);

      /* Speak via Audio module — Audio.speak() handles cancel internally */
      if (window.PetitMot.Audio && typeof window.PetitMot.Audio.speak === 'function') {
        window.PetitMot.Audio.speak(lines[currentSentence].fr);
      } else {
        try {
          var utt = new SpeechSynthesisUtterance(lines[currentSentence].fr);
          utt.lang = 'fr-FR';
          utt.rate = 0.7;
          window.speechSynthesis.speak(utt);
        } catch (e) {
          resetPlayback();
          return;
        }
      }

      /* Poll every 300ms until speechSynthesis is no longer speaking. */
      clearPoll();
      pollInterval = setInterval(function () {
        if (!isPlaying) { clearPoll(); return; }
        try {
          if (!window.speechSynthesis.speaking) {
            clearPoll();
            var next = currentSentence + 1;
            if (next >= lines.length) {
              resetPlayback();
            } else {
              lineElements[currentSentence].classList.remove('journal-line--active');
              currentSentence = next;
              speakCurrent();
            }
          }
        } catch (e) {
          clearPoll();
          resetPlayback();
        }
      }, 300);
    }

    /* ── Play/pause button ────────────────────────────────── */
    btnPlay.addEventListener('click', function () {
      if (isPlaying) {
        /* Pause: cancel speech, clear poll, stay at currentSentence */
        clearPoll();
        try { window.speechSynthesis.cancel(); } catch (e) { /* ignore */ }
        setPlayState();
      } else {
        /* Play from currentSentence */
        setPauseState();
        speakCurrent();
      }
    });

    _refresh();
  }

  return { init: init };

}());

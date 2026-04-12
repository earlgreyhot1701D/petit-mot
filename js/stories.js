/* ============================================================
   Petit Mot — stories.js
   Story read-along view for a given day.
   Exposes: window.PetitMot.Stories = { init }
   ============================================================ */

window.PetitMot = window.PetitMot || {};

window.PetitMot.Stories = (function () {
  'use strict';

  /* ── Internal state ─────────────────────────────────────── */
  var currentLine = 0;
  var englishVisible = false;
  var dayData = null;

  /* ── Helpers ────────────────────────────────────────────── */

  /**
   * Build a sentence node with optional vocab highlight.
   * Uses indexOf (not regex) to avoid escape issues.
   * Uses DOM APIs only — no innerHTML with dynamic content.
   */
  function buildSentenceNode(sentence, highlight) {
    var frag = document.createDocumentFragment();

    if (!highlight) {
      frag.appendChild(document.createTextNode(sentence));
      return frag;
    }

    var lowerSentence = sentence.toLowerCase();
    var lowerHighlight = highlight.toLowerCase();
    var idx = lowerSentence.indexOf(lowerHighlight);

    if (idx === -1) {
      frag.appendChild(document.createTextNode(sentence));
      return frag;
    }

    if (idx > 0) {
      frag.appendChild(document.createTextNode(sentence.slice(0, idx)));
    }

    var span = document.createElement('span');
    span.className = 'vocab-highlight';
    span.textContent = sentence.slice(idx, idx + highlight.length);
    frag.appendChild(span);

    if (idx + highlight.length < sentence.length) {
      frag.appendChild(document.createTextNode(sentence.slice(idx + highlight.length)));
    }

    return frag;
  }

  function renderDots(container, total, current) {
    while (container.firstChild) container.removeChild(container.firstChild);
    for (var i = 0; i < total; i++) {
      var dot = document.createElement('div');
      dot.className = 'story-dot';
      if (i === current) dot.classList.add('story-dot--current');
      else if (i < current) dot.classList.add('story-dot--done');
      container.appendChild(dot);
    }
  }

  function _refresh() {
    if (window.PetitMot.Tooltips && typeof window.PetitMot.Tooltips.refresh === 'function') {
      window.PetitMot.Tooltips.refresh();
    }
  }

  /* ── "Coming soon" placeholder ──────────────────────────── */
  function renderComingSoon(container) {
    while (container.firstChild) container.removeChild(container.firstChild);
    var wrap = document.createElement('div');
    wrap.className = 'story-view';

    var msg = document.createElement('p');
    msg.style.color = 'var(--ink-soft)';
    msg.style.fontStyle = 'italic';
    msg.textContent = 'Coming soon\u2026';
    wrap.appendChild(msg);

    var btnBack = document.createElement('button');
    btnBack.className = 'btn-back';
    btnBack.setAttribute('data-fr', 'Retour');
    btnBack.setAttribute('data-en', 'Back');
    btnBack.textContent = '\u2190 Retour';
    btnBack.addEventListener('click', function () {
      window.PetitMot.App.showView('calendar');
    });
    wrap.appendChild(btnBack);

    container.appendChild(wrap);
    _refresh();
  }

  /* ── Completion screen ──────────────────────────────────── */
  function renderComplete(container, dayNumber) {
    while (container.firstChild) container.removeChild(container.firstChild);

    var wrap = document.createElement('div');
    wrap.className = 'story-complete';

    // Banner at top
    var bannerEl = document.createElement('div');
    bannerEl.appendChild(window.PetitMot.Ornaments.create('banner', { small: true }));
    wrap.appendChild(bannerEl);

    var eiffelWrap = document.createElement('div');
    eiffelWrap.appendChild(window.PetitMot.Ornaments.create('eiffel-icon', { size: '44px' }));
    wrap.appendChild(eiffelWrap);

    var h2 = document.createElement('h2');
    h2.setAttribute('data-fr', 'Jour complet!');
    h2.setAttribute('data-en', 'Day complete!');
    h2.textContent = 'Jour complet!';
    wrap.appendChild(h2);

    var p = document.createElement('p');
    p.style.color = 'var(--ink-soft)';
    p.textContent = 'You finished your first Paris story.';
    wrap.appendChild(p);

    var dividerWrap = document.createElement('div');
    dividerWrap.style.width = '35%';
    dividerWrap.style.margin = '12px auto';
    dividerWrap.appendChild(window.PetitMot.Ornaments.create('iron-divider'));
    wrap.appendChild(dividerWrap);

    // Journal section
    if (window.PetitMot.Journal && dayData && dayData.journal) {
      var journalContainer = document.createElement('div');
      journalContainer.className = 'journal-section';
      wrap.appendChild(journalContainer);
      window.PetitMot.Journal.init(dayNumber, journalContainer);
    }

    var btnRetour = document.createElement('button');
    btnRetour.className = 'btn-retour';
    btnRetour.setAttribute('data-fr', 'Retour au calendrier');
    btnRetour.setAttribute('data-en', 'Back to calendar');
    btnRetour.textContent = 'Retour au calendrier';
    btnRetour.addEventListener('click', function () {
      window.PetitMot.App.showView('calendar');
    });
    wrap.appendChild(btnRetour);

    container.appendChild(wrap);
    _refresh();
  }

  /* ── Main sentence renderer ─────────────────────────────── */
  function renderSentence(container, dayNumber) {
    var lines = dayData.story.lines;
    var line = lines[currentLine];
    var isLast = currentLine === lines.length - 1;

    while (container.firstChild) container.removeChild(container.firstChild);

    var wrap = document.createElement('div');
    wrap.className = 'story-view';

    // ── Banner above nav ──────────────────────────────────
    var bannerEl = document.createElement('div');
    bannerEl.appendChild(window.PetitMot.Ornaments.create('banner', { small: true }));
    wrap.appendChild(bannerEl);

    // ── Primary nav: back to flashcards ───────────────────
    var nav = document.createElement('div');
    nav.className = 'story-nav';

    var btnRevoir = document.createElement('button');
    btnRevoir.className = 'btn-back';
    btnRevoir.setAttribute('data-fr', 'Revoir les mots');
    btnRevoir.setAttribute('data-en', 'Review the words');
    btnRevoir.textContent = '\u2190 Revoir les mots';
    btnRevoir.addEventListener('click', function () {
      window.PetitMot.App.showView('flashcards', dayNumber);
    });
    nav.appendChild(btnRevoir);
    wrap.appendChild(nav);

    // ── Secondary: smaller calendar link ──────────────────
    var calLink = document.createElement('button');
    calLink.className = 'btn-cal-link';
    calLink.setAttribute('data-fr', 'Retour au calendrier');
    calLink.setAttribute('data-en', 'Back to calendar');
    calLink.textContent = 'Retour au calendrier';
    calLink.addEventListener('click', function () {
      window.PetitMot.App.showView('calendar');
    });
    wrap.appendChild(calLink);

    // ── Header: MetroSign ─────────────────────────────────
    var header = document.createElement('div');
    header.className = 'story-header';
    header.appendChild(window.PetitMot.Ornaments.create('metro-sign', { text: dayData.story.title }));
    wrap.appendChild(header);

    // ── Story card ────────────────────────────────────────
    var card = document.createElement('div');
    card.className = 'story-card';

    var sentenceEl = document.createElement('p');
    sentenceEl.className = 'story-sentence';
    sentenceEl.setAttribute('role', 'button');
    sentenceEl.setAttribute('tabindex', '0');
    sentenceEl.appendChild(buildSentenceNode(line.fr, line.highlight));

    var audioIcon = document.createElement('span');
    audioIcon.className = 'story-audio-icon';
    audioIcon.setAttribute('aria-hidden', 'true');
    audioIcon.textContent = '\uD83D\uDD0A';
    sentenceEl.appendChild(audioIcon);

    sentenceEl.addEventListener('click', function () { window.PetitMot.Audio.speak(line.fr); });
    sentenceEl.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') window.PetitMot.Audio.speak(line.fr);
    });
    card.appendChild(sentenceEl);

    var translationEl = document.createElement('p');
    translationEl.className = 'story-translation';
    translationEl.style.display = 'none';
    translationEl.textContent = line.en;
    card.appendChild(translationEl);

    var btnVoir = document.createElement('button');
    btnVoir.className = 'btn-voir';
    btnVoir.setAttribute('data-fr', 'Voir en anglais');
    btnVoir.setAttribute('data-en', 'See in English');
    btnVoir.textContent = 'Voir en anglais';

    if (englishVisible) {
      translationEl.style.display = '';
      btnVoir.style.display = 'none';
    }

    btnVoir.addEventListener('click', function () {
      englishVisible = true;
      translationEl.style.display = '';
      btnVoir.style.display = 'none';
    });
    card.appendChild(btnVoir);
    wrap.appendChild(card);

    // ── Progress dots ─────────────────────────────────────
    var dotsEl = document.createElement('div');
    dotsEl.className = 'story-dots';
    renderDots(dotsEl, lines.length, currentLine);
    wrap.appendChild(dotsEl);

    // ── Suivant / Terminer ────────────────────────────────
    var btnAdvance = document.createElement('button');
    btnAdvance.className = 'btn-suivant';

    if (isLast) {
      btnAdvance.setAttribute('data-fr', 'Terminer');
      btnAdvance.setAttribute('data-en', 'Finish');
      btnAdvance.textContent = 'Terminer \u2728';
      btnAdvance.addEventListener('click', function () {
        window.PetitMot.Progress.markComplete(dayNumber);
        renderComplete(container, dayNumber);
      });
    } else {
      btnAdvance.setAttribute('data-fr', 'Suivant');
      btnAdvance.setAttribute('data-en', 'Next');
      btnAdvance.textContent = 'Suivant \u2192';
      btnAdvance.addEventListener('click', function () {
        currentLine++;
        englishVisible = false;
        renderSentence(container, dayNumber);
      });
    }
    wrap.appendChild(btnAdvance);

    container.appendChild(wrap);
    _refresh();
  }

  /* ── Public: init ───────────────────────────────────────── */
  function init(dayNumber) {
    var container = document.getElementById('view-story');
    if (!container) return;

    currentLine = 0;
    englishVisible = false;
    dayData = null;

    var curriculum = window.PetitMot.curriculum || [];
    for (var i = 0; i < curriculum.length; i++) {
      if (curriculum[i].day === dayNumber) { dayData = curriculum[i]; break; }
    }

    if (!dayData || !dayData.story || !dayData.story.lines || dayData.story.lines.length === 0) {
      renderComingSoon(container);
      return;
    }

    renderSentence(container, dayNumber);
  }

  return { init: init };

}());

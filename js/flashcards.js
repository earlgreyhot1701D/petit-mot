/* ============================================================
   Petit Mot — flashcards.js
   Flashcard view rendering and interaction logic.
   Exposes: window.PetitMot.Flashcards = { init }
   ============================================================ */

window.PetitMot = window.PetitMot || {};

window.PetitMot.Flashcards = (function () {
  'use strict';

  /* ── Internal state ─────────────────────────────────────── */
  var currentIndex = 0;
  var isFlipped = false;
  var dayData = null;

  /* ── Helpers ────────────────────────────────────────────── */
  function getContainer() {
    return document.getElementById('view-flashcards');
  }

  function clearContainer() {
    var container = getContainer();
    if (!container) return;
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }

  /* ── Render "Coming soon" placeholder ───────────────────── */
  function renderComingSoon() {
    var container = getContainer();
    if (!container) return;
    clearContainer();

    var wrap = document.createElement('div');
    wrap.className = 'flashcard-view';

    var msg = document.createElement('p');
    msg.textContent = 'Coming soon\u2026';
    msg.style.color = 'var(--ink-faint)';
    msg.style.fontStyle = 'italic';
    wrap.appendChild(msg);

    container.appendChild(wrap);
  }

  /* ── Render completion screen ───────────────────────────── */
  function renderComplete(dayNumber) {
    var container = getContainer();
    if (!container) return;
    clearContainer();

    var Ornaments = window.PetitMot.Ornaments;

    var wrap = document.createElement('div');
    wrap.className = 'flashcard-complete';

    // Banner at top
    var bannerWrap = document.createElement('div');
    bannerWrap.appendChild(Ornaments.create('banner', { small: true }));
    wrap.appendChild(bannerWrap);

    // "Magnifique!" heading
    var heading = document.createElement('h2');
    heading.setAttribute('data-fr', 'Magnifique!');
    heading.setAttribute('data-en', 'Magnificent!');
    heading.textContent = 'Magnifique!';
    wrap.appendChild(heading);

    // "X of 5 words learned"
    var sub = document.createElement('p');
    sub.style.color = 'var(--ink-soft)';
    sub.textContent = (dayData ? dayData.words.length : 5) + ' of 5 words learned';
    wrap.appendChild(sub);

    // IronDivider at 35% width
    var dividerWrap = document.createElement('div');
    dividerWrap.style.width = '35%';
    dividerWrap.style.overflow = 'hidden';
    dividerWrap.appendChild(Ornaments.create('iron-divider'));
    wrap.appendChild(dividerWrap);

    // "Lire l'histoire" button
    var btn = document.createElement('button');
    btn.className = 'btn-lire';
    btn.setAttribute('data-fr', "Lire l\u2019histoire");
    btn.setAttribute('data-en', 'Read the story');
    btn.textContent = "Lire l\u2019histoire \u2192";
    btn.addEventListener('click', function () {
      if (window.PetitMot.App && typeof window.PetitMot.App.showView === 'function') {
        window.PetitMot.App.showView('story', dayNumber);
      }
    });
    wrap.appendChild(btn);

    container.appendChild(wrap);
  }

  /* ── Build card DOM ─────────────────────────────────────── */
  function buildCard(word, index, total, dayNumber) {
    var Ornaments = window.PetitMot.Ornaments;

    /* ── Outer view wrapper ── */
    var view = document.createElement('div');
    view.className = 'flashcard-view';

    /* ── Banner above card ── */
    var bannerEl = document.createElement('div');
    bannerEl.appendChild(Ornaments.create('banner', { small: true }));
    view.appendChild(bannerEl);

    /* ── Back nav ── */
    var nav = document.createElement('div');
    nav.className = 'flashcard-nav';

    var btnBack = document.createElement('button');
    btnBack.className = 'btn-back';
    btnBack.setAttribute('data-fr', 'Retour');
    btnBack.setAttribute('data-en', 'Back');
    btnBack.textContent = '\u2190 Retour';
    btnBack.addEventListener('click', function () {
      if (window.PetitMot.App && typeof window.PetitMot.App.showView === 'function') {
        window.PetitMot.App.showView('calendar');
      }
    });
    nav.appendChild(btnBack);

    // MetroSign "Jour N" (small)
    var metroWrap = document.createElement('div');
    metroWrap.appendChild(Ornaments.create('metro-sign', { text: 'Jour ' + dayNumber }));
    nav.appendChild(metroWrap);

    // Counter "X / 5"
    var counter = document.createElement('span');
    counter.style.marginLeft = 'auto';
    counter.style.color = 'var(--ink-faint)';
    counter.style.fontSize = '14px';
    counter.style.fontWeight = '700';
    counter.textContent = (index + 1) + ' / ' + total;
    nav.appendChild(counter);

    view.appendChild(nav);

    /* ── Card ── */
    var card = document.createElement('div');
    card.className = 'flashcard-card';

    /* Front face elements */
    var emoji = document.createElement('div');
    emoji.className = 'flashcard-emoji';
    emoji.textContent = word.emoji;
    card.appendChild(emoji);

    var frWord = document.createElement('div');
    frWord.className = 'flashcard-word';
    frWord.setAttribute('data-fr', word.french);
    frWord.setAttribute('data-en', word.english);
    frWord.textContent = word.french;
    card.appendChild(frWord);

    var hint = document.createElement('div');
    hint.className = 'flashcard-hint';
    hint.setAttribute('data-fr', 'touchez pour retourner');
    hint.setAttribute('data-en', 'tap to flip');
    hint.textContent = 'touchez pour retourner';
    card.appendChild(hint);

    /* Back face elements (hidden until flipped) */
    var back = document.createElement('div');
    back.className = 'flashcard-back';
    back.style.display = 'none';

    var english = document.createElement('div');
    english.className = 'flashcard-english';
    english.textContent = word.english;
    back.appendChild(english);

    var phoneticPill = document.createElement('div');
    phoneticPill.className = 'flashcard-phonetic';

    var phoneticText = document.createElement('span');
    phoneticText.className = 'flashcard-phonetic-text';
    phoneticText.textContent = word.phonetic;
    phoneticPill.appendChild(phoneticText);
    back.appendChild(phoneticPill);

    card.appendChild(back);

    /* ── Action buttons (shown only when flipped) ── */
    var actions = document.createElement('div');
    actions.className = 'flashcard-actions';
    actions.style.display = 'none';

    var btnEncore = document.createElement('button');
    btnEncore.className = 'btn-encore';
    btnEncore.setAttribute('data-fr', 'Encore');
    btnEncore.setAttribute('data-en', 'Again');
    btnEncore.textContent = 'Encore \uD83D\uDD04';
    btnEncore.addEventListener('click', function () {
      if (window.PetitMot.Audio && typeof window.PetitMot.Audio.speak === 'function') {
        window.PetitMot.Audio.speak(word.french);
      }
    });
    actions.appendChild(btnEncore);

    var btnCompris = document.createElement('button');
    btnCompris.className = 'btn-compris';
    btnCompris.setAttribute('data-fr', 'Compris');
    btnCompris.setAttribute('data-en', 'Got it');
    btnCompris.textContent = 'Compris \u2713';
    btnCompris.addEventListener('click', function () {
      currentIndex++;
      if (currentIndex >= dayData.words.length) {
        renderComplete(dayNumber);
      } else {
        isFlipped = false;
        renderCard(dayNumber);
      }
    });
    actions.appendChild(btnCompris);

    /* ── Flip interaction ── */
    card.addEventListener('click', function () {
      if (isFlipped) return; // already flipped, ignore
      isFlipped = true;
      card.classList.add('flashcard-card--flipped');
      hint.style.display = 'none';
      back.style.display = 'flex';
      actions.style.display = 'flex';

      if (window.PetitMot.Audio && typeof window.PetitMot.Audio.speak === 'function') {
        window.PetitMot.Audio.speak(word.french);
      }
    });

    view.appendChild(card);
    view.appendChild(actions);

    /* ── Progress dots ── */
    var dots = document.createElement('div');
    dots.className = 'flashcard-dots';
    for (var i = 0; i < total; i++) {
      var dot = document.createElement('div');
      dot.className = 'flashcard-dot';
      if (i === index) {
        dot.classList.add('flashcard-dot--current');
      } else if (i < index) {
        dot.classList.add('flashcard-dot--done');
      }
      dots.appendChild(dot);
    }
    view.appendChild(dots);

    return view;
  }

  /* ── Render current card ────────────────────────────────── */
  function renderCard(dayNumber) {
    var container = getContainer();
    if (!container) return;
    clearContainer();

    var word = dayData.words[currentIndex];
    var cardEl = buildCard(word, currentIndex, dayData.words.length, dayNumber);
    container.appendChild(cardEl);

    // Refresh tooltips for new [data-fr] elements
    if (window.PetitMot.Tooltips && typeof window.PetitMot.Tooltips.refresh === 'function') {
      window.PetitMot.Tooltips.refresh();
    }
  }

  /* ── init ───────────────────────────────────────────────── */
  function init(dayNumber) {
    // Reset state
    currentIndex = 0;
    isFlipped = false;
    dayData = null;

    // Look up curriculum data
    var curriculum = window.PetitMot.curriculum;
    if (Array.isArray(curriculum)) {
      for (var i = 0; i < curriculum.length; i++) {
        if (curriculum[i].day === dayNumber) {
          dayData = curriculum[i];
          break;
        }
      }
    }

    if (!dayData) {
      renderComingSoon();
      return;
    }

    renderCard(dayNumber);
  }

  return { init: init };

}());

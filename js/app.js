/* ============================================================
   Petit Mot — app.js
   View router and screen state management.
   Exposes: window.PetitMot.App = { showView }
   ============================================================ */

window.PetitMot = window.PetitMot || {};

window.PetitMot.App = (function () {
  'use strict';

  /* ── View Router ────────────────────────────────────────────
     showView(viewName, dayNumber)
     Hides all .view elements, shows #view-{viewName}.
     Delegates rendering to the appropriate module.
  ─────────────────────────────────────────────────────────── */
  function showView(viewName, dayNumber) {
    // Hide all views
    var views = document.querySelectorAll('.view');
    views.forEach(function (v) {
      v.classList.remove('view--active');
    });

    // Show target view
    var target = document.getElementById('view-' + viewName);
    if (target) {
      target.classList.add('view--active');
    } else {
      console.warn('[app] View not found: view-' + viewName);
      return;
    }

    // Delegate to view module
    if (viewName === 'flashcards') {
      if (window.PetitMot.Flashcards && typeof window.PetitMot.Flashcards.init === 'function') {
        window.PetitMot.Flashcards.init(dayNumber);
      }
    } else if (viewName === 'story') {
      if (window.PetitMot.Stories && typeof window.PetitMot.Stories.init === 'function') {
        window.PetitMot.Stories.init(dayNumber);
      }
    } else if (viewName === 'calendar') {
      if (window.PetitMot.Calendar && typeof window.PetitMot.Calendar.render === 'function') {
        window.PetitMot.Calendar.render();
      }
    }
  }

  /* ── Splash Screen Builder ──────────────────────────────────
     Builds splash DOM inside #view-splash using ornaments.js.
     Called once during init().
  ─────────────────────────────────────────────────────────── */
  function buildSplash() {
    var splashView = document.getElementById('view-splash');
    if (!splashView) return;

    // Clear any existing content
    while (splashView.firstChild) {
      splashView.removeChild(splashView.firstChild);
    }

    var Ornaments = window.PetitMot.Ornaments;
    var splash = document.createElement('div');
    splash.className = 'splash';

    // Collect splash elements for staggered animation
    var elements = [];

    // 1. IronArch
    var archWrap = document.createElement('div');
    archWrap.className = 'splash-element';
    archWrap.appendChild(Ornaments.create('iron-arch'));
    splash.appendChild(archWrap);
    elements.push(archWrap);

    // 2. EiffelIcon (~52px — matches mockup proportions)
    var eiffelWrap = document.createElement('div');
    eiffelWrap.className = 'splash-element';
    eiffelWrap.appendChild(Ornaments.create('eiffel-icon', { size: '80px' }));
    splash.appendChild(eiffelWrap);
    elements.push(eiffelWrap);

    // 3. h1 "petit mot" — lowercase italic per mockup
    var h1 = document.createElement('h1');
    h1.className = 'splash-element';
    h1.textContent = 'petit mot';
    splash.appendChild(h1);
    elements.push(h1);

    // 4. Subtitle — uppercase small caps style
    var subtitle = document.createElement('p');
    subtitle.className = 'splash-subtitle splash-element';
    subtitle.setAttribute('data-fr', '30 jours pour lire le français');
    subtitle.setAttribute('data-en', '30 days to read French');
    subtitle.textContent = '30 jours pour lire le français';
    splash.appendChild(subtitle);
    elements.push(subtitle);

    // 4b. Secondary italic tagline
    var tagline = document.createElement('p');
    tagline.className = 'splash-tagline splash-element';
    tagline.setAttribute('data-fr', 'votre aventure parisienne commence ici');
    tagline.setAttribute('data-en', 'your Paris adventure starts here');
    tagline.textContent = 'votre aventure parisienne commence ici';
    splash.appendChild(tagline);
    elements.push(tagline);

    // 5. Ochre dot separator — 5 SVG circles, varied size for Art Nouveau rhythm
    var dotSep = document.createElement('div');
    dotSep.className = 'splash-element splash-dots';
    dotSep.setAttribute('aria-hidden', 'true');
    var dotSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    dotSvg.setAttribute('viewBox', '0 0 120 16');
    dotSvg.setAttribute('width', '120');
    dotSvg.setAttribute('height', '16');
    // outer small → inner medium → center large → mirror
    [{cx:12,r:3},{cx:36,r:4},{cx:60,r:6},{cx:84,r:4},{cx:108,r:3}].forEach(function(d) {
      var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      c.setAttribute('cx', d.cx);
      c.setAttribute('cy', '8');
      c.setAttribute('r', d.r);
      c.setAttribute('fill', 'var(--ochre)');
      dotSvg.appendChild(c);
    });
    dotSep.appendChild(dotSvg);
    splash.appendChild(dotSep);
    elements.push(dotSep);

    // 6. Commencer button
    var btn = document.createElement('button');
    btn.className = 'btn-commencer splash-element';
    btn.textContent = 'Commencer';
    btn.setAttribute('data-fr', 'Commencer');
    btn.setAttribute('data-en', "Let's begin");
    btn.addEventListener('click', function () {
      showView('calendar');
    });
    splash.appendChild(btn);
    elements.push(btn);

    // 7. MetroSign "PARIS"
    var metroWrap = document.createElement('div');
    metroWrap.className = 'splash-element';
    metroWrap.appendChild(Ornaments.create('metro-sign', { text: 'PARIS' }));
    splash.appendChild(metroWrap);
    elements.push(metroWrap);

    // 8. Feature pills row
    var pills = document.createElement('div');
    pills.className = 'splash-element splash-pills';
    var pillData = [
      { fr: 'Cartes', en: 'Cards', icon: '🎴' },
      { fr: 'Histoires', en: 'Stories', icon: '📖' },
      { fr: 'Écouter', en: 'Listen', icon: '🎧' }
    ];
    pillData.forEach(function (p) {
      var pill = document.createElement('span');
      pill.className = 'splash-pill';
      pill.setAttribute('data-fr', p.fr);
      pill.setAttribute('data-en', p.en);
      pill.textContent = p.icon + ' ' + p.fr;
      pills.appendChild(pill);
    });
    splash.appendChild(pills);
    elements.push(pills);

    splashView.appendChild(splash);

    // Staggered entrance animation: add .visible with 150ms delay between each element
    elements.forEach(function (el, i) {
      setTimeout(function () {
        el.classList.add('visible');
      }, i * 150);
    });
  }

  /* ── Init ───────────────────────────────────────────────────
     Called on DOMContentLoaded.
     Bootstraps the app: load progress, init tooltips, show splash.
  ─────────────────────────────────────────────────────────── */
  function init() {
    // Load persisted progress
    if (window.PetitMot.Progress && typeof window.PetitMot.Progress.load === 'function') {
      window.PetitMot.Progress.load();
    }

    // Unlock Web Speech API on first user gesture (required on mobile browsers)
    function unlockAudio() {
      try {
        var u = new SpeechSynthesisUtterance('');
        u.volume = 0;
        speechSynthesis.speak(u);
      } catch (e) {}
      document.removeEventListener('click', unlockAudio);
      document.removeEventListener('touchstart', unlockAudio);
    }
    document.addEventListener('click', unlockAudio, { once: true });
    document.addEventListener('touchstart', unlockAudio, { once: true });

    // Init tooltip component
    if (window.PetitMot.Tooltips && typeof window.PetitMot.Tooltips.init === 'function') {
      window.PetitMot.Tooltips.init();
    }

    // Build splash screen DOM
    buildSplash();

    // Show splash as the initial view
    showView('splash');
  }

  // Bootstrap on DOM ready
  document.addEventListener('DOMContentLoaded', init);

  return { showView: showView };

}());

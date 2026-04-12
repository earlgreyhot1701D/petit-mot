/* ============================================================
   Petit Mot — calendar.js
   Calendar view rendering: 30-day grid, progress bar, week preview.
   Exposes: window.PetitMot.Calendar = { render }
   Dependencies: ornaments.js, progress.js (loaded before this file)
   ============================================================ */

window.PetitMot = window.PetitMot || {};

window.PetitMot.Calendar = (function () {
  'use strict';

  /* ── Theme data ───────────────────────────────────────────── */
  var THEMES = [
    'Bonjour, Paris!', 'Au café', 'Le Métro', 'La boulangerie', 'Au musée',
    'Les arrondissements', 'Révision!', 'Au restaurant', 'Le marché', 'Excusez-moi',
    'Les couleurs', 'Les chiffres', 'Au jardin', 'La pharmacie', 'Révision!',
    'Le temps', 'Les directions', 'Au bistro', 'La Seine', 'Les monuments',
    'Chez le fromager', 'Révision!', 'Les courses', 'Le petit déjeuner', 'Au théâtre',
    'Les transports', 'La politesse', 'Les émotions', 'Révision finale!', 'Félicitations!'
  ];

  /* ── Helpers ──────────────────────────────────────────────── */

  /**
   * Returns the "today" day number:
   * First incomplete available day (1-30).
   * Returns 0 if all days are complete.
   */
  function _getTodayDay() {
    var Progress = window.PetitMot.Progress;
    if (!Progress) return 1;
    for (var d = 1; d <= 30; d++) {
      if (!Progress.isComplete(d)) return d;
    }
    return 0;
  }

  /* ── DOM builders ─────────────────────────────────────────── */

  function _buildHeader() {
    var header = document.createElement('div');
    header.className = 'calendar-header';

    var Ornaments = window.PetitMot.Ornaments;
    if (Ornaments) {
      // Banner as home button — tapping returns to splash
      var homeBtn = document.createElement('button');
      homeBtn.className = 'btn-home';
      homeBtn.setAttribute('aria-label', 'Home');
      homeBtn.appendChild(Ornaments.create('banner', { small: true }));
      homeBtn.addEventListener('click', function () {
        if (window.PetitMot.App && typeof window.PetitMot.App.showView === 'function') {
          window.PetitMot.App.showView('splash');
        }
      });
      header.appendChild(homeBtn);
    }

    return header;
  }

  function _buildProgressBox() {
    var Progress = window.PetitMot.Progress;
    var count = Progress ? Progress.completedCount() : 0;
    var pct = Math.round((count / 30) * 100);
    var motivation = count === 0 ? 'Allons-y!' : 'Continuez!';

    var box = document.createElement('div');
    box.className = 'progress-box';

    // Row: "X / 30 jours" + motivational label
    var row = document.createElement('div');
    row.className = 'progress-row';

    var labelEl = document.createElement('span');
    labelEl.className = 'progress-label';
    labelEl.textContent = count + ' / 30 jours';

    var motivEl = document.createElement('span');
    motivEl.className = 'progress-motivation';
    motivEl.textContent = motivation;

    row.appendChild(labelEl);
    row.appendChild(motivEl);
    box.appendChild(row);

    // Progress bar
    var track = document.createElement('div');
    track.className = 'progress-track';

    var fill = document.createElement('div');
    fill.className = 'progress-fill';
    fill.style.width = pct + '%';

    track.appendChild(fill);
    box.appendChild(track);

    return box;
  }

  function _buildDayTile(dayNumber, todayDay) {
    var Progress = window.PetitMot.Progress;
    var isComplete = Progress ? Progress.isComplete(dayNumber) : false;
    var isAvailable = dayNumber <= 30;  // all days unlocked — full curriculum complete
    var isToday = dayNumber === todayDay;
    var isLocked = !isAvailable;

    var btn = document.createElement('button');
    btn.className = 'day-tile';
    btn.setAttribute('data-day', dayNumber);
    btn.setAttribute('type', 'button');

    if (isLocked) {
      btn.className += ' day-tile--locked';
      btn.setAttribute('aria-disabled', 'true');
      btn.setAttribute('tabindex', '-1');

      var lockSpan = document.createElement('span');
      lockSpan.setAttribute('aria-hidden', 'true');
      lockSpan.style.fontSize = '12px';
      lockSpan.textContent = '🔒';
      btn.appendChild(lockSpan);

      var numSpanL = document.createElement('span');
      numSpanL.textContent = dayNumber;
      btn.appendChild(numSpanL);

    } else if (isComplete) {
      btn.className += ' day-tile--complete';
      btn.setAttribute('aria-label', 'Jour ' + dayNumber + ' — terminé');

      var checkSpan = document.createElement('span');
      checkSpan.setAttribute('aria-hidden', 'true');
      checkSpan.textContent = '✓';
      btn.appendChild(checkSpan);

      var numSpanC = document.createElement('span');
      numSpanC.textContent = dayNumber;
      btn.appendChild(numSpanC);

    } else if (isToday) {
      btn.className += ' day-tile--today';
      btn.setAttribute('aria-label', 'Jour ' + dayNumber + ' — aujourd\'hui');

      var todayLabel = document.createElement('span');
      todayLabel.className = 'day-tile__today-label';
      todayLabel.textContent = 'AUJOURD\'HUI';
      btn.appendChild(todayLabel);

      var numSpanT = document.createElement('span');
      numSpanT.textContent = dayNumber;
      btn.appendChild(numSpanT);

    } else {
      // Available, not today, not complete
      btn.setAttribute('aria-label', 'Jour ' + dayNumber);

      var numSpanA = document.createElement('span');
      numSpanA.textContent = dayNumber;
      btn.appendChild(numSpanA);
    }

    // Click handler for available (non-locked) tiles
    if (!isLocked) {
      btn.addEventListener('click', function () {
        if (window.PetitMot.App && typeof window.PetitMot.App.showView === 'function') {
          window.PetitMot.App.showView('flashcards', dayNumber);
        }
      });
    }

    return btn;
  }

  function _buildGrid(todayDay) {
    var grid = document.createElement('div');
    grid.className = 'day-grid';
    grid.setAttribute('role', 'list');

    for (var d = 1; d <= 30; d++) {
      var tile = _buildDayTile(d, todayDay);
      tile.setAttribute('role', 'listitem');
      grid.appendChild(tile);
    }

    return grid;
  }

  function _buildWeekPreview(todayDay) {
    var section = document.createElement('div');
    section.className = 'week-preview';

    // IronDivider at 45% width
    var Ornaments = window.PetitMot.Ornaments;
    if (Ornaments) {
      var dividerWrap = document.createElement('div');
      dividerWrap.style.width = '45%';
      dividerWrap.style.margin = '0 auto';
      dividerWrap.appendChild(Ornaments.create('iron-divider'));
      section.appendChild(dividerWrap);
    }

    var heading = document.createElement('h3');
    heading.textContent = 'Semaine 1';
    section.appendChild(heading);

    var list = document.createElement('ul');
    list.className = 'week-preview-list';

    for (var d = 1; d <= 7; d++) {
      var li = document.createElement('li');
      if (d === todayDay) {
        li.className = 'current';
      }

      var dayNum = document.createElement('span');
      dayNum.className = 'day-num';
      dayNum.textContent = 'Jour ' + d;

      var themeName = document.createTextNode(THEMES[d - 1]);

      li.appendChild(dayNum);
      li.appendChild(themeName);
      list.appendChild(li);
    }

    section.appendChild(list);
    return section;
  }

  /* ── Public: render ───────────────────────────────────────── */

  /**
   * Builds the calendar DOM inside #view-calendar.
   * Safe to call multiple times — clears and rebuilds each time.
   */
  function render() {
    var container = document.getElementById('view-calendar');
    if (!container) return;

    // Clear existing content
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    var todayDay = _getTodayDay();

    var wrapper = document.createElement('div');
    wrapper.className = 'calendar-view';

    wrapper.appendChild(_buildHeader());
    wrapper.appendChild(_buildProgressBox());
    wrapper.appendChild(_buildGrid(todayDay));
    wrapper.appendChild(_buildWeekPreview(todayDay));

    container.appendChild(wrapper);
  }

  return { render: render };

}());

/* ============================================================
   Petit Mot — dictionary.js
   Searchable vocabulary reference aggregating curriculum + bonus words.
   Exposes: window.PetitMot.Dictionary = { init }
   ============================================================ */

window.PetitMot = window.PetitMot || {};

window.PetitMot.Dictionary = (function () {
  'use strict';

  /* ── Bonus Words ────────────────────────────────────────────
     ~50 hardcoded survival words across emergency, food, and
     practical categories. Each has: french, english, phonetic,
     emoji, source: "Bonus"
  ─────────────────────────────────────────────────────────── */
  function _getBonusWords() {
    return [
      // ─── Emergency (~15 words) ───────────────────────────────
      { french: "aide", english: "help", phonetic: "ED", emoji: "🆘", source: "Bonus" },
      { french: "urgence", english: "emergency", phonetic: "oor-ZHAHNSS", emoji: "🚨", source: "Bonus" },
      { french: "pompiers", english: "firefighters", phonetic: "pohm-PYAY", emoji: "🚒", source: "Bonus" },
      { french: "police", english: "police", phonetic: "po-LEESS", emoji: "👮", source: "Bonus" },
      { french: "hôpital", english: "hospital", phonetic: "oh-pee-TAL", emoji: "🏥", source: "Bonus" },
      { french: "médecin", english: "doctor", phonetic: "mayd-SAH", emoji: "👨‍⚕️", source: "Bonus" },
      { french: "pharmacie", english: "pharmacy", phonetic: "far-ma-SEE", emoji: "💊", source: "Bonus" },
      { french: "ambulance", english: "ambulance", phonetic: "ahm-boo-LAHNSS", emoji: "🚑", source: "Bonus" },
      { french: "danger", english: "danger", phonetic: "dahn-ZHAY", emoji: "⚠️", source: "Bonus" },
      { french: "au secours", english: "help!", phonetic: "oh suh-KOOR", emoji: "🗣️", source: "Bonus" },
      { french: "douleur", english: "pain", phonetic: "doo-LUHR", emoji: "🤕", source: "Bonus" },
      { french: "allergie", english: "allergy", phonetic: "ah-lair-ZHEE", emoji: "🤧", source: "Bonus" },
      { french: "fièvre", english: "fever", phonetic: "FYEV-ruh", emoji: "🤒", source: "Bonus" },
      { french: "blessé", english: "injured", phonetic: "bleh-SAY", emoji: "🩹", source: "Bonus" },
      { french: "voleur", english: "thief", phonetic: "vo-LUHR", emoji: "🦹", source: "Bonus" },

      // ─── Food (~20 words) ────────────────────────────────────
      { french: "eau", english: "water", phonetic: "OH", emoji: "💧", source: "Bonus" },
      { french: "fromage", english: "cheese", phonetic: "fro-MAZH", emoji: "🧀", source: "Bonus" },
      { french: "poulet", english: "chicken", phonetic: "poo-LEH", emoji: "🍗", source: "Bonus" },
      { french: "pain", english: "bread", phonetic: "PAH", emoji: "🍞", source: "Bonus" },
      { french: "vin", english: "wine", phonetic: "VAH", emoji: "🍷", source: "Bonus" },
      { french: "café", english: "coffee", phonetic: "kah-FAY", emoji: "☕", source: "Bonus" },
      { french: "bière", english: "beer", phonetic: "BYAIR", emoji: "🍺", source: "Bonus" },
      { french: "poisson", english: "fish", phonetic: "pwah-SOHN", emoji: "🐟", source: "Bonus" },
      { french: "viande", english: "meat", phonetic: "VYAHND", emoji: "🥩", source: "Bonus" },
      { french: "salade", english: "salad", phonetic: "sah-LAD", emoji: "🥗", source: "Bonus" },
      { french: "dessert", english: "dessert", phonetic: "deh-SAIR", emoji: "🍰", source: "Bonus" },
      { french: "beurre", english: "butter", phonetic: "BUHR", emoji: "🧈", source: "Bonus" },
      { french: "lait", english: "milk", phonetic: "LEH", emoji: "🥛", source: "Bonus" },
      { french: "sucre", english: "sugar", phonetic: "SOO-kruh", emoji: "🍬", source: "Bonus" },
      { french: "sel", english: "salt", phonetic: "SEL", emoji: "🧂", source: "Bonus" },
      { french: "oeuf", english: "egg", phonetic: "UHF", emoji: "🥚", source: "Bonus" },
      { french: "riz", english: "rice", phonetic: "REE", emoji: "🍚", source: "Bonus" },
      { french: "soupe", english: "soup", phonetic: "SOOP", emoji: "🍲", source: "Bonus" },
      { french: "glace", english: "ice cream", phonetic: "GLASS", emoji: "🍦", source: "Bonus" },
      { french: "thé", english: "tea", phonetic: "TAY", emoji: "🍵", source: "Bonus" },

      // ─── Practical (~15 words) ───────────────────────────────
      { french: "toilettes", english: "restroom", phonetic: "twah-LET", emoji: "🚻", source: "Bonus" },
      { french: "sortie", english: "exit", phonetic: "sor-TEE", emoji: "🚪", source: "Bonus" },
      { french: "entrée", english: "entrance", phonetic: "ahn-TRAY", emoji: "🚶", source: "Bonus" },
      { french: "fermé", english: "closed", phonetic: "fair-MAY", emoji: "🔒", source: "Bonus" },
      { french: "ouvert", english: "open", phonetic: "oo-VAIR", emoji: "🔓", source: "Bonus" },
      { french: "interdit", english: "forbidden", phonetic: "ah-tair-DEE", emoji: "🚫", source: "Bonus" },
      { french: "gratuit", english: "free (no cost)", phonetic: "grah-TWEE", emoji: "🆓", source: "Bonus" },
      { french: "gare", english: "train station", phonetic: "GAR", emoji: "🚉", source: "Bonus" },
      { french: "aéroport", english: "airport", phonetic: "ah-ay-ro-POR", emoji: "✈️", source: "Bonus" },
      { french: "hôtel", english: "hotel", phonetic: "oh-TEL", emoji: "🏨", source: "Bonus" },
      { french: "carte", english: "map/card", phonetic: "KART", emoji: "🗺️", source: "Bonus" },
      { french: "argent", english: "money", phonetic: "ar-ZHAHN", emoji: "💰", source: "Bonus" },
      { french: "prix", english: "price", phonetic: "PREE", emoji: "🏷️", source: "Bonus" },
      { french: "ticket", english: "ticket", phonetic: "tee-KEH", emoji: "🎫", source: "Bonus" },
      { french: "plan", english: "map/plan", phonetic: "PLAHN", emoji: "📍", source: "Bonus" }
    ];
  }

  /* ── Curriculum Extraction ────────────────────────────────────
     Iterates window.PetitMot.curriculum, flattens all day.words[]
     arrays, and attaches the source day number to each entry.
  ─────────────────────────────────────────────────────────── */
  function _extractCurriculumWords() {
    var curriculum = window.PetitMot.curriculum;
    if (!curriculum || !Array.isArray(curriculum) || curriculum.length === 0) {
      return [];
    }

    var words = [];
    for (var i = 0; i < curriculum.length; i++) {
      var day = curriculum[i];
      if (!day || !Array.isArray(day.words)) {
        continue;
      }
      for (var j = 0; j < day.words.length; j++) {
        var word = day.words[j];
        words.push({
          french: word.french,
          english: word.english,
          phonetic: word.phonetic,
          emoji: word.emoji,
          source: day.day
        });
      }
    }
    return words;
  }

  /* ── Deduplication ──────────────────────────────────────────
     Merges curriculum and bonus word arrays. On French-word
     collision (case-insensitive), keeps the curriculum entry.
  ─────────────────────────────────────────────────────────── */
  function _deduplicateWords(curriculum, bonus) {
    var seen = {};
    var result = [];

    // Add all curriculum words first (they take priority)
    for (var i = 0; i < curriculum.length; i++) {
      var key = curriculum[i].french.toLowerCase();
      if (!seen[key]) {
        seen[key] = true;
        result.push(curriculum[i]);
      }
    }

    // Add bonus words only if not already present
    for (var j = 0; j < bonus.length; j++) {
      var bonusKey = bonus[j].french.toLowerCase();
      if (!seen[bonusKey]) {
        seen[bonusKey] = true;
        result.push(bonus[j]);
      }
    }

    return result;
  }

  /* ── Filter ───────────────────────────────────────────────────
     Case-insensitive substring match on `french` or `english`
     fields. Returns a new filtered array. If query is empty/null,
     returns all words (shallow copy).
  ─────────────────────────────────────────────────────────── */
  function _filterWords(words, query) {
    if (!query || query.length === 0) {
      return words.slice();
    }
    var q = query.toLowerCase();
    var result = [];
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      if (
        word.french.toLowerCase().indexOf(q) !== -1 ||
        word.english.toLowerCase().indexOf(q) !== -1
      ) {
        result.push(word);
      }
    }
    return result;
  }

  /* ── Sort ────────────────────────────────────────────────────
     Sorts by "fr-az", "en-az", or "day". Returns a new sorted
     array (does not mutate the input).
     - "fr-az": alphabetical by french field using localeCompare('fr')
     - "en-az": alphabetical by english field using localeCompare('en')
     - "day": ascending by source number; "Bonus" entries sort
       AFTER all numbered entries.
  ─────────────────────────────────────────────────────────── */
  function _sortWords(words, sortKey) {
    var copy = words.slice();

    if (sortKey === 'fr-az') {
      copy.sort(function (a, b) {
        return a.french.localeCompare(b.french, 'fr');
      });
    } else if (sortKey === 'en-az') {
      copy.sort(function (a, b) {
        return a.english.localeCompare(b.english, 'en');
      });
    } else if (sortKey === 'day') {
      copy.sort(function (a, b) {
        var aIsBonus = a.source === 'Bonus';
        var bIsBonus = b.source === 'Bonus';

        if (aIsBonus && bIsBonus) return 0;
        if (aIsBonus) return 1;
        if (bIsBonus) return -1;

        return a.source - b.source;
      });
    }

    return copy;
  }

  /* ── Module State ─────────────────────────────────────────── */
  var _allWords = [];
  var _currentSort = 'day';
  var _currentQuery = '';
  var _container = null;

  /* ── Audio Helpers ──────────────────────────────────────────
     _hasFrVoice() — checks if the Audio system is available and
     has a French voice. Returns boolean.
     _speakWord(frenchText) — cancels current utterance, then
     speaks the given French text via Audio.speak().
  ─────────────────────────────────────────────────────────── */
  function _hasFrVoice() {
    try {
      if (!window.speechSynthesis) return false;
      var voices = speechSynthesis.getVoices();
      for (var i = 0; i < voices.length; i++) {
        if (voices[i].lang.indexOf('fr') === 0) {
          return true;
        }
      }
      return false;
    } catch (e) {
      return false;
    }
  }

  function _speakWord(frenchText) {
    try {
      if (window.speechSynthesis) {
        speechSynthesis.cancel();
      }
      if (window.PetitMot.Audio && typeof window.PetitMot.Audio.speak === 'function') {
        window.PetitMot.Audio.speak(frenchText);
      }
    } catch (e) {
      console.warn('[dictionary] speakWord error:', e);
    }
  }

  /* ── Render Controls ────────────────────────────────────────
     Builds search input, sort buttons (Jour / A–Z FR / A–Z EN),
     and word count display. Appends to _container.
  ─────────────────────────────────────────────────────────── */
  function _renderControls() {
    var controls = document.createElement('div');
    controls.className = 'dict-controls';

    // Search input
    var search = document.createElement('input');
    search.type = 'text';
    search.className = 'dict-search';
    search.placeholder = 'Chercher un mot...';
    search.setAttribute('aria-label', 'Chercher un mot');
    search.addEventListener('input', _handleSearch);
    controls.appendChild(search);

    // Sort row
    var sortRow = document.createElement('div');
    sortRow.className = 'dict-sort-row';

    var sortOptions = [
      { key: 'day', label: 'Jour' },
      { key: 'fr-az', label: 'A\u2013Z (FR)' },
      { key: 'en-az', label: 'A\u2013Z (EN)' }
    ];

    for (var i = 0; i < sortOptions.length; i++) {
      var btn = document.createElement('button');
      btn.className = 'dict-sort-btn';
      if (sortOptions[i].key === _currentSort) {
        btn.className += ' dict-sort-btn--active';
      }
      btn.setAttribute('data-sort', sortOptions[i].key);
      btn.textContent = sortOptions[i].label;
      btn.addEventListener('click', (function (key) {
        return function () { _handleSort(key); };
      })(sortOptions[i].key));
      sortRow.appendChild(btn);
    }
    controls.appendChild(sortRow);

    // Word count
    var count = document.createElement('span');
    count.className = 'dict-count';
    controls.appendChild(count);

    _container.appendChild(controls);
  }

  /* ── Render List ────────────────────────────────────────────
     Builds word entry nodes inside .dict-list. Each entry has
     emoji, french, english, source label, and speaker icon.
     Updates word count and shows/hides empty message.
  ─────────────────────────────────────────────────────────── */
  function _renderList(words) {
    var list = _container.querySelector('.dict-list');
    var empty = _container.querySelector('.dict-empty');
    var countEl = _container.querySelector('.dict-count');
    var hasVoice = _hasFrVoice();

    // Clear existing list
    if (list) {
      while (list.firstChild) {
        list.removeChild(list.firstChild);
      }
    } else {
      list = document.createElement('div');
      list.className = 'dict-list';
      _container.insertBefore(list, empty);
    }

    // Update word count
    if (countEl) {
      countEl.textContent = words.length + ' mot' + (words.length !== 1 ? 's' : '');
    }

    // Show/hide empty message
    if (empty) {
      empty.style.display = words.length === 0 ? '' : 'none';
    }

    // Build entries
    for (var i = 0; i < words.length; i++) {
      var word = words[i];

      var entry = document.createElement('div');
      entry.className = 'dict-entry';
      entry.setAttribute('data-french', word.french);

      // Emoji
      var emoji = document.createElement('span');
      emoji.className = 'dict-emoji';
      emoji.textContent = word.emoji;
      entry.appendChild(emoji);

      // Text container
      var textDiv = document.createElement('div');
      textDiv.className = 'dict-text';

      var frSpan = document.createElement('span');
      frSpan.className = 'dict-french';
      frSpan.textContent = word.french;
      textDiv.appendChild(frSpan);

      var enSpan = document.createElement('span');
      enSpan.className = 'dict-english';
      enSpan.textContent = word.english;
      textDiv.appendChild(enSpan);

      entry.appendChild(textDiv);

      // Source label
      var sourceSpan = document.createElement('span');
      sourceSpan.className = 'dict-source';
      sourceSpan.textContent = word.source === 'Bonus' ? 'Bonus' : 'Jour ' + word.source;
      entry.appendChild(sourceSpan);

      // Speaker icon (hidden if no voice)
      if (hasVoice) {
        var speaker = document.createElement('span');
        speaker.className = 'dict-speaker';
        speaker.setAttribute('aria-label', '\u00C9couter');
        speaker.setAttribute('role', 'button');
        speaker.setAttribute('tabindex', '0');
        speaker.textContent = '\uD83D\uDD0A';
        speaker.addEventListener('click', (function (text) {
          return function (e) {
            e.stopPropagation();
            _speakWord(text);
          };
        })(word.french));
        entry.appendChild(speaker);
      }

      // Entry tap also speaks the word (if voice available)
      if (hasVoice) {
        entry.addEventListener('click', (function (text) {
          return function () { _speakWord(text); };
        })(word.french));
      }

      list.appendChild(entry);
    }
  }

  /* ── Event Handlers ─────────────────────────────────────────
     _handleSearch — filters words on input and re-renders.
     _handleSort — changes sort key, updates active button, re-renders.
  ─────────────────────────────────────────────────────────── */
  function _handleSearch(event) {
    _currentQuery = event.target.value;
    var filtered = _filterWords(_allWords, _currentQuery);
    var sorted = _sortWords(filtered, _currentSort);
    _renderList(sorted);
  }

  function _handleSort(sortKey) {
    _currentSort = sortKey;

    // Update active button styling
    var buttons = _container.querySelectorAll('.dict-sort-btn');
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i].getAttribute('data-sort') === sortKey) {
        buttons[i].classList.add('dict-sort-btn--active');
      } else {
        buttons[i].classList.remove('dict-sort-btn--active');
      }
    }

    var filtered = _filterWords(_allWords, _currentQuery);
    var sorted = _sortWords(filtered, _currentSort);
    _renderList(sorted);
  }

  /* ── Init ───────────────────────────────────────────────────
     Entry point called by the router. Orchestrates:
     extract → merge → deduplicate → render controls → render list.
     Default sort: day.
  ─────────────────────────────────────────────────────────── */
  function init() {
    _container = document.getElementById('view-dictionary');
    if (!_container) return;

    // Clear previous content
    while (_container.firstChild) {
      _container.removeChild(_container.firstChild);
    }

    // Reset state
    _currentSort = 'day';
    _currentQuery = '';

    // Build wrapper
    var wrapper = document.createElement('div');
    wrapper.className = 'dictionary-view';

    // Back button
    var backBtn = document.createElement('button');
    backBtn.className = 'btn-back';
    backBtn.textContent = '\u2190 Retour';
    backBtn.addEventListener('click', function () {
      if (window.PetitMot.App && typeof window.PetitMot.App.showView === 'function') {
        window.PetitMot.App.showView('calendar');
      }
    });
    wrapper.appendChild(backBtn);

    // Set container reference to wrapper for rendering functions
    _container.appendChild(wrapper);
    _container = wrapper;

    // Extract and merge words
    var curriculumWords = _extractCurriculumWords();
    var bonusWords = _getBonusWords();

    // Show curriculum unavailable message if needed
    var curriculum = window.PetitMot.curriculum;
    if (!curriculum || !Array.isArray(curriculum) || curriculum.length === 0) {
      var msg = document.createElement('p');
      msg.className = 'dict-curriculum-unavailable';
      msg.textContent = 'Donn\u00e9es du curriculum non disponibles. Affichage des mots bonus uniquement.';
      _container.appendChild(msg);
    }

    _allWords = _deduplicateWords(curriculumWords, bonusWords);

    // Render controls
    _renderControls();

    // Create list container and empty message
    var list = document.createElement('div');
    list.className = 'dict-list';
    _container.appendChild(list);

    var empty = document.createElement('p');
    empty.className = 'dict-empty';
    empty.style.display = 'none';
    empty.textContent = 'Aucun r\u00e9sultat trouv\u00e9.';
    _container.appendChild(empty);

    // Initial render with default sort
    var sorted = _sortWords(_allWords, _currentSort);
    _renderList(sorted);
  }

  return {
    init: init,
    // Exposed for testing
    _extractCurriculumWords: _extractCurriculumWords,
    _deduplicateWords: _deduplicateWords,
    _filterWords: _filterWords,
    _sortWords: _sortWords,
    _hasFrVoice: _hasFrVoice,
    _speakWord: _speakWord,
    _renderControls: _renderControls,
    _renderList: _renderList,
    _handleSearch: _handleSearch,
    _handleSort: _handleSort
  };

}());

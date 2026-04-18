/* ============================================================
   Petit Mot — guide.js
   Pronunciation and reference guide.
   Exposes: window.PetitMot.Guide = { init }
   ============================================================ */

window.PetitMot = window.PetitMot || {};

window.PetitMot.Guide = (function () {
  'use strict';

  function speak(text) {
    if (window.PetitMot.Audio && typeof window.PetitMot.Audio.speak === 'function') {
      window.PetitMot.Audio.speak(text);
    }
  }

  function makeEl(tag, className, text) {
    var el = document.createElement(tag);
    if (className) el.className = className;
    if (text) el.textContent = text;
    return el;
  }

  /* ── Section 1: Les sons ──────────────────────────────────── */
  function buildSons() {
    var section = makeEl('div', 'guide-section');
    var h = makeEl('h2', 'guide-section-heading');
    h.setAttribute('data-fr', 'Les sons');
    h.setAttribute('data-en', 'The sounds');
    h.textContent = 'Les sons';
    section.appendChild(h);

    var sounds = [
      // Nasal vowels
      { name: '"on"', example: 'bonjour', desc: 'Like "own" but stop before the n — let it resonate in your nose.' },
      { name: '"an" / "en"', example: 'France', desc: 'Like "ahh" through your nose. No n at the end.' },
      { name: '"in"', example: 'vin', desc: 'Like "ah" through your nose with lips spread.' },
      { name: '"un"', example: 'lundi', desc: 'Like "uh" through your nose.' },
      // Other tricky sounds
      { name: '"r"', example: 'merci', desc: 'Soft gargle in the back of your throat — not the English r.' },
      { name: '"u"', example: 'rue', desc: 'Say "ee" but round your lips like "oo". No English equivalent.' },
      { name: '"ou"', example: 'vous', desc: 'Like English "oo" in "food".' },
      { name: '"eu"', example: 'deux', desc: 'Say "eh" but round your lips.' },
      { name: 'Silent "h"', example: 'hôtel', desc: '"hôtel" is pronounced "oh-TEL". The h is always silent.' },
      { name: 'Silent final consonants', example: 'Paris', desc: '"Paris" is "pah-REE" — not "PAIR-iss". Most final consonants are silent.' }
    ];

    sounds.forEach(function (s) {
      var entry = makeEl('div', 'sound-entry');
      var name = makeEl('div', 'sound-name', s.name);
      var desc = makeEl('div', 'sound-desc', s.desc);

      var exampleRow = makeEl('div', 'sound-example');
      exampleRow.textContent = s.example + ' ';
      var icon = makeEl('span', 'story-audio-icon');
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = '\uD83D\uDD0A';
      exampleRow.appendChild(icon);
      exampleRow.style.cursor = 'pointer';
      exampleRow.addEventListener('click', function () { speak(s.example); });

      entry.appendChild(name);
      entry.appendChild(desc);
      entry.appendChild(exampleRow);
      section.appendChild(entry);
    });

    return section;
  }

  /* ── Section 2: L'alphabet ────────────────────────────────── */
  function buildAlphabet() {
    var section = makeEl('div', 'guide-section');
    var h = makeEl('h2', 'guide-section-heading');
    h.setAttribute('data-fr', "L'alphabet");
    h.setAttribute('data-en', 'The alphabet');
    h.textContent = "L'alphabet";
    section.appendChild(h);

    var letters = [
      { l: 'A', p: 'ah' }, { l: 'B', p: 'bay' }, { l: 'C', p: 'say' },
      { l: 'D', p: 'day' }, { l: 'E', p: 'uh' }, { l: 'F', p: 'ef' },
      { l: 'G', p: 'zhay' }, { l: 'H', p: 'ahsh' }, { l: 'I', p: 'ee' },
      { l: 'J', p: 'zhee' }, { l: 'K', p: 'kah' }, { l: 'L', p: 'el' },
      { l: 'M', p: 'em' }, { l: 'N', p: 'en' }, { l: 'O', p: 'oh' },
      { l: 'P', p: 'pay' }, { l: 'Q', p: 'koo' }, { l: 'R', p: 'air' },
      { l: 'S', p: 'es' }, { l: 'T', p: 'tay' }, { l: 'U', p: 'oo' },
      { l: 'V', p: 'vay' }, { l: 'W', p: 'doo-bluh-vay' }, { l: 'X', p: 'eeks' },
      { l: 'Y', p: 'ee-grek' }, { l: 'Z', p: 'zed' }
    ];

    var grid = makeEl('div', 'letter-grid');
    letters.forEach(function (item) {
      var cell = makeEl('div', 'letter-cell');
      var ch = makeEl('div', 'letter-char', item.l);
      var pr = makeEl('div', 'letter-pronunciation', item.p);
      cell.appendChild(ch);
      cell.appendChild(pr);
      cell.addEventListener('click', function () { speak(item.l); });
      grid.appendChild(cell);
    });

    section.appendChild(grid);
    return section;
  }

  /* ── Section 3: Les chiffres ──────────────────────────────── */
  function buildChiffres() {
    var section = makeEl('div', 'guide-section');
    var h = makeEl('h2', 'guide-section-heading');
    h.setAttribute('data-fr', 'Les chiffres');
    h.setAttribute('data-en', 'The numbers');
    h.textContent = 'Les chiffres';
    section.appendChild(h);

    var numbers = [
      [1,'un'],[2,'deux'],[3,'trois'],[4,'quatre'],[5,'cinq'],
      [6,'six'],[7,'sept'],[8,'huit'],[9,'neuf'],[10,'dix'],
      [11,'onze'],[12,'douze'],[13,'treize'],[14,'quatorze'],[15,'quinze'],
      [16,'seize'],[17,'dix-sept'],[18,'dix-huit'],[19,'dix-neuf'],[20,'vingt'],
      [21,'vingt et un'],[22,'vingt-deux'],[23,'vingt-trois'],[24,'vingt-quatre'],[25,'vingt-cinq'],
      [26,'vingt-six'],[27,'vingt-sept'],[28,'vingt-huit'],[29,'vingt-neuf'],[30,'trente'],
      [40,'quarante'],[50,'cinquante'],[60,'soixante'],[70,'soixante-dix'],[80,'quatre-vingts'],
      [90,'quatre-vingt-dix'],[100,'cent']
    ];

    var grid = makeEl('div', 'number-grid');
    numbers.forEach(function (item) {
      var cell = makeEl('div', 'number-cell');
      var digit = makeEl('div', 'number-digit', String(item[0]));
      var word = makeEl('div', 'number-word', item[1]);
      cell.appendChild(digit);
      cell.appendChild(word);
      cell.addEventListener('click', function () { speak(item[1]); });
      grid.appendChild(cell);
    });

    section.appendChild(grid);

    var note = makeEl('p', 'guide-note');
    note.textContent = '70 is literally "sixty-ten." 80 is "four-twenties." 90 is "four-twenties-ten." French math is fun.';
    section.appendChild(note);

    return section;
  }

  /* ── Section 4: Pont espagnol ─────────────────────────────── */
  function buildPontEspagnol() {
    var section = makeEl('div', 'guide-section');
    var h = makeEl('h2', 'guide-section-heading');
    h.setAttribute('data-fr', 'Pont espagnol');
    h.setAttribute('data-en', 'Spanish bridge');
    h.textContent = 'Pont espagnol';
    section.appendChild(h);

    var sub = makeEl('p', 'guide-subheading');
    sub.textContent = 'You speak some Spanish? You already know more French than you think.';
    section.appendChild(sub);

    // Amis (cognates)
    var amisHeading = makeEl('h3', 'guide-subsection-heading', 'Amis — cognates');
    section.appendChild(amisHeading);

    var amisHeader = makeEl('div', 'cognate-row cognate-header');
    var hFr = makeEl('div', 'cognate-fr');
    hFr.textContent = 'French';
    hFr.style.fontWeight = '700';
    var hEs = makeEl('div', 'cognate-es');
    hEs.textContent = 'Spanish';
    hEs.style.fontWeight = '700';
    amisHeader.appendChild(hFr);
    amisHeader.appendChild(hEs);
    section.appendChild(amisHeader);

    var amis = [
      ['la musique', 'la música'],
      ['le restaurant', 'el restaurante'],
      ['la famille', 'la familia'],
      ['important', 'importante'],
      ['la station', 'la estación'],
      ['différent', 'diferente'],
      ['le café', 'el café'],
      ['la pharmacie', 'la farmacia'],
      ['le chocolat', 'el chocolate'],
      ['la politique', 'la política'],
      ["l'hôtel", 'el hotel'],
      ['le jardin', 'el jardín'],
      ['la terrasse', 'la terraza'],
      ['naturel', 'natural']
    ];

    var amisTable = makeEl('div', 'cognate-table');
    amis.forEach(function (pair) {
      var row = makeEl('div', 'cognate-row');
      var fr = makeEl('div', 'cognate-fr', pair[0]);
      var es = makeEl('div', 'cognate-es', pair[1]);
      row.appendChild(fr);
      row.appendChild(es);
      amisTable.appendChild(row);
    });
    section.appendChild(amisTable);

    // Faux amis
    var fauxHeading = makeEl('h3', 'guide-subsection-heading', 'Faux amis — watch out');
    section.appendChild(fauxHeading);

    var fauxHeader = makeEl('div', 'false-friend-row cognate-header');
    var hFrF = makeEl('div', 'cognate-fr');
    hFrF.textContent = 'French';
    hFrF.style.fontWeight = '700';
    var hMeans = makeEl('div', 'false-friend-means');
    hMeans.textContent = 'Means';
    hMeans.style.fontWeight = '700';
    var hNot = makeEl('div', 'false-friend-not');
    hNot.textContent = 'NOT';
    hNot.style.fontWeight = '700';
    fauxHeader.appendChild(hFrF);
    fauxHeader.appendChild(hMeans);
    fauxHeader.appendChild(hNot);
    section.appendChild(fauxHeader);

    var faux = [
      ['attendre', 'to wait', 'to attend (atender)'],
      ['librairie', 'bookshop', 'library (librería)'],
      ['je suis excité', 'I\'m aroused', 'I\'m excited — use "enthousiaste"'],
      ['blesser', 'to wound', 'to bless (bendecir)'],
      ['actuellement', 'currently', 'actually — use "en fait"']
    ];

    var fauxTable = makeEl('div', 'cognate-table');
    faux.forEach(function (row) {
      var r = makeEl('div', 'false-friend-row');
      var fr = makeEl('div', 'cognate-fr', row[0]);
      var means = makeEl('div', 'false-friend-means', row[1]);
      var not = makeEl('div', 'false-friend-not', row[2]);
      r.appendChild(fr);
      r.appendChild(means);
      r.appendChild(not);
      fauxTable.appendChild(r);
    });
    section.appendChild(fauxTable);

    var note = makeEl('p', 'guide-note');
    note.textContent = 'When in doubt, try the Spanish word with a French accent. You\'ll be right more often than you\'d expect.';
    section.appendChild(note);

    return section;
  }

  /* ── Public: init ─────────────────────────────────────────── */
  function init() {
    var container = document.getElementById('view-guide');
    if (!container) return;

    while (container.firstChild) container.removeChild(container.firstChild);

    var view = makeEl('div', 'guide-view');

    // Banner
    if (window.PetitMot.Ornaments) {
      view.appendChild(window.PetitMot.Ornaments.create('banner', { small: true }));
    }

    // Back nav
    var btnBack = makeEl('button', 'btn-back');
    btnBack.setAttribute('data-fr', 'Retour');
    btnBack.setAttribute('data-en', 'Back');
    btnBack.textContent = '\u2190 Retour';
    btnBack.addEventListener('click', function () {
      if (window.PetitMot.App) window.PetitMot.App.showView('calendar');
    });
    view.appendChild(btnBack);

    view.appendChild(buildSons());
    view.appendChild(buildAlphabet());
    view.appendChild(buildChiffres());
    view.appendChild(buildPontEspagnol());

    container.appendChild(view);

    if (window.PetitMot.Tooltips && typeof window.PetitMot.Tooltips.refresh === 'function') {
      window.PetitMot.Tooltips.refresh();
    }
  }

  return { init: init };

}());

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

  /* ── Section 5: À quoi s'attendre — Scenario Cards ─────────── */
  function buildScenarios() {
    var section = makeEl('div', 'guide-section');
    var h = makeEl('h2', 'guide-section-heading');
    h.setAttribute('data-fr', "À quoi s'attendre");
    h.setAttribute('data-en', 'What to expect');
    h.textContent = "À quoi s'attendre";
    section.appendChild(h);

    var scenarios = [
      {
        id: 'restaurant',
        title: 'Au restaurant',
        theySay: [
          'Vous avez réservé ?',
          'Combien de personnes ?',
          'Vous désirez ?',
          'Et comme boisson ?'
        ],
        youSee: 'A host standing at the entrance with a reservation book. Tables with paper placemats and a handwritten menu on a chalkboard.',
        respond: [
          'Oui, au nom de…',
          'Une table pour deux, s\'il vous plaît.',
          'Je voudrais le plat du jour.',
          'L\'addition, s\'il vous plaît.'
        ],
        cultural: 'Always greet with "Bonjour" before making any request. Wait to be seated — don\'t choose your own table. Tipping is not expected but rounding up is appreciated.'
      },
      {
        id: 'boulangerie',
        title: 'À la boulangerie',
        theySay: [
          'Bonjour ! Vous désirez ?',
          'Et avec ceci ?',
          'Ce sera tout ?'
        ],
        youSee: 'A glass counter displaying rows of baguettes, croissants, and pastries. A small queue of locals waiting patiently.',
        respond: [
          'Bonjour ! Une baguette, s\'il vous plaît.',
          'Et un croissant aussi.',
          'Oui, c\'est tout. Merci !'
        ],
        cultural: 'Say "Bonjour" when entering and "Au revoir" when leaving — even if you don\'t buy anything. Point at items if you forget the name.'
      },
      {
        id: 'supermarche',
        title: 'Au supermarché',
        theySay: [
          'Vous avez la carte de fidélité ?',
          'Vous avez besoin d\'un sac ?',
          'Ça fait douze euros cinquante.'
        ],
        youSee: 'Self-checkout machines with French prompts. Reusable bags for sale near the register. Produce that you must weigh and label yourself.',
        respond: [
          'Non, merci.',
          'Oui, un sac s\'il vous plaît.',
          'Je peux payer par carte ?'
        ],
        cultural: 'Bring your own bag — plastic bags cost extra. You must weigh produce yourself at the scale in the produce section. Bag your own groceries quickly.'
      },
      {
        id: 'metro',
        title: 'Dans le métro',
        theySay: [
          'Attention à la fermeture des portes.',
          'Prochain arrêt : Châtelet.',
          'Pardon, vous descendez ?'
        ],
        youSee: 'Ticket machines with language options. Color-coded line maps on the wall. Double doors you may need to lift a handle or press a button to open.',
        respond: [
          'Un ticket, s\'il vous plaît.',
          'Excusez-moi, pour aller à…?',
          'Oui, je descends. Pardon !'
        ],
        cultural: 'Let passengers exit before boarding. Keep right on escalators so others can pass on the left. Avoid talking loudly — the métro is generally quiet.'
      },
      {
        id: 'street',
        title: 'Dans la rue',
        theySay: [
          'Excusez-moi, vous avez l\'heure ?',
          'Vous cherchez quelque chose ?',
          'Attention !'
        ],
        youSee: 'Narrow sidewalks shared with café terraces. Pedestrian crossings without countdown timers. Street signs on building corners rather than on posts.',
        respond: [
          'Il est quatorze heures.',
          'Je cherche la station de métro.',
          'Pardon, où est la rue…?'
        ],
        cultural: 'Greet shopkeepers when entering any small store. Cross streets carefully — drivers may not stop at crosswalks. "Pardon" works for both "excuse me" and "sorry."'
      }
    ];

    scenarios.forEach(function (scenario) {
      section.appendChild(buildScenarioCard(scenario));
    });

    /* ── Supplementary content subsections ──────────────────── */

    // Numbers in the wild
    var numbersHeading = makeEl('h3', 'guide-subsection-heading', 'Numbers in the wild');
    section.appendChild(numbersHeading);

    var numbersNote = makeEl('div', 'guide-note');
    var numbersIntro = makeEl('p', '', 'Numbers pop up everywhere in Paris. Here are common places you\'ll encounter them:');
    numbersNote.appendChild(numbersIntro);

    var numberExamples = [
      { context: 'Price tags', example: '3,50 € — "trois euros cinquante" (comma = decimal in France)' },
      { context: 'Addresses', example: '12, rue de Rivoli — "douze, rue de Rivoli"' },
      { context: 'Métro lines', example: 'Ligne 6 — "ligne six" (lines are numbered 1–14)' },
      { context: 'Phone numbers', example: '01 42 36 … — spoken in pairs: "zéro un, quarante-deux, trente-six…"' }
    ];

    var numbersList = makeEl('ul', '');
    numberExamples.forEach(function (item) {
      var li = makeEl('li', '');
      var strong = makeEl('strong', '', item.context + ': ');
      li.appendChild(strong);
      li.appendChild(document.createTextNode(item.example));
      numbersList.appendChild(li);
    });
    numbersNote.appendChild(numbersList);
    section.appendChild(numbersNote);

    // Gendered nouns
    var genderHeading = makeEl('h3', 'guide-subsection-heading', 'Gendered nouns');
    section.appendChild(genderHeading);

    var genderNote = makeEl('div', 'guide-note');
    var genderIntro = makeEl('p', '', 'Every French noun has a gender. The article tells you which:');
    genderNote.appendChild(genderIntro);

    var genderExamples = [
      { article: 'le', noun: 'café', english: 'the coffee (masculine)' },
      { article: 'la', noun: 'boulangerie', english: 'the bakery (feminine)' },
      { article: 'les', noun: 'croissants', english: 'the croissants (plural)' },
      { article: 'le', noun: 'métro', english: 'the metro (masculine)' },
      { article: 'la', noun: 'gare', english: 'the train station (feminine)' }
    ];

    var genderList = makeEl('ul', '');
    genderExamples.forEach(function (item) {
      var li = makeEl('li', '');
      var articleSpan = makeEl('strong', '', item.article + ' ' + item.noun);
      li.appendChild(articleSpan);
      li.appendChild(document.createTextNode(' — ' + item.english));
      genderList.appendChild(li);
    });
    genderNote.appendChild(genderList);

    var genderTip = makeEl('p', '', 'Tip: learn the article with the noun as one unit — "la boulangerie," not just "boulangerie."');
    genderNote.appendChild(genderTip);
    section.appendChild(genderNote);

    // Politeness rules
    var politeHeading = makeEl('h3', 'guide-subsection-heading', 'Politeness rules');
    section.appendChild(politeHeading);

    var politeNote = makeEl('div', 'guide-note');
    var politeIntro = makeEl('p', '', 'French politeness is non-negotiable. Two rules to never forget:');
    politeNote.appendChild(politeIntro);

    var politeList = makeEl('ol', '');

    var greetingLi = makeEl('li', '');
    var greetingStrong = makeEl('strong', '', 'Greeting first: ');
    greetingLi.appendChild(greetingStrong);
    greetingLi.appendChild(document.createTextNode('Always say "Bonjour" (or "Bonsoir" after 6 pm) before asking anything — in shops, restaurants, the métro booth, everywhere. Skipping the greeting is considered rude.'));
    politeList.appendChild(greetingLi);

    var vousLi = makeEl('li', '');
    var vousStrong = makeEl('strong', '', 'Vous vs tu: ');
    vousLi.appendChild(vousStrong);
    vousLi.appendChild(document.createTextNode('Use "vous" (formal you) with strangers, shopkeepers, and anyone older. "Tu" (informal you) is reserved for friends, children, and people who invite you to use it. When in doubt, use "vous."'));
    politeList.appendChild(vousLi);

    politeNote.appendChild(politeList);
    section.appendChild(politeNote);

    return section;
  }

  function buildScenarioCard(scenario) {
    var card = makeEl('div', 'scenario-card');

    // Header button
    var header = makeEl('button', 'scenario-card__header');
    header.setAttribute('aria-expanded', 'false');

    var title = makeEl('span', 'scenario-card__title', scenario.title);
    var chevron = makeEl('span', 'scenario-card__chevron', '\u25B8');
    chevron.setAttribute('aria-hidden', 'true');

    header.appendChild(title);
    header.appendChild(chevron);

    // Body (hidden by default)
    var body = makeEl('div', 'scenario-card__body');
    body.hidden = true;

    // "What they'll say" subsection
    body.appendChild(buildPhraseSubsection("What they'll say", scenario.theySay));

    // "What you'll see" subsection
    var seeSub = makeEl('div', 'scenario-card__subsection');
    seeSub.appendChild(makeEl('h4', 'scenario-card__sub-title', "What you'll see"));
    seeSub.appendChild(makeEl('p', '', scenario.youSee));
    body.appendChild(seeSub);

    // "How to respond" subsection
    body.appendChild(buildPhraseSubsection('How to respond', scenario.respond));

    // "Cultural notes" subsection
    var culturalSub = makeEl('div', 'scenario-card__subsection');
    culturalSub.appendChild(makeEl('h4', 'scenario-card__sub-title', 'Cultural notes'));
    var culturalNote = makeEl('p', 'guide-note', scenario.cultural);
    culturalSub.appendChild(culturalNote);
    body.appendChild(culturalSub);

    // Toggle expand/collapse
    header.addEventListener('click', function () {
      var expanded = header.getAttribute('aria-expanded') === 'true';
      header.setAttribute('aria-expanded', String(!expanded));
      body.hidden = expanded;
      chevron.textContent = expanded ? '\u25B8' : '\u25BE';
    });

    card.appendChild(header);
    card.appendChild(body);
    return card;
  }

  function buildPhraseSubsection(titleText, phrases) {
    var sub = makeEl('div', 'scenario-card__subsection');
    sub.appendChild(makeEl('h4', 'scenario-card__sub-title', titleText));

    phrases.forEach(function (phrase) {
      var row = makeEl('div', 'scenario-card__phrase');
      row.style.minHeight = '44px';

      var text = makeEl('span', 'scenario-card__phrase-text', phrase);
      row.appendChild(text);

      var speaker = makeEl('span', 'scenario-card__speaker', '\uD83D\uDD0A');
      speaker.setAttribute('aria-label', 'Écouter');
      row.appendChild(speaker);

      row.addEventListener('click', function () {
        if (window.PetitMot.Audio && typeof window.PetitMot.Audio.speak === 'function') {
          // Remove playing state from any other phrase
          var allPlaying = document.querySelectorAll('.scenario-card__phrase--playing');
          for (var i = 0; i < allPlaying.length; i++) {
            allPlaying[i].classList.remove('scenario-card__phrase--playing');
          }
          // Mark this phrase as playing
          row.classList.add('scenario-card__phrase--playing');

          window.PetitMot.Audio.speak(phrase);

          // Listen for speech end to remove playing state
          try {
            var checkEnd = setInterval(function () {
              if (!window.speechSynthesis || !window.speechSynthesis.speaking) {
                row.classList.remove('scenario-card__phrase--playing');
                clearInterval(checkEnd);
              }
            }, 200);
          } catch (e) {
            // Fallback: remove after 3 seconds
            setTimeout(function () {
              row.classList.remove('scenario-card__phrase--playing');
            }, 3000);
          }
        } else {
          // Audio unavailable — show inline indicator
          if (!row.querySelector('.scenario-card__audio-unavailable')) {
            var indicator = makeEl('span', 'scenario-card__audio-unavailable', 'audio unavailable');
            row.appendChild(indicator);
          }
        }
      });

      sub.appendChild(row);
    });

    return sub;
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
    view.appendChild(buildScenarios());

    container.appendChild(view);

    if (window.PetitMot.Tooltips && typeof window.PetitMot.Tooltips.refresh === 'function') {
      window.PetitMot.Tooltips.refresh();
    }
  }

  return { init: init };

}());

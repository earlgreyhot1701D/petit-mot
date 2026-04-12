/* ============================================================
   Petit Mot — curriculum.js
   Static curriculum content. Pure data — no functions, no DOM.
   Exposes: window.PetitMot.curriculum (plain array)
   Days 2-7 generated via Claude Opus 4.6 (build-time only).
   ============================================================ */

window.PetitMot = window.PetitMot || {};

window.PetitMot.curriculum = [
  {
    day: 1,
    theme: "Bonjour, Paris!",
    scenario: "Greetings, please, thank you",
    words: [
      { french: "bonjour", english: "hello", phonetic: "bohn-ZHOOR", emoji: "👋" },
      { french: "merci", english: "thank you", phonetic: "mair-SEE", emoji: "🙏" },
      { french: "s'il vous plaît", english: "please", phonetic: "seel voo PLEH", emoji: "✨" },
      { french: "au revoir", english: "goodbye", phonetic: "oh ruh-VWAHR", emoji: "👋" },
      { french: "excusez-moi", english: "excuse me", phonetic: "ex-koo-ZAY mwah", emoji: "🤝" }
    ],
    story: {
      title: "Mon premier jour à Paris",
      lines: [
        { fr: "Bonjour! Je suis à Paris.", en: "Hello! I am in Paris.", highlight: "bonjour" },
        { fr: "Excusez-moi, où est le métro?", en: "Excuse me, where is the subway?", highlight: "excusez-moi" },
        { fr: "Merci beaucoup!", en: "Thank you very much!", highlight: "merci" },
        { fr: "Un café, s'il vous plaît.", en: "A coffee, please.", highlight: "s'il vous plaît" },
        { fr: "Au revoir, Paris!", en: "Goodbye, Paris!", highlight: "au revoir" }
      ]
    },
    journal: {
      title: "Le petit journal de Paris — Jour 1",
      lines: [
        { fr: "Bonjour! Je suis à Paris aujourd'hui.", en: "Hello! I am in Paris today.", highlight: "bonjour" },
        { fr: "Les rues sont belles. Le ciel est bleu.", en: "The streets are beautiful. The sky is blue.", highlight: "" },
        { fr: "Je dis bonjour à tout le monde.", en: "I say hello to everyone.", highlight: "bonjour" },
        { fr: "Excusez-moi, où est la Seine?", en: "Excuse me, where is the Seine?", highlight: "excusez-moi" },
        { fr: "Merci, monsieur! Vous êtes gentil.", en: "Thank you, sir! You are kind.", highlight: "merci" },
        { fr: "Un café, s'il vous plaît.", en: "A coffee, please.", highlight: "s'il vous plaît" },
        { fr: "Au revoir, Paris. À demain!", en: "Goodbye, Paris. See you tomorrow!", highlight: "au revoir" }
      ]
    }
  },
  {
    day: 2,
    theme: "Au café",
    scenario: "Ordering coffee, pastries, the check",
    words: [
      { french: "un café", english: "a coffee", phonetic: "uhn kah-FAY", emoji: "☕" },
      { french: "un croissant", english: "a croissant", phonetic: "uhn kwah-SAHN", emoji: "🥐" },
      { french: "l'addition", english: "the check", phonetic: "lah-dee-SYOHN", emoji: "🧾" },
      { french: "je voudrais", english: "I would like", phonetic: "zhuh voo-DREH", emoji: "🙋" },
      { french: "c'est délicieux", english: "it's delicious", phonetic: "say day-lee-SYUH", emoji: "😋" }
    ],
    story: {
      title: "Un matin au café",
      lines: [
        { fr: "Je suis au café. Il fait beau.", en: "I am at the café. It's beautiful out.", highlight: "café" },
        { fr: "Je voudrais un café, s'il vous plaît.", en: "I would like a coffee, please.", highlight: "voudrais" },
        { fr: "Et un croissant aussi!", en: "And a croissant too!", highlight: "croissant" },
        { fr: "Mmm, c'est délicieux!", en: "Mmm, it's delicious!", highlight: "délicieux" },
        { fr: "L'addition, s'il vous plaît. Merci!", en: "The check, please. Thank you!", highlight: "addition" }
      ]
    },
    journal: {
      title: "Le petit journal de Paris — Jour 2",
      lines: [
        { fr: "Bonjour! Aujourd'hui, je vais au café.", en: "Hello! Today, I'm going to the café.", highlight: "café" },
        { fr: "Je voudrais un café et un croissant.", en: "I would like a coffee and a croissant.", highlight: "voudrais" },
        { fr: "Le croissant est chaud. C'est délicieux!", en: "The croissant is warm. It's delicious!", highlight: "délicieux" },
        { fr: "Je regarde les gens dans la rue.", en: "I watch the people in the street.", highlight: "" },
        { fr: "Excusez-moi, l'addition, s'il vous plaît.", en: "Excuse me, the check, please.", highlight: "addition" },
        { fr: "C'est trois euros. Merci!", en: "It's three euros. Thank you!", highlight: "" },
        { fr: "J'aime les cafés de Paris. Au revoir!", en: "I love the cafés of Paris. Goodbye!", highlight: "café" }
      ]
    }
  },
  {
    day: 3,
    theme: "Le Métro",
    scenario: "Directions, tickets, excuse me",
    words: [
      { french: "le métro", english: "the subway", phonetic: "luh may-TRO", emoji: "🚇" },
      { french: "un billet", english: "a ticket", phonetic: "uhn bee-YEH", emoji: "🎫" },
      { french: "la sortie", english: "the exit", phonetic: "lah sor-TEE", emoji: "🚪" },
      { french: "à gauche", english: "to the left", phonetic: "ah GOHSH", emoji: "⬅️" },
      { french: "à droite", english: "to the right", phonetic: "ah DRWAHT", emoji: "➡️" }
    ],
    story: {
      title: "Dans le métro",
      lines: [
        { fr: "Je prends le métro aujourd'hui.", en: "I am taking the subway today.", highlight: "métro" },
        { fr: "Un billet, s'il vous plaît.", en: "A ticket, please.", highlight: "billet" },
        { fr: "Excusez-moi, où est la sortie?", en: "Excuse me, where is the exit?", highlight: "sortie" },
        { fr: "Tournez à gauche, monsieur.", en: "Turn to the left, sir.", highlight: "gauche" },
        { fr: "Non, non! C'est à droite!", en: "No, no! It's to the right!", highlight: "droite" }
      ]
    },
    journal: {
      title: "Le petit journal de Paris — Jour 3",
      lines: [
        { fr: "Bonjour! Je prends le métro aujourd'hui.", en: "Hello! I'm taking the subway today.", highlight: "métro" },
        { fr: "Un billet, s'il vous plaît.", en: "A ticket, please.", highlight: "billet" },
        { fr: "Le métro est rapide. J'aime le métro!", en: "The subway is fast. I love the subway!", highlight: "métro" },
        { fr: "Excusez-moi, où est la sortie?", en: "Excuse me, where is the exit?", highlight: "sortie" },
        { fr: "C'est à gauche? Non, à droite!", en: "It's to the left? No, to the right!", highlight: "gauche" },
        { fr: "Je voudrais un croissant à la boulangerie.", en: "I would like a croissant at the bakery.", highlight: "" },
        { fr: "Merci, Paris. Tu es magnifique!", en: "Thank you, Paris. You are magnificent!", highlight: "" }
      ]
    }
  },
  {
    day: 4,
    theme: "La boulangerie",
    scenario: "Bread, pastries, numbers 1-5",
    words: [
      { french: "du pain", english: "some bread", phonetic: "doo PAH", emoji: "🍞" },
      { french: "une baguette", english: "a baguette", phonetic: "oon bah-GET", emoji: "🥖" },
      { french: "deux", english: "two", phonetic: "DUH", emoji: "✌️" },
      { french: "trois", english: "three", phonetic: "TRWAH", emoji: "3️⃣" },
      { french: "combien", english: "how much/many", phonetic: "kohm-BYEH", emoji: "🤔" }
    ],
    story: {
      title: "À la boulangerie",
      lines: [
        { fr: "La boulangerie sent bon! Je veux du pain.", en: "The bakery smells good! I want some bread.", highlight: "pain" },
        { fr: "Une baguette, s'il vous plaît.", en: "A baguette, please.", highlight: "baguette" },
        { fr: "Et deux croissants aussi.", en: "And two croissants too.", highlight: "deux" },
        { fr: "Non, trois croissants! J'ai faim.", en: "No, three croissants! I'm hungry.", highlight: "trois" },
        { fr: "C'est combien? Merci beaucoup!", en: "How much is it? Thank you very much!", highlight: "combien" }
      ]
    },
    journal: {
      title: "Le petit journal de Paris — Jour 4",
      lines: [
        { fr: "Bonjour! La boulangerie ouvre à sept heures.", en: "Hello! The bakery opens at seven o'clock.", highlight: "" },
        { fr: "Je voudrais du pain et une baguette.", en: "I would like some bread and a baguette.", highlight: "pain" },
        { fr: "Deux croissants aussi, s'il vous plaît.", en: "Two croissants too, please.", highlight: "deux" },
        { fr: "Non, trois! J'ai très faim.", en: "No, three! I'm very hungry.", highlight: "trois" },
        { fr: "C'est combien? Cinq euros? Merci!", en: "How much is it? Five euros? Thank you!", highlight: "combien" },
        { fr: "La baguette est chaude. C'est délicieux!", en: "The baguette is warm. It's delicious!", highlight: "baguette" },
        { fr: "Je mange dans le jardin. C'est beau.", en: "I eat in the garden. It's beautiful.", highlight: "" }
      ]
    }
  },
  {
    day: 5,
    theme: "Au musée",
    scenario: "Tickets, asking about art, colors",
    words: [
      { french: "le musée", english: "the museum", phonetic: "luh moo-ZAY", emoji: "🏛️" },
      { french: "un tableau", english: "a painting", phonetic: "uhn tah-BLO", emoji: "🖼️" },
      { french: "bleu", english: "blue", phonetic: "BLUH", emoji: "🔵" },
      { french: "rouge", english: "red", phonetic: "ROOZH", emoji: "🔴" },
      { french: "c'est beau", english: "it's beautiful", phonetic: "say BO", emoji: "✨" }
    ],
    story: {
      title: "Un après-midi au musée",
      lines: [
        { fr: "Je visite le musée aujourd'hui.", en: "I am visiting the museum today.", highlight: "musée" },
        { fr: "Regardez ce tableau! Il est grand.", en: "Look at this painting! It is big.", highlight: "tableau" },
        { fr: "Le ciel est bleu dans ce tableau.", en: "The sky is blue in this painting.", highlight: "bleu" },
        { fr: "Et les fleurs sont rouge.", en: "And the flowers are red.", highlight: "rouge" },
        { fr: "Oh, c'est beau! J'adore Paris.", en: "Oh, it's beautiful! I love Paris.", highlight: "beau" }
      ]
    },
    journal: {
      title: "Le petit journal de Paris — Jour 5",
      lines: [
        { fr: "Bonjour! Aujourd'hui, je visite le musée.", en: "Hello! Today, I'm visiting the museum.", highlight: "musée" },
        { fr: "Un billet, s'il vous plaît. C'est combien?", en: "A ticket, please. How much is it?", highlight: "" },
        { fr: "Il y a un grand tableau bleu.", en: "There is a big blue painting.", highlight: "bleu" },
        { fr: "Et un tableau rouge aussi. C'est beau!", en: "And a red painting too. It's beautiful!", highlight: "rouge" },
        { fr: "Je voudrais un café au café du musée.", en: "I would like a coffee at the museum café.", highlight: "" },
        { fr: "Ce tableau est magnifique. J'adore les couleurs!", en: "This painting is magnificent. I love the colors!", highlight: "tableau" },
        { fr: "Au revoir, musée. Merci pour l'art!", en: "Goodbye, museum. Thank you for the art!", highlight: "musée" }
      ]
    }
  },
  {
    day: 6,
    theme: "Les arrondissements",
    scenario: "Left/right, numbers 6-10, neighborhoods",
    words: [
      { french: "un arrondissement", english: "a district", phonetic: "uhn ah-rohn-dees-MAHN", emoji: "📍" },
      { french: "six", english: "six", phonetic: "SEESS", emoji: "6️⃣" },
      { french: "sept", english: "seven", phonetic: "SET", emoji: "7️⃣" },
      { french: "tout droit", english: "straight ahead", phonetic: "too DRWAH", emoji: "⬆️" },
      { french: "ici", english: "here", phonetic: "ee-SEE", emoji: "📌" }
    ],
    story: {
      title: "Les quartiers de Paris",
      lines: [
        { fr: "Paris a vingt arrondissements!", en: "Paris has twenty districts!", highlight: "arrondissement" },
        { fr: "Je suis dans le six. J'aime ce quartier.", en: "I am in the sixth. I like this neighborhood.", highlight: "six" },
        { fr: "Le musée est dans le sept.", en: "The museum is in the seventh.", highlight: "sept" },
        { fr: "Allez tout droit, puis à gauche.", en: "Go straight ahead, then to the left.", highlight: "tout droit" },
        { fr: "Ah, c'est ici! Merci beaucoup!", en: "Ah, it's here! Thank you very much!", highlight: "ici" }
      ]
    },
    journal: {
      title: "Le petit journal de Paris — Jour 6",
      lines: [
        { fr: "Bonjour! Paris a vingt arrondissements.", en: "Hello! Paris has twenty districts.", highlight: "arrondissement" },
        { fr: "Je suis dans le six. C'est joli ici.", en: "I am in the sixth. It's pretty here.", highlight: "six" },
        { fr: "Le musée est dans le sept. Allons-y!", en: "The museum is in the seventh. Let's go!", highlight: "sept" },
        { fr: "Tout droit, puis à gauche, puis à droite.", en: "Straight ahead, then left, then right.", highlight: "tout droit" },
        { fr: "C'est ici! Je voudrais du pain.", en: "It's here! I would like some bread.", highlight: "ici" },
        { fr: "La boulangerie est dans le six aussi.", en: "The bakery is in the sixth too.", highlight: "six" },
        { fr: "J'aime mon arrondissement. C'est beau.", en: "I love my district. It's beautiful.", highlight: "arrondissement" }
      ]
    }
  },
  {
    day: 7,
    theme: "Révision!",
    scenario: "Review story using all week 1 vocabulary",
    words: [
      { french: "aujourd'hui", english: "today", phonetic: "oh-zhoor-DWEE", emoji: "📅" },
      { french: "j'aime", english: "I like/love", phonetic: "ZHEM", emoji: "❤️" },
      { french: "allons-y", english: "let's go", phonetic: "ah-LOHN-zee", emoji: "🚀" },
      { french: "magnifique", english: "magnificent", phonetic: "mah-nyee-FEEK", emoji: "🌟" },
      { french: "à bientôt", english: "see you soon", phonetic: "ah byeh-TOH", emoji: "👋" }
    ],
    story: {
      title: "Ma semaine à Paris",
      lines: [
        { fr: "Aujourd'hui, je pense à ma semaine à Paris.", en: "Today, I think about my week in Paris.", highlight: "aujourd'hui" },
        { fr: "J'aime le café, le pain, et le musée.", en: "I love the coffee, the bread, and the museum.", highlight: "j'aime" },
        { fr: "Allons-y! Le métro est à gauche.", en: "Let's go! The subway is to the left.", highlight: "allons-y" },
        { fr: "Paris est magnifique. C'est beau ici.", en: "Paris is magnificent. It's beautiful here.", highlight: "magnifique" },
        { fr: "Au revoir, Paris! À bientôt!", en: "Goodbye, Paris! See you soon!", highlight: "à bientôt" }
      ]
    },
    journal: {
      title: "Le petit journal de Paris — Jour 7",
      lines: [
        { fr: "Bonjour! Aujourd'hui, je pense à ma semaine.", en: "Hello! Today, I think about my week.", highlight: "aujourd'hui" },
        { fr: "J'aime le café et les croissants du matin.", en: "I love the coffee and the morning croissants.", highlight: "j'aime" },
        { fr: "Le métro est facile. À gauche, à droite, tout droit!", en: "The subway is easy. Left, right, straight ahead!", highlight: "" },
        { fr: "La boulangerie sent bon. Deux baguettes, s'il vous plaît!", en: "The bakery smells good. Two baguettes, please!", highlight: "" },
        { fr: "Le musée est magnifique. Les tableaux sont bleus et rouges.", en: "The museum is magnificent. The paintings are blue and red.", highlight: "magnifique" },
        { fr: "Allons-y dans le six! Mon arrondissement préféré.", en: "Let's go to the sixth! My favorite district.", highlight: "allons-y" },
        { fr: "Merci, Paris. À bientôt! Je t'aime.", en: "Thank you, Paris. See you soon! I love you.", highlight: "à bientôt" },
        { fr: "Au revoir!", en: "Goodbye!", highlight: "" }
      ]
    }
  }

  // STUB: Days 8-30 curriculum
  // When implemented: generate via Bedrock using same prompt pattern as days 2-7
  // Structure: { day, theme, words: [{french, english, phonetic, emoji}], story: {title, lines} }
  // See: PRD Section 7 (Curriculum Architecture)
];

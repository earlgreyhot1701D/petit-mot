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
        { fr: "Je suis à Paris. Je suis vraiment à Paris!", en: "I am in Paris. I am really in Paris!", highlight: "" },
        { fr: "Les rues sont grandes. Les immeubles sont beaux.", en: "The streets are big. The buildings are beautiful.", highlight: "" },
        { fr: "Je ne connais personne ici. Mais ce n'est pas grave.", en: "I don't know anyone here. But that's okay.", highlight: "" },
        { fr: "Bonjour, madame! Bonjour, monsieur!", en: "Hello, ma'am! Hello, sir!", highlight: "bonjour" },
        { fr: "Excusez-moi, où est la Seine?", en: "Excuse me, where is the Seine?", highlight: "excusez-moi" },
        { fr: "Merci! Tout le monde est gentil ici.", en: "Thank you! Everyone is kind here.", highlight: "merci" },
        { fr: "Le soleil se couche. Au revoir, premier jour.", en: "The sun is setting. Goodbye, first day.", highlight: "au revoir" },
        { fr: "Demain, je vais trouver un café. S'il vous plaît, Paris, soyez douce avec moi.", en: "Tomorrow, I'm going to find a café. Please, Paris, be gentle with me.", highlight: "s'il vous plaît" }
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
        { fr: "Ce matin, je cherche un café. Il y en a partout!", en: "This morning, I'm looking for a café. They're everywhere!", highlight: "café" },
        { fr: "Je choisis un petit café au coin de la rue.", en: "I pick a small café on the corner of the street.", highlight: "café" },
        { fr: "Je voudrais un café et un croissant, s'il vous plaît.", en: "I would like a coffee and a croissant, please.", highlight: "voudrais" },
        { fr: "Le croissant est chaud. Le beurre fond sur mes doigts.", en: "The croissant is warm. The butter melts on my fingers.", highlight: "croissant" },
        { fr: "C'est délicieux. Pourquoi est-ce si bon ici?", en: "It's delicious. Why is it so good here?", highlight: "délicieux" },
        { fr: "Je reste longtemps. Je regarde les gens qui passent.", en: "I stay a long time. I watch the people passing by.", highlight: "" },
        { fr: "L'addition, s'il vous plaît. Le serveur sourit.", en: "The check, please. The waiter smiles.", highlight: "addition" },
        { fr: "Je crois que j'ai trouvé mon café.", en: "I think I've found my café.", highlight: "" }
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
        { fr: "Aujourd'hui, le métro. J'ai un peu peur.", en: "Today, the subway. I'm a little scared.", highlight: "métro" },
        { fr: "Un billet, s'il vous plaît. La machine est compliquée.", en: "A ticket, please. The machine is complicated.", highlight: "billet" },
        { fr: "Les portes s'ouvrent. Tout le monde sait où aller sauf moi.", en: "The doors open. Everyone knows where to go except me.", highlight: "" },
        { fr: "Excusez-moi, où est la sortie? À gauche? Merci!", en: "Excuse me, where is the exit? To the left? Thank you!", highlight: "sortie" },
        { fr: "Non, non. C'est à droite. J'apprends.", en: "No, no. It's to the right. I'm learning.", highlight: "droite" },
        { fr: "Je sors à la lumière. Le ciel est bleu.", en: "I come out into the light. The sky is blue.", highlight: "" },
        { fr: "Le métro n'est pas si difficile. Demain, je n'aurai pas peur.", en: "The subway isn't so hard. Tomorrow, I won't be scared.", highlight: "métro" }
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
        { fr: "Six heures du matin. L'odeur du pain chaud dans la rue.", en: "Six in the morning. The smell of warm bread in the street.", highlight: "pain" },
        { fr: "La boulangerie est déjà ouverte. Il y a une petite queue.", en: "The bakery is already open. There's a small line.", highlight: "" },
        { fr: "Bonjour! Une baguette, s'il vous plaît.", en: "Hello! A baguette, please.", highlight: "baguette" },
        { fr: "Et deux croissants. Non, trois. J'ai très faim.", en: "And two croissants. No, three. I'm very hungry.", highlight: "trois" },
        { fr: "C'est combien? La dame me sourit.", en: "How much is it? The lady smiles at me.", highlight: "combien" },
        { fr: "Je mange ma baguette sur un banc. Elle craque sous mes dents.", en: "I eat my baguette on a bench. It crunches under my teeth.", highlight: "baguette" },
        { fr: "Le parc est calme. Les oiseaux chantent.", en: "The park is calm. The birds are singing.", highlight: "" },
        { fr: "Je commence à avoir une routine. C'est bien.", en: "I'm starting to have a routine. That's good.", highlight: "" }
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
        { fr: "Aujourd'hui, pas de course. Je visite le musée.", en: "Today, no rushing. I'm visiting the museum.", highlight: "musée" },
        { fr: "Il y a un grand tableau bleu. Comme le ciel de Paris.", en: "There is a big blue painting. Like the Paris sky.", highlight: "bleu" },
        { fr: "Et un tableau rouge. Il me fait penser aux toits.", en: "And a red painting. It makes me think of the rooftops.", highlight: "rouge" },
        { fr: "Je reste devant un petit tableau pendant longtemps.", en: "I stand in front of a small painting for a long time.", highlight: "tableau" },
        { fr: "C'est beau. Je ne sais pas pourquoi, mais j'ai envie de pleurer.", en: "It's beautiful. I don't know why, but I feel like crying.", highlight: "beau" },
        { fr: "Paris fait ça. Elle vous touche quand vous ne regardez pas.", en: "Paris does that. She touches you when you're not looking.", highlight: "" },
        { fr: "Au café du musée, je voudrais un café. Mon café préféré.", en: "At the museum café, I would like a coffee. My favorite coffee.", highlight: "" },
        { fr: "Je suis moins pressée maintenant. Paris m'apprend à ralentir.", en: "I'm less rushed now. Paris is teaching me to slow down.", highlight: "" }
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
        { fr: "Je veux connaître mon arrondissement.", en: "I want to know my district.", highlight: "arrondissement" },
        { fr: "Je suis dans le six. Les rues sont étroites et jolies.", en: "I am in the sixth. The streets are narrow and pretty.", highlight: "six" },
        { fr: "Le musée est dans le sept. Je connais le chemin maintenant.", en: "The museum is in the seventh. I know the way now.", highlight: "sept" },
        { fr: "Tout droit, puis à gauche à la fontaine.", en: "Straight ahead, then left at the fountain.", highlight: "tout droit" },
        { fr: "La boulangerie est ici, dans ma rue.", en: "The bakery is here, on my street.", highlight: "ici" },
        { fr: "Le serveur du café me reconnaît. Bonjour! Le habituel?", en: "The waiter at the café recognizes me. Hello! The usual?", highlight: "" },
        { fr: "Je connais les coins. Je connais les bruits.", en: "I know the corners. I know the sounds.", highlight: "" },
        { fr: "Ce n'est plus un arrondissement. C'est mon quartier.", en: "It's no longer a district. It's my neighborhood.", highlight: "arrondissement" }
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
        { fr: "Une semaine à Paris. Sept jours. Ça passe vite.", en: "A week in Paris. Seven days. It goes fast.", highlight: "" },
        { fr: "Aujourd'hui, je marche sans carte. Je connais le chemin.", en: "Today, I walk without a map. I know the way.", highlight: "aujourd'hui" },
        { fr: "J'aime mon café du matin. J'aime ma baguette chaude.", en: "I love my morning coffee. I love my warm baguette.", highlight: "j'aime" },
        { fr: "Le métro n'est plus un mystère. À gauche, à droite, tout droit.", en: "The subway is no longer a mystery. Left, right, straight ahead.", highlight: "" },
        { fr: "Le musée est mon endroit calme. Les tableaux sont mes amis.", en: "The museum is my quiet place. The paintings are my friends.", highlight: "" },
        { fr: "Allons-y! Il reste trois semaines. Tant de choses à voir.", en: "Let's go! Three weeks left. So many things to see.", highlight: "allons-y" },
        { fr: "Paris est magnifique. Et je commence à la comprendre.", en: "Paris is magnificent. And I'm starting to understand her.", highlight: "magnifique" },
        { fr: "À bientôt, première semaine. Tu étais parfaite.", en: "See you soon, first week. You were perfect.", highlight: "à bientôt" }
      ]
    }
  }

  // STUB: Days 8-30 curriculum
  // When implemented: generate via Bedrock using same prompt pattern as days 2-7
  // Structure: { day, theme, words: [{french, english, phonetic, emoji}], story: {title, lines} }
  // See: PRD Section 7 (Curriculum Architecture)
];

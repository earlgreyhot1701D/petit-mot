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
  },

  // ═══════════════════════════════════════════════════════
  // WEEK 2: Finding my rhythm
  // ═══════════════════════════════════════════════════════

  {
    day: 8,
    theme: "Au restaurant",
    scenario: "Ordering dinner, asking for recommendations",
    words: [
      { french: "le menu", english: "the menu", phonetic: "luh muh-NOO", emoji: "📋" },
      { french: "je prends", english: "I'll have", phonetic: "zhuh PRAHN", emoji: "🍽️" },
      { french: "l'entrée", english: "the starter", phonetic: "lahn-TRAY", emoji: "🥗" },
      { french: "le plat", english: "the main course", phonetic: "luh PLAH", emoji: "🍲" },
      { french: "l'eau plate", english: "still water", phonetic: "loh PLAHT", emoji: "💧" }
    ],
    story: {
      title: "Mon premier dîner",
      lines: [
        { fr: "Ce soir, je vais au restaurant.", en: "Tonight, I'm going to the restaurant.", highlight: "" },
        { fr: "Le menu est en français. Bien sûr!", en: "The menu is in French. Of course!", highlight: "menu" },
        { fr: "Pour l'entrée, je prends la soupe.", en: "For the starter, I'll have the soup.", highlight: "entrée" },
        { fr: "Pour le plat, le poulet, s'il vous plaît.", en: "For the main course, the chicken, please.", highlight: "plat" },
        { fr: "Et de l'eau plate. Merci!", en: "And still water. Thank you!", highlight: "l'eau plate" }
      ]
    },
    journal: {
      title: "Le petit journal de Paris — Jour 8",
      lines: [
        { fr: "Ce soir, j'ose aller au restaurant. Toute seule.", en: "Tonight, I dare to go to the restaurant. All alone.", highlight: "" },
        { fr: "Le serveur parle vite. Je comprends 'menu' et 'plat'.", en: "The waiter speaks fast. I understand 'menu' and 'main course'.", highlight: "menu" },
        { fr: "Je prends la soupe et le poulet. C'est simple.", en: "I'll have the soup and the chicken. It's simple.", highlight: "prends" },
        { fr: "L'eau plate, s'il vous plaît. Pas de vin ce soir.", en: "Still water, please. No wine tonight.", highlight: "l'eau plate" },
        { fr: "Le repas est bon. Pas magnifique, mais bon.", en: "The meal is good. Not magnificent, but good.", highlight: "" },
        { fr: "L'addition arrive. Je laisse un pourboire.", en: "The check arrives. I leave a tip.", highlight: "" },
        { fr: "Je peux manger à Paris. C'est une victoire.", en: "I can eat in Paris. That's a victory.", highlight: "" }
      ]
    }
  },
  {
    day: 9,
    theme: "Le marché",
    scenario: "Shopping for food, asking prices, quantities",
    words: [
      { french: "les fruits", english: "the fruits", phonetic: "lay FRWEE", emoji: "🍎" },
      { french: "les légumes", english: "the vegetables", phonetic: "lay lay-GOOM", emoji: "🥕" },
      { french: "un kilo", english: "a kilogram", phonetic: "uhn kee-LO", emoji: "⚖️" },
      { french: "goûter", english: "to taste", phonetic: "goo-TAY", emoji: "😋" },
      { french: "frais", english: "fresh", phonetic: "FREH", emoji: "🌿" }
    ],
    story: {
      title: "Au marché du dimanche",
      lines: [
        { fr: "Le marché est plein de couleurs.", en: "The market is full of colors.", highlight: "" },
        { fr: "Regardez les fruits! Ils sont beaux.", en: "Look at the fruits! They are beautiful.", highlight: "fruits" },
        { fr: "Un kilo de tomates, s'il vous plaît.", en: "A kilogram of tomatoes, please.", highlight: "kilo" },
        { fr: "Vous voulez goûter? Oui, merci!", en: "Would you like to taste? Yes, thank you!", highlight: "goûter" },
        { fr: "Tout est frais. J'aime le marché.", en: "Everything is fresh. I love the market.", highlight: "frais" }
      ]
    },
    journal: {
      title: "Le petit journal de Paris — Jour 9",
      lines: [
        { fr: "Dimanche matin. Le marché est dans ma rue.", en: "Sunday morning. The market is on my street.", highlight: "" },
        { fr: "Il y a des fruits partout. Rouge, orange, violet.", en: "There are fruits everywhere. Red, orange, purple.", highlight: "fruits" },
        { fr: "Un kilo de fraises, s'il vous plaît.", en: "A kilogram of strawberries, please.", highlight: "kilo" },
        { fr: "Le vendeur me dit: goûtez! Je goûte. C'est sucré.", en: "The vendor tells me: taste! I taste. It's sweet.", highlight: "goûter" },
        { fr: "Les légumes sont frais et beaux comme des tableaux.", en: "The vegetables are fresh and beautiful like paintings.", highlight: "frais" },
        { fr: "Je rentre avec mon sac plein. Ma baguette dépasse.", en: "I go home with my full bag. My baguette sticks out.", highlight: "" },
        { fr: "Je cuisine ce soir. Avec mes légumes du marché.", en: "I'm cooking tonight. With my market vegetables.", highlight: "légumes" }
      ]
    }
  },
  {
    day: 10,
    theme: "Excusez-moi",
    scenario: "Asking for help, polite phrases, being lost",
    words: [
      { french: "pardon", english: "sorry/pardon", phonetic: "par-DOHN", emoji: "🙇" },
      { french: "je suis perdu", english: "I am lost", phonetic: "zhuh swee pair-DOO", emoji: "😰" },
      { french: "pouvez-vous", english: "can you", phonetic: "poo-VAY voo", emoji: "🤲" },
      { french: "lentement", english: "slowly", phonetic: "lahnt-MAHN", emoji: "🐌" },
      { french: "je comprends", english: "I understand", phonetic: "zhuh kohm-PRAHN", emoji: "💡" }
    ],
    story: {
      title: "Perdu dans Paris",
      lines: [
        { fr: "Pardon, madame. Je suis perdu.", en: "Sorry, ma'am. I am lost.", highlight: "perdu" },
        { fr: "Pouvez-vous m'aider, s'il vous plaît?", en: "Can you help me, please?", highlight: "pouvez-vous" },
        { fr: "Elle parle. Trop vite! Lentement, s'il vous plaît.", en: "She speaks. Too fast! Slowly, please.", highlight: "lentement" },
        { fr: "À gauche, puis tout droit. Je comprends!", en: "To the left, then straight ahead. I understand!", highlight: "comprends" },
        { fr: "Merci beaucoup! Pardon pour mon français.", en: "Thank you very much! Sorry for my French.", highlight: "pardon" }
      ]
    },
    journal: {
      title: "Le petit journal de Paris — Jour 10",
      lines: [
        { fr: "Je me suis perdue aujourd'hui. Vraiment perdue.", en: "I got lost today. Really lost.", highlight: "perdu" },
        { fr: "Mon métro m'a emmenée au mauvais arrondissement.", en: "My subway took me to the wrong district.", highlight: "" },
        { fr: "Pardon, monsieur. Pouvez-vous m'aider?", en: "Sorry, sir. Can you help me?", highlight: "pouvez-vous" },
        { fr: "Il parle très vite. Lentement, s'il vous plaît!", en: "He speaks very fast. Slowly, please!", highlight: "lentement" },
        { fr: "Il répète. Je comprends cette fois.", en: "He repeats. I understand this time.", highlight: "comprends" },
        { fr: "Se perdre n'est pas si mal. J'ai trouvé un joli parc.", en: "Getting lost isn't so bad. I found a pretty park.", highlight: "" },
        { fr: "Demain, je ne serai pas perdue. Ou peut-être si. C'est Paris.", en: "Tomorrow, I won't be lost. Or maybe I will. It's Paris.", highlight: "" }
      ]
    }
  },
  {
    day: 11,
    theme: "Les couleurs",
    scenario: "Describing things, shopping for clothes",
    words: [
      { french: "noir", english: "black", phonetic: "NWAHR", emoji: "⬛" },
      { french: "blanc", english: "white", phonetic: "BLAHN", emoji: "⬜" },
      { french: "vert", english: "green", phonetic: "VAIR", emoji: "🟢" },
      { french: "jaune", english: "yellow", phonetic: "ZHOHN", emoji: "🟡" },
      { french: "joli", english: "pretty", phonetic: "zho-LEE", emoji: "✨" }
    ],
    story: {
      title: "Les couleurs de Paris",
      lines: [
        { fr: "Paris est pleine de couleurs.", en: "Paris is full of colors.", highlight: "" },
        { fr: "Les toits sont gris. Le ciel est bleu et blanc.", en: "The roofs are gray. The sky is blue and white.", highlight: "blanc" },
        { fr: "Les arbres sont verts au printemps.", en: "The trees are green in spring.", highlight: "vert" },
        { fr: "Les taxis sont jaunes? Non, ils sont noirs!", en: "The taxis are yellow? No, they are black!", highlight: "noir" },
        { fr: "Paris est très jolie en couleurs.", en: "Paris is very pretty in colors.", highlight: "joli" }
      ]
    },
    journal: {
      title: "Le petit journal de Paris — Jour 11",
      lines: [
        { fr: "Aujourd'hui, je regarde les couleurs de Paris.", en: "Today, I look at the colors of Paris.", highlight: "" },
        { fr: "Les portes sont vertes, bleues, rouges. Chaque rue est différente.", en: "The doors are green, blue, red. Every street is different.", highlight: "vert" },
        { fr: "Un chat noir dort sur un mur blanc.", en: "A black cat sleeps on a white wall.", highlight: "noir" },
        { fr: "Les fleurs jaunes dans les fenêtres sont jolies.", en: "The yellow flowers in the windows are pretty.", highlight: "jaune" },
        { fr: "Au marché, les fruits sont rouge et orange.", en: "At the market, the fruits are red and orange.", highlight: "" },
        { fr: "Ma rue est la plus jolie. Je suis partiale.", en: "My street is the prettiest. I'm biased.", highlight: "joli" },
        { fr: "Paris est un tableau. Et j'habite dedans.", en: "Paris is a painting. And I live inside it.", highlight: "" }
      ]
    }
  },
  {
    day: 12,
    theme: "Les chiffres",
    scenario: "Numbers 11-20, prices, addresses",
    words: [
      { french: "onze", english: "eleven", phonetic: "OHNZ", emoji: "1️⃣1️⃣" },
      { french: "quinze", english: "fifteen", phonetic: "KAHNZ", emoji: "1️⃣5️⃣" },
      { french: "vingt", english: "twenty", phonetic: "VAH", emoji: "2️⃣0️⃣" },
      { french: "euros", english: "euros", phonetic: "uh-RO", emoji: "💶" },
      { french: "le numéro", english: "the number", phonetic: "luh noo-may-RO", emoji: "🔢" }
    ],
    story: {
      title: "Les chiffres partout",
      lines: [
        { fr: "Mon hôtel est au numéro onze.", en: "My hotel is at number eleven.", highlight: "onze" },
        { fr: "Le croissant coûte deux euros.", en: "The croissant costs two euros.", highlight: "euros" },
        { fr: "Le billet de métro coûte quinze euros.", en: "The metro pass costs fifteen euros.", highlight: "quinze" },
        { fr: "Paris a vingt arrondissements.", en: "Paris has twenty districts.", highlight: "vingt" },
        { fr: "Quel est le numéro? Je ne sais pas!", en: "What's the number? I don't know!", highlight: "numéro" }
      ]
    },
    journal: {
      title: "Le petit journal de Paris — Jour 12",
      lines: [
        { fr: "Les chiffres sont partout à Paris.", en: "Numbers are everywhere in Paris.", highlight: "" },
        { fr: "Mon café coûte trois euros. Ma baguette, un euro vingt.", en: "My coffee costs three euros. My baguette, one euro twenty.", highlight: "euros" },
        { fr: "Le bus numéro quinze passe devant mon hôtel.", en: "Bus number fifteen passes in front of my hotel.", highlight: "quinze" },
        { fr: "Onze heures. L'heure du café.", en: "Eleven o'clock. Coffee time.", highlight: "onze" },
        { fr: "Vingt minutes de métro jusqu'au musée.", en: "Twenty minutes by subway to the museum.", highlight: "vingt" },
        { fr: "Je compte en français maintenant. Sans réfléchir.", en: "I count in French now. Without thinking.", highlight: "" },
        { fr: "Les chiffres deviennent des amis. Pas des ennemis.", en: "Numbers are becoming friends. Not enemies.", highlight: "" }
      ]
    }
  },
  {
    day: 13,
    theme: "Au jardin",
    scenario: "Parks, nature, relaxing outdoors",
    words: [
      { french: "le jardin", english: "the garden", phonetic: "luh zhar-DAH", emoji: "🌳" },
      { french: "une fleur", english: "a flower", phonetic: "oon FLUHR", emoji: "🌸" },
      { french: "s'asseoir", english: "to sit down", phonetic: "sah-SWAHR", emoji: "🪑" },
      { french: "le soleil", english: "the sun", phonetic: "luh so-LAY", emoji: "☀️" },
      { french: "tranquille", english: "peaceful/quiet", phonetic: "trahn-KEEL", emoji: "🕊️" }
    ],
    story: {
      title: "Un après-midi au jardin",
      lines: [
        { fr: "Je vais au jardin aujourd'hui.", en: "I'm going to the garden today.", highlight: "jardin" },
        { fr: "Les fleurs sont roses et blanches.", en: "The flowers are pink and white.", highlight: "fleur" },
        { fr: "Je m'assieds sur un banc vert.", en: "I sit down on a green bench.", highlight: "m'assieds" },
        { fr: "Le soleil est chaud sur mon visage.", en: "The sun is warm on my face.", highlight: "soleil" },
        { fr: "C'est tranquille ici. J'aime ça.", en: "It's peaceful here. I like that.", highlight: "tranquille" }
      ]
    },
    journal: {
      title: "Le petit journal de Paris — Jour 13",
      lines: [
        { fr: "Pas de musée aujourd'hui. Pas de métro. Juste le jardin.", en: "No museum today. No subway. Just the garden.", highlight: "jardin" },
        { fr: "Je m'assieds sous un arbre. Le soleil filtre entre les feuilles.", en: "I sit down under a tree. The sun filters through the leaves.", highlight: "soleil" },
        { fr: "Une fleur tombe sur mon livre. Rose. Parfaite.", en: "A flower falls on my book. Pink. Perfect.", highlight: "fleur" },
        { fr: "Les enfants jouent. Les amoureux se promènent.", en: "Children play. Lovers walk.", highlight: "" },
        { fr: "C'est tranquille. Le bruit de la ville est loin.", en: "It's peaceful. The city noise is far away.", highlight: "tranquille" },
        { fr: "Je reste deux heures. Peut-être trois.", en: "I stay two hours. Maybe three.", highlight: "" },
        { fr: "Le jardin est mon secret. Ne le dites à personne.", en: "The garden is my secret. Don't tell anyone.", highlight: "jardin" }
      ]
    }
  },
  {
    day: 14,
    theme: "Révision!",
    scenario: "Review — a full day in Paris using all week 2 vocabulary",
    words: [
      { french: "la vie", english: "life", phonetic: "lah VEE", emoji: "💫" },
      { french: "ensemble", english: "together", phonetic: "ahn-SAHM-bluh", emoji: "🤝" },
      { french: "chaque jour", english: "every day", phonetic: "shahk ZHOOR", emoji: "📆" },
      { french: "découvrir", english: "to discover", phonetic: "day-koo-VREER", emoji: "🔍" },
      { french: "chez moi", english: "at my place/home", phonetic: "shay MWAH", emoji: "🏠" }
    ],
    story: {
      title: "Une journée parfaite",
      lines: [
        { fr: "Chaque jour à Paris est une découverte.", en: "Every day in Paris is a discovery.", highlight: "chaque jour" },
        { fr: "Le matin, le marché. Les fruits sont frais.", en: "In the morning, the market. The fruits are fresh.", highlight: "" },
        { fr: "À midi, le restaurant. Je prends le plat du jour.", en: "At noon, the restaurant. I'll have the dish of the day.", highlight: "" },
        { fr: "L'après-midi, le jardin. C'est tranquille.", en: "In the afternoon, the garden. It's peaceful.", highlight: "" },
        { fr: "Paris et moi, ensemble. Chez moi, c'est ici.", en: "Paris and me, together. Home is here.", highlight: "chez moi" }
      ]
    },
    journal: {
      title: "Le petit journal de Paris — Jour 14",
      lines: [
        { fr: "Deux semaines. Je suis ici depuis deux semaines.", en: "Two weeks. I've been here for two weeks.", highlight: "" },
        { fr: "Chaque jour, je découvre quelque chose de nouveau.", en: "Every day, I discover something new.", highlight: "découvrir" },
        { fr: "Le marché le dimanche. Mon kilo de fraises.", en: "The market on Sunday. My kilogram of strawberries.", highlight: "" },
        { fr: "Le restaurant où le serveur connaît mon plat préféré.", en: "The restaurant where the waiter knows my favorite dish.", highlight: "" },
        { fr: "Le jardin tranquille avec le banc sous l'arbre.", en: "The peaceful garden with the bench under the tree.", highlight: "" },
        { fr: "Les couleurs de ma rue. Le noir des toits, le vert des arbres.", en: "The colors of my street. The black of the roofs, the green of the trees.", highlight: "" },
        { fr: "La vie ici est simple. Café, pain, soleil, marche.", en: "Life here is simple. Coffee, bread, sun, walk.", highlight: "la vie" },
        { fr: "Chez moi, c'est Paris maintenant. Et ça me va.", en: "Home is Paris now. And that suits me.", highlight: "chez moi" }
      ]
    }
  },

  // ═══════════════════════════════════════════════════════
  // WEEK 3: I have favorite spots
  // ═══════════════════════════════════════════════════════

  {
    day: 15,
    theme: "Le temps",
    scenario: "Weather, seasons, making plans",
    words: [
      { french: "il pleut", english: "it's raining", phonetic: "eel PLUH", emoji: "🌧️" },
      { french: "il fait chaud", english: "it's hot", phonetic: "eel fay SHO", emoji: "🌡️" },
      { french: "il fait froid", english: "it's cold", phonetic: "eel fay FRWAH", emoji: "🥶" },
      { french: "le parapluie", english: "the umbrella", phonetic: "luh pah-rah-PLWEE", emoji: "☂️" },
      { french: "demain", english: "tomorrow", phonetic: "duh-MAH", emoji: "📅" }
    ],
    story: {
      title: "La pluie à Paris",
      lines: [
        { fr: "Oh non, il pleut aujourd'hui!", en: "Oh no, it's raining today!", highlight: "pleut" },
        { fr: "Je n'ai pas de parapluie.", en: "I don't have an umbrella.", highlight: "parapluie" },
        { fr: "Il fait froid aussi. Brrr!", en: "It's cold too. Brrr!", highlight: "froid" },
        { fr: "Mais demain, il fait chaud.", en: "But tomorrow, it's hot.", highlight: "chaud" },
        { fr: "Demain, je vais au jardin!", en: "Tomorrow, I'm going to the garden!", highlight: "demain" }
      ]
    },
    journal: {
      title: "Le petit journal de Paris — Jour 15",
      lines: [
        { fr: "Il pleut. Toute la journée, il pleut.", en: "It's raining. All day, it's raining.", highlight: "pleut" },
        { fr: "Je n'ai pas de parapluie. Je suis trempée.", en: "I don't have an umbrella. I'm soaked.", highlight: "parapluie" },
        { fr: "Il fait froid. Mon café chaud me réchauffe les mains.", en: "It's cold. My hot coffee warms my hands.", highlight: "froid" },
        { fr: "Paris sous la pluie est belle aussi. Différemment belle.", en: "Paris in the rain is beautiful too. Differently beautiful.", highlight: "" },
        { fr: "Les pavés brillent. Les lumières se reflètent.", en: "The cobblestones shine. The lights reflect.", highlight: "" },
        { fr: "Demain, il fait chaud. C'est la promesse de la météo.", en: "Tomorrow, it's hot. That's the weather's promise.", highlight: "demain" },
        { fr: "En attendant, le café est chaud et le livre est bon.", en: "In the meantime, the coffee is hot and the book is good.", highlight: "" }
      ]
    }
  },
  {
    day: 16,
    theme: "Les directions",
    scenario: "Navigating confidently, landmarks, near/far",
    words: [
      { french: "près de", english: "near", phonetic: "preh DUH", emoji: "📍" },
      { french: "loin de", english: "far from", phonetic: "lwah DUH", emoji: "🏔️" },
      { french: "devant", english: "in front of", phonetic: "duh-VAHN", emoji: "⏩" },
      { french: "derrière", english: "behind", phonetic: "deh-RYEHR", emoji: "⏪" },
      { french: "entre", english: "between", phonetic: "AHN-truh", emoji: "↔️" }
    ],
    story: {
      title: "Je connais le chemin",
      lines: [
        { fr: "Le café est près de la boulangerie.", en: "The café is near the bakery.", highlight: "près de" },
        { fr: "Le musée est loin de mon hôtel.", en: "The museum is far from my hotel.", highlight: "loin de" },
        { fr: "Le jardin est devant l'église.", en: "The garden is in front of the church.", highlight: "devant" },
        { fr: "Le métro est derrière le marché.", en: "The subway is behind the market.", highlight: "derrière" },
        { fr: "Mon café préféré est entre la boulangerie et le jardin.", en: "My favorite café is between the bakery and the garden.", highlight: "entre" }
      ]
    },
    journal: {
      title: "Le petit journal de Paris — Jour 16",
      lines: [
        { fr: "Quelqu'un m'a demandé son chemin aujourd'hui.", en: "Someone asked me for directions today.", highlight: "" },
        { fr: "Le musée? C'est près de la Seine. Tout droit.", en: "The museum? It's near the Seine. Straight ahead.", highlight: "près de" },
        { fr: "La boulangerie est derrière l'église.", en: "The bakery is behind the church.", highlight: "derrière" },
        { fr: "Le jardin est entre le café et le musée.", en: "The garden is between the café and the museum.", highlight: "entre" },
        { fr: "J'ai donné des directions. En français. À Paris.", en: "I gave directions. In French. In Paris.", highlight: "" },
        { fr: "Le touriste a dit merci. Je me suis sentie parisienne.", en: "The tourist said thank you. I felt Parisian.", highlight: "" },
        { fr: "Je ne suis plus loin de chez moi. Je suis chez moi.", en: "I'm no longer far from home. I am home.", highlight: "loin de" }
      ]
    }
  },
  {
    day: 17,
    theme: "Au bistro",
    scenario: "Casual dining, wine, cheese",
    words: [
      { french: "le vin", english: "the wine", phonetic: "luh VAH", emoji: "🍷" },
      { french: "le fromage", english: "the cheese", phonetic: "luh froh-MAHZH", emoji: "🧀" },
      { french: "délicieux", english: "delicious", phonetic: "day-lee-SYUH", emoji: "😋" },
      { french: "encore", english: "more/again", phonetic: "ahn-KOR", emoji: "🔄" },
      { french: "santé", english: "cheers", phonetic: "sahn-TAY", emoji: "🥂" }
    ],
    story: {
      title: "Le petit bistro",
      lines: [
        { fr: "Ce soir, je suis au bistro.", en: "Tonight, I'm at the bistro.", highlight: "" },
        { fr: "Un verre de vin rouge, s'il vous plaît.", en: "A glass of red wine, please.", highlight: "vin" },
        { fr: "Et du fromage. Le fromage français est délicieux!", en: "And some cheese. French cheese is delicious!", highlight: "fromage" },
        { fr: "Encore un peu de vin? Oui, merci. Santé!", en: "A bit more wine? Yes, thank you. Cheers!", highlight: "santé" },
        { fr: "C'est délicieux. La vie est belle à Paris.", en: "It's delicious. Life is beautiful in Paris.", highlight: "délicieux" }
      ]
    },
    journal: {
      title: "Le petit journal de Paris — Jour 17",
      lines: [
        { fr: "J'ai trouvé un bistro. Petit, sombre, parfait.", en: "I found a bistro. Small, dark, perfect.", highlight: "" },
        { fr: "Le vin est rouge. Le fromage est vieux.", en: "The wine is red. The cheese is aged.", highlight: "vin" },
        { fr: "Le serveur me dit: c'est du Comté. Goûtez.", en: "The waiter tells me: it's Comté. Taste it.", highlight: "" },
        { fr: "C'est délicieux. J'en veux encore.", en: "It's delicious. I want more.", highlight: "encore" },
        { fr: "Santé! Je trinque avec mes voisins de table.", en: "Cheers! I clink glasses with my table neighbors.", highlight: "santé" },
        { fr: "Ils sont parisiens. Ils me racontent leur quartier.", en: "They're Parisians. They tell me about their neighborhood.", highlight: "" },
        { fr: "Le fromage, le vin, la conversation. C'est ça, Paris.", en: "The cheese, the wine, the conversation. That's Paris.", highlight: "fromage" }
      ]
    }
  },
  {
    day: 18,
    theme: "La Seine",
    scenario: "The river, bridges, walking along the water",
    words: [
      { french: "la Seine", english: "the Seine", phonetic: "lah SEN", emoji: "🌊" },
      { french: "le pont", english: "the bridge", phonetic: "luh POHN", emoji: "🌉" },
      { french: "se promener", english: "to walk/stroll", phonetic: "suh prohm-NAY", emoji: "🚶" },
      { french: "le soir", english: "the evening", phonetic: "luh SWAHR", emoji: "🌆" },
      { french: "les lumières", english: "the lights", phonetic: "lay loo-MYEHR", emoji: "✨" }
    ],
    story: {
      title: "Le long de la Seine",
      lines: [
        { fr: "Ce soir, je me promène le long de la Seine.", en: "Tonight, I stroll along the Seine.", highlight: "promène" },
        { fr: "La Seine est calme. L'eau est sombre.", en: "The Seine is calm. The water is dark.", highlight: "Seine" },
        { fr: "Je traverse le pont. Il est vieux et beau.", en: "I cross the bridge. It is old and beautiful.", highlight: "pont" },
        { fr: "Le soir tombe. Le ciel est rose.", en: "Evening falls. The sky is pink.", highlight: "soir" },
        { fr: "Les lumières s'allument. Paris brille.", en: "The lights come on. Paris shines.", highlight: "lumières" }
      ]
    },
    journal: {
      title: "Le petit journal de Paris — Jour 18",
      lines: [
        { fr: "Ce soir, je me promène le long de la Seine.", en: "Tonight, I stroll along the Seine.", highlight: "promène" },
        { fr: "Le pont est vieux. Trois cents ans, peut-être.", en: "The bridge is old. Three hundred years, maybe.", highlight: "pont" },
        { fr: "Un bateau-mouche passe. Les touristes font des photos.", en: "A tour boat passes. The tourists take photos.", highlight: "" },
        { fr: "Le soir tombe doucement. Le ciel passe du bleu au rose.", en: "Evening falls gently. The sky goes from blue to pink.", highlight: "soir" },
        { fr: "Les lumières s'allument une par une.", en: "The lights come on one by one.", highlight: "lumières" },
        { fr: "La Seine reflète tout. Comme un miroir liquide.", en: "The Seine reflects everything. Like a liquid mirror.", highlight: "Seine" },
        { fr: "C'est le plus beau moment de la journée. Chaque jour.", en: "It's the most beautiful moment of the day. Every day.", highlight: "" }
      ]
    }
  },
  {
    day: 19,
    theme: "Les monuments",
    scenario: "Famous landmarks, history, taking photos",
    words: [
      { french: "la tour Eiffel", english: "the Eiffel Tower", phonetic: "lah toor eh-FEL", emoji: "🗼" },
      { french: "Notre-Dame", english: "Notre-Dame", phonetic: "NOH-truh DAHM", emoji: "⛪" },
      { french: "une photo", english: "a photo", phonetic: "oon fo-TO", emoji: "📸" },
      { french: "magnifique", english: "magnificent", phonetic: "mah-nyee-FEEK", emoji: "🌟" },
      { french: "ancien", english: "old/ancient", phonetic: "ahn-SYEH", emoji: "🏛️" }
    ],
    story: {
      title: "Les trésors de Paris",
      lines: [
        { fr: "La tour Eiffel! Elle est immense!", en: "The Eiffel Tower! It's immense!", highlight: "tour Eiffel" },
        { fr: "Je prends une photo. Et encore une.", en: "I take a photo. And another one.", highlight: "photo" },
        { fr: "Notre-Dame est ancienne et magnifique.", en: "Notre-Dame is ancient and magnificent.", highlight: "Notre-Dame" },
        { fr: "Ces monuments sont anciens. Ils racontent l'histoire.", en: "These monuments are ancient. They tell the story.", highlight: "ancien" },
        { fr: "Paris est magnifique. Je le dis chaque jour.", en: "Paris is magnificent. I say it every day.", highlight: "magnifique" }
      ]
    },
    journal: {
      title: "Le petit journal de Paris — Jour 19",
      lines: [
        { fr: "Aujourd'hui, je suis touriste. Pas de honte.", en: "Today, I'm a tourist. No shame.", highlight: "" },
        { fr: "La tour Eiffel est plus grande que dans les photos.", en: "The Eiffel Tower is bigger than in the photos.", highlight: "tour Eiffel" },
        { fr: "Je prends une photo. Vingt photos. Cent photos.", en: "I take a photo. Twenty photos. A hundred photos.", highlight: "photo" },
        { fr: "Notre-Dame est ancienne. On sent le poids du temps.", en: "Notre-Dame is ancient. You feel the weight of time.", highlight: "ancien" },
        { fr: "C'est magnifique. Ce mot n'est pas assez fort.", en: "It's magnificent. That word isn't strong enough.", highlight: "magnifique" },
        { fr: "Des millions de gens ont vu ça avant moi.", en: "Millions of people have seen this before me.", highlight: "" },
        { fr: "Et pourtant, c'est comme si c'était juste pour moi.", en: "And yet, it feels like it's just for me.", highlight: "" }
      ]
    }
  },
  {
    day: 20,
    theme: "Chez le fromager",
    scenario: "Specialty cheese shop, asking to try, preferences",
    words: [
      { french: "doux", english: "mild/soft", phonetic: "DOO", emoji: "🧈" },
      { french: "fort", english: "strong", phonetic: "FOR", emoji: "💪" },
      { french: "essayer", english: "to try", phonetic: "eh-say-YAY", emoji: "🤞" },
      { french: "mon préféré", english: "my favorite", phonetic: "mohn pray-fay-RAY", emoji: "⭐" },
      { french: "un morceau", english: "a piece", phonetic: "uhn mor-SO", emoji: "🔪" }
    ],
    story: {
      title: "Chez le fromager",
      lines: [
        { fr: "Le fromager a cent fromages!", en: "The cheese maker has a hundred cheeses!", highlight: "" },
        { fr: "Je peux essayer, s'il vous plaît?", en: "Can I try, please?", highlight: "essayer" },
        { fr: "Celui-ci est doux. Celui-là est fort.", en: "This one is mild. That one is strong.", highlight: "fort" },
        { fr: "Le Comté est mon préféré.", en: "The Comté is my favorite.", highlight: "préféré" },
        { fr: "Un morceau de Comté, s'il vous plaît!", en: "A piece of Comté, please!", highlight: "morceau" }
      ]
    },
    journal: {
      title: "Le petit journal de Paris — Jour 20",
      lines: [
        { fr: "Le fromager de ma rue est un artiste.", en: "The cheese maker on my street is an artist.", highlight: "" },
        { fr: "Il me dit: essayez celui-ci. C'est un Brie.", en: "He tells me: try this one. It's a Brie.", highlight: "essayer" },
        { fr: "C'est doux. Comme du beurre, mais mieux.", en: "It's mild. Like butter, but better.", highlight: "doux" },
        { fr: "Et celui-ci? Il est fort. Très fort. Trop fort.", en: "And this one? It's strong. Very strong. Too strong.", highlight: "fort" },
        { fr: "Le Comté est mon préféré. Ni doux ni fort. Parfait.", en: "Comté is my favorite. Neither mild nor strong. Perfect.", highlight: "préféré" },
        { fr: "Un morceau pour ce soir, s'il vous plaît.", en: "A piece for tonight, please.", highlight: "morceau" },
        { fr: "Le fromager me dit: à demain! Il me connaît maintenant.", en: "The cheese maker tells me: see you tomorrow! He knows me now.", highlight: "" }
      ]
    }
  },
  {
    day: 21,
    theme: "Révision!",
    scenario: "Review — a full day exploring Paris using all week 3 vocabulary",
    words: [
      { french: "se souvenir", english: "to remember", phonetic: "suh soov-NEER", emoji: "🧠" },
      { french: "le bonheur", english: "happiness", phonetic: "luh boh-NUHR", emoji: "😊" },
      { french: "partout", english: "everywhere", phonetic: "par-TOO", emoji: "🌍" },
      { french: "le cœur", english: "the heart", phonetic: "luh KUHR", emoji: "❤️" },
      { french: "merveilleux", english: "wonderful", phonetic: "mair-vay-YUH", emoji: "🌈" }
    ],
    story: {
      title: "Trois semaines de bonheur",
      lines: [
        { fr: "Je me souviens de mon premier jour.", en: "I remember my first day.", highlight: "souvenir" },
        { fr: "Le bonheur est partout à Paris.", en: "Happiness is everywhere in Paris.", highlight: "bonheur" },
        { fr: "Dans le fromage, dans le vin, dans le soleil.", en: "In the cheese, in the wine, in the sun.", highlight: "" },
        { fr: "Paris est dans mon cœur maintenant.", en: "Paris is in my heart now.", highlight: "cœur" },
        { fr: "C'est merveilleux. Tout simplement merveilleux.", en: "It's wonderful. Simply wonderful.", highlight: "merveilleux" }
      ]
    },
    journal: {
      title: "Le petit journal de Paris — Jour 21",
      lines: [
        { fr: "Trois semaines. Vingt et un jours à Paris.", en: "Three weeks. Twenty-one days in Paris.", highlight: "" },
        { fr: "Je me souviens de la pluie du jour quinze.", en: "I remember the rain on day fifteen.", highlight: "souvenir" },
        { fr: "Je me souviens du touriste qui m'a demandé le chemin.", en: "I remember the tourist who asked me for directions.", highlight: "" },
        { fr: "Le bonheur est dans les petites choses ici.", en: "Happiness is in the little things here.", highlight: "bonheur" },
        { fr: "Le vin au bistro. Le fromage du fromager. Le pont le soir.", en: "The wine at the bistro. The cheese maker's cheese. The bridge in the evening.", highlight: "" },
        { fr: "La beauté est partout. Il suffit de regarder.", en: "Beauty is everywhere. You just have to look.", highlight: "partout" },
        { fr: "Paris est dans mon cœur. Pour toujours, je crois.", en: "Paris is in my heart. Forever, I think.", highlight: "cœur" },
        { fr: "C'est merveilleux. Et il reste encore neuf jours.", en: "It's wonderful. And there are still nine days left.", highlight: "merveilleux" }
      ]
    }
  },

  // ═══════════════════════════════════════════════════════
  // WEEK 4: Paris feels like home
  // ═══════════════════════════════════════════════════════

  {
    day: 22,
    theme: "Faire les courses",
    scenario: "Grocery shopping, daily errands",
    words: [
      { french: "le supermarché", english: "the supermarket", phonetic: "luh soo-pair-mar-SHAY", emoji: "🛒" },
      { french: "le lait", english: "the milk", phonetic: "luh LEH", emoji: "🥛" },
      { french: "les œufs", english: "the eggs", phonetic: "lay ZUH", emoji: "🥚" },
      { french: "le sac", english: "the bag", phonetic: "luh SAHK", emoji: "🛍️" },
      { french: "il me faut", english: "I need", phonetic: "eel muh FO", emoji: "📝" }
    ],
    story: {
      title: "Les courses du mardi",
      lines: [
        { fr: "Aujourd'hui, je fais les courses.", en: "Today, I'm doing the shopping.", highlight: "" },
        { fr: "Il me faut du lait et des œufs.", en: "I need milk and eggs.", highlight: "il me faut" },
        { fr: "Le supermarché est près de chez moi.", en: "The supermarket is near my place.", highlight: "supermarché" },
        { fr: "J'ai mon sac. Je n'ai pas besoin de plastique.", en: "I have my bag. I don't need plastic.", highlight: "sac" },
        { fr: "Les œufs, le lait, le pain. C'est tout!", en: "The eggs, the milk, the bread. That's all!", highlight: "œufs" }
      ]
    },
    journal: {
      title: "Le petit journal de Paris — Jour 22",
      lines: [
        { fr: "Les courses à Paris. C'est différent de chez moi.", en: "Grocery shopping in Paris. It's different from back home.", highlight: "" },
        { fr: "Le supermarché est petit. Pas comme les grands magasins américains.", en: "The supermarket is small. Not like the big American stores.", highlight: "supermarché" },
        { fr: "Il me faut du lait, des œufs, et du fromage.", en: "I need milk, eggs, and cheese.", highlight: "il me faut" },
        { fr: "Mon sac est plein. Je marche lentement.", en: "My bag is full. I walk slowly.", highlight: "sac" },
        { fr: "Je passe devant ma boulangerie. Une baguette de plus.", en: "I pass by my bakery. One more baguette.", highlight: "" },
        { fr: "Je cuisine avec mes ingrédients français.", en: "I cook with my French ingredients.", highlight: "" },
        { fr: "C'est normal maintenant. Les courses en français. Normal.", en: "It's normal now. Grocery shopping in French. Normal.", highlight: "" }
      ]
    }
  },
  {
    day: 23,
    theme: "Le petit déjeuner",
    scenario: "Breakfast foods, morning routine",
    words: [
      { french: "le petit déjeuner", english: "breakfast", phonetic: "luh puh-TEE day-zhuh-NAY", emoji: "🍳" },
      { french: "le beurre", english: "the butter", phonetic: "luh BUHR", emoji: "🧈" },
      { french: "la confiture", english: "the jam", phonetic: "lah kohn-fee-TOOR", emoji: "🍓" },
      { french: "le thé", english: "the tea", phonetic: "luh TAY", emoji: "🍵" },
      { french: "le matin", english: "the morning", phonetic: "luh mah-TAH", emoji: "🌅" }
    ],
    story: {
      title: "Mon matin parisien",
      lines: [
        { fr: "Le matin à Paris est mon moment préféré.", en: "Morning in Paris is my favorite moment.", highlight: "matin" },
        { fr: "Le petit déjeuner est simple.", en: "Breakfast is simple.", highlight: "petit déjeuner" },
        { fr: "Du pain avec du beurre et de la confiture.", en: "Bread with butter and jam.", highlight: "beurre" },
        { fr: "La confiture est aux fraises. Du marché!", en: "The jam is strawberry. From the market!", highlight: "confiture" },
        { fr: "Un thé chaud. Et la journée commence.", en: "A hot tea. And the day begins.", highlight: "thé" }
      ]
    },
    journal: {
      title: "Le petit journal de Paris — Jour 23",
      lines: [
        { fr: "Le matin. Ma fenêtre est ouverte.", en: "Morning. My window is open.", highlight: "matin" },
        { fr: "L'odeur du café monte de la rue. Mais moi, c'est le thé.", en: "The smell of coffee rises from the street. But for me, it's tea.", highlight: "thé" },
        { fr: "Mon petit déjeuner: pain, beurre, confiture.", en: "My breakfast: bread, butter, jam.", highlight: "petit déjeuner" },
        { fr: "La confiture est celle du marché. Aux fraises.", en: "The jam is the one from the market. Strawberry.", highlight: "confiture" },
        { fr: "Le beurre est français. Tout est meilleur en français.", en: "The butter is French. Everything is better in French.", highlight: "beurre" },
        { fr: "Je mange lentement. Pas de course. Pas de stress.", en: "I eat slowly. No rushing. No stress.", highlight: "" },
        { fr: "Le matin parisien m'a appris la patience.", en: "The Parisian morning taught me patience.", highlight: "matin" }
      ]
    }
  },
  {
    day: 24,
    theme: "Au théâtre",
    scenario: "Entertainment, buying tickets, expressing opinions",
    words: [
      { french: "le spectacle", english: "the show", phonetic: "luh spek-TAH-kluh", emoji: "🎭" },
      { french: "la place", english: "the seat", phonetic: "lah PLAHS", emoji: "💺" },
      { french: "aimer", english: "to love/like", phonetic: "eh-MAY", emoji: "❤️" },
      { french: "drôle", english: "funny", phonetic: "DROHL", emoji: "😂" },
      { french: "ce soir", english: "tonight", phonetic: "suh SWAHR", emoji: "🌙" }
    ],
    story: {
      title: "Une soirée au théâtre",
      lines: [
        { fr: "Ce soir, je vais au spectacle!", en: "Tonight, I'm going to a show!", highlight: "spectacle" },
        { fr: "Une place, s'il vous plaît.", en: "One seat, please.", highlight: "place" },
        { fr: "Le spectacle est drôle!", en: "The show is funny!", highlight: "drôle" },
        { fr: "Tout le monde rit. J'aime ça.", en: "Everyone is laughing. I love it.", highlight: "aime" },
        { fr: "Ce soir, Paris m'a fait rire.", en: "Tonight, Paris made me laugh.", highlight: "ce soir" }
      ]
    },
    journal: {
      title: "Le petit journal de Paris — Jour 24",
      lines: [
        { fr: "Ce soir, le théâtre. Ma première fois.", en: "Tonight, the theater. My first time.", highlight: "ce soir" },
        { fr: "Ma place est au balcon. Je vois tout.", en: "My seat is on the balcony. I see everything.", highlight: "place" },
        { fr: "Le spectacle est en français. Je ne comprends pas tout.", en: "The show is in French. I don't understand everything.", highlight: "spectacle" },
        { fr: "Mais les acteurs sont drôles. Le rire est universel.", en: "But the actors are funny. Laughter is universal.", highlight: "drôle" },
        { fr: "J'aime le théâtre. J'aime ne pas tout comprendre.", en: "I love the theater. I love not understanding everything.", highlight: "aime" },
        { fr: "Le mystère fait partie du charme.", en: "The mystery is part of the charm.", highlight: "" },
        { fr: "Ce soir, j'ai ri en français.", en: "Tonight, I laughed in French.", highlight: "" }
      ]
    }
  },
  {
    day: 25,
    theme: "Les transports",
    scenario: "Bus, taxi, getting around the city",
    words: [
      { french: "le bus", english: "the bus", phonetic: "luh BOOS", emoji: "🚌" },
      { french: "le taxi", english: "the taxi", phonetic: "luh tahk-SEE", emoji: "🚕" },
      { french: "l'arrêt", english: "the stop", phonetic: "lah-REH", emoji: "🛑" },
      { french: "vite", english: "fast/quickly", phonetic: "VEET", emoji: "💨" },
      { french: "attendre", english: "to wait", phonetic: "ah-TAHN-druh", emoji: "⏳" }
    ],
    story: {
      title: "Comment se déplacer",
      lines: [
        { fr: "Le bus est à l'arrêt. Vite!", en: "The bus is at the stop. Quick!", highlight: "arrêt" },
        { fr: "Non! Le bus part. Il faut attendre.", en: "No! The bus leaves. I have to wait.", highlight: "attendre" },
        { fr: "Un taxi? Non, c'est cher.", en: "A taxi? No, it's expensive.", highlight: "taxi" },
        { fr: "Le bus suivant arrive vite.", en: "The next bus arrives quickly.", highlight: "vite" },
        { fr: "Le bus est mon transport préféré. On voit Paris!", en: "The bus is my favorite transport. You see Paris!", highlight: "bus" }
      ]
    },
    journal: {
      title: "Le petit journal de Paris — Jour 25",
      lines: [
        { fr: "Aujourd'hui, le bus. Pas le métro. Le bus.", en: "Today, the bus. Not the subway. The bus.", highlight: "bus" },
        { fr: "Le bus, c'est Paris en vitrine. On voit tout.", en: "The bus is Paris in a window display. You see everything.", highlight: "" },
        { fr: "L'arrêt est devant le café. Pratique.", en: "The stop is in front of the café. Convenient.", highlight: "arrêt" },
        { fr: "Le bus arrive vite. Les portes s'ouvrent.", en: "The bus arrives quickly. The doors open.", highlight: "vite" },
        { fr: "Je passe devant la tour Eiffel. Devant Notre-Dame.", en: "I pass by the Eiffel Tower. By Notre-Dame.", highlight: "" },
        { fr: "Pas besoin de taxi. Le bus suffit.", en: "No need for a taxi. The bus is enough.", highlight: "taxi" },
        { fr: "Attendre le bus, c'est regarder Paris vivre.", en: "Waiting for the bus is watching Paris live.", highlight: "attendre" }
      ]
    }
  },
  {
    day: 26,
    theme: "La politesse",
    scenario: "Formal greetings, please/thank you variations, being polite",
    words: [
      { french: "enchanté", english: "pleased to meet you", phonetic: "ahn-shahn-TAY", emoji: "🤝" },
      { french: "je vous en prie", english: "you're welcome", phonetic: "zhuh vooz ahn PREE", emoji: "🙌" },
      { french: "bonne journée", english: "have a good day", phonetic: "bun zhoor-NAY", emoji: "🌤️" },
      { french: "bonsoir", english: "good evening", phonetic: "bohn-SWAHR", emoji: "🌙" },
      { french: "avec plaisir", english: "with pleasure", phonetic: "ah-VEK pleh-ZEER", emoji: "😊" }
    ],
    story: {
      title: "Les mots magiques",
      lines: [
        { fr: "Bonsoir! Enchanté, madame.", en: "Good evening! Pleased to meet you, ma'am.", highlight: "enchanté" },
        { fr: "Merci beaucoup! Je vous en prie.", en: "Thank you very much! You're welcome.", highlight: "je vous en prie" },
        { fr: "Avec plaisir! dit le serveur.", en: "With pleasure! says the waiter.", highlight: "avec plaisir" },
        { fr: "Bonne journée! dit la boulangère.", en: "Have a good day! says the baker.", highlight: "bonne journée" },
        { fr: "Bonsoir, Paris. Tu es polie et douce.", en: "Good evening, Paris. You are polite and gentle.", highlight: "bonsoir" }
      ]
    },
    journal: {
      title: "Le petit journal de Paris — Jour 26",
      lines: [
        { fr: "La politesse française est un art.", en: "French politeness is an art.", highlight: "" },
        { fr: "Bonjour en entrant. Au revoir en sortant. Toujours.", en: "Hello when entering. Goodbye when leaving. Always.", highlight: "" },
        { fr: "Enchanté, dit mon voisin. Nous nous rencontrons enfin.", en: "Pleased to meet you, says my neighbor. We finally meet.", highlight: "enchanté" },
        { fr: "Je vous en prie, dit-il en tenant la porte.", en: "You're welcome, he says while holding the door.", highlight: "je vous en prie" },
        { fr: "Bonne journée! crie la boulangère quand je pars.", en: "Have a good day! the baker calls when I leave.", highlight: "bonne journée" },
        { fr: "Bonsoir, dit le serveur au bistro.", en: "Good evening, says the waiter at the bistro.", highlight: "bonsoir" },
        { fr: "Les mots sont petits. Mais ils font tout.", en: "The words are small. But they make all the difference.", highlight: "" }
      ]
    }
  },
  {
    day: 27,
    theme: "Les émotions",
    scenario: "Expressing feelings, being happy/sad/tired",
    words: [
      { french: "content", english: "happy", phonetic: "kohn-TAHN", emoji: "😄" },
      { french: "triste", english: "sad", phonetic: "TREEST", emoji: "😢" },
      { french: "fatigué", english: "tired", phonetic: "fah-tee-GAY", emoji: "😴" },
      { french: "je me sens", english: "I feel", phonetic: "zhuh muh SAHN", emoji: "💭" },
      { french: "le sourire", english: "the smile", phonetic: "luh soo-REER", emoji: "😊" }
    ],
    story: {
      title: "Comment je me sens",
      lines: [
        { fr: "Aujourd'hui, je me sens contente.", en: "Today, I feel happy.", highlight: "contente" },
        { fr: "Mais parfois, je suis un peu triste.", en: "But sometimes, I'm a little sad.", highlight: "triste" },
        { fr: "Je suis fatiguée ce soir. Beaucoup de marche!", en: "I'm tired tonight. A lot of walking!", highlight: "fatiguée" },
        { fr: "Mais un sourire change tout.", en: "But a smile changes everything.", highlight: "sourire" },
        { fr: "Je me sens bien à Paris. Oui, très bien.", en: "I feel good in Paris. Yes, very good.", highlight: "je me sens" }
      ]
    },
    journal: {
      title: "Le petit journal de Paris — Jour 27",
      lines: [
        { fr: "Comment je me sens? Tout à la fois.", en: "How do I feel? Everything at once.", highlight: "je me sens" },
        { fr: "Contente parce que je suis ici.", en: "Happy because I'm here.", highlight: "content" },
        { fr: "Triste parce que ça finit bientôt.", en: "Sad because it ends soon.", highlight: "triste" },
        { fr: "Fatiguée parce que j'ai marché dix kilomètres.", en: "Tired because I walked ten kilometers.", highlight: "fatigué" },
        { fr: "Mais le sourire du fromager ce matin.", en: "But the cheese maker's smile this morning.", highlight: "sourire" },
        { fr: "Le sourire du serveur au café.", en: "The waiter's smile at the café.", highlight: "sourire" },
        { fr: "Ces sourires me disent: tu es chez toi.", en: "Those smiles tell me: you belong here.", highlight: "" },
        { fr: "Je me sens chez moi. C'est le plus beau sentiment.", en: "I feel at home. It's the most beautiful feeling.", highlight: "" }
      ]
    }
  },
  {
    day: 28,
    theme: "Révision!",
    scenario: "Review — putting it all together, reflecting on the journey",
    words: [
      { french: "le voyage", english: "the journey", phonetic: "luh voy-AHZH", emoji: "✈️" },
      { french: "grandir", english: "to grow", phonetic: "grahn-DEER", emoji: "🌱" },
      { french: "la confiance", english: "confidence", phonetic: "lah kohn-fee-AHNSS", emoji: "💪" },
      { french: "changer", english: "to change", phonetic: "shahn-ZHAY", emoji: "🦋" },
      { french: "le souvenir", english: "the memory", phonetic: "luh soov-NEER", emoji: "📸" }
    ],
    story: {
      title: "Mon voyage intérieur",
      lines: [
        { fr: "Ce voyage m'a changée.", en: "This journey has changed me.", highlight: "voyage" },
        { fr: "J'ai grandi ici. En quatre semaines.", en: "I've grown here. In four weeks.", highlight: "grandi" },
        { fr: "J'ai trouvé la confiance. En français!", en: "I found confidence. In French!", highlight: "confiance" },
        { fr: "Paris a changé comment je vois le monde.", en: "Paris has changed how I see the world.", highlight: "changé" },
        { fr: "Chaque jour est un souvenir précieux.", en: "Every day is a precious memory.", highlight: "souvenir" }
      ]
    },
    journal: {
      title: "Le petit journal de Paris — Jour 28",
      lines: [
        { fr: "Quatre semaines. Le voyage est presque fini.", en: "Four weeks. The journey is almost over.", highlight: "voyage" },
        { fr: "J'ai grandi. Pas en taille. En courage.", en: "I've grown. Not in height. In courage.", highlight: "grandi" },
        { fr: "La confiance de commander en français.", en: "The confidence to order in French.", highlight: "confiance" },
        { fr: "La confiance de me perdre et de retrouver mon chemin.", en: "The confidence to get lost and find my way back.", highlight: "confiance" },
        { fr: "Paris m'a changée. Je suis plus lente, plus curieuse.", en: "Paris has changed me. I'm slower, more curious.", highlight: "changé" },
        { fr: "Je collecte les souvenirs. Pas dans les magasins.", en: "I collect memories. Not in the shops.", highlight: "souvenir" },
        { fr: "Le sourire du fromager. L'odeur du pain. Le bleu du ciel.", en: "The cheese maker's smile. The smell of bread. The blue of the sky.", highlight: "" },
        { fr: "Ces souvenirs, personne ne peut me les prendre.", en: "These memories, no one can take them from me.", highlight: "souvenir" }
      ]
    }
  },
  {
    day: 29,
    theme: "Les adieux",
    scenario: "Saying goodbye, making promises, expressing gratitude",
    words: [
      { french: "au revoir", english: "goodbye", phonetic: "oh ruh-VWAHR", emoji: "👋" },
      { french: "je reviendrai", english: "I will come back", phonetic: "zhuh ruh-vyeh-DRAY", emoji: "🔄" },
      { french: "tu vas me manquer", english: "I will miss you", phonetic: "too vah muh mahn-KAY", emoji: "💔" },
      { french: "la promesse", english: "the promise", phonetic: "lah proh-MESS", emoji: "🤞" },
      { french: "merci pour tout", english: "thank you for everything", phonetic: "mair-SEE poor TOO", emoji: "🙏" }
    ],
    story: {
      title: "Les adieux",
      lines: [
        { fr: "Demain, je pars. Tu vas me manquer, Paris.", en: "Tomorrow, I leave. I will miss you, Paris.", highlight: "tu vas me manquer" },
        { fr: "Au revoir, mon café. Au revoir, ma boulangerie.", en: "Goodbye, my café. Goodbye, my bakery.", highlight: "au revoir" },
        { fr: "Je fais une promesse: je reviendrai.", en: "I make a promise: I will come back.", highlight: "promesse" },
        { fr: "Je reviendrai avec plus de mots français.", en: "I will come back with more French words.", highlight: "reviendrai" },
        { fr: "Merci pour tout, Paris. Merci pour tout.", en: "Thank you for everything, Paris. Thank you for everything.", highlight: "merci pour tout" }
      ]
    },
    journal: {
      title: "Le petit journal de Paris — Jour 29",
      lines: [
        { fr: "Avant-dernier jour. Je ne veux pas partir.", en: "Second to last day. I don't want to leave.", highlight: "" },
        { fr: "Je retourne à chaque endroit. Mon café. Ma boulangerie.", en: "I go back to every spot. My café. My bakery.", highlight: "" },
        { fr: "Au revoir, dit le serveur. Vous partez?", en: "Goodbye, says the waiter. You're leaving?", highlight: "au revoir" },
        { fr: "Tu vas me manquer, je lui dis. Il sourit.", en: "I will miss you, I tell him. He smiles.", highlight: "tu vas me manquer" },
        { fr: "Je fais une promesse. Je reviendrai.", en: "I make a promise. I will come back.", highlight: "promesse" },
        { fr: "Le fromager me donne un morceau de Comté pour le voyage.", en: "The cheese maker gives me a piece of Comté for the journey.", highlight: "" },
        { fr: "Merci pour tout, je dis à ma rue.", en: "Thank you for everything, I say to my street.", highlight: "merci pour tout" },
        { fr: "Les mots sont petits. Le sentiment est immense.", en: "The words are small. The feeling is immense.", highlight: "" }
      ]
    }
  },
  {
    day: 30,
    theme: "Félicitations!",
    scenario: "Celebration, reflection, looking forward",
    words: [
      { french: "bravo", english: "well done", phonetic: "brah-VO", emoji: "🎉" },
      { french: "je parle français", english: "I speak French", phonetic: "zhuh PARL frahn-SEH", emoji: "🇫🇷" },
      { french: "le début", english: "the beginning", phonetic: "luh day-BOO", emoji: "🌅" },
      { french: "la suite", english: "what comes next", phonetic: "lah SWEET", emoji: "⏭️" },
      { french: "pour toujours", english: "forever", phonetic: "poor too-ZHOOR", emoji: "♾️" }
    ],
    story: {
      title: "Trente jours plus tard",
      lines: [
        { fr: "Bravo! Trente jours. Je l'ai fait!", en: "Well done! Thirty days. I did it!", highlight: "bravo" },
        { fr: "Je parle français. Un peu. Mais je parle!", en: "I speak French. A little. But I speak!", highlight: "je parle français" },
        { fr: "Ce n'est pas la fin. C'est le début.", en: "It's not the end. It's the beginning.", highlight: "début" },
        { fr: "La suite? Plus de mots. Plus de Paris.", en: "What comes next? More words. More Paris.", highlight: "la suite" },
        { fr: "Paris est à moi pour toujours.", en: "Paris is mine forever.", highlight: "pour toujours" }
      ]
    },
    journal: {
      title: "Le petit journal de Paris — Jour 30",
      lines: [
        { fr: "Trente jours. Le dernier journal.", en: "Thirty days. The last journal.", highlight: "" },
        { fr: "Bravo, me dit une petite voix. Tu l'as fait.", en: "Well done, says a small voice. You did it.", highlight: "bravo" },
        { fr: "Je parle français. Pas parfaitement. Mais vraiment.", en: "I speak French. Not perfectly. But truly.", highlight: "je parle français" },
        { fr: "Ce n'est pas la fin. C'est le début de quelque chose.", en: "It's not the end. It's the beginning of something.", highlight: "début" },
        { fr: "La suite, c'est plus de mots. Plus de conversations.", en: "What comes next is more words. More conversations.", highlight: "la suite" },
        { fr: "Plus de croissants. Plus de vin. Plus de fromage.", en: "More croissants. More wine. More cheese.", highlight: "" },
        { fr: "Paris sera toujours là. Et moi, je reviendrai.", en: "Paris will always be there. And I will come back.", highlight: "" },
        { fr: "Merci, Paris. Merci pour tout. Pour toujours.", en: "Thank you, Paris. Thank you for everything. Forever.", highlight: "pour toujours" }
      ]
    }
  }
];
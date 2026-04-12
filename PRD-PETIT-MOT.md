# PETIT MOT — PRD
## Sprint Build: April 11, 2026

> This PRD is the contract. If it says NEVER, it's never.
> AI assisted. Human approved. Powered by NLP.

---

## 1. What This Is

A mobile-first web app that teaches basic French reading and pronunciation through daily flashcards, short stories, and an audio journal. Paris-centric: every word and story maps to a real scenario you'd encounter navigating Paris. The target is 5-year-old reading level in 30 days.

**One-liner:** Learn to read Parisian French like a kid, one petit mot at a time.

---

## 2. Who This Is For

Shara. This is a personal learning tool built for a first trip to Paris. If other people find it useful, great. But the user is the builder.

---

## 3. Design Direction

**Aesthetic:** Art Nouveau Paris. Absinthe Garden palette. Botanical, storybook warmth. Mucha poster energy, not industrial ironwork.

**Palette — each color has one job:**

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Structure | Sage green | `#5B7355` | Ironwork arches, buttons, progress bar, navigation, Eiffel icon |
| Warm accent | Ochre | `#C4956A` | Highlighted vocab words, phonetic guide bg, ornament medallions |
| Signal accent | Dusty rose | `#C27878` | Metro sign bg, "aujourd'hui" label, completion celebrations. Used sparingly. |
| Canvas | Warm cream | `#F2E8D5` | Page background, card fills |
| Card surface | White | `#FFFFFF` | Flashcard face, story card |
| Text — heading | Dark sage | `#3A4A36` | h1, h2, card titles |
| Text — body | Warm ink | `#5C5346` | Body text, descriptions |
| Text — hint | Muted | `#8A7A68` | Placeholder text, secondary labels, faint UI text |

**CSS variables (use these, not raw hex):**
```css
:root {
  --green: #5B7355;
  --green-light: #7A9472;
  --green-pale: #E5EBE3;
  --green-dark: #3A4A36;
  --ochre: #C4956A;
  --ochre-soft: #F5ECD8;
  --ochre-dim: #9A7A50;
  --rose: #C27878;
  --rose-soft: #F5E0DD;
  --cream: #F2E8D5;
  --cream-deep: #E8DCC8;
  --white: #FFFFFF;
  --ink: #3A4A36;
  --ink-soft: #5C5346;
  --ink-faint: #8A7A68;
}
```

**Typography:** Playfair Display (serif, display) + Nunito (sans, body). No generic fonts.

**Key visual elements:**
- SVG ironwork arch ornaments (bold strokes, structural, sage green, not wispy)
- SVG Eiffel Tower icon in sage green (line drawing, curved legs)
- Metro sign component (dusty rose bg, sage green border, uppercase Playfair)
- `<Fr>` hover/tap translation tooltips on all French UI text
- Ornament medallions in ochre (not green)

**Color rules:**
- No color does two jobs. Green = structure, ochre = warmth, rose = attention.
- Rose is the rarest color on screen. If it's everywhere, it's nowhere.
- Ochre replaces the old gold. It's warmer and reads better against the cream.
- The Metro sign is now rose bg + green border (not red bg). This ties it to the palette instead of feeling like a separate element.

**Reference:** v4 mockup (petit-mot-v4.jsx) for layout and interaction patterns. Palette has changed from v4 — apply absinthe garden colors to the same structure.

**Mobile-first:** Touch targets minimum 44px. Font minimum 13px for body, 8px absolute floor for labels. Test on 375px viewport.

---

## 4. Scope — MUST / STUB / NEVER

### MUST (build tonight)

- [ ] Splash screen with entrance animation
- [ ] 30-day calendar with progress tracking (localStorage)
- [ ] Flashcard view: 5 words per day, tap to flip, audio pronunciation (Web Speech API fr-FR), "Encore" / "Compris" actions
- [ ] Story read-along: sentence-by-sentence, tap to hear, highlighted vocab from flashcards, "Voir en anglais" toggle
- [ ] `<Fr>` tooltip component on all French UI text
- [ ] Day 1 content fully built (words + story, Paris greetings scenario)
- [ ] Days 2-7 content generated via Bedrock at build time, hardcoded into curriculum.js
- [ ] Mobile-first responsive layout
- [ ] Art Nouveau visual identity (arch ornaments, Metro sign, Eiffel icon)
- [ ] Deploy to Vercel free tier

### STUB (comment in code, don't build)

- [ ] Days 8-30 content
  ```
  // STUB: Days 8-30 curriculum
  // When implemented: generate via Bedrock using same prompt pattern as days 2-7
  // Structure: { day, theme, words: [{french, english, phonetic, emoji}], story: {title, lines} }
  // See: PRD Section 7 (Curriculum Architecture)
  ```
- [ ] "Le petit journal de Paris" audio briefing
  ```
  // STUB: Daily audio journal
  // When implemented: 5-min narrated dispatch in simple French, reinforces day's vocab
  // Audio source: Web Speech API for v1, Bedrock TTS for v2
  // Content generated same pipeline as stories
  // See: PRD Section 9 (Audio Journal)
  ```
- [ ] Shareable progress card (html2canvas)
  ```
  // STUB: Shareable progress card
  // When implemented: html2canvas screenshot of completion screen
  // Share to social or save to camera roll
  ```
- [ ] README with attribution tagline

### NEVER (not in this project)

- Backend, user accounts, database
- Grammar drills, verb conjugation tables, translation exercises
- Gamification beyond progress tracking (no streaks, points, leaderboards)
- Runtime AI calls (all content is build-time generated, hardcoded)
- Dark mode (the cream palette IS the identity)
- Offline/PWA (not tonight)
- Any refactoring of working code to "improve architecture"

---

## 5. Architecture

### Hybrid deterministic + AI (the 50/50 split)

This app is half handbuilt, half AI-generated. Kiro needs to know which is which:

**Deterministic (Kiro builds this):**
- All UI: screens, views, animations, interactions
- File structure and routing (app.js)
- Progress tracking (progress.js + localStorage)
- Audio playback (audio.js + Web Speech API)
- SVG ornaments (ornaments.js)
- Tooltip component (tooltips.js)
- Day 1 content (hardcoded by hand in curriculum.js)
- The curriculum skeleton: which day = which theme (hardcoded array)

**AI-generated (Bedrock builds this, at build time only):**
- Days 2-7 vocabulary (french, english, phonetic, emoji)
- Days 2-7 stories (sentences, translations, highlighted words)
- Generated via `scripts/generate-content.js` (see Block 5)
- Output is static JSON pasted into curriculum.js
- After generation, there are ZERO runtime AI calls

**The boundary:** curriculum.js is the seam. It's a static data file. The left side (UI) reads from it. The right side (Bedrock) writes to it. Neither side knows about the other. If Bedrock is unavailable, hand-write the data or ask Claude — the app doesn't change.

### File structure (one file, one responsibility)

```
petit-mot/
├── index.html          # Entry point, font imports, root div
├── css/
│   └── styles.css      # All styles, CSS variables for palette
├── js/
│   ├── app.js          # View router, screen state management
│   ├── curriculum.js   # Static data: all days, words, stories
│   ├── flashcards.js   # Flashcard view rendering and logic
│   ├── stories.js      # Story read-along rendering and logic
│   ├── audio.js        # Web Speech API wrapper
│   ├── progress.js     # localStorage read/write for completion
│   ├── tooltips.js     # <Fr> tooltip component
│   └── ornaments.js    # SVG art nouveau components (arch, divider, eiffel, metro sign)
├── api/                # (empty for now, no backend)
├── data/
│   └── days.json       # Generated curriculum data (build artifact)
├── docs/
│   └── PRD.md          # This document
├── .kiro/
│   ├── steering/
│   │   └── petit-mot.md
│   └── hooks/          # Scope guard, QA checkpoint, security scan, single responsibility
├── .gitignore
├── .vercelignore
├── vercel.json         # Vercel config
└── README.md           # STUB for now
```

### Project ignores (create at project init, Block 1)

**.gitignore:**
```
# OS
.DS_Store
Thumbs.db

# Editor
.vscode/
*.swp
*.swo
*~

# Kiro
.kiro/

# Environment
.env
.env.local
.env.*.local

# Node (if added later)
node_modules/
package-lock.json

# Vercel
.vercel/

# Build artifacts
*.log

# Content generation scripts (build-time only, not deployed)
scripts/
```

**.vercelignore:**
```
docs/
.kiro/
.gitignore
README.md
```

### Stack

- Vanilla HTML / CSS / JS (no framework, no build step)
- Vercel free tier (static deploy)
- Web Speech API (fr-FR voice)
- localStorage (progress tracking)
- AWS Bedrock (build-time content generation only)
- Fonts: Google Fonts (Playfair Display, Nunito)

---

## 6. Spikes (Verify Before Building)

### Spike 1: Web Speech API French voice quality (15 min)

**Question:** Does the fr-FR voice on Chrome mobile sound acceptable for learning pronunciation?

**Steps:**
1. Open browser console on phone
2. Run: `let u = new SpeechSynthesisUtterance("Bonjour, un croissant s'il vous plaît"); u.lang = "fr-FR"; u.rate = 0.7; speechSynthesis.speak(u);`
3. Listen. Is it recognizably French? Can you hear the nasal vowels?

**Pass:** Voice is understandable and sounds French (doesn't need to be perfect).
**Fail:** Voice is robotic/English-accented to the point of being misleading. → Pivot: pre-record audio files for Day 1, stub the rest. Or investigate Bedrock TTS.

### Spike 2: Bedrock content generation consistency (20 min)

**Question:** Can Bedrock generate 7 days of curriculum content in a consistent JSON format without hand-editing every entry?

**Steps:**
1. Write a prompt that generates one day's content (words + story) in the target JSON structure
2. Run it 7 times with different themes
3. Check: does every output parse as valid JSON? Are the phonetic guides reasonable? Do the stories use the day's vocabulary?

**Pass:** 5+ of 7 outputs are valid and usable without editing.
**Fail:** Outputs are inconsistent, require heavy editing. → Pivot: hand-write days 1-7 tonight, generate the rest later. The app works the same either way.

---

## 7. Curriculum Architecture

### Day structure

Each day has:
- **Theme:** Paris scenario (café, métro, musée, etc.)
- **Words:** 5 vocabulary items, each with: french, english, phonetic, emoji
- **Story:** 5 sentences using the day's vocabulary, each with: fr, en, highlight (which vocab word appears)

### Week structure

- Days 1-6: New content
- Day 7: Review (story uses all words from the week)
- Repeat for weeks 2-4

### Week 1 curriculum (build tonight)

| Day | Theme | Scenario |
|-----|-------|----------|
| 1 | Bonjour, Paris! | Greetings, please, thank you |
| 2 | Au café | Ordering coffee, pastries, the check |
| 3 | Le Métro | Directions, tickets, excuse me |
| 4 | La boulangerie | Bread, pastries, numbers 1-5 |
| 5 | Au musée | Tickets, asking about art, colors |
| 6 | Les arrondissements | Left/right, numbers 6-10, neighborhoods |
| 7 | Révision! | Review story using all week 1 vocab |

### Content generation prompt template

```
You are a friendly narrator telling simple stories about a first visit to Paris. Your tone is warm, curious, and slightly wide-eyed, like a picture book. Not childish, not formal. You notice small beautiful things: the smell of bread, the sound of the Metro, the color of the sky.

You are creating French learning content for a beginner visiting Paris.

Generate content for Day {N}: {THEME}

The learner is at a 5-year-old reading level. Use only simple present tense.
Every word must be something you'd actually encounter in this Paris scenario.

Return ONLY valid JSON, no markdown, no explanation:

{
  "day": {N},
  "theme": "{THEME}",
  "scenario": "{SCENARIO}",
  "words": [
    {
      "french": "...",
      "english": "...",
      "phonetic": "...",
      "emoji": "..."
    }
  ],
  "story": {
    "title": "...",
    "lines": [
      {
        "fr": "...",
        "en": "...",
        "highlight": "..."
      }
    ]
  }
}

Rules:
- Exactly 5 words
- Exactly 5 story lines
- Every story line must use at least one of the 5 vocabulary words
- The "highlight" field is the vocab word that appears in that line (just the word, no article)
- Phonetic guides use English approximation, capitalize the stressed syllable
- Emoji should visually represent the word
- Stories should feel like a child narrating their day in Paris
```

---

## 8. Build Sequence

### Block 1: Skeleton + Splash (30 min)

**Build:**
- index.html with font imports and root structure
- styles.css with CSS variables for full palette
- ornaments.js (IronArch, IronDivider, EiffelIcon, MetroSign as vanilla JS/DOM)
- app.js (view router: splash → calendar → flashcards → story)
- Splash screen with entrance animation

**QA checkpoint:**
- [ ] PASS: Splash renders on mobile viewport (375px)
- [ ] PASS: Entrance animation plays (staggered fade-in)
- [ ] PASS: "Commencer" button navigates to calendar view
- [ ] PASS: Eiffel Tower SVG has curved legs, gold spire, correct silhouette
- [ ] PASS: Iron arch has visible weight (thick strokes, curl terminals)

### Block 2: Calendar + Progress (20 min)

**Build:**
- progress.js (localStorage get/set for completed days)
- Calendar view with 30-day grid, progress bar, week 1 preview

**QA checkpoint:**
- [ ] PASS: Calendar renders 30 days in 5-column grid
- [ ] PASS: Day 1 shows "AUJOURD'HUI" label
- [ ] PASS: Tapping a day navigates to flashcard view
- [ ] PASS: Touch targets are minimum 44px
- [ ] PASS: Progress persists on page reload (localStorage)

### Block 3: Flashcards + Audio (30 min)

**Build:**
- audio.js (Web Speech API wrapper with fr-FR voice, rate 0.7)
- tooltips.js (Fr tooltip component, auto-dismiss 2.2s)
- flashcards.js (card flip, audio on flip, Encore/Compris actions)
- Day 1 content hardcoded in curriculum.js

**QA checkpoint:**
- [ ] PASS: Card flips on tap, plays French audio
- [ ] PASS: Phonetic guide visible on flipped card
- [ ] PASS: "Compris" advances to next word, "Encore" replays current
- [ ] PASS: After 5 words, completion screen shows with "Lire l'histoire" button
- [ ] PASS: Fr tooltips show on hover (desktop) and tap (mobile)
- [ ] PASS: Tooltips auto-dismiss after ~2 seconds

### Block 4: Story Read-Along (25 min)

**Build:**
- stories.js (sentence display, highlight vocab, show/hide English, audio)
- Wire story view into app.js flow

**QA checkpoint:**
- [ ] PASS: Story shows one sentence at a time
- [ ] PASS: Vocab word is highlighted in gold
- [ ] PASS: Tap sentence plays audio
- [ ] PASS: "Voir en anglais" reveals English translation
- [ ] PASS: Progress dots update per sentence
- [ ] PASS: "Terminer" marks day complete, returns to calendar
- [ ] PASS: Calendar now shows Day 1 as completed (checkmark)

### Block 5: Content Generation via Bedrock (30 min)

**This is the AI half of the hybrid architecture.** Blocks 1-4 are deterministic (hardcoded Day 1, static UI). Block 5 uses Bedrock to generate Days 2-7 content, then commits it as static data. After this block, there are zero runtime AI calls.

**Build:**

1. Create `scripts/generate-content.js` — a Node.js script (run locally, NOT deployed) that calls Bedrock to generate curriculum content
2. Run the script for days 2-7
3. Validate the JSON output (parse check, word count, story line count)
4. Paste validated content into `js/curriculum.js`
5. Stub days 8-30 in curriculum.js
6. Delete or gitignore `scripts/` — it's a build tool, not app code

**The generation script (`scripts/generate-content.js`):**

```js
// BUILD-TIME ONLY — run locally, never deployed
// Usage: node scripts/generate-content.js
// Requires: AWS credentials configured (aws configure or env vars)
// Output: prints JSON for each day to stdout

const { BedrockRuntimeClient, InvokeModelCommand } = require("@aws-sdk/client-bedrock-runtime");

const client = new BedrockRuntimeClient({ region: "us-west-2" }); // adjust region to your Bedrock setup

const DAYS = [
  { day: 2, theme: "Au café", scenario: "Ordering coffee, pastries, the check" },
  { day: 3, theme: "Le Métro", scenario: "Directions, tickets, excuse me" },
  { day: 4, theme: "La boulangerie", scenario: "Bread, pastries, numbers 1-5" },
  { day: 5, theme: "Au musée", scenario: "Tickets, asking about art, colors" },
  { day: 6, theme: "Les arrondissements", scenario: "Left/right, numbers 6-10, neighborhoods" },
  { day: 7, theme: "Révision!", scenario: "Review story using all week 1 vocabulary" },
];

const PROMPT_TEMPLATE = (day) => `You are a friendly narrator telling simple stories about a first visit to Paris. Your tone is warm, curious, and slightly wide-eyed, like a picture book. Not childish, not formal. You notice small beautiful things: the smell of bread, the sound of the Metro, the color of the sky.

You are creating French learning content for a beginner visiting Paris.

Generate content for Day ${day.day}: ${day.theme}
Scenario: ${day.scenario}

The learner is at a 5-year-old reading level. Use only simple present tense.
Every word must be something you'd actually encounter in this Paris scenario.

Return ONLY valid JSON, no markdown, no explanation:

{
  "day": ${day.day},
  "theme": "${day.theme}",
  "scenario": "${day.scenario}",
  "words": [
    {
      "french": "...",
      "english": "...",
      "phonetic": "...",
      "emoji": "..."
    }
  ],
  "story": {
    "title": "...",
    "lines": [
      {
        "fr": "...",
        "en": "...",
        "highlight": "..."
      }
    ]
  }
}

Rules:
- Exactly 5 words
- Exactly 5 story lines
- Every story line must use at least one of the 5 vocabulary words
- The "highlight" field is the vocab word that appears in that line (just the word, no article)
- Phonetic guides use English approximation, capitalize the stressed syllable
- Emoji should visually represent the word
- Stories should feel like a child narrating their day in Paris
- For Day 7 (Révision): use vocabulary from all previous days in the story`;

async function generateDay(day) {
  const command = new InvokeModelCommand({
    modelId: "anthropic.claude-3-haiku-20240307-v1:0", // cheapest, fast, good enough for structured content
    contentType: "application/json",
    accept: "application/json",
    body: JSON.stringify({
      anthropic_version: "bedrock-2023-05-31",
      max_tokens: 1024,
      messages: [{ role: "user", content: PROMPT_TEMPLATE(day) }],
    }),
  });

  try {
    const response = await client.send(command);
    const body = JSON.parse(new TextDecoder().decode(response.body));
    const content = body.content[0].text;
    const parsed = JSON.parse(content);

    // Validate structure
    if (parsed.words?.length !== 5) throw new Error(`Day ${day.day}: expected 5 words, got ${parsed.words?.length}`);
    if (parsed.story?.lines?.length !== 5) throw new Error(`Day ${day.day}: expected 5 story lines, got ${parsed.story?.lines?.length}`);

    return parsed;
  } catch (err) {
    console.error(`FAILED Day ${day.day}:`, err.message);
    return null;
  }
}

async function main() {
  const results = [];
  for (const day of DAYS) {
    console.error(`Generating Day ${day.day}: ${day.theme}...`);
    const result = await generateDay(day);
    if (result) results.push(result);
  }
  // Output valid results as JSON array
  console.log(JSON.stringify(results, null, 2));
}

main();
```

**Fallback if Bedrock isn't configured or credits are unavailable:**
- Option A: Come back to this Claude chat and ask "Generate days 2-7 content for petit mot" — I'll produce the JSON and you paste it in
- Option B: Hand-write the content (45 min for 6 days)
- The app works identically either way — curriculum.js doesn't know or care where the data came from

**QA checkpoint:**
- [ ] PASS: curriculum.js contains valid data for days 1-7
- [ ] PASS: Can navigate to and complete days 2-7
- [ ] PASS: Each day has unique theme-appropriate vocabulary
- [ ] PASS: Stories use the day's vocab words
- [ ] PASS: Days 8-30 show as locked/unavailable (not broken)
- [ ] PASS: `scripts/` is gitignored or deleted

### Block 6: Polish + Deploy (20 min)

**Build:**
- Run 10-point pre-deployment checklist
- Final mobile QA pass on real phone
- Deploy to Vercel
- Stub README

**QA checkpoint:**
- [ ] PASS: Full flow works on phone: splash → day 1 → flashcards → story → calendar
- [ ] PASS: Audio plays on mobile
- [ ] PASS: No console errors
- [ ] PASS: Vercel deploy is live

---

## 9. Audio Journal (STUB — not tonight)

"Le petit journal de Paris" — a daily 5-minute audio dispatch in simple French that reinforces the day's vocabulary.

**Concept:** A fictional narrator describes their day in Paris using only words the learner has encountered so far. Day 1's journal uses only Day 1 vocab. Day 7's journal uses all of Week 1's vocab.

**Implementation when ready:**
- Content: Generated by Bedrock using same prompt pipeline
- Audio: Web Speech API for v1, Bedrock TTS (e.g. Amazon Polly) for v2
- UI: Play/pause button, read-along transcript with highlighted words synced to speech
- Architecture: journal.js (new file), journal content added to days.json

---

## 10. Pre-Deployment Checklist

| # | Check | Petit Mot Status |
|---|-------|-----------------|
| 1 | Authorization | N/A — no auth, no accounts |
| 2 | Validation & sanitization | CHECK — no user text input in v1 (all content is static). Fr tooltip uses textContent. |
| 3 | CORS/CSRF | N/A — no API calls in production |
| 4 | Rate limiting | N/A — no backend |
| 5 | Password reset | N/A — no accounts |
| 6 | Frontend error handling | CHECK — try/catch on speechSynthesis, graceful fallback if no fr-FR voice |
| 7 | Database indexes | N/A — localStorage only |
| 8 | Logging | N/A for static site |
| 9 | Alarms | N/A for static site |
| 10 | Rollback plan | Vercel instant rollback |

---

## 11. Known Risks

| Risk | Likelihood | Mitigation |
|------|-----------|------------|
| Web Speech API fr-FR voice sounds bad on mobile | Medium | Spike 1. Fallback: phonetic text only, stub audio for v2 |
| Bedrock content generation is inconsistent | Low-Medium | Spike 2. Fallback: hand-write 7 days, takes 45 min |
| localStorage gets cleared (user loses progress) | Low | Acceptable for personal tool. Stub: export/import JSON |
| Fonts don't load (Google Fonts CDN down) | Very Low | CSS fallback stack: serif / sans-serif |
| Scope creep during build | HIGH | This PRD is the contract. Follow the build blocks. Do not add features. |

---

## 12. Agent Directive (Kiro Prompt)

Paste this into Kiro before it writes any code:

```
BUILD RULES (non-negotiable):

1. ONE FILE, ONE RESPONSIBILITY. Each JS file does one thing:
   - app.js = view routing and screen state
   - curriculum.js = static content data
   - flashcards.js = flashcard rendering and logic
   - stories.js = story rendering and logic
   - audio.js = Web Speech API wrapper
   - progress.js = localStorage operations
   - tooltips.js = Fr tooltip component
   - ornaments.js = SVG art nouveau components
   No file does two jobs. No god files.

2. STUB, DON'T BUILD. If a feature is marked STUB in the PRD,
   add a comment stub with implementation notes. Do NOT build
   half-features.

3. QA CHECKPOINTS. After each block, tell me what to verify
   in the browser before moving on. Don't assume it works.

4. SECURITY:
   - No innerHTML with dynamic content (use textContent or DOM APIs)
   - No eval()
   - All content is static/hardcoded, no user input in v1

5. MOCK DATA FIRST. Build with Day 1 hardcoded content.
   Wire additional days AFTER the UI is verified working.

6. DO NOT REFACTOR OTHER CODE. When building Block 3, do not
   touch Block 1 or Block 2 code. Each block is additive.
   If you see something you want to improve in earlier code,
   note it but do not change it.

7. MOBILE-FIRST. All touch targets minimum 44px.
   Test mentally at 375px viewport width.
   Font floor: 13px body, 8px absolute minimum for labels.

8. ART NOUVEAU IDENTITY. Use the SVG components from ornaments.js
   (IronArch, IronDivider, EiffelIcon, MetroSign). Do not
   substitute emoji or generic styling.
```

---

## 13. Definition of Done

Tonight is done when:
- [ ] I can open the app on my phone
- [ ] I can tap through Day 1: splash → flashcards (5 words with audio) → story (5 sentences) → calendar shows complete
- [ ] Days 2-7 are playable with generated content
- [ ] It looks like the v4 mockup (Art Nouveau, not generic)
- [ ] It's live on Vercel
- [ ] I learned at least 5 French words in the process

---

*Built with: Claude (architecture + creative direction), Kiro (code generation), AWS Bedrock (content generation)*
*AI assisted. Human approved. Powered by NLP.*

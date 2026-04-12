# Petit Mot — Steering Rules

## Build Rules (non-negotiable)

1. **ONE FILE, ONE RESPONSIBILITY.** Each JS file does one thing:
   - `app.js` = view routing and screen state
   - `curriculum.js` = static content data
   - `flashcards.js` = flashcard rendering and logic
   - `stories.js` = story rendering and logic
   - `audio.js` = Web Speech API wrapper
   - `progress.js` = localStorage operations
   - `tooltips.js` = Fr tooltip component
   - `ornaments.js` = SVG Art Nouveau components
   No file does two jobs. No god files.

2. **STUB, DON'T BUILD.** If a feature is marked STUB in `docs/PRD.md`, add a comment stub with implementation notes. Do NOT build half-features. Format:
   ```js
   // STUB: [Feature name]
   // When implemented: [what it does]
   // See: PRD Section [N]
   ```

3. **DO NOT REFACTOR OTHER CODE.** When building a new block, do not touch earlier files. Each block is additive. If you see something to improve, note it in a comment but do not change it.

4. **SECURITY:**
   - No `innerHTML` with dynamic content (use `textContent` or DOM APIs)
   - No `eval()`
   - All content is static/hardcoded, no user input in v1

5. **MOCK DATA FIRST.** Build with Day 1 hardcoded content. Wire additional days AFTER the UI is verified working.

6. **MOBILE-FIRST.** All touch targets minimum 44px. Font floor: 13px body, 8px absolute minimum for labels. Design for 375px viewport width.

7. **ART NOUVEAU IDENTITY.** Use the SVG components from `ornaments.js` (IronArch, IronDivider, EiffelIcon, MetroSign). Do not substitute emoji or generic styling. 
   
   Absinthe Garden palette — each color has one job:
   - Sage green `#5B7355` = structure (arches, buttons, progress, nav)
   - Ochre `#C4956A` = warm accent (highlighted vocab, phonetic bg, medallions)
   - Dusty rose `#C27878` = signal accent (Metro sign bg, "aujourd'hui", celebrations). Use sparingly.
   - Warm cream `#F2E8D5` = canvas background
   - Text: `#3A4A36` headings, `#5C5346` body, `#8A7A68` hints
   
   No color does two jobs. Use CSS variables from the PRD, not raw hex.

## Architecture Reference

- Stack: vanilla HTML/CSS/JS, no framework, no build step
- Deploy: Vercel free tier (static)
- Audio: Web Speech API (fr-FR)
- Storage: localStorage only
- Fonts: Google Fonts (Playfair Display, Nunito)
- Full PRD: `docs/PRD.md`

## Scope Contract

- Features marked MUST in the PRD get built.
- Features marked STUB get comment stubs only.
- Features marked NEVER do not exist. Do not suggest them.
- If it's not in the PRD, it doesn't get built tonight.

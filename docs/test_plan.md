# Test plan and results (run 2026-10-18 in the build environment)
| Test | How | Result |
|---|---|---|
| 9 logic tests (validation, arithmetic, known value 14,250) | `node tests/test_logic.js` | PASS (9/9) |
| 5 headless UI journey checks (empty submit, sample → quote, summary, edit price, contradiction block) | `NODE_PATH=<jsdom dir> node tests/ui_journey.js` (needs `npm i jsdom`, dev only) | PASS (5/5) |
| Static serving of app files | `python3 -m http.server` → HTTP 200 | PASS |
| **NOT tested:** real browsers, mobile layout visually, clipboard in browsers, print/PDF, accessibility audit | — | Not done; manual check by candidate required |
Synthetic tests are not customer validation.

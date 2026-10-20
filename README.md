<<<<<<< HEAD
# HamperQuote

HamperQuote is a browser-based prototype for independent hamper sellers who receive custom orders through Instagram and WhatsApp. It helps organise an inquiry into an editable, itemised quote and a customer-ready summary.

> **Prototype notice:** Catalogue entries, prices, margins, delivery charges, tax and lead-time rules are mock data. The landing-page demo form does not send or store submissions. This repository is a prototype, not a hosted or production service.

## Preview

- [Open the HamperQuote landing page](app/landing.html)
- [Open the interactive quote demo](app/index.html)

The landing page explains the proposed workflow and links to the quote demo. The quote demo accepts a sample inquiry, validates the order details, builds an itemised quote, and lets you edit and copy or download its summary.

## Run locally

The application has no build step or runtime package dependencies. It consists of static HTML, CSS and JavaScript files. Python 3 is only needed to serve the files locally.

From the project root, start a local web server:

```sh
python -m http.server 8765
```

On Windows, if `python` is not available, use:

```powershell
py -3 -m http.server 8765
```

Then open:

- Landing page: <http://localhost:8765/app/landing.html>
- Quote demo: <http://localhost:8765/app/>

Stop the server with `Ctrl+C` in the terminal where it is running.

## Quote workflow

1. Enter the customer, occasion, quantity, budget, selected items, personalisation, delivery zone and requested date.
2. Review validation errors and warnings. Errors block quote generation; warnings call out details to confirm.
3. Review and edit the generated line items and prices.
4. Copy the customer-facing summary or download it as a `.txt` file.

The calculations and validation rules live in `app/quote-logic.js`. Current rules include required-field checks, date and lead-time checks, personalisation minimums, budget warnings and mock totals. See [the product specification](docs/product_spec.md) for the current rule assumptions.

## Offer and validation status

The **₹999, 60-day Festive Season Pass** is a proposed founding-seller test offer. Its price and the customer problem have not been validated through seller interviews or payments. The business recommendation and validation plan describe the assumptions and proposed experiments.

The landing page was visually checked at 380px and 1440px. Those checks found no horizontal overflow or browser console errors; the empty demo form was also checked for required-field validation. Real-device and cross-browser testing have not been done. The quote-logic suite has 9 passing tests. The optional UI journey script requires `jsdom` and was not run in the latest checks.

## Prototype boundaries

The following capabilities are not implemented:

- AI parsing of free-text messages
- WhatsApp messaging or integrations
- Payment collection
- Saving quotes or seller catalogue data
- Importing a seller's price list into the quote demo
- PDF quote generation

The landing-page form is a front-end preview only. It does not transmit or persist the entered details. The quote demo also has no backend or persistent storage. Do not use its sample prices or tax calculations for real customer quotes.

## Checks

Run the quote-logic tests with Node.js:

```sh
node tests/test_logic.js
```

The UI journey is optional and requires `jsdom`. From the project root, install it locally without adding it to the project's dependency manifest, then run the script:

```sh
npm install --no-save --package-lock=false jsdom
node tests/ui_journey.js
```

`node_modules/` is ignored by Git. The application itself does not need Node.js to run.

## Repository layout

```text
app/             Landing page and interactive quote demo
deliverables/    Business recommendation, customer plan, validation plan and assets
docs/            Product specification, test plan and decision log
evidence/        AI conversation excerpt used in the decision log
research/        Source log and evidence matrix
tests/           Quote-logic tests and optional UI journey
```

## Project provenance

First draft built with Claude in chat; reviewed, critiqued and corrected with Codex in VS Code.
=======
# Innovista-Labs-assignment
>>>>>>> 14cb841ab1d05fb9387bff94d2b97592c0dcc594

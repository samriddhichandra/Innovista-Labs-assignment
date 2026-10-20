# HamperQuote: a test of whether small custom-hamper sellers will pay for faster, safer quoting

*Samriddhi Chandra ·That all checks out. The 283 figure is now consistent across the files, and the D7 row is in the decision log. The search came back clean:*


*- **`node_modules` in the README:** this is only the instruction text.*

*- **`api` in `quote-logic.js`:** this is a variable name (`const api`), not a key or credential.*

*- **`.env`, `key`, `password`, `token`:** no matches.*


***Four things left, all yours***


*1. **Re-export the PDF.** The old PDF was made before the 283 edit.*

 *- Open `deliverables/business_recommendation.md` in VS Code and press Ctrl+Shift+V for the preview.*

 *- Print it to PDF from the browser, or paste it into Word and save as PDF.*

 *- Check it is 3 pages or fewer, then save it over the old PDF.*


*2. **Fill in the evidence file.** Paste the original Codex messages into `evidence/ai_conversation_excerpt.md`:*

 *- Your first prompt and Codex's critique, including the ₹499/₹999 suggestion.*

 *- Your pushback prompt and Codex's reply.*

 *- Codex's note on the 260 vs 283 error.*

 *- Delete my placeholder text at the top. If the excerpt is partial, say so in one line.*


*3. **Replace `[YOUR HOURS]`** in the README with your real time. Keep it consistent with what you say in the video.*


*4. **Record the video.** Use the script and show the final files. For the AI-judgment segment (4:00–4:35), tell the D6 story:*

 *- Codex suggested a ₹499/₹999 split test.*

 *- You rejected it because the groups of 10 are too small and the ₹499 offer anchors sellers low.*

 *- You replaced it with ₹999 for everyone, plus tracking of rejection reasons.*

 *- You can add that Codex also caught the 260 vs 283 contact mismatch.*


***Then submit***

*- **Folder:** Zip or upload the folder to Drive or GitHub, with no `node_modules`.*

*- **Recommendation:** Upload the PDF.*

*- **Video:** Upload the recording.*

*- **Links:** Open all three links in an incognito window to confirm they work.*

*- **Form:** Fill in your application email and the working-condition confirmation, then add the three links.*


*Your deadline is 72 hours from the assignment email, so leave some buffer. Innovista Labs Founder's Office assignment · 18 Oct 2026 · Desk research only; no customers contacted. Sources: research/source_log.md (S1–S7).*

## A. Recommendation

Test a **₹999 one-time, 60-day "Festive Season Pass"** for small, home-based or Instagram-run hamper sellers who take custom orders over WhatsApp/DMs. The tool turns an inquiry (budget, occasion, quantity, items, personalisation, date) into a checked, itemised quote and a customer-ready summary. **Why now:** Diwali and wedding season concentrate inquiries, and Meta is actively pushing WhatsApp tools to Indian SMBs for the festive rush, with hampers as an example (S1). **Honest view:** this is a *worth-a-cheap-test* idea, not a proven one. In my scoring it narrowly beat a home-tutor fee tracker (3.43 vs 3.39; docs/decision_log.md), and every evidence score was low because I have no seller data.

## B. Customer and problem

**Customer:** a solo seller (1–3 people) of custom hampers, doing roughly 10–100-hamper orders, selling via Instagram and WhatsApp, below the 50+ minimums large players set for customisation (S2). **Current workflow (inferred, B):** inquiry arrives in a DM or voice note → seller asks follow-ups → computes cost in head/notepad/spreadsheet → sends a typed quote → negotiates. **Costly friction (hypothesis, C):** missing details, quotes that ignore personalisation lead time or minimums, under-priced items, and slow replies during peak. **Today they use:** WhatsApp Business, spreadsheets, memory, or free quotation templates (S4).

## C. Evidence and competition

| Finding                                                                                           | Class                           | Source |
| ------------------------------------------------------------------------------------------------- | ------------------------------- | ------ |
| Meta promotes WhatsApp catalogue and auto-reply tools to Indian SMBs; hampers named as an example | Verified (press report)         | S1     |
| A large seller handles customisation via human consultation, 50+ minimums, 5–7 day lead times    | Verified (company page)         | S2, S3 |
| Free quotation maker exists for small businesses                                                  | Verified                        | S4     |
| Small sellers lose time/money on quoting                                                          | **Assumption, no source** | —     |
| Sellers will pay for a quote tool                                                                 | **Unknown**               | —     |

**Competition:** Vyapar free quotes (generic, no hamper rules), Google Sheets, WhatsApp Catalogue, Meta's free business agent (could cover enquiry replies), WhatsApp inbox vendors (S5). **Limits:** none of this evidences small-seller pain or willingness to pay; market-size figures I found were inconsistent and unused (S7). Competitor pricing was not retrievable and is unverified.

## D. Offer and pricing

**Package:** ₹999 one-time, 60 days. **Buyer:** the seller-owner; **trigger:** a big festive/wedding inquiry they are afraid to mis-quote. **Includes:** setup of up to 40 of their items/prices (done by me), unlimited quotes in the tool, validation checks, shareable summary. **Excludes:** WhatsApp sending, payments, AI chat parsing, inventory, GST filing. **Why ₹999:** low enough for an impulse UPI payment, high enough to separate real intent from "looks nice". It is a **hypothesis**: at 5 customers it earns ₹4,995 and does not recover the ₹10,000 budget; it only tests demand.

## E. Smallest useful product

One journey: inquiry form → validation → editable quote → customer summary (built as a local prototype with mock data; 9 logic + 5 UI checks pass). Rules-based pricing from the seller's price list; **no AI in the quote engine** (a wrong AI price costs real money). Manual: price-list setup, onboarding, support. Simulated in prototype: AI parsing, WhatsApp, payments, saving.

## F. Journey and first five paying customers

Discovery (Instagram reel/carousel; community post) → landing page with sample quote → lead capture (WhatsApp/Google Form: name, handle, orders per month) → 15-minute demo call → UPI payment link → I load their price list within 24h → they quote real inquiries → feedback call day 14 → renewal/referral ask before wedding season.
**Funnel arithmetic (all rates are assumptions):** 5 paid ÷ 30% demo-to-paid = 17 demos; 17 ÷ 50% qualified-to-demo = 34 qualified sellers; 34 ÷ 12% contacted-to-qualified ≈ 283 sellers contacted ≈ 95/week over 3 weeks ≈ 14/day. **Risk:** that volume is heavy for one person; if reply rates are half, expect 2–3 customers. Fallback channel: partner with admins of seller communities (asset B). Detail: first_five_customers.md.

## G. Budget and execution (hypothetical ₹10,000; **actual spent: ₹0**)

Domain/hosting ₹1,200 · reel/props and sample-hamper photos ₹1,500 · community giveaway/partnership ₹2,500 · small test boost ₹3,000 (only after organic signal; not run here) · contingency ₹1,800. Free tools first: Google Forms/Sheets, WhatsApp Business, UPI/payment links. **Five dev-days:** D1 price-list import + save; D2 quote PDF; D3 WhatsApp-ready share + landing page; D4 payments link + analytics events; D5 fixes, onboarding doc.

## H. 30-day validation

**Primary metric:** paid conversions at ₹999. **Guardrails:** demo no-show <40%; refund requests 0; setup time ≤45 min/seller. **Continue** ≥5 paid and ≥3 of them quote a real inquiry; **change** (e.g., service-led "we quote for you", different price, or pivot to tutors) if 2–4 paid or many demos but no payment; **stop** ≤1 paid after 283 contacts or if sellers say free tools are enough. See validation_plan.md.

## I. Biggest risk

**Strongest failure reason:** sellers do not feel quoting as painful or already get "good enough" from free tools (Vyapar, WhatsApp, Meta's agent). **Riskiest assumption:** E6/E7 (pain + willingness to pay). **Cheapest first test:** 10 seller conversations plus a ₹999 pre-order landing page, before building anything beyond this prototype.

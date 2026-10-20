# Decision log

## D1 — Idea selection (weighted matrix; scores are MY JUDGMENT from thin desk research, not data)
| Criterion | Weight | A | B | C |
|---|---|---|---|---|
| Severity/frequency of problem | 12 | 3 | 4 | 3 |
| Evidence problem exists | 10 | 2 | 2 | 2 |
| Audience specificity/access | 10 | 4 | 3 | 4 |
| Gap vs alternatives | 10 | 3 | 2 | 2 |
| 5 paying customers in 30d | 14 | 3 | 2 | 3 |
| WTP testable at zero spend | 10 | 4 | 3 | 3 |
| MVP in 5 dev-days | 10 | 4 | 3 | 5 |
| Fit with ₹10k budget | 5 | 4 | 4 | 5 |
| Easy local demo of journey | 9 | 5 | 3 | 4 |
| Failure risk / learning speed | 10 | 3 | 2 | 4 |
| **Weighted score (out of 5)** | 100 | **3.43** | **2.73** | **3.39** |

**Result:** A (3.43) narrowly beats C (3.39). This is a near-tie, not a clear win. A scores higher on gap vs alternatives and ease of demonstrating a customer journey; C wins on build speed and learning speed. If the weights for MVP feasibility and learning speed were raised, C would win. Also: A was the founder-candidate's preferred idea, so my scoring may be biased toward it. Evidence scores are all 2 because no idea has direct customer evidence.
**Decision:** commit to A, narrowed to **small home-based / Instagram hamper sellers doing custom orders of 10-100 hampers** (below the 50+ minimums large players use, S2).
Alternatives considered: B = COD return-risk checker for Instagram D2C sellers; C = fee tracker/reminders for independent home tutors.

## D2 — Offer and price: ₹999 one-time "Festive Season Pass" (60 days). Price is an untested hypothesis (E7).
## D3 — Keep AI out of the MVP quote engine; rules-based pricing from seller's own price list. Reason: quote errors cost money; AI parsing of chats is a later experiment.
## D4 — Prototype is vanilla HTML/JS (no build step) so it runs anywhere; logic separated and unit-tested.
## D5 — Competitor risk: Meta's free Business Agent (S1) and free Vyapar quotes (S4) are why the first test is *willingness to pay*, not feature depth.

## D6 — Funnel and price critique (pre-launch; no conversion data yet)
| Original suggestion | What was wrong | My correction | Resulting change |
|---|---|---|---|
| Split 20 prospects into 10 offered ₹499 and 10 offered ₹999, then compare paid conversion. | With 10 per group and at most about 5 buyers, one sale shifts a group’s rate by 10 percentage points; the comparison is too noisy to tell us about price. Small groups may also differ in prospect quality, and showing ₹499 can anchor sellers before we know whether price is the objection. | Offer all 20 prospects the same ₹999 package. For each “no,” record a structured primary reason (price / no pain / free tools are enough / bad timing) and a short verbatim explanation. Consider a lower-price test only if most rejections cite price; that reason alone does not prove a lower price would convert. | Replace the split-price test with a ₹999-for-all diagnostic test and structured rejection-reason tracking. Keep price provisional; use the rejection evidence to decide whether a later, adequately sized price comparison is warranted. |

## AI-judgment entries (to be filled from REAL exchanges only — see evidence/ai_conversation_excerpt.md)
| # | AI suggestion (original) | What I found wrong | Correction | Resulting change |
|---|---|---|---|---|
| D7 | Weekly plan summed to 60+100+100 = 260 contacts while the funnel math required 283. | Internal inconsistency in the plan. | W1 changed to 83 contacts so the plan totals 283. Codex found this during the D6 critique. | first_five_customers.md updated. |

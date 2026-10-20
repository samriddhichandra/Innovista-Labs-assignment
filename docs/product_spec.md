# Product spec — HamperQuote (prototype)
**User:** solo seller of custom hampers on Instagram/WhatsApp. **Job:** turn an inquiry into a checked, itemised, sendable quote fast.
**Core journey:** enter inquiry → validation (errors block, warnings inform) → generated itemised quote → seller edits qty/price → customer-facing summary → copy / download .txt.
**Rules (mock):** 25% margin on item cost; packing ₹45/unit; personalisation ₹25/40/60 per unit; logo sleeve min 25; lead time 3 days + 1/2/4 for personalisation; delivery ₹150/350/550; GST 18% on subtotal.
**Validation:** required fields; past date (error); personalisation minimum quantity (error); too little prep time, over budget, large order (warnings).
**Simulated / not built:** AI chat parsing, WhatsApp send, payments, persistence, seller's own price list import, PDF export, GST correctness per item.
**MVP-in-real-life manual parts:** seller price-list setup done by me (concierge) for each paying customer.

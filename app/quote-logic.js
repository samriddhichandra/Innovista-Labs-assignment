// Pure quote logic. ALL prices, lead times and rules are MOCK values for demo purposes.
(function (root) {
  const CATALOG = [
    { id: 'mithai', name: 'Mithai box (250g)', cost: 180, tag: 'Sweets' },
    { id: 'dryfruit', name: 'Dry fruit pack (200g)', cost: 260, tag: 'Dry fruits' },
    { id: 'choc', name: 'Handmade chocolates (6 pcs)', cost: 220, tag: 'Chocolates' },
    { id: 'diya', name: 'Hand-painted diya set (4)', cost: 140, tag: 'Decor' },
    { id: 'candle', name: 'Scented candle', cost: 200, tag: 'Decor' },
    { id: 'namkeen', name: 'Namkeen jar', cost: 120, tag: 'Snacks' },
  ];
  const PERSONALISATION = {
    none: { label: 'None', perUnit: 0, extraDays: 0, minQty: 1 },
    tag: { label: 'Name tag / printed card', perUnit: 25, extraDays: 1, minQty: 1 },
    note: { label: 'Custom handwritten note', perUnit: 40, extraDays: 2, minQty: 1 },
    sleeve: { label: 'Branded logo sleeve', perUnit: 60, extraDays: 4, minQty: 25 },
  };
  const DELIVERY = { local: { label: 'Same city', fee: 150 }, metro: { label: 'Other metro', fee: 350 }, other: { label: 'Rest of India', fee: 550 } };
  const BASE_LEAD_DAYS = 3, PACKING_PER_UNIT = 45, MARGIN = 0.25, GST = 0.18;

  function daysBetween(a, b) { return Math.ceil((new Date(b) - new Date(a)) / 86400000); }

  function validate(i, today) {
    const errors = [], warnings = [];
    if (!i.customer || !i.customer.trim()) errors.push('Customer name is required.');
    if (!(i.qty >= 1)) errors.push('Quantity must be at least 1.');
    if (!(i.budget > 0)) errors.push('Budget per hamper must be greater than 0.');
    if (!i.items || i.items.length === 0) errors.push('Pick at least one item for the hamper.');
    if (!i.deliveryDate) errors.push('Delivery date is required.');
    if (errors.length) return { errors, warnings };
    const p = PERSONALISATION[i.personalisation];
    const avail = daysBetween(today, i.deliveryDate);
    if (avail < 0) errors.push('Delivery date is in the past.');
    if (p.minQty > i.qty) errors.push(`${p.label} needs a minimum of ${p.minQty} hampers (you entered ${i.qty}).`);
    if (errors.length) return { errors, warnings };
    const lead = BASE_LEAD_DAYS + p.extraDays;
    if (avail < lead) warnings.push(`Only ${avail} day(s) to delivery but this order needs about ${lead} day(s) to prepare. Confirm feasibility or move the date.`);
    const q = compute(i);
    if (q.perHamperPreTax > i.budget) warnings.push(`Estimated ₹${q.perHamperPreTax}/hamper before GST exceeds the ₹${i.budget} budget. Remove an item or raise the budget.`);
    if (i.qty >= 100) warnings.push('Large order: confirm stock and packing capacity before sending.');
    return { errors, warnings };
  }

  function totals(lines, qty) {
    const subtotal = lines.reduce((s, l) => s + l.qty * l.unit, 0);
    const gst = Math.round(subtotal * GST);
    return { subtotal, gst, total: subtotal + gst, perHamperPreTax: Math.round(subtotal / Math.max(qty, 1)) };
  }

  function compute(i) {
    const p = PERSONALISATION[i.personalisation], lines = [];
    i.items.forEach(id => {
      const it = CATALOG.find(c => c.id === id);
      lines.push({ label: it.name, qty: i.qty, unit: Math.round(it.cost * (1 + MARGIN)) });
    });
    lines.push({ label: 'Gift packing', qty: i.qty, unit: PACKING_PER_UNIT });
    if (p.perUnit) lines.push({ label: p.label, qty: i.qty, unit: p.perUnit });
    lines.push({ label: `Delivery (${DELIVERY[i.zone].label})`, qty: 1, unit: DELIVERY[i.zone].fee });
    return { lines, ...totals(lines, i.qty) };
  }

  const api = { CATALOG, PERSONALISATION, DELIVERY, BASE_LEAD_DAYS, GST, validate, compute, totals, daysBetween };
  if (typeof module !== 'undefined') module.exports = api; else root.QuoteLogic = api;
})(typeof window !== 'undefined' ? window : globalThis);

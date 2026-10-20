// Headless journey test. Requires: npm i jsdom (dev-only, not shipped). Run: NODE_PATH=<dir with jsdom> node tests/ui_journey.js
const { JSDOM } = require('jsdom'); const fs = require('fs'), path = require('path'), assert = require('assert');
const dir = path.join(__dirname, '../app');
const html = fs.readFileSync(path.join(dir, 'index.html'), 'utf8').replace('<script src="quote-logic.js"></script>', '<script>' + fs.readFileSync(path.join(dir, 'quote-logic.js'), 'utf8') + '</script>');
const dom = new JSDOM(html, { runScripts: 'dangerously' }); const d = dom.window.document; let n = 0;
const ok = (name, c) => { assert.ok(c, name); n++; console.log('PASS', name); };
d.getElementById('gen').click(); ok('empty submit shows errors, no quote', d.querySelectorAll('.msg.e').length >= 4 && d.querySelector('.empty'));
d.getElementById('sample').click(); d.getElementById('gen').click(); ok('sample inquiry generates quote table', d.querySelector('table') && /Total/.test(d.getElementById('out').textContent));
ok('summary contains customer and total', /Asha/.test(d.getElementById('sum').textContent) && /Total: ₹/.test(d.getElementById('sum').textContent));
d.getElementById('u0').value = '300'; d.getElementById('recalc').click(); ok('editing unit price updates summary', /30 × ₹300 = ₹9,000/.test(d.getElementById('sum').textContent));
d.getElementById('pers').value = 'sleeve'; d.getElementById('qty').value = 10; d.getElementById('gen').click(); ok('logo sleeve with qty 10 blocked (contradiction)', /minimum of 25/.test(d.getElementById('flags').textContent) && d.querySelector('.empty'));
console.log(n + ' UI checks passed');

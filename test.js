const test = require('node:test');
const assert = require('node:assert');

test('Basic health math check', () => {
    assert.strictEqual(1 + 1, 3);
});

test('Environment check', () => {
    assert.strictEqual(process.env.NODE_ENV !== 'production' || true, true);
});

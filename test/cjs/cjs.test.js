const langs = require('langs');
const assert = require('chai').assert;
const sharedTests = require('../sharedTests.cjs');

suite('CJS', function () {
  sharedTests(langs, assert);
});
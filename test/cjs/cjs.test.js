const langs = require('langs');
const assert = require('chai').assert;
const sharedTests = require('../sharedTests.cjs');

describe('CJS', function () {
  // eslint-disable-next-line mocha/no-setup-in-describe
  sharedTests(langs, assert);
});

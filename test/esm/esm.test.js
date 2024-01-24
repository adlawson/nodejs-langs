import langs from 'langs';
import { assert } from 'chai';
import sharedTests from '../sharedTests.cjs';

suite('ESM', function () {
  sharedTests(langs, assert);
});
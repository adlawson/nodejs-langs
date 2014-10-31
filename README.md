# Langs

<img src="http://media.giphy.com/media/ZJqPtMjmHbNN6/giphy.gif" alt="Langs" align="right" width=280/>

[![Master branch build status][ico-build]][travis]
[![Published version][ico-package]][npm]
[![MIT Licensed][ico-license]][license]

### `$ npm install langs`

This library provides ISO 639-1/2/3 language codes with English and local
names. It can be installed in whichever way you prefer, but I recommend
[NPM][npm].

## What's with all the ISO version numbers?
ISO 639 is broken up into many different parts, each either defining language
codes or defining standards for codes in later versions. The ones included in
this library are:
 - `ISO 639-1` 2 characters, one per language or [ISO 639 macrolanguage][wiki-macro]
 - `ISO 639-2/2T` 3 characters, one per language
 - `ISO 639-2B` 3 characters, mostly the same as `639-2T` but with some derived from their English name rather than local name
 - `ISO 639-3` 3 characters, mostly the same as `639-2T` but using the canonical ISO 639 macrolanguage code

The macrolanguages described above cover cases where a language is considered
to be a dialect of another in some standards but not in others, e.g Standard
Arabic `arb` and Arabic `ara`. There's more information on the
[Wikipedia page][wiki-macro].

## Documentation
```js
var langs = require('langs');

langs.all();
// [
//     {"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"},
//     {"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"},
//     ...
// ]

langs.names();
// [
//     "English",
//     "Korean",
//     ...
// ]

langs.names(true);
// [
//     "English",
//     "한국어",
//     ...
// ]

langs.codes("1");
// [
//     "en",
//     "ko",
//     ...
// ]

langs.codes("2T" /*same as "2"*/);
// [
//     "eng",
//     "kor",
//     ...
// ]

langs.codes("2B");
// [
//     "eng",
//     "kor",
//     ...
// ]

langs.codes("3");
// [
//     "eng",
//     "kor",
//     ...
// ]

langs.where("name", "Korean");
// {"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}

langs.where("local", "한국어, 조선어");
// {"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}

langs.where("1", "ko");
// {"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}

langs.where("2", "kor");
// {"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}

langs.where("2T", "kor");
// {"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}

langs.where("2B", "kor");
// {"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}

langs.where("3", "kor");
// {"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}

langs.has("name", "Korean");
// true

langs.has("local", "한국어, 조선어");
// true

langs.has("1", "ko");
// true

langs.has("2", "kor");
// true

langs.has("2T", "kor");
// true

langs.has("2B", "kor");
// true

langs.has("3", "kor");
// true

langs.has("name", "Geordie");
// false

langs.has("high", "fives");
// false
```

## Contributing
I accept contributions to the source via Pull Request, but passing unit tests
must be included before it will be considered for merge.
```bash
$ curl -O https://raw.githubusercontent.com/adlawson/vagrantfiles/master/nodejs/Vagrantfile
$ vagrant up
$ vagrant ssh
$ cd /srv

$ npm test
```

### License
The content of this library is released under the **MIT License** by
**Andrew Lawson**.<br/> You can find a copy of this license in
[`LICENSE`][license] or at http://www.opensource.org/licenses/mit.

<!-- Links -->
[npm]: https://npmjs.org/package/langs
[travis]: https://travis-ci.org/adlawson/nodejs-langs
[ico-license]: http://img.shields.io/npm/l/langs.svg?style=flat
[ico-package]: http://img.shields.io/npm/v/langs.svg?style=flat
[ico-build]: http://img.shields.io/travis/adlawson/nodejs-langs/master.svg?style=flat
[license]: /LICENSE
[wiki]: http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
[wiki-macro]: http://en.wikipedia.org/wiki/ISO_639_macrolanguage

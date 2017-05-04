# Langs

Credits to https://github.com/adlawson/. I've just made it pure json, so you can use this with PHP or other languages.

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

### License
The content of this library is released under the **MIT License** by
**Andrew Lawson**.<br/> You can find a copy of this license in
[`LICENSE`][license] or at http://www.opensource.org/licenses/mit.

<!-- Links -->
[license]: /LICENSE
[wiki-macro]: http://en.wikipedia.org/wiki/ISO_639_macrolanguage

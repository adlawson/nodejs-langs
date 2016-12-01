var langs = require('./index.js');
var assert = require('chai').assert;

suite('langs:', function () {
    var data = {};
    var eng = {};
    var kor = {};

    setup(function () {
        data = require('./data');
        eng = data[40];
        kor = data[85];
    });

    test('`langs` is an object', function () {
        assert.isObject(langs);
    });

    suite('all:', function () {
        test('`langs.all` is a function', function () {
            assert.isFunction(langs.all);
        });

        test('`langs.all()` contains `{"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"}`', function () {
            assert.notEqual(langs.all().indexOf(eng), -1);
        });

        test('`langs.all()` contains `{"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}`', function () {
            assert.notEqual(langs.all().indexOf(kor), -1);
        });

        test('`langs.all()` doesn\'t contain `{}`', function () {
            assert.equal(langs.all().indexOf({}), -1);
        });
    });

    suite('codes:', function () {
        test('`langs.codes` is a function', function () {
            assert.isFunction(langs.codes);
        });

        test('`langs.codes("1")` contains "en"', function () {
            assert.notEqual(langs.codes("1").indexOf("en"), -1);
        });

        test('`langs.codes("2")` contains "eng"', function () {
            assert.notEqual(langs.codes("2").indexOf("eng"), -1);
        });

        test('`langs.codes("2T")` contains "eng"', function () {
            assert.notEqual(langs.codes("2T").indexOf("eng"), -1);
        });

        test('`langs.codes("2B")` contains "eng"', function () {
            assert.notEqual(langs.codes("2B").indexOf("eng"), -1);
        });

        test('`langs.codes("3")` contains "eng"', function () {
            assert.notEqual(langs.codes("3").indexOf("eng"), -1);
        });

        test('`langs.codes(1)` contains "en"', function () {
            assert.notEqual(langs.codes(1).indexOf("en"), -1);
        });

        test('`langs.codes(2)` contains "eng"', function () {
            assert.notEqual(langs.codes(2).indexOf("eng"), -1);
        });

        test('`langs.codes(3)` contains "eng"', function () {
            assert.notEqual(langs.codes(3).indexOf("eng"), -1);
        });

        test('`langs.codes("1")` contains "ko"', function () {
            assert.notEqual(langs.codes("1").indexOf("ko"), -1);
        });

        test('`langs.codes("2")` contains "kor"', function () {
            assert.notEqual(langs.codes("2").indexOf("kor"), -1);
        });

        test('`langs.codes("2T")` contains "kor"', function () {
            assert.notEqual(langs.codes("2T").indexOf("kor"), -1);
        });

        test('`langs.codes("2B")` contains "kor"', function () {
            assert.notEqual(langs.codes("2B").indexOf("kor"), -1);
        });

        test('`langs.codes("3")` contains "kor"', function () {
            assert.notEqual(langs.codes("3").indexOf("kor"), -1);
        });

        test('`langs.codes(1)` contains "ko"', function () {
            assert.notEqual(langs.codes(1).indexOf("ko"), -1);
        });

        test('`langs.codes(2)` contains "kor"', function () {
            assert.notEqual(langs.codes(2).indexOf("kor"), -1);
        });

        test('`langs.codes(3)` contains "kor"', function () {
            assert.notEqual(langs.codes(3).indexOf("kor"), -1);
        });

        test('`langs.codes("1")` doesn\'t contain "zz"', function () {
            assert.equal(langs.codes("1").indexOf("zz"), -1);
        });

        test('`langs.codes("2")` doesn\'t contain "zzz"', function () {
            assert.equal(langs.codes("2").indexOf("zzz"), -1);
        });

        test('`langs.codes("2T")` doesn\'t contain "zzz"', function () {
            assert.equal(langs.codes("2T").indexOf("zzz"), -1);
        });

        test('`langs.codes("2B")` doesn\'t contain "zzz"', function () {
            assert.equal(langs.codes("2B").indexOf("zzz"), -1);
        });

        test('`langs.codes("3")` doesn\'t contain "zzz"', function () {
            assert.equal(langs.codes("3").indexOf("zzz"), -1);
        });

        test('`langs.codes(1)` doesn\'t contain "zz"', function () {
            assert.equal(langs.codes(1).indexOf("zz"), -1);
        });

        test('`langs.codes(2)` doesn\'t contain "zzz"', function () {
            assert.equal(langs.codes(2).indexOf("zzz"), -1);
        });

        test('`langs.codes(3)` doesn\'t contain "zzz"', function () {
            assert.equal(langs.codes(3).indexOf("zzz"), -1);
        });

        test('`langs.codes("foo")` is undefined', function () {
            assert.isUndefined(langs.codes("foo"));
        });
    });

    suite('names:', function () {
        test('`langs.names` is a function', function () {
            assert.isFunction(langs.names);
        });

        test('`langs.names()` contains "English"', function () {
            assert.notEqual(langs.names().indexOf("English"), -1);
        });

        test('`langs.names(true)` contains "English"', function () {
            assert.notEqual(langs.names(true).indexOf("English"), -1);
        });

        test('`langs.names()` contains "Korean"', function () {
            assert.notEqual(langs.names().indexOf("Korean"), -1);
        });

        test('`langs.names(true)` contains "한국어"', function () {
            assert.notEqual(langs.names(true).indexOf("한국어"), -1);
        });

        test('`langs.names()` doesn\'t contain "Geordie"', function () {
            assert.equal(langs.names().indexOf("Geordie"), -1);
        });

        test('`langs.names(true)` doesn\'t contain "Geordie"', function () {
            assert.equal(langs.names(true).indexOf("Geordie"), -1);
        });
    });

    suite('has:', function () {
        test('`langs.has` is a function', function () {
            assert.isFunction(langs.has);
        });

        test('`langs.has("name", "English")` is `true`', function () {
            assert.isTrue(langs.has("name", "English"), eng);
        });

        test('`langs.has("local", "English")` is `true`', function () {
            assert.isTrue(langs.has("local", "English"), eng);
        });

        test('`langs.has("1", "en")` is `true`', function () {
            assert.isTrue(langs.has("1", "en"), eng);
        });

        test('`langs.has("2", "eng")` is `true`', function () {
            assert.isTrue(langs.has("2", "eng"), eng);
        });

        test('`langs.has("2T", "eng")` is `true`', function () {
            assert.isTrue(langs.has("2T", "eng"), eng);
        });

        test('`langs.has("2B", "eng")` is `true`', function () {
            assert.isTrue(langs.has("2B", "eng"), eng);
        });

        test('`langs.has("3", "eng")` is `true`', function () {
            assert.isTrue(langs.has("3", "eng"), eng);
        });

        test('`langs.has(1, "en")` is `true`', function () {
            assert.isTrue(langs.has(1, "en"), eng);
        });

        test('`langs.has(2, "eng")` is `true`', function () {
            assert.isTrue(langs.has(2, "eng"), eng);
        });

        test('`langs.has(3, "eng")` is `true`', function () {
            assert.isTrue(langs.has(3, "eng"), eng);
        });

        test('`langs.has("name", "Korean")` is `true`', function () {
            assert.isTrue(langs.has("name", "Korean"), kor);
        });

        test('`langs.has("local", "한국어")` is `true`', function () {
            assert.isTrue(langs.has("local", "한국어"), kor);
        });

        test('`langs.has("1", "ko")` is `true`', function () {
            assert.isTrue(langs.has("1", "ko"), kor);
        });

        test('`langs.has("2", "kor")` is `true`', function () {
            assert.isTrue(langs.has("2", "kor"), kor);
        });

        test('`langs.has("2T", "kor")` is `true`', function () {
            assert.isTrue(langs.has("2T", "kor"), kor);
        });

        test('`langs.has("2B", "kor")` is `true`', function () {
            assert.isTrue(langs.has("2B", "kor"), kor);
        });

        test('`langs.has("3", "kor")` is `true`', function () {
            assert.isTrue(langs.has("3", "kor"), kor);
        });

        test('`langs.has("name", "Geordie")` is `false`', function () {
            assert.isFalse(langs.has("name", "Geordie"));
        });

        test('`langs.has("local", "Geordie")` is `false`', function () {
            assert.isFalse(langs.has("local", "Geordie"));
        });

        test('`langs.has("1", "zz")` is `false`', function () {
            assert.isFalse(langs.has("1", "zz"));
        });

        test('`langs.has("2", "zzz")` is `false`', function () {
            assert.isFalse(langs.has("2", "zzz"));
        });

        test('`langs.has("2T", "zzz")` is `false`', function () {
            assert.isFalse(langs.has("2T", "zzz"));
        });

        test('`langs.has("2B", "zzz")` is `false`', function () {
            assert.isFalse(langs.has("2B", "zzz"));
        });

        test('`langs.has("3", "zzz")` is `false`', function () {
            assert.isFalse(langs.has("3", "zzz"));
        });

        test('`langs.has("foo", "eng")` is `false`', function () {
            assert.isFalse(langs.has("foo", "eng"));
        });
});

    suite('where:', function () {
        test('`langs.where` is a function', function () {
            assert.isFunction(langs.where);
        });

        test('`langs.where("name", "English")` is `{"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"}`', function () {
            assert.strictEqual(langs.where("name", "English"), eng);
        });

        test('`langs.where("local", "English")` is `{"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"}`', function () {
            assert.strictEqual(langs.where("local", "English"), eng);
        });

        test('`langs.where("1", "en")` is `{"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"}`', function () {
            assert.strictEqual(langs.where("1", "en"), eng);
        });

        test('`langs.where("2", "eng")` is `{"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"}`', function () {
            assert.strictEqual(langs.where("2", "eng"), eng);
        });

        test('`langs.where("2T", "eng")` is `{"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"}`', function () {
            assert.strictEqual(langs.where("2T", "eng"), eng);
        });

        test('`langs.where("2B", "eng")` is `{"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"}`', function () {
            assert.strictEqual(langs.where("2B", "eng"), eng);
        });

        test('`langs.where("3", "eng")` is `{"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"}`', function () {
            assert.strictEqual(langs.where("3", "eng"), eng);
        });

        test('`langs.where(1, "en")` is `{"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"}`', function () {
            assert.strictEqual(langs.where(1, "en"), eng);
        });

        test('`langs.where(2, "eng")` is `{"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"}`', function () {
            assert.strictEqual(langs.where(2, "eng"), eng);
        });

        test('`langs.where(3, "eng")` is `{"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"}`', function () {
            assert.strictEqual(langs.where(3, "eng"), eng);
        });

        test('`langs.where("name", "Korean")` is `{"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}`', function () {
            assert.strictEqual(langs.where("name", "Korean"), kor);
        });

        test('`langs.where("local", "한국어")` is `{"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}`', function () {
            assert.strictEqual(langs.where("local", "한국어"), kor);
        });

        test('`langs.where("1", "ko")` is `{"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}`', function () {
            assert.strictEqual(langs.where("1", "ko"), kor);
        });

        test('`langs.where("2", "kor")` is `{"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}`', function () {
            assert.strictEqual(langs.where("2", "kor"), kor);
        });

        test('`langs.where("2T", "kor")` is `{"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}`', function () {
            assert.strictEqual(langs.where("2T", "kor"), kor);
        });

        test('`langs.where("2B", "kor")` is `{"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}`', function () {
            assert.strictEqual(langs.where("2B", "kor"), kor);
        });

        test('`langs.where("3", "kor")` is `{"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}`', function () {
            assert.strictEqual(langs.where("3", "kor"), kor);
        });

        test('`langs.where(1, "ko")` is `{"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}`', function () {
            assert.strictEqual(langs.where(1, "ko"), kor);
        });

        test('`langs.where(2, "kor")` is `{"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}`', function () {
            assert.strictEqual(langs.where(2, "kor"), kor);
        });

        test('`langs.where(3, "kor")` is `{"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}`', function () {
            assert.strictEqual(langs.where(3, "kor"), kor);
        });

        test('`langs.where("name", "Geordie")` is undefined', function () {
            assert.isUndefined(langs.where("name", "Geordie"));
        });

        test('`langs.where("local", "Geordie")` is undefined', function () {
            assert.isUndefined(langs.where("local", "Geordie"));
        });

        test('`langs.where("1", "zz")` is undefined', function () {
            assert.isUndefined(langs.where("1", "zz"));
        });

        test('`langs.where("2", "zzz")` is undefined', function () {
            assert.isUndefined(langs.where("2", "zzz"));
        });

        test('`langs.where("2T", "zzz")` is undefined', function () {
            assert.isUndefined(langs.where("2T", "zzz"));
        });

        test('`langs.where("2B", "zzz")` is undefined', function () {
            assert.isUndefined(langs.where("2B", "zzz"));
        });

        test('`langs.where("3", "zzz")` is undefined', function () {
            assert.isUndefined(langs.where("3", "zzz"));
        });

        test('`langs.where(1, "zz")` is undefined', function () {
            assert.isUndefined(langs.where(1, "zz"));
        });

        test('`langs.where(2, "zzz")` is undefined', function () {
            assert.isUndefined(langs.where(2, "zzz"));
        });

        test('`langs.where(3, "zzz")` is undefined', function () {
            assert.isUndefined(langs.where(3, "zzz"));
        });

        test('`langs.where("foo", "eng")` is undefined', function () {
            assert.isUndefined(langs.where("foo", "eng"));
        });
    });
});

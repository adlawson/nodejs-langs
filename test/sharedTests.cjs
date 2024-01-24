
module.exports = function(langs, assert) {
  suite('langs:', function () {
    var eng = {};
    var kor = {};
  
    suiteSetup(function () {
        eng = {"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"};
        kor = {"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"};
    });
  
    test('`langs` is an object', function () {
        assert.isObject(langs);
    });
  
    suite('all:', function () {
        test('`langs.all` is a function', function () {
            assert.isFunction(langs.all);
        });
  
        test('`langs.all()` contains `{"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"}`', function () {
            assert.deepInclude(langs.all(), eng);
        });
  
        test('`langs.all()` contains `{"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}`', function () {
            assert.deepInclude(langs.all(), kor);
        });
  
        test('`langs.all()` doesn\'t contain `{}`', function () {
            assert.notDeepInclude(langs.all(), {});
        });
    });
  
    suite('codes:', function () {
        test('`langs.codes` is a function', function () {
            assert.isFunction(langs.codes);
        });
  
        test('`langs.codes("1")` contains "en"', function () {
            assert.include(langs.codes("1"), "en");
        });
  
        test('`langs.codes("2")` contains "eng"', function () {
            assert.include(langs.codes("2"), "eng");
        });
  
        test('`langs.codes("2T")` contains "eng"', function () {
            assert.include(langs.codes("2T"), "eng");
        });
  
        test('`langs.codes("2B")` contains "eng"', function () {
            assert.include(langs.codes("2B"), "eng");
        });
  
        test('`langs.codes("3")` contains "eng"', function () {
            assert.include(langs.codes("3"), "eng");
        });
  
        test('`langs.codes(1)` contains "en"', function () {
            assert.include(langs.codes(1), "en");
        });
  
        test('`langs.codes(2)` contains "eng"', function () {
            assert.include(langs.codes(2), "eng");
        });
  
        test('`langs.codes(3)` contains "eng"', function () {
            assert.include(langs.codes(3), "eng");
        });
  
        test('`langs.codes("1")` contains "ko"', function () {
            assert.include(langs.codes("1"), "ko");
        });
  
        test('`langs.codes("2")` contains "kor"', function () {
            assert.include(langs.codes("2"), "kor");
        });
  
        test('`langs.codes("2T")` contains "kor"', function () {
            assert.include(langs.codes("2T"), "kor");
        });
  
        test('`langs.codes("2B")` contains "kor"', function () {
            assert.include(langs.codes("2B"), "kor");
        });
  
        test('`langs.codes("3")` contains "kor"', function () {
            assert.include(langs.codes("3"), "kor");
        });
  
        test('`langs.codes(1)` contains "ko"', function () {
            assert.include(langs.codes(1), "ko");
        });
  
        test('`langs.codes(2)` contains "kor"', function () {
            assert.include(langs.codes(2), "kor");
        });
  
        test('`langs.codes(3)` contains "kor"', function () {
            assert.include(langs.codes(3), "kor");
        });
  
        test('`langs.codes("1")` doesn\'t contain "zz"', function () {
            assert.notInclude(langs.codes("1"), "zz");
        });
  
        test('`langs.codes("2")` doesn\'t contain "zzz"', function () {
            assert.notInclude(langs.codes("2"), "zzz");
        });
  
        test('`langs.codes("2T")` doesn\'t contain "zzz"', function () {
            assert.notInclude(langs.codes("2T"), "zzz");
        });
  
        test('`langs.codes("2B")` doesn\'t contain "zzz"', function () {
            assert.notInclude(langs.codes("2B"), "zzz");
        });
  
        test('`langs.codes("3")` doesn\'t contain "zzz"', function () {
            assert.notInclude(langs.codes("3"), "zzz");
        });
  
        test('`langs.codes(1)` doesn\'t contain "zz"', function () {
            assert.notInclude(langs.codes(1), "zz");
        });
  
        test('`langs.codes(2)` doesn\'t contain "zzz"', function () {
            assert.notInclude(langs.codes(2), "zzz");
        });
  
        test('`langs.codes(3)` doesn\'t contain "zzz"', function () {
            assert.notInclude(langs.codes(3), "zzz");
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
            assert.include(langs.names(), "English");
        });
  
        test('`langs.names(true)` contains "English"', function () {
            assert.include(langs.names(true), "English");
        });
  
        test('`langs.names()` contains "Korean"', function () {
            assert.include(langs.names(), "Korean");
        });
  
        test('`langs.names(true)` contains "한국어"', function () {
            assert.include(langs.names(true), "한국어");
        });
  
        test('`langs.names()` doesn\'t contain "Geordie"', function () {
            assert.notInclude(langs.names(), "Geordie");
        });
  
        test('`langs.names(true)` doesn\'t contain "Geordie"', function () {
            assert.notInclude(langs.names(true), "Geordie");
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
            assert.deepEqual(langs.where("name", "English"), eng);
        });
  
        test('`langs.where("local", "English")` is `{"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"}`', function () {
            assert.deepEqual(langs.where("local", "English"), eng);
        });
  
        test('`langs.where("1", "en")` is `{"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"}`', function () {
            assert.deepEqual(langs.where("1", "en"), eng);
        });
  
        test('`langs.where("2", "eng")` is `{"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"}`', function () {
            assert.deepEqual(langs.where("2", "eng"), eng);
        });
  
        test('`langs.where("2T", "eng")` is `{"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"}`', function () {
            assert.deepEqual(langs.where("2T", "eng"), eng);
        });
  
        test('`langs.where("2B", "eng")` is `{"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"}`', function () {
            assert.deepEqual(langs.where("2B", "eng"), eng);
        });
  
        test('`langs.where("3", "eng")` is `{"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"}`', function () {
            assert.deepEqual(langs.where("3", "eng"), eng);
        });
  
        test('`langs.where(1, "en")` is `{"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"}`', function () {
            assert.deepEqual(langs.where(1, "en"), eng);
        });
  
        test('`langs.where(2, "eng")` is `{"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"}`', function () {
            assert.deepEqual(langs.where(2, "eng"), eng);
        });
  
        test('`langs.where(3, "eng")` is `{"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"}`', function () {
            assert.deepEqual(langs.where(3, "eng"), eng);
        });
  
        test('`langs.where("name", "Korean")` is `{"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}`', function () {
            assert.deepEqual(langs.where("name", "Korean"), kor);
        });
  
        test('`langs.where("local", "한국어")` is `{"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}`', function () {
            assert.deepEqual(langs.where("local", "한국어"), kor);
        });
  
        test('`langs.where("1", "ko")` is `{"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}`', function () {
            assert.deepEqual(langs.where("1", "ko"), kor);
        });
  
        test('`langs.where("2", "kor")` is `{"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}`', function () {
            assert.deepEqual(langs.where("2", "kor"), kor);
        });
  
        test('`langs.where("2T", "kor")` is `{"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}`', function () {
            assert.deepEqual(langs.where("2T", "kor"), kor);
        });
  
        test('`langs.where("2B", "kor")` is `{"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}`', function () {
            assert.deepEqual(langs.where("2B", "kor"), kor);
        });
  
        test('`langs.where("3", "kor")` is `{"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}`', function () {
            assert.deepEqual(langs.where("3", "kor"), kor);
        });
  
        test('`langs.where(1, "ko")` is `{"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}`', function () {
            assert.deepEqual(langs.where(1, "ko"), kor);
        });
  
        test('`langs.where(2, "kor")` is `{"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}`', function () {
            assert.deepEqual(langs.where(2, "kor"), kor);
        });
  
        test('`langs.where(3, "kor")` is `{"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}`', function () {
            assert.deepEqual(langs.where(3, "kor"), kor);
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
};

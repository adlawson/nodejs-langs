/* eslint-disable mocha/no-exports */

module.exports = function(langs, assert) {
  describe('langs:', function () {
    var eng = {};
    var kor = {};

    before(function () {
      eng = { name:'English', local:'English', 1:'en', 2:'eng', '2T':'eng', '2B':'eng', 3:'eng' };
      kor = { name:'Korean', local:'한국어', 1:'ko', 2:'kor', '2T':'kor', '2B':'kor', 3:'kor' };
    });

    it('`langs` is an object', function () {
      assert.isObject(langs);
    });

    context('all:', function () {
      it('`langs.all` is a function', function () {
        assert.isFunction(langs.all);
      });

      it('`langs.all()` contains `{"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"}`', function () {
        assert.deepInclude(langs.all(), eng);
      });

      it('`langs.all()` contains `{"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}`', function () {
        assert.deepInclude(langs.all(), kor);
      });

      it('`langs.all()` doesn\'t contain `{}`', function () {
        assert.notDeepInclude(langs.all(), {});
      });
    });

    context('codes:', function () {
      it('`langs.codes` is a function', function () {
        assert.isFunction(langs.codes);
      });

      it('`langs.codes("1")` contains "en"', function () {
        assert.include(langs.codes('1'), 'en');
      });

      it('`langs.codes("2")` contains "eng"', function () {
        assert.include(langs.codes('2'), 'eng');
      });

      it('`langs.codes("2T")` contains "eng"', function () {
        assert.include(langs.codes('2T'), 'eng');
      });

      it('`langs.codes("2B")` contains "eng"', function () {
        assert.include(langs.codes('2B'), 'eng');
      });

      it('`langs.codes("3")` contains "eng"', function () {
        assert.include(langs.codes('3'), 'eng');
      });

      it('`langs.codes(1)` contains "en"', function () {
        assert.include(langs.codes(1), 'en');
      });

      it('`langs.codes(2)` contains "eng"', function () {
        assert.include(langs.codes(2), 'eng');
      });

      it('`langs.codes(3)` contains "eng"', function () {
        assert.include(langs.codes(3), 'eng');
      });

      it('`langs.codes("1")` contains "ko"', function () {
        assert.include(langs.codes('1'), 'ko');
      });

      it('`langs.codes("2")` contains "kor"', function () {
        assert.include(langs.codes('2'), 'kor');
      });

      it('`langs.codes("2T")` contains "kor"', function () {
        assert.include(langs.codes('2T'), 'kor');
      });

      it('`langs.codes("2B")` contains "kor"', function () {
        assert.include(langs.codes('2B'), 'kor');
      });

      it('`langs.codes("3")` contains "kor"', function () {
        assert.include(langs.codes('3'), 'kor');
      });

      it('`langs.codes(1)` contains "ko"', function () {
        assert.include(langs.codes(1), 'ko');
      });

      it('`langs.codes(2)` contains "kor"', function () {
        assert.include(langs.codes(2), 'kor');
      });

      it('`langs.codes(3)` contains "kor"', function () {
        assert.include(langs.codes(3), 'kor');
      });

      it('`langs.codes("1")` doesn\'t contain "zz"', function () {
        assert.notInclude(langs.codes('1'), 'zz');
      });

      it('`langs.codes("2")` doesn\'t contain "zzz"', function () {
        assert.notInclude(langs.codes('2'), 'zzz');
      });

      it('`langs.codes("2T")` doesn\'t contain "zzz"', function () {
        assert.notInclude(langs.codes('2T'), 'zzz');
      });

      it('`langs.codes("2B")` doesn\'t contain "zzz"', function () {
        assert.notInclude(langs.codes('2B'), 'zzz');
      });

      it('`langs.codes("3")` doesn\'t contain "zzz"', function () {
        assert.notInclude(langs.codes('3'), 'zzz');
      });

      it('`langs.codes(1)` doesn\'t contain "zz"', function () {
        assert.notInclude(langs.codes(1), 'zz');
      });

      it('`langs.codes(2)` doesn\'t contain "zzz"', function () {
        assert.notInclude(langs.codes(2), 'zzz');
      });

      it('`langs.codes(3)` doesn\'t contain "zzz"', function () {
        assert.notInclude(langs.codes(3), 'zzz');
      });

      it('`langs.codes("foo")` is undefined', function () {
        assert.isUndefined(langs.codes('foo'));
      });
    });

    context('names:', function () {
      it('`langs.names` is a function', function () {
        assert.isFunction(langs.names);
      });

      it('`langs.names()` contains "English"', function () {
        assert.include(langs.names(), 'English');
      });

      it('`langs.names(true)` contains "English"', function () {
        assert.include(langs.names(true), 'English');
      });

      it('`langs.names()` contains "Korean"', function () {
        assert.include(langs.names(), 'Korean');
      });

      it('`langs.names(true)` contains "한국어"', function () {
        assert.include(langs.names(true), '한국어');
      });

      it('`langs.names()` doesn\'t contain "Geordie"', function () {
        assert.notInclude(langs.names(), 'Geordie');
      });

      it('`langs.names(true)` doesn\'t contain "Geordie"', function () {
        assert.notInclude(langs.names(true), 'Geordie');
      });
    });

    context('has:', function () {
      it('`langs.has` is a function', function () {
        assert.isFunction(langs.has);
      });

      it('`langs.has("name", "English")` is `true`', function () {
        assert.isTrue(langs.has('name', 'English'), eng);
      });

      it('`langs.has("local", "English")` is `true`', function () {
        assert.isTrue(langs.has('local', 'English'), eng);
      });

      it('`langs.has("1", "en")` is `true`', function () {
        assert.isTrue(langs.has('1', 'en'), eng);
      });

      it('`langs.has("2", "eng")` is `true`', function () {
        assert.isTrue(langs.has('2', 'eng'), eng);
      });

      it('`langs.has("2T", "eng")` is `true`', function () {
        assert.isTrue(langs.has('2T', 'eng'), eng);
      });

      it('`langs.has("2B", "eng")` is `true`', function () {
        assert.isTrue(langs.has('2B', 'eng'), eng);
      });

      it('`langs.has("3", "eng")` is `true`', function () {
        assert.isTrue(langs.has('3', 'eng'), eng);
      });

      it('`langs.has(1, "en")` is `true`', function () {
        assert.isTrue(langs.has(1, 'en'), eng);
      });

      it('`langs.has(2, "eng")` is `true`', function () {
        assert.isTrue(langs.has(2, 'eng'), eng);
      });

      it('`langs.has(3, "eng")` is `true`', function () {
        assert.isTrue(langs.has(3, 'eng'), eng);
      });

      it('`langs.has("name", "Korean")` is `true`', function () {
        assert.isTrue(langs.has('name', 'Korean'), kor);
      });

      it('`langs.has("local", "한국어")` is `true`', function () {
        assert.isTrue(langs.has('local', '한국어'), kor);
      });

      it('`langs.has("1", "ko")` is `true`', function () {
        assert.isTrue(langs.has('1', 'ko'), kor);
      });

      it('`langs.has("2", "kor")` is `true`', function () {
        assert.isTrue(langs.has('2', 'kor'), kor);
      });

      it('`langs.has("2T", "kor")` is `true`', function () {
        assert.isTrue(langs.has('2T', 'kor'), kor);
      });

      it('`langs.has("2B", "kor")` is `true`', function () {
        assert.isTrue(langs.has('2B', 'kor'), kor);
      });

      it('`langs.has("3", "kor")` is `true`', function () {
        assert.isTrue(langs.has('3', 'kor'), kor);
      });

      it('`langs.has("name", "Geordie")` is `false`', function () {
        assert.isFalse(langs.has('name', 'Geordie'));
      });

      it('`langs.has("local", "Geordie")` is `false`', function () {
        assert.isFalse(langs.has('local', 'Geordie'));
      });

      it('`langs.has("1", "zz")` is `false`', function () {
        assert.isFalse(langs.has('1', 'zz'));
      });

      it('`langs.has("2", "zzz")` is `false`', function () {
        assert.isFalse(langs.has('2', 'zzz'));
      });

      it('`langs.has("2T", "zzz")` is `false`', function () {
        assert.isFalse(langs.has('2T', 'zzz'));
      });

      it('`langs.has("2B", "zzz")` is `false`', function () {
        assert.isFalse(langs.has('2B', 'zzz'));
      });

      it('`langs.has("3", "zzz")` is `false`', function () {
        assert.isFalse(langs.has('3', 'zzz'));
      });

      it('`langs.has("foo", "eng")` is `false`', function () {
        assert.isFalse(langs.has('foo', 'eng'));
      });
    });

    context('where:', function () {
      it('`langs.where` is a function', function () {
        assert.isFunction(langs.where);
      });

      it('`langs.where("name", "English")` is `{"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"}`', function () {
        assert.deepEqual(langs.where('name', 'English'), eng);
      });

      it('`langs.where("local", "English")` is `{"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"}`', function () {
        assert.deepEqual(langs.where('local', 'English'), eng);
      });

      it('`langs.where("1", "en")` is `{"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"}`', function () {
        assert.deepEqual(langs.where('1', 'en'), eng);
      });

      it('`langs.where("2", "eng")` is `{"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"}`', function () {
        assert.deepEqual(langs.where('2', 'eng'), eng);
      });

      it('`langs.where("2T", "eng")` is `{"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"}`', function () {
        assert.deepEqual(langs.where('2T', 'eng'), eng);
      });

      it('`langs.where("2B", "eng")` is `{"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"}`', function () {
        assert.deepEqual(langs.where('2B', 'eng'), eng);
      });

      it('`langs.where("3", "eng")` is `{"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"}`', function () {
        assert.deepEqual(langs.where('3', 'eng'), eng);
      });

      it('`langs.where(1, "en")` is `{"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"}`', function () {
        assert.deepEqual(langs.where(1, 'en'), eng);
      });

      it('`langs.where(2, "eng")` is `{"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"}`', function () {
        assert.deepEqual(langs.where(2, 'eng'), eng);
      });

      it('`langs.where(3, "eng")` is `{"name":"English", "local":"English", "1":"en", "2":"eng", "2T":"eng", "2B":"eng", "3":"eng"}`', function () {
        assert.deepEqual(langs.where(3, 'eng'), eng);
      });

      it('`langs.where("name", "Korean")` is `{"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}`', function () {
        assert.deepEqual(langs.where('name', 'Korean'), kor);
      });

      it('`langs.where("local", "한국어")` is `{"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}`', function () {
        assert.deepEqual(langs.where('local', '한국어'), kor);
      });

      it('`langs.where("1", "ko")` is `{"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}`', function () {
        assert.deepEqual(langs.where('1', 'ko'), kor);
      });

      it('`langs.where("2", "kor")` is `{"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}`', function () {
        assert.deepEqual(langs.where('2', 'kor'), kor);
      });

      it('`langs.where("2T", "kor")` is `{"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}`', function () {
        assert.deepEqual(langs.where('2T', 'kor'), kor);
      });

      it('`langs.where("2B", "kor")` is `{"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}`', function () {
        assert.deepEqual(langs.where('2B', 'kor'), kor);
      });

      it('`langs.where("3", "kor")` is `{"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}`', function () {
        assert.deepEqual(langs.where('3', 'kor'), kor);
      });

      it('`langs.where(1, "ko")` is `{"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}`', function () {
        assert.deepEqual(langs.where(1, 'ko'), kor);
      });

      it('`langs.where(2, "kor")` is `{"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}`', function () {
        assert.deepEqual(langs.where(2, 'kor'), kor);
      });

      it('`langs.where(3, "kor")` is `{"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"}`', function () {
        assert.deepEqual(langs.where(3, 'kor'), kor);
      });

      it('`langs.where("name", "Geordie")` is undefined', function () {
        assert.isUndefined(langs.where('name', 'Geordie'));
      });

      it('`langs.where("local", "Geordie")` is undefined', function () {
        assert.isUndefined(langs.where('local', 'Geordie'));
      });

      it('`langs.where("1", "zz")` is undefined', function () {
        assert.isUndefined(langs.where('1', 'zz'));
      });

      it('`langs.where("2", "zzz")` is undefined', function () {
        assert.isUndefined(langs.where('2', 'zzz'));
      });

      it('`langs.where("2T", "zzz")` is undefined', function () {
        assert.isUndefined(langs.where('2T', 'zzz'));
      });

      it('`langs.where("2B", "zzz")` is undefined', function () {
        assert.isUndefined(langs.where('2B', 'zzz'));
      });

      it('`langs.where("3", "zzz")` is undefined', function () {
        assert.isUndefined(langs.where('3', 'zzz'));
      });

      it('`langs.where(1, "zz")` is undefined', function () {
        assert.isUndefined(langs.where(1, 'zz'));
      });

      it('`langs.where(2, "zzz")` is undefined', function () {
        assert.isUndefined(langs.where(2, 'zzz'));
      });

      it('`langs.where(3, "zzz")` is undefined', function () {
        assert.isUndefined(langs.where(3, 'zzz'));
      });

      it('`langs.where("foo", "eng")` is undefined', function () {
        assert.isUndefined(langs.where('foo', 'eng'));
      });
    });
  });
};

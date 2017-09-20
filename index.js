var data = require('./data');

var langs = {
    all:   allLanguages,
    has:   hasLanguage,
    codes: getCodes,
    names: getNames,
    where: findBy
};

module.exports = langs;

// allLanguages :: -> Language[]
function allLanguages() {
    return data;
}

// hasLanguage :: String, String -> Boolean
function hasLanguage(crit, val) {
    return void(0) !== findBy(crit, val);
}

// getCodes :: String -> String[]
function getCodes(type) {
    if (isValidType(type)) {
        return forAll(data, function getCodesIterator(row) {
            return row[type];
        });
    }
}

// getNames :: Boolean -> String[]
function getNames(local) {
    return forAll(data, function getNamesIterator(row) {
        return local ? row.local : row.name;
    });
}

// findBy :: String, String -> Language
function findBy(crit, val, multiple = false) {
    let result = [];

    for (var i = 0; i < data.length; i++) {
        if (
            val instanceof RegExp && val.test(data[i][crit])
            || val === data[i][crit]
        ) {
            if(!multiple){
                return data[i];
            }
            result.push(data[i]);
        }
    }

    if(multiple){
        return result;
    }
}

// forAll :: Array, Function -> Array
function forAll(arr, fn) {
    var out = [], i;
    for (i = 0; i < arr.length; i++) {
        out.push(fn(arr[i], i));
    }

    return out;
}

// isValidType :: String -> Boolean
function isValidType(type) {
    var types = [1, 2, 3, '1', '2', '2B', '2T', '3'];
    return -1 !== types.indexOf(type);
}

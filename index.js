var data = require('./data');

var langs = {
    all:   allLanguages,
    has:   hasLanguage,
    codes: getCodes,
    names: getNames,
    where: findBy,
    like:  like
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
function findBy(crit, val) {
    for (var i = 0; i < data.length; i++) {
        if (val === data[i][crit]) {
            return data[i];
        }
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

// like :: String -> String
function like(name, ignoreCase) {
    for (var i = 0; i < data.length; i++) {
        var lookup = data[i].alias || [];
        lookup.push(data[i].name);
        lookup.push(data[i].local);
        if (ignoreCase) {
            lookup = lookup.map(function (variant) {
                return variant.toLowerCase();
            });
        }
        if (lookup.indexOf(name) !== -1) {
            return data[i];
        }
    }
}

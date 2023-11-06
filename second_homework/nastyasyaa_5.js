object = {
    "one": {
        "nest1": {
            "val1": [9, 34, 92, 100]
        }
    },
    "2f7": {
        "n1": [10, 92, 53, 71],
        "n2": [82, 34, 6, 9, 19],
        "test": {
            "p1": [155]
        }
    }
}

function getRootProperty(object, val) {
    for (let prop in object) {
        if (Array.isArray(object[prop])) {
            if (object[prop].indexOf(val) >= 0) {
                return prop;
            }
        } else if (getRootProperty(object[prop], val) != null) {
            return prop;
        }
    }
    return null;
}
console.log(getRootProperty(object, 9))
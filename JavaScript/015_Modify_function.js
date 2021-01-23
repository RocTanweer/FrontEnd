function noisy(f) {
    return function (arg) {
        console.log(`coming with '${arg}'`)
        var val = f(arg);
        return `Got '${arg}'---- Gave ${val}`
    }
}

var func = noisy(Boolean);
console.log(func('roc'))
// returns true 
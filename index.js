var plates = [
    2.5,
    5,
    10,
    25,
    35,
    45
];

var BAR = 45;

module.exports = function dumbweights (weight) {
    weight = weight - BAR;
    if (weight <= 0) return;

    var _plates = [];
    var _weight = weight / 2;

    for (var i = plates.length - 1; i >= 0; i--) {
        var p = plates[i];
        var div = Math.floor(_weight / p);

        if (div >= 1) {
            var d = div;
            while (d > 0) {
                _plates.push(plates[i]);
                d -= 1;
            }
            _weight -= div * p;
        }

        if (_weight === 0) break;
    }

    return _plates;
};

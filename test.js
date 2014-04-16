var test = require('tap').test;
var dw = require('./');

test('dumb weights', function (t) {
    t.deepEqual(dw(95),  [25], '95lbs');
    t.deepEqual(dw(135), [45], '135lbs');
    t.deepEqual(dw(115), [35], '115lbs');
    t.deepEqual(dw(160), [45,10,2.5], '160lbs');
    t.deepEqual(dw(175), [45,10,10], '175lbs');
    t.deepEqual(dw(200), [45,25,5,2.5], '200lbs');

    t.end();
});

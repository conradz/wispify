var test = require('tap').test;
var wispify = require('./');
var path = require('path');
var browserify = require('browserify');
var vm = require('vm');

test('run code', function(t) {
    t.plan(1);

    var b = browserify(path.resolve(__dirname, 'tests/main.js'))
        .transform(wispify);
    b.bundle(done);

    function done(err, src) {
        if (err) throw err;

        vm.runInNewContext(src, { doTest: doTest });
        function doTest(code) {
            t.equal(code, 'Hello from wisp!');
        }
    }
});

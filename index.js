var compiler = require('wisp/compiler');
var through = require('through');
var path = require('path');

module.exports = transform;

function transform(file) {
    if (path.extname(file).toLowerCase() !== '.wisp') {
        return through();
    }

    var src = '';
    return through(data, end);

    function data(s) {
        src += s;
    }

    function end() {
        try {
            src = compiler.compile(src).code;
        } catch(e) {
            this.emit('error', e);
            return;
        }

        this.queue(src);
        this.queue(null);
    }
}

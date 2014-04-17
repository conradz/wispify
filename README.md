# wispify

Simple transform to compile [wisp](https://github.com/Gozala/wisp) to JavaScript
when using [Browserify](https://github.com/substack/node-browserify).

## Example

```sh
npm install --save browserify
npm install --save wispify
```

```js
var browserify = require('browserify');

browserify('file.wisp')
    .transform('wispify')
    .bundle(done);
```

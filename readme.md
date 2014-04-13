# dumb-weights
#### Calculate plates to use based on provided weight.

I'm not so good w/ the math of weight training so I made this module and now I
don't need to think about it anymore.

```
npm install --save dumb-weights
```

```js
var dw = require('dw');

dw(135); // [ 45 ]
```

The array consists of each plate to load up on both sides of the bar. So
an array of `[ 45 ]` would mean `2` `45` plates, one on each side.

# License

MIT

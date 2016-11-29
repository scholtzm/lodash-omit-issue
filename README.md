# lodash-omit-issue

Demonstration of change in behaviour in *lodash* between versions 4.16 and 4.17.

## Instructions

1. Clone this repo.
2. `npm i` to install dependencies.
3. Run with `node index.js`

## Output

```bash
~lodash-omit-issue > node index.js
Directory at ~/lodash-omit-issue/node_modules/lodash@4.16.6 already exists, skipping
Directory at ~/lodash-omit-issue/node_modules/lodash@4.17.2 already exists, skipping
old: { foo: 'bar' }
~/lodash-omit-issue/node_modules/lodash@4.17.2/lodash.js:6249
   function isFlattenable(value) {
                         ^

RangeError: Maximum call stack size exceeded
   at isFlattenable (~/lodash-omit-issue/node_modules/lodash@4.17.2/lodash.js:6249:27)
   at baseFlatten (~/lodash-omit-issue/node_modules/lodash@4.17.2/lodash.js:2972:26)
   at flatten (~/lodash-omit-issue/node_modules/lodash@4.17.2/lodash.js:7329:23)
   at Function.omit (~/lodash-omit-issue/node_modules/lodash@4.17.2/lodash.js:6584:28)
   at Object.get baz [as baz] (~/lodash-omit-issue/index.js:19:22)
   at copyObject (~/lodash-omit-issue/node_modules/lodash@4.17.2/lodash.js:4840:28)
   at Function.<anonymous> (~/lodash-omit-issue/node_modules/lodash@4.17.2/lodash.js:13468:7)
   at apply (~/lodash-omit-issue/node_modules/lodash@4.17.2/lodash.js:496:27)
   at Function.omit (~/lodash-omit-issue/node_modules/lodash@4.17.2/lodash.js:6585:16)
   at Object.get baz [as baz] (~/lodash-omit-issue/index.js:19:22)
```

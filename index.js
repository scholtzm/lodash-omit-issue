const niv = require('npm-install-version');

niv.install('lodash@4.16.6');
niv.install('lodash@4.17.2');

const lodashOld = niv.require('lodash@4.16.6');
const lodashNew = niv.require('lodash@4.17.2');

const works = {
  foo: 'bar',
  get baz() {
    return lodashOld.omit(this, 'baz');
  }
};

const crashes = {
  foo: 'bar',
  get baz() {
    return lodashNew.omit(this, 'baz');
  }
};

// This works...
console.log('old:', works.baz);

// ... and this will crash.
console.log('new:', crashes.baz);

/// <reference path="bundle.d.ts" />
/// <reference path="typings/index.d.ts" />

import omit = require('object.omit');
import assert = require('assert');

assert.deepEqual(omit({ a: 'a', b: 'b' }, ['a']), { b: 'b' });

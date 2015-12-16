# key-replace [![Build Status](https://travis-ci.org/gillstrom/key-replace.svg?branch=master)](https://travis-ci.org/gillstrom/key-replace)

> Replace object keys with [String.prototype.replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)


## Install

```
$ npm install --save key-replace
```


## Usage

```js
const keyReplace = require('key-replace');
const obj = {
	foo: 'bar'
};

keyReplace(obj, 'fo', 'y');
//=> {yo: 'bar'}

keyReplace(obj, 'fo', str => str.toUpperCase());
//=> {FOo: bar}
```


## API

### keyReplace(input, search, replace)

Returns a new object.

#### input

*Required*  
Type: `object`

The object which keys will be replaced.

#### search

*Required*  
Type: `string` or `regexp`

Search for matching substring that will be replaced.

#### replace

*Required*  
Type: `string` or `function`

Replacing the matching substring.


## Related

* [array-replace](https://github.com/gillstrom/array-replace) - Replace array values with `String.prototype.replace`


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)

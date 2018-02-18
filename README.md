# call-if [![NPM Package](https://img.shields.io/npm/v/call-if.svg?style=flat-square)][npm]

![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)

> A micro-library of functions that call a given function if a given condition is met.
> This library was created for both convenience purposes and for the cleaner code that
> can be produced by using it's provided functions.

> **NOTE:** Compatible with ES4+ browsers, AMD, CommonJS, ES6 Imports, and HTML
> script references.

[Changelog](https://github.com/bsara/call-if/blob/master/CHANGELOG.md)



## Install

```bash
$ npm i --save call-if
```


## Usage

```js
import { callIf, callIfOrNull } from 'call-if';


function myFunc(valueToPrint, valueToReturn) {
  console.log(valueToPrint);

  return valueToReturn;
}


callIf(true, myFunc, "Fish fingers and custard", 42);  // Prints "Fish fingers and custard" & returns 42
callIf(false, myFunc, "Fish fingers and custard", 42); // Prints nothing and returns `undefined`

callIfOrNull(true, myFunc, "Fish fingers and custard", 42);  // Prints "Fish fingers and custard" & returns 42
callIfOrNull(false, myFunc, "Fish fingers and custard", 42); // Prints nothing and returns `null`

```


## API

### callIf(condition, func, *[...funcParams]*)

Returns the result of calling `func` if given `condition` evaluates to `true`; otherwise,
returns `undefined`.

- **condition** `Boolean`

  Condition used to determine whether to call end return the result of `func` or `undefined`.

- **func** `*`

  Function to be called if `condition` evaluates to `true`.

- **...funcParams** `*`

  Parameters to be passed to `func`, if called.


<br/>


### callIfOrNull(condition, func, *[...funcParams]*)

Returns the result of calling `func` if given `condition` evaluates to `true`; otherwise,
returns `null`.

- **condition** `Boolean`

  Condition used to determine whether to call end return the result of `func` or `null`.

- **func** `*`

  Function to be called if `condition` evaluates to `true`.

- **...funcParams** `*`

  Parameters to be passed to `func`, if called.


<br/>
<br/>


# License

ISC License (ISC)

Copyright (c) 2018, Brandon D. Sara (http://bsara.pro/)

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.



[license]: https://github.com/bsara/call-if/blob/master/LICENSE "License"
[npm]:     https://www.npmjs.com/package/call-if                "NPM Package: call-if"

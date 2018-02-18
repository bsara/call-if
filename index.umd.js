/**
 * @license
 *
 * ISC License (ISC)
 *
 * Copyright (c) 2018, Brandon D. Sara (https://bsara.pro/)
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 * OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
    return;
  }
  if (typeof exports === 'object') {
    module.exports = factory();
    return;
  }
  var exported = factory();

  root.callIf       = exported.callIf;
  root.callIfOrNull = exported.callIfOrNull;
})(this, function() {

  /**
   * @param  {Boolean}  condition  - Condition used to determine whether to call end
   *                                 return the result of `func` or `undefined`.
   * @param  {Function} func       - Function to be called if `condition` evaluates to
   *                                 `true`.
   * @param  {...?*}    funcParams - Parameters to be passed to `func`, if called.
   *
   * @returns {?*} Result of calling `func` if given `condition` evaluates to `true`;
   *               otherwise, returns `null`.
   */
  function callIfOrNull() {
    var result = callIf(arguments);

    return ((result == null) ? null : result);
  }


  /**
   * @param  {Boolean}  condition - Condition used to determine whether to call end
   *                                return the result of `func` or `undefined`.
   * @param  {Function} func      - Function to be called if `condition` evaluates to
   *                                `true`.
   * @param  {...?*}    funcParams - Parameters to be passed to `func`, if called.
   *
   * @returns {?*} Result of calling `func` if given `condition` evaluates to `true`;
   *               otherwise, returns `undefined`.
   */
  function callIf(condition, func) {
    return (
      condition
        ? func.apply(undefined, Array.prototype.slice.call(arguments, 2))
        : undefined
    );
  }




  return {
    callIf:       callIf,
    callIfOrNull: callIfOrNull
  };
});

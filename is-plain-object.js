/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

export function isPlainObject(o) {
  return (
    typeof o === 'object' &&
    o !== null &&
    !(o instanceof Array) &&
    (
      !("constructor" in o && "prototype" in o.constructor) ||
      o.constructor.prototype.hasOwnProperty("isPrototypeOf")
    )
  )
}

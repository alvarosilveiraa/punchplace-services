'use strict';

module.exports = {
  get foo() {
    return this.get('x-response-foo');
  },

  set foo(value) {
    this.set('x-response-foo', value);
  }
}

'use strict';

const moment = require('moment');

module.exports = {
  get foo() {
    return 'helper-bar';
  },

  get now() {
    return moment().format('YYYY-MM-DD HH:mm:ss');
  }
}

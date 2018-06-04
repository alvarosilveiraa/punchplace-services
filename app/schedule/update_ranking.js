'use strict';

const Subscription = require('egg').Subscription;

class UpdateRanking extends Subscription {
  static get schedule() {
    return {
      immediate: true,
      interval: '30m',
      type: 'all'
    };
  }

  async subscribe() {
    console.log(this.ctx.helper.now, 'ranking updated');
  }
}

module.exports = UpdateRanking;

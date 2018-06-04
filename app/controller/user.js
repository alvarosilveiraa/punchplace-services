'use strict';

const Controller = require('../core/base_controller');

class UserController extends Controller {
  async active() {
    const ctx = this.ctx;
    if(this.user) ctx.body = this.user;
    else ctx.handleStatus(404);
  }
}

module.exports = UserController;

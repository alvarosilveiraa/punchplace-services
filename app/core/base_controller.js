'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  get user() {
    return this.ctx.session.user;
  }
}

module.exports = BaseController;

'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.renderHtml('home');
  }

  // async id() {
  //   this.ctx.response.foo = 'res-bar';
  //   this.ctx.body = `
  //     ${this.ctx.params.id}
  //     ${this.ctx.__('Name')}
  //     ${this.app.foo}
  //     ${this.ctx.foo}
  //     ${this.ctx.helper.foo}
  //     ${this.ctx.request.foo}
  //     ${this.ctx.response.foo}
  //   `;
  // }
}

module.exports = HomeController;

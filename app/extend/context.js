'use strict';

const path = require('path');
const fs = require('fs');

module.exports = {
  get foo() {
    return 'ctx-bar';
  },

  async renderHtml(name) {
    const file = path.resolve(this.app.config.view.root, `${name}.html`);
    this.set('Content-Type', 'text/html');
    this.body = await fs.readFileSync(file);
  },

  async handleStatus(status, data=undefined) {
    const ctx = this.ctx;
    this.status = status;
    this.body = {
      status,
      message: this.__(status),
      data
    }
  }
}

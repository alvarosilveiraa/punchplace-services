'use strict';

const Controller = require('../core/base_controller');

class AnimeController extends Controller {
  async all() {
    const ctx = this.ctx;
    const animes = await ctx.service.anime.all();
    ctx.body = animes;
  }

  async save() {
    const ctx = this.ctx;
    ctx.validate({
      title: {
        type: 'string',
        required: true
      },
      description: {
        type: 'string',
        empty: true,
        required: false
      },
      cover: {
        type: 'string',
        empty: true,
        required: false
      },
      background: {
        type: 'string',
        empty: true,
        required: false
      },
      released_at: {
        type: 'dateTime',
        required: false
      }
    });
    const anime = ctx.request.body;
    const saved = await ctx.service.anime.save(anime);
    ctx.handleStatus(saved? 200: 400);
  }
}

module.exports = AnimeController;

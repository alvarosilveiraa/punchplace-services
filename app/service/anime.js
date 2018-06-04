'use strict';

const Service = require('egg').Service;

class AnimeService extends Service {
  async all() {
    const results = await this.app.mysql.select('anime');
    return results;
  }

  async one(id) {
    const result = await this.app.mysql.get('anime', { id });
    return result;
  }

  async save(anime) {
    const result = await this.app.mysql.insert('anime', {
      ...anime,
      created_at: this.ctx.helper.now
    });
    return result.affectedRows === 1;
  }

  async update(id, anime) {
    const result = await this.app.mysql.update('anime', anime, {
      where: { id }
    });
    return result.affectedRows === 1;
  }

  async delete(id) {
    const result = await this.app.mysql.delete('anime', { id });
    return result;
  }

  async query(query, data) {
    const results = await this.app.mysql.query(query, data);
    return results;
  }

  async transaction() {
    // const conn = await this.app.mysql.beginTransaction();
    // try {
    //   await conn.insert(table, row1);
    //   await conn.update(table, row2);
    //   await conn.commit();
    // } catch(err) {
    //   await conn.rollback();
    //   throw err;
    // }
  }
}

module.exports = AnimeService;

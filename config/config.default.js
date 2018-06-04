'use strict';

module.exports = {
  keys: '_secret_',
  middleware: [
    'error'
  ],
  mysql: {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: 'bino123',
      database: 'animeplace'
    },
    app: true,
    agent: false
  },
  i18n: {
    defaultLocale: 'pt-BR'
  }
}

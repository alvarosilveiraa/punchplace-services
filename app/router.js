'use strict';

module.exports = app => {
  const { router, middleware, controller } = app;

  router.get('/', controller.home.index);

  // user
  router.get('/user', middleware.user(), controller.user.active);

  // anime
  router.get('/animes', controller.anime.all);
  router.post('/anime', controller.anime.save);

  router.redirect('/*', '/', 302);
}

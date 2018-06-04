'use strict';

module.exports = () => {
  return async function(ctx, next) {
    console.log(ctx.helper.now, 'user middleware');
    await next();
  }
}

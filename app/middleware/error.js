'use strict';

module.exports = () => {
  return async function(ctx, next) {
    try {
      await next();
    }catch(err) {
      ctx.handleStatus(err.status || 500, err.errors);
    }
  }
}

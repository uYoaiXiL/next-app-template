const Koa = require('koa');
const Router = require('koa-router');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = 3005;
app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();
  /* 代理配置 */
  const proxy = require('koa2-proxy-middleware');
  const options = {
    targets: {
      '/api/(.*)': {
        target: 'http://localhost:3006/',
        // pathRewrite: {'^/api': '/'},
        changeOrigin: true,
      },
    },
  };
  // server.use(proxy(options));
  router.all('(.*)', async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });
  server.use(router.routes());

  server.listen(PORT, () => {
    console.log(`koa server listening on http://localhost:${PORT}`);
  });
});

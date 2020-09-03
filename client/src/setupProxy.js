const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    ["/auth/*", "/api/*"],
    createProxyMiddleware({
      target: "http://localhost:3001",
      changeOrigin: true,
    })
  );
};
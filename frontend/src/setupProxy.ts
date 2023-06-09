/* eslint-disable @typescript-eslint/no-var-requires */
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app: any) {
      app.use(
            '/api',
            createProxyMiddleware({
                  target: 'http://localhost:8000',
                  changeOrigin: true,
                  pathRewrite: {
                        '^/api': ''
                  }
            })
      )
}
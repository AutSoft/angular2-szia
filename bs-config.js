var proxyMiddleware = require('http-proxy-middleware');
var fallbackMiddleware = require('connect-history-api-fallback');

module.exports = {
    open: false,
    server: {
        middleware: {
            1: proxyMiddleware('/api', {
                target: 'https://szia-backend.herokuapp.com',
                changeOrigin: true
            }),

            2: fallbackMiddleware({
                index: '/index.html', verbose: true
            })
        }
    },
    ghostMode: false
};
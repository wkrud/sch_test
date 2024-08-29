const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/test',
        createProxyMiddleware({
            target: 'http://localhost:8089',
            changeOrigin: true,
            pathRewrite: {
                '/test': '/test',
            },
        })
    );
    // app.use(
    //     '/llama',
    //     createProxyMiddleware({
    //         target: 'http://localhost:11434',
    //         changeOrigin: true,
    //         pathRewrite: {
    //             '^/llama': ''
    //         }
    //     })
    // );
}
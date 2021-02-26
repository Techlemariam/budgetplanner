module.exports = {
  transpileDependencies: ['vuetify'],

  devServer: {
    proxy: {
      // '/api/*': {
      '^/api': {
        // '/api': {
        target: 'http://server:8080',
        // changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '' }
        // onProxyReq: request => {
        //   request.setHeader('origin', 'http://server:8888')
        // }
      }
    }
  }
}

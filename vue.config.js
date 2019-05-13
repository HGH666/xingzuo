module.exports = {
  devServer: {
    port: '8090',
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    proxy: {
      '/api': {
        target: 'http://web.juhe.cn:8080/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}

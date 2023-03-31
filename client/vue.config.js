const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'http://localhost:8000'
  },
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Monthly Stats'
    }
  }
})

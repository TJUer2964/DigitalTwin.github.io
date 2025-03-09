const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/DigitalTwin.github.io/"  // 将 base 改为 publicPath
})

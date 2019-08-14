module.exports = {
  devServer: {
    proxy: {
      '/': {
        target: 'http://api.degebug.cn',
        // target: 'http://localhost:3000',
        ws: false,
        changeOrigin: true,
      },
    },
  },
};

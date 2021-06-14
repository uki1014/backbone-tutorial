module.exports = {
  mode: 'development',
  // エントリーポイントの.jsファイル
  entry: `./src/index.js`,
  // ファイルの出力設定
  output: {
    // 出力ファイルのディレクトリ名
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: 'app.js',
  },
  //webpack-dev-server設定
  devServer: {
    contentBase: 'dist',
    open: true,
  },
};

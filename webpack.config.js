module.exports = {
  mode: 'development',
  // エントリーポイントの.jsファイル
  entry: `./src/index.js`,
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                // プリセットを指定することで、ES2020 を ES5 に変換
                '@babel/preset-env',
              ],
            },
          },
        ],
        exclude: [/node_modules/],
      },
    ],
  },
  target: ['web', 'es5'],
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
    hot: true,
    port: 3000,
  },
};

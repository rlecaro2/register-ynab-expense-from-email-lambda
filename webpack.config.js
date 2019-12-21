module.exports = {
  entry: ['./src/index.js'],
  target: 'node',
  rules: [
    {
      test: /\.tsx?$/,
      loader: 'babel-loader',
    },
  ],
  output: {
    path: `${process.cwd()}/dist`,
    filename: 'index.js',
    libraryTarget: 'umd',
  },
};

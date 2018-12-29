module.exports = {
  entry: ['./src/index.js'],
  target: 'node',
  output: {
    path: `${process.cwd()}/dist`,
    filename: 'index.js',
    libraryTarget: 'umd'
  }
};

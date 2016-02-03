module.exports = {
  context: __dirname + "/project",

  entry: {
    main: "./src/es6/entry/main.js",
  },

  output: {
    path:          './project/dist/scripts',
    filename:      "[name].js",
    chunkFilename: "[id].bundle.js",
  },

  module: {
    loaders: [
      {
        test:    /\.js$/,
        exclude: /node_modules/,
        loader:  "babel-loader"
      },
    ],
  },
};

var config = {
   entry: './main.js',
   output: {
      path:'/',
      filename: 'index.js',
   },
   devServer: {
      inline: false,
      port: 8080
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react', "stage-0"],
               plugins: [
                  "transform-object-rest-spread",
                  "transform-decorators-legacy",
                  "transform-class-properties"
                ]
            }
         }
      ]
   }
}
module.exports = config;
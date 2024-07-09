module.exports = {
    //... existing configuration ...
    module: {
      rules: [
        //... existing rules ...
        {
          test: /\.(pdf|jpg|png|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext]',
                outputPath: 'assets/files',
              },
            },
          ],
        },
      ],
    },
  };
  
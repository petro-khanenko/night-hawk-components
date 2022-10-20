const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: "umd",
        clean: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    externals: {
        react: 'react',
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(ts|tsx)?$/,
                use: ['ts-loader'],
            },
            {oneOf: [
                    {
                        test: /\.svg$/,
                        type: "asset/inline",
                    },
                    {
                        test: /\.(jpg|png)$/,
                        type: "asset/resource",
                    },
                ]},
            {
                test: /\.(jpg|JPG|png|gif|GIF|ttf|woff|woff2|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/images/[name].[ext]'
                        }
                    }
                ]
            }
        ],
    }
}

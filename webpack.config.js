const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");
const glob = require('glob');

module.exports = {
    entry: glob.sync('../src/js/**.js').reduce(function(obj, el){
        obj[path.parse(el).name] = el;
        return obj
    },{}),
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    resolve: {
        alias: {
            vue$: "vue/dist/vue.runtime.esm.js",
        },
        extensions: ["*", ".js", ".vue", ".json"],
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8000,
        hot: "only",
        allowedHosts: [
            'localhost:8080'
        ]
    }
};

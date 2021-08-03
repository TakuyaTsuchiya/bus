// Shared logic for `webpack.config.js` and `webpack.server.config.js`

const webpack = require("webpack");
const path = require("path");

const isDevelopmentEnv = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
const fileName = isDevelopmentEnv ? "[name]" : "[name]-[hash]";
const devServerHost = "0.0.0.0";
const devServerPort = 8080;

//////////////////////////
// resolve settings
//////////////////////////

const resolve = {
    extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx", ".css", ".jpg", ".png", ".gif", ".ico", ".json", ".svg"],
};

//////////////////////////
// plugins settings
//////////////////////////

let plugins = [
    new webpack.ProvidePlugin({}),
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development"),
            SENTRY_ENV: JSON.stringify(process.env.SENTRY_ENV || "development"),
        },
    }),
];

//////////////////////////
// publicPath settings
//////////////////////////

let publicPath;
if (isDevelopmentEnv) {
    publicPath = `http://${devServerHost}:${devServerPort}/assets/`;
} else {
    publicPath = `https://${process.env.ASSET_HOST}/assets/`;
}

//////////////////////////
// module settings
//////////////////////////

const moduleSetting = {
    rules: [
        {
            test: /\.(?:ts|tsx)$/,
            use: [
                { loader: "babel-loader" },
            ],
            exclude: /node_modules/,
        },
    ],
};

module.exports = {
    fileName,
    devServerHost,
    devServerPort,
    publicPath,
    plugins,
    optimization: { minimize: !isDevelopmentEnv },
    resolve,
    moduleSetting,
};
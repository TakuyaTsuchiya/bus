// This file used for client side rendering

const base = require("./webpack.base.config.js");
const glob = require("glob");

const isDevelopmentEnv = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

//////////////////////////
// entry settings
//////////////////////////

const entry = {
    application: ["./app/frontend/javascripts/application.ts"],
};

//////////////////////////
// output settings
//////////////////////////

const output = {
    path: `${__dirname}/public/assets/`,
    filename: `${base.fileName}.js`,
    chunkFilename: `${base.fileName}.chunk.js`,
    publicPath: base.publicPath,
};

//////////////////////////
// devServer settings
//////////////////////////

let devServer = {};
if (isDevelopmentEnv) {
    devServer = {
        contentBase: "public/",
        disableHostCheck: true,
        host: base.devServerHost,
        open: false,
        port: base.devServerPort,
        public: `${base.devServerHost}:${base.devServerPort}`,
        compress: true,
    };
}

//////////////////////////
// module.exports
//////////////////////////

module.exports = {
    mode: isDevelopmentEnv ? "development" : "production",
    module: base.moduleSetting,
    entry,
    plugins: base.plugins,
    output,
    devtool: isDevelopmentEnv ? "inline-source-map" : "source-map",
    resolve: base.resolve,
    devServer,
    optimization: base.optimization,
};
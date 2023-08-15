const path = require("path")

module.exports = {
    mode: "development",
    entry: "./app/assets/scripts/App.js",
    output: {
        filename: "bundled.js",
        path: path.resolve(__dirname, "app")
    },
    watch: true,
}

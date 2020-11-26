const glob = require("glob");
const path = require("path");

module.exports = () =>
  glob
    .sync(__dirname + "/projects/*.json")
    .map((file) => {
      return require(path.resolve(file));
    })
    .sort((a, b) => a.sort - b.sort);

const glob = require("glob");
const path = require("path");
const fs = require("fs")

export default function getProjects() {
  return glob
    .sync(process.cwd() + "/cms/projects/*.json")
    .map((file) => JSON.parse(fs.readFileSync(file)))
    .sort((a, b) => a.sort - b.sort);
}

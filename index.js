const { Cu } = require('chrome');
const { FileUtils } = Cu.import('resource://gre/modules/FileUtils.jsm');
const { existsSync } = require('sdk/io/fs');

function open(path) {
  if (!existsSync(path)) throw "Path doesn't exist: "+ path;
  let fileHandle = new FileUtils.File(path);
  fileHandle.launch(path);
}

module.exports = open;

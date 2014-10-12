let open = require("../index");

exports['test that we throw with non-existent paths'] = function(assert) {
  // generate a uuid
  let uuid = require('sdk/util/uuid').uuid();
  assert.throws(open('/tmp/'+uuid), "Trying to open a nonexistent file should throw.");
};

require("sdk/test").run(exports);
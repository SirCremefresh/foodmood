const uuidV4 = require('uuid/v4');

function generateSessionKey() {
  return uuidV4();
}

/*
 * Generiert eine zufällige UUIDv4 welche zurückgegeben wird.
 * Die zurückgegebene UUID ist einmalig und wird als SessionKey verwendet.
 *
 * @return    UUID
 */
const uuidV4 = require('uuid/v4');

function generateSessionKey() {
  return uuidV4();
}

module.exports = generateSessionKey;

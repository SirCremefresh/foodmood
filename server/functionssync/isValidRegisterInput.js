/*
 * Überprüft ob die angaben bei einer Registrierung valide sind.
 *  - Prüft auf die Länge(max. 40 Buchstaben, beim Passwort max. 200)
 *  - Prüft ob das Feld einen Inhalt hat
 *
 * @param     Benutzername(String), Name(String), Nachname(String), Passwort(String)
 *
 * @return    true bei validen Eingaben,
 *            false bei inkorrekten Eingaben
 */
function isValidRegisterInput(username, name, lastname, password) {

  if((username.length > 40) || (name.length > 40) || (lastname.length > 40) || (password.length > 200)) {
    return false;
  }

  else if(isNullOrWhitespace(username) || isNullOrWhitespace(name) || isNullOrWhitespace(lastname)) {
    return false;
  }

  return true;
}

function isNullOrWhitespace( input ) {
  return !input || !input.trim();
}
module.exports = isValidRegisterInput;

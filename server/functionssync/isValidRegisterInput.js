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

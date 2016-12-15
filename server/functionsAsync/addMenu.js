function addMenu(menuInformation, callbackFunc, sqlconnection) {

  sqlconnection.query('INSERT INTO `menu`(`groupID`, `title`, `description`) VALUES (?,?,?)', [menuInformation.groupID,menuInformation.menuName,menuInformation.menuDescription], function(err, results) {
    if(err) {
      throw err;
    }
    else {
      callbackFunc(true, "ADDED_MENU_SUCCESSFULLY");
    }
  });
}


module.exports = addMenu;

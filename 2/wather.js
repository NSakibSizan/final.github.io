function weather() {
    var date = new Date();
    var month = date.getMonth();

    if (month == 11 || month == 12 || month <= 3) {
        document.write('<img src="winter.gif">');
    } else {
        document.write('<img src ="summer.gif">');
    }
}
weather();
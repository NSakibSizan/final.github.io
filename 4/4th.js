function checking() {
    var a = prompt("Enter First Number: ", "");
    var b = prompt("Enter Second Number: ", "");
    var c = prompt("Enter Third Number: ", "");
    var d = prompt("Enter Fourth Number: ", "");

    if (a >= b && c <= d) {
        alert(true);
    } else {
        alert(false);
    }
}
checking();
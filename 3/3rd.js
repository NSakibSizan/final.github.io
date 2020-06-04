var x = prompt("Enter A Number: ", "");
var sqr = x * x;
var i;

for (i = 0; i < 5; i++) {
    var y = prompt("Enter The Square: ", "");
    if (y == sqr) {
        alert("Correct Ans!");
        break;
    } else {
        alert("Wrong. Try Again!");
    }
}
var mypets = new Array();
mypets[0] = "dog";
mypets[1] = "cat";
mypets[2] = "goldfish";

var myNeWpets = new Array();
myNeWpets[0] = "turtle";
myNeWpets[1] = "gerbil";

var mypets = mypets.concat(myNeWpets);

var i;
for (i = 0; i < mypets.length; i++) {
    document.write(mypets[i] + "<br>");
}
function age() {

var dl document.getElementById("date").value;

var ml = document.getElementById("month").value;

var y1= document.getElementById("year").value;

var date new Date();

var d2 date.getDate(); console.log(d2)

var m2 = 1 + date.getMonth();

var y2= date.getFullYear();

var month [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 311;

if (d1 d2) {

d2 d2 month[m21];

m2m21;
}
if (m1m2) {

m2m2+12:

y2y21;
}
var dd2d1;

var mm2 ml;

var yy2y1;

document.getElementById("age").innerHTML =

"Your Age is " + y +" Years"+"Months " + d + " Days";

}
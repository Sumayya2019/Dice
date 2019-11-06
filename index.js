var r1 = Math.random() * 6;
r1 = Math.floor(r1)+1;

//console.log(r1);
var r2 = Math.random() * 6;
r2 = Math.floor(r2)+1;
//console.log(r2);

if(r1 === 1)
document.getElementById("im1").src ="1.png";
else if(r1 === 2)
document.getElementById("im1").src ="2.png";
else if(r1 === 3)
document.getElementById("im1").src ="3.png";
else if(r1 === 4)
document.getElementById("im1").src ="4.png";
else if(r1 === 5)
document.getElementById("im1").src ="5.png";
else if(r1 === 6)
document.getElementById("im1").src ="6.png";

if(r2 === 1)
document.getElementById("im2").src ="1.png";
else if(r2 === 2)
document.getElementById("im2").src ="2.png";
else if(r2 === 3)
document.getElementById("im2").src ="3.png";
else if(r2 === 4)
document.getElementById("im2").src ="4.png";
else if(r2 === 5)
document.getElementById("im2").src ="5.png";
else if(r2 === 6)
document.getElementById("im2").src ="6.png";

if(r1>r2)
document.getElementById("winner").innerHTML="Player 1 is the Winner";
else if(r1<r2)
document.getElementById("winner").innerHTML="Player 2 is the Winner";
else
document.getElementById("winner").innerHTML="The players are equal";

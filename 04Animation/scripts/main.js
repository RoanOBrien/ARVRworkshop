

 // changing individual properties with code and using setInterval
 var rotationSpeedX = 0.04;
 var rotationSpeedY = 0.01;
 var myOtherBox = document.getElementById('myOtherBox');

 function spin(){
 	myOtherBox.object3D.rotation.x -= rotationSpeedX;
    myOtherBox.object3D.rotation.y += rotationSpeedY;
 	console.log(myOtherBox.object3D.rotation.x);
 }

 setInterval(spin, 16); //equivalent to 60 fps
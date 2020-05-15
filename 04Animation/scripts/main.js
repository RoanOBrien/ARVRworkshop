

 // changing individual properties with code and using setInterval
 var rotationSpeedX = 0.04;
 var rotationSpeedY = 0.01;
 var rotationSpeedZ = 0.04;
 //var growthCheck = 0;
 var widthInc = 0.2;
 var heightInc = 0.2;
 var depthInc = 0.2;
 var myOtherBox = document.getElementById('myOtherBox');

// function spin(){
// 	myOtherBox.object3D.rotation.x -= rotationSpeedX;
//    myOtherBox.object3D.rotation.y += rotationSpeedY;
//    myOtherBox.object3D.rotation.z += rotationSpeedZ;
//    //myOtherBox.object3D.position.x -= rotationSpeedX;
// 	console.log(myOtherBox.object3D.rotation.x);
// }

function grow(){
    //var decrease = 10;
    for (var growthCheck = 0; growthCheck < 10; growthCheck++){
        myOtherBox.width += widthInc;
        myOtherBox.height += heightInc;
        myOtherBox.depth += depthInc;
        if (growthCheck == 9){
            decrease = 9;
        }
    }
    
    for (var decrease = 10; decrease > -1; decrease--){
        myOtherBox.width -= widthInc;
        myOtherBox.height -= heightInc;
        myOtherBox.depth -= depthInc;
        if (decrease == 0){
            growthCheck = 0;
        }
    }
    
    console.log(myOtherBox.object3D.width);
}
 
 setInterval(spin, 16); //equivalent to 60 fps
 setInterval(grow, 16); 
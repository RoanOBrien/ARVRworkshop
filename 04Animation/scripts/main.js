

 // changing individual properties with code and using setInterval
 var rotationSpeedX = 0.04;
 var rotationSpeedY = 0.01;
 var rotationSpeedZ = 0.04;
 //var growthCheck = 0;
 var widthInc = 0.01;
// var heightInc = 0.02;
// var depthInc = 0.02;
 var myOtherBox = document.getElementById('myOtherBox');

 function spin(){
 	myOtherBox.object3D.rotation.x -= rotationSpeedX;
    myOtherBox.object3D.rotation.y += rotationSpeedY;
    myOtherBox.object3D.rotation.z += rotationSpeedZ;
    //myOtherBox.object3D.position.x -= rotationSpeedX;
 	console.log(myOtherBox.object3D.rotation.x);
 }

var increase = 0;

function grow(){
//    var decrease = 10;
    if (increase < 500){
        myOtherBox.object3D.scale.x += widthInc;
        myOtherBox.object3D.scale.y += widthInc;
        myOtherBox.object3D.scale.z += widthInc;
    }else{
        myOtherBox.object3D.scale.x -= widthInc;
        myOtherBox.object3D.scale.y -= widthInc;
        myOtherBox.object3D.scale.z -= widthInc;
    }
    increase = increase + 1;
    if(increase == 1000){
        increase = 0;
    }
//    for (var growthCheck = 0; growthCheck < 10; growthCheck++){
//        myOtherBox.object3D.scale.x += widthInc;
//        myOtherBox.object3D.scale.y += heightInc;
//        myOtherBox.object3D.scale.z += depthInc;
//        if (growthCheck == 9){
//            decrease = 9;
//        }
//    }
//    
//    for (var decrease = 10; decrease > -1; decrease--){
//        myOtherBox.object3D.scale.x -= widthInc;
//        myOtherBox.object3D.scale.y -= heightInc;
//        myOtherBox.object3D.scale.z -= depthInc;
//        if (decrease == 0){
//            growthCheck = 0;
//        }
//    }
    
    console.log(myOtherBox.object3D.width);
}
 
 setInterval(spin, 16); //equivalent to 60 fps
 setInterval(grow, 16); 
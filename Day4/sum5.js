// Description
// You are given two numbers stored in the variable with the names
// distance, time
// Find the value of speed, such that,
// speed = distance/time
// If the following expression is true
// speed > 40, print "Apply Brake"
// else
// print "Keep Going"
// Print the statements, without quotes

//output : Apply Brake

function applyBrakes(distance, time) {
    //Write code here
    var speed = distance/time;
    if(speed > 40){
        console.log("Apply Brake");
    }
    else{
        console.log("Keep Going");
    }
}

var distance = 100;
var time = 2;
applyBrakes(distance,time)
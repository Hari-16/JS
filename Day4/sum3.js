// Description

            // You are given two numbers, scored in variables with the following names
            // Australia, England
            // If the following expression is true
            // Australia > England, print "Australia"
            // else if the following expression is true
            // Australia < England, print "England"
            // else if the following expression is true
            // Australia == England, print "Tie"

//outpur : England

function theAshes(Australia, England) {
    //Write code here
    if(Australia > England){
        console.log("Australia");
    }
    else if(Australia < England){
        console.log("England");
    }
    else{
        console.log("Tie");
    }
}
var Australia = 46;
var England = 67;
theAshes(Australia,England)
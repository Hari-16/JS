// Description

// You are given three values, stored in variable with the following names
// NzScore, NzSuperOver, NzFours
// On the next line, you are given three more values stored in the variable with the following names
// EngScore, EngSuperOver, EngFours
// If the value of NzScore > EngScore, print "New Zealand"
// Else if the value of NzScore < EngScore, print "England"
// Else If the value of NzSuperOver > EngSuperOver, print "New Zealand"
// Else if the value of NzSuperOver < EngSuperOver, print "England"
// Else if the value of NzFours > EngFours, print "New Zealand"
// Else if the value of Nzfours < EngFours, print "England"

//output : England

function worldCupFinal(NzScore, NzSuperOver, NzFours, EngScore, EngSuperOver, EngFours) {
    //Write code here
    if(NzScore > engscore){
        console.log("New Zealand");
    }
    else if(NzScore < engscore){
        console.log("England");
    }
    else if(NzSuperOver > EngSuperOver){
        console.log("New Zealand");
    }
    else if(NzSuperOver < EngSuperOver){
        console.log("England");
    }
    else if(NzFours > engfours){
        console.log("New Zealand");
    }
    else{
        console.log("England");
    }

}

var NzScore = 241;
var NzSuperOver = 15;
var NzFours =  21;
var engscore = 241;
var EngSuperOver = 15;
var engfours = 26;
worldCupFinal(NzScore, NzSuperOver, NzFours, engscore, EngSuperOver,engfours)

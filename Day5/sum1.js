// Description
// You are given four numbers stored in variables with the following names
// one, two, three, four
// If the value of both the following expression is true, printYes, else printNo
// 1. one > two 
// 2. three > four
//output : no 

function compareFourNumbers(one, two, three, four) {
    // Write code here
    if((one>two) && (three>four)){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
}

var one = 1;
var two = 2;
var three = 3;
var four = 4;
compareFourNumbers(one, two, three, four)
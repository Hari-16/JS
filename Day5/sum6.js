// Description
// You are given two numbers, stored in the variable with the following names
// one, two
// If both the values are Even, printBoth, else printNo

//output : no

function logicalEvens(one, two) {
    // Write code here
    if((one%2 == 0) && (two%2 == 0)){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
}

var one = 4;
var two = 7;

logicalEvens(one,two)
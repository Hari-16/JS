// Description
// You are given two numbers, stored in the variable with the following names
// one, two
// If both the values are even, printEven
// Else if both the values are odd, printOdd
// else printEven-Odd

//output :Even-Odd
function oddEvenBoth(one, two) {
    // Write code here
    if((one%2 == 0) && (two%2 == 0)){
        console.log("Even");
    }
    else if((one%2 != 0) && (two%2 != 0)){
        console.log("No");
    }
    else{
        console.log("Even-Odd");
    }
}

var one = 3;
var two = 6;
oddEvenBoth(one, two)
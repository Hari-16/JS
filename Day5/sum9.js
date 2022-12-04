// Description
// You are given a number stored in a variable with the namenum
// Find the value ofx, such that
// x = num % 10
// Print the answer according to the following conditions
// If 
// x = 0, print `zero`
// x = 1, print 'one'
// x = 2, print 'two'
// x = 3, print 'three'
// x = 4, print 'four'
// x = 5, print 'five'
// x = 6, print 'six'
// x = 7, print 'seven'
// x = 8, print 'eight'
// x = 9, print 'nine'
// It is guaranteed, that the value ofxwill be between[0,9]
// Note : All the values need to be printed without quotes

//output : two
function modeof10(x) {
    // Write code here
    var num = x % 10;

    switch(num){
        case 0:
            console.log("Zero");
            break;
        case 1:
            console.log("One");
            break;
        case 2:
            console.log("Two");
            break;
        case 3:
            console.log("Three");
            break;
        case 4:
            console.log("Four");
            break;
        case 5:
            console.log("Five");
            break;
        case 6:
            console.log("Six");
            break;
        case 7:
            console.log("Seven");
            break;
        case 8:
            console.log("Eight");
            break;
        case 9:
            console.log("Nine");
            break;
        default:
            console.log("Not A Number");
        
    }
}
var x = 12;
modeof10(x)
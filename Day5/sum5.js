// Description
// You are given six numbers, stored in the variables with the following names
// one, two, three, four, five, six
// Find the value ofsum1andsum2, such that
// sum1 = one + two
// sum2 = four + five
// If both the following two conditions are true, printYes, else printNo
// sum1 > three
// sum2 > six

//output : no
function twoSumsOneNumberII(one, two, three, four, five, six) {
    // Write code here
    var sum1 = one + two ;
    var sum2 = four + five ;
    if((sum1 > three) && (sum2 > six)){
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
var five = 5;
var six = 6;

twoSumsOneNumberII(one, two, three, four, five, six)
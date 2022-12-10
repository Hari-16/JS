// Mod of 10 II Ended
// Description
// You are given a number stored in a variable with the namenum
// Find out the value obtained from the expressioni % 10, whereiconsists of all the values from 1 to the value stored innum, includingnum
// Input
// The first and the only line of the input contains the value stored innum
// Output
// Print the value obtained after doing the operation,i % 10, whereirefers to all the values from 1 to the number stored innum, including that as well
// Note : Print all the values on a new line


//output 
// 1
// 2
// 3
// 4
// 5
// 6
// 7

function modeof10(num) {
    // Write code here
    var i = 1;
    while(i<=num){
        if(i%10!=0){
            console.log(i);
        }
        i++;
    }

}

modeof10(7)
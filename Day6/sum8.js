// Description
// You are given a number, stored in a variable with the namenum
// Find the sum of all odd numbers, greater than 0, and less than or equal to the value stored innum
// Finally, print the sum
// For example, if the value stored innum = 5
// Then, all the odd numbers smaller than 5, will be
// 1
// 3
// 5
// Therefore, the sum becomes,sum = 1 + 3 + 5 = 9, which is the required output


//output : 16

function oddSumBelowN(num) {
    // Write code here
    var start = 1;
    var sum = 0;
    while(start<=num){
        if(start%2!=0){
            sum = sum+start;
        }
        start++;
    }
    console.log(sum);
}

oddSumBelowN(7)
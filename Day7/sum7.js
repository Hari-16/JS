// Even Sum Below N Ended
// Description
// You are given a number, stored in a variable with the namenum
// Find the sum of all even numbers greater than zero, and less than or equal to the value stored innum
// For example, if the value stored innum = 5, then all the even numbers smaller than or equal to 5, and greater than zero are
// 2
// 4
// Therefore, the sum becomes,sum = 2 + 4 = 6, which is the required output

//output : 12

function evenSumBelowN(num) {
    // Write code here
    var sum =0;
    for(var i=1;i<=num;i++){
        if(i%2==0){
            sum =sum+i;
        }
    
    }
    console.log(sum);
}

evenSumBelowN(6)
// Description
// You are given a number stored in a variable with the namenum
// You have to print all the numbers from 1 tonum, including num as well.
// Print each number on a new line

//output :
// 1
// 2
// 3
// 4
// 5
function loop1toN(num) {
    // Write code here
    var start = 1;
    while(start<=num){
        console.log(start);
        start++;
    }
    
}
loop1toN(5)
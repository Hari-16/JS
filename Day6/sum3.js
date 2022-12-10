// Description
// You are given two numbers, stored in variables with the following names
// max, min
// You have to print all the numbers from min to max, excluding max. Print each number on a new line
// For example, if the value stored inmax = 19, and the value stored inmin = 14, then the output will be
// 14
// 15
// 16
// 17
// 18
// Note : The value stored in max will always be greater than or equal to min

//output :
// 13
// 14
// 15
// 16
// 17
// 18


function fromAtoB(max,min){
    //write code here
    while(max>min){
        console.log(min);
        min++;
    }

}

fromAtoB(19,13)

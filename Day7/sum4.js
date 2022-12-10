// Description
// Given a number, stored in the variable with the namenum
// Print the multiplication table of the value stored innum
// For example, if the value stored innumis 2, then the output should be
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// 20
// Print each number, on a new line

//output 
// 3
// 6
// 9
// 12
// 15
// 18
// 21
// 24
// 27
// 30

function multiplicationTableN(num) {
    // Write code here
    for(var i=30;num<=i;num++){
        if(num%3==0){
            console.log(num);
        }
    }
}

multiplicationTableN(3)
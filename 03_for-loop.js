// 01 for loop
// 02 break; and continue; 
// nested for loop

// -----------------------------------------------------------------//

// //01 for loop
// looping is a feature in programming language. Execute set of instructions/functions repeatedly.
// > for statement creates a loop, executed as long as condition is true.
// > Only stop when condition becomes false.

// for loop has three statements
// i) initialization --> run only one time before iteration.
// ii) condition --> run before iteration
// iii) expression --> run after iteration

// for (initialization; condition ; expression){
    // code to be executed;
// }

//examples

// for (var i=0; i<5 ; i++){
//     console.log(i);
// }




// // how its work:-
// // 0   // execute initailization (i = 0) and check conditon (true) then print 0
// // 1   // increment i= i+1 after 1st iteration, then check condtion (not check initialization bcz its run only one time) if true then print 1 )
// // 2   // increment +1 (now i=2) after 2nd iteration, then check conditon (true), print 2 and so on
// // 3
// // 4 


// for (var i=10; i>0; i--){
//     console.log(i); // 10 to 1
// }



//table example

// var num = 2;
// for (var i=1; i<=10 ; i++){
//     console.log(num + ' x ' + i + ' = ' + (num*i) );
// }

//table (get value by user)

// var num = +prompt("Table of?", 2); // use unary operator before prompt because prompt return string.
// var range = +prompt("Enter range of the table", 10);
// for(var i=1; i<=range; i++){
//     console.log(num + ' x ' + i + ' = ' + (num*i) );
// }

// ------------------------------------------------------------ //

// // 02) break; and continue;
//  The break statement "jumps out" of a loop.
//  The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

// // break;
// var num = 2;
// for (var i=1; i<=10 ; i++){
//     if (i==5){
//         break;    // loop stop when i = 5.
//     }
//     console.log(num + ' x ' + i + ' = ' + (num*i) );
// }

// // continue;
// var num = 2;
// for (var i=1; i<=10 ; i++){
//     if (i==5){
//         continue;    // not run i=5 iteration.
//     }
//     console.log(num + ' x ' + i + ' = ' + (num*i) );
// }

// //03 Task: find out if number is prime or not. (PRIME number is only divisible by itself and 1. (eg: 2,3,5,7,11) )


// var num = +prompt("Enter Number"); //user input
// var num = 12; //hard coded
// var isPrime = true;
// for (var i =2; i<num; i++){
//     var result = num % i;
//     if (result == 0){
//         console.log(num + " is not a Prime Number," + " divisible by " + i);
//         isPrime = false;
//         break;
//     }
// }
// if (isPrime){
//     console.log(num + " is a Prime Number.")
// }

// ---------------------------------------------------------//

// //03 Nested for loop

for (var i=0; i<4; i++){
    for (var j=0; j<3; j++){
        console.log(i,j);
    }
}


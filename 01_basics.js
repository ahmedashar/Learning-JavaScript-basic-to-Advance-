// 01 alert
// 02 variable
// 03 prefix, postfix
// 04 string concatenation 
// 05 Three ways to add string as number
// 06 prompt
// 07 comparison operator
// 08 if, else if, else statements with logical operators and nested if else.


// ------------------------------------------------------------------------ //

//01 alert, An alert is a box that pops up to give the user a message. Here's code for an alert that
// displays the message "Thanks for your input!"

// alert("Thanks for your input!");
// ------------------------------------------------------------------------ //

/////////////// 02 variable //////////////
// variable are container for storing data/values, it can be change, 
// two parts in var , decalaration + assignment
// keyword varName = varValue; //initialization

// code

// var num1 = 10; 
// var num2 = 20;
// var total = num1 + num2;
// console.log(total);

// var userName; // declare
// userName = "Ashar"; // assign
// console.log(userName);

//////////////03,  Prefix, Postfix, increment/Decrement //////////
//  x++ OR x= x+1 OR x+=1
// Postfix , first evaluate then increment
// var x = 5;
// var y = x++;
// console.log(y); //5
// console.log(x); //6

// Prefix , first increment then evaluate
// var x = 5;
// var y = ++x;
// console.log(y); //6
// console.log(x); //6

// Task --> do yourself without compiler (clear the concept of prefix and postfix)
// var n = 5;
// console.log(n+ n-- - ++n + --n * ++n - n);

//            5 + 5 -  5 +    4  *  5 - 5
//             10  - 5 +    20  -5
//               10    + 15    -5
//                  25-5
//                   20  


// ------------------------------------------------------------------------ //

///////////// 04 String concatenation ///////////

// console.log("Ashar " + "Ahmed")
// console.log(2+"2");      // 22 

// var userName= "Ashar";
// console.log("Thanks "+ userName + "!");



//////////IMPORTANT//05 THREE WAYS TO ADD STRING AS NUMBER
// First--> Pass each string to the Number object to convert it to a number.
// console.log(Number("2")+Number("4"));

// Second --> Add Strings as Numbers using unary plus (+) 
// console.log(+"22" + +"10");

// Third --> If your strings end with characters, you have to use the parseInt method instead.
// two parameters in parse 
// i) a string we want to parse to a number
// ii) the radix - he radix parameter is used to specify which numeral system to be used - the default value is not 10, so we have to explicitly pass it

// console.log(parseInt('5abc', 10)); //5
// // This wouldn't work if the non-numeric characters were at the beginning of the string.
// console.log(parseInt('abc5', 10)); //NAN (not a number)
  

// ------------------------------------------------------------------------ //


///////////// 06 Prompt ////////////
// Prompt code is like alert code, with two differences. Return only string
// In a prompt, you need a way to capture the user's response. That means you need to start
// by declaring a variable, followed by an equal sign.

// In a prompt, you can specify a second string. This is the default response that appears in
// the field when the prompt displays. If the user leaves the default response as-is and just
// clicks OK, the default response is assigned to the variable. It's up to you whether you
// include a default response.

// var str= "How old are you? ";
// var age = prompt(str,18);

// var ageUpdate = age+1;
// console.log(ageUpdate); //181
// // to resolve concatenation issue we can use he above methods 05

// var ageUpdated = +age +1; //19


// Task--> tke input (first name , last name and father name) from user using prompt and show output on alert

// var firstName = prompt('Enter your First Name:', 'Mr. ');
// var lastName = prompt('Enter your Last Name:');
// var fatherName = prompt('Enter your Father Name:');
// var name = firstName + lastName;
// alert("Name: " + name + " | " + "Father Name: " + fatherName);

// ------------------------------------------------------------------------ //

///////////// 07  Comparision Operator //////////////
// > is greater than
// < is less than
// >= is greater than or equal to
// <= is less than or equal to
// != isnot equal
// !== isnot equal + data type
// == equal to
// === equal to + equal datatypes

// var a=4;
// var b=6;
// console.log(a>b); //false
// console.log(a<b); //true
// console.log(a>=b); //false
// console.log(a<=b); //true

// var c=4;
// var d="4";
// console.log(c!=d); // false
// console.log(c!==d); // true
// console.log(c==d); // true
// console.log(c===d); // false
 
// ------------------------------------------------------------------------ //

////////////// 08  if else statement /////////////////

// if (condition){
//     block of code to be executed if the condition is true.
// }

//////// using if else condition
// var num = 100;
// if (num >= 90){
//     console.log("A Grade")
// }
// else if (num >= 80){
//     console.log("B Grade")
// }
// else if (num >= 70){
//     console.log("C Grade")
// }
// else {
//     console.log("Not applicable")
// }

////////// nested if else

// var num = 79;

// if (num > 80){
//   console.log('A Grade');
//     if(num>90){
//         console.log('rewards $100');        
//     }
//     else if (num >=85){
//         console.log("rewards $50");
//     }
//     else {
//         console.log("rewards $10");
        
//     }
// }
// else{
//     console.log ('Better luck next time');
// }

///////// with logical operators
// && --> and , || --> OR

// var x="B"; 
// if (x==="A" || x==="E" || x==="I" || x==="O" || x==="U"){
//   console.log("It's a Vowel");
// }
// else{
    
//     console.log("It's not a Vowel");
//  }




// var gender = "Male"
// var age = 12
// if(gender==="Male" && age >=18){
//     console.log("you are applicable for license");
// }
// else {
//     console.log("not applicable")
// }


// var weight = "80kg";
// var height = "6ft";
// var age = 18;

// if ((weight >= "60" || height >=5) && age>18 ){
//     console.log("you are hired");
// }
// else{
//     console.log("not applicable");
// }

// Task --> using if else statement make a temperature converter F to C and C to F


// alert("Welcome To Temperature Converter");
// var select = +prompt('Press 1 for Celsius to Fahrenheit \nPress 2 for Fahrenheit to Celsius', "1");
// if(select === 1){
//       var fValue = +prompt('Enter value in Fahrenheit');
//       var result = (fValue - 32)*5/9;
//       alert( fValue + " F " + " = " + result + " C"  );
// }
// else if (select === 2){
//     var cValue = +prompt('Enter value in Celsius');
//     var result = (cValue* 9/5)+32;
//     alert( cValue + " C " + " = " + result + " F"  );
// }
// else {
//     alert("ERROR: You can only Enter 1 or 2")
// }
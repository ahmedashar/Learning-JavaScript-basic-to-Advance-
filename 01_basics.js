// 01 alert
// 02 variable
// 03 prefix, postfix
// 04 string concatenation 
// 05 Three ways to add string as number
// 06 prompt
// 07 comparison operator






//01 alert, An alert is a box that pops up to give the user a message. Here's code for an alert that
// displays the message "Thanks for your input!"

// alert("Thanks for your input!");

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
//  x++ OR x= x+1
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
//          5 + 5 -  5 +    4  *  5 - 5
//             10  - 5 +    20  -5
//               10    + 15    -5
//                  25-5
//                   20  


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
  




///////////// 06 Prompt ////////////
// Prompt code is like alert code, with two differences.
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
 
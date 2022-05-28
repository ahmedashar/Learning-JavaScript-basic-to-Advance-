// 01 arrays
// 02 Adding and Removing elements in array. (push, pop, shift, unshift, splice, slice)
// 03 Searching function in array (indexOf, lastIndexOf, includes)


// ---------------------------------------------------------------------------//
/////////// 01 arrays --> can store multiple values in single variable, it is an ordered collection which store elements in sequence.
// different datatypes can be used in arrays

// two ways for creating array.

// i. array literal (recommanded)
// var students = ['Ashar', 'Malik', 'Owais', 'Umer'];
// console.log(students[0]); //Ashar
// console.log(students[1]); //Malik
// console.log(students[7]); //undefined
// console.log(students); // return array

// ii. using new keyword (constructor)

// var students = new Array('Ashar', 'Malik', 'Owais', 'Umer');
// console.log(students); // return array

// ----------------------------------------------------------------------------//
/////////// 02 Adding and Removing elements in array.

//custom adding 
// var fruits = ["Apple","Mango"];
// console.log(fruits);
// fruits[2] = "Banana"; 
// console.log(fruits);    // [ 'Apple', 'Mango', 'Banana' ]
// fruits[1] = "Grapes";   //Replace index 1 element by Grapes
// console.log(fruits);    // [ 'Apple', 'Grapes', 'Banana' ]
// fruits[6] = "Orange"; 
// console.log(fruits); // [ 'Apple', 'Mango', 'Banana', <3 empty items>, 'Orange' ]

// // array functions

// // i) push --> add element to the end of the array, return length of array
// var days = ['monday','tuesday','wednesday'];
// console.log(days);
// var pushReturn = days.push('thursday','friday');
// console.log(days);
// console.log(pushReturn); // 5

// // ii) pop --> remove last element of the array. return deleted element
// var popReturn = days.pop();
// console.log(days);  
// console.log(popReturn);  

// // iii) shift --> remove first element of the array. return deleted element
// var shiftReturn = days.shift();
// console.log(days);
// console.log(shiftReturn);

// // iv) unshift --> add element to the begining of the array. return length of the array
// var unshiftReturn = days.unshift("monday");
// console.log(days);
// console.log(unshiftReturn);

// // v) splice --> add element in any index of array. Return deleted element
// SPLICE has 3 parameters, 
// first: pass index no.(where element's add) //Second: how many elemnt deleted//Third: what to be add.

// var students = ['ashar','malik','owais', 'umer'];
// var spliceReturn = students.splice(1,2,'asif','bilal'); // [ 'ashar', 'asif', 'bilal', 'umer' ]
// console.log(students);
// console.log(spliceReturn); // [ 'malik', 'owais' ]


// // vi) slice --> The slice() method returns selected elements in an array, as a new array. The slice() method selects from a given start, up to a (not inclusive) given end. The slice() method does not change the original array.

// var arr = [2,3,4,5,6,7,8,100]
// var sliceReturn = arr.slice(2,6)
// console.log(arr);
// console.log(sliceReturn);

// -----------------------------------------------------------------------//

// //////////////////// 03 Searching function in array

// // i) indexOf() --> find index of the element from index 0 , it has 2 parameters 1st element name and 2nd parameter --> start searching through this index. also work with 1 parameter.
// return -1 if not found.

// var arr = [5,8,12,1,23,2,100,50,12,14];
// var indexOfReturn = arr.indexOf(12,3);
// console.log(arr);
// console.log(indexOfReturn);


// // ii) lastIndexOf() --> same as indexOf but search from last index.

// var arr = [5,8,12,1,23,2,100,50,12,14];
// var lastIndexOfReturn = arr.lastIndexOf(12,9);
// console.log(arr);
// console.log(lastIndexOfReturn);


// // iii) includes() = find the elements in array and give answer in True/False. 
// var arr = [ 'ashar', 'asif', 'bilal', 'umer' ];
// var includesReturn = arr.includes('bilal');
// console.log(includesReturn);


{/* These are examples from the videos on spread operators... */}

function doSomething(a,b,c){
	console.log(a,b,c);
}

let array = [5,6,7]
doSomething(array);

function doSomething2(a,b,c){
	console.log(a,b,c);
}

let array2 = [5,6,7]
doSomething2(...array2);

let obj1 = {
 name: 'o1',
 value1: 1,
 value2: 2
};

let clone = {...obj1, name: 'o2'};

console.log(clone);

{/* These are examples of destructuring - technique to take an object or array
		and take their distinct values and assign them to distinct variables. 
		This is used with the import keyword alot.*/}

let array3 = [3,5,7,9];
let object = {
	propertyOne: 'p-one',
	propertyTwo: 'p-two',
	propertyThree: 'p-three'
};

let [a,b,c] = array3;
console.log(c);
console.log(b);

let {propertyOne, propertyThree} = object;
console.log(propertyThree);

{/* Examples of destructuring an import. We'll see this alot in React */}
{/* import {Component} from 'react';*/}




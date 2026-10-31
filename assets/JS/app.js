const cl = console.log;

//HOF >> Array helping methods >> A function which accepts another function as argument is called HOF
//callback function >> A function which passed as argument in another function
//OR
//A function which we will call after something happend or execute

//forEach :
//can not returns 
//can not create new array automatically.

//map : 
//we have given array and we have to create new array
//it returns a new array
//by applying same functionality on every element of the given array

//filter:
//we have given array with at least one condition
//we have to create a array of those element who pass the given condition
//length of the new arrray may be or may not == length of the given array
//it will return the all element (in the form of array) who satisfied the given conditions
//if there is no element who satisfies given condition === [];
//it will gives us array not element
//filter ke callback function ke block me direct condition ko return karo

//find:
//we have given array with at least one condition 
//we have to find a element who pass the condition
//it will return the 1st element who satisfied the given condition 
//if there is no element who satisfied given condition === undefined
//it will give us single value / element (not array)

//findindex: 

//sort: it sort the numbers by lexico graphical comparision

//reduce:

//some and every : 
// it return true and false value
//some >> it will return boolean
//we have a array at least one condition/s
//we have to find that at least one element of given array pass condition/s
//if we got the element who pass given condition. some will return true and break the loop.

//every : 
//we have given array with condition/s
//we have to find that every element of the array pass given condition
//if every element pass given condition >> return true
//if any one conditions fails >> return false

//flat: it converts multiple array into single array

//fill: it fill the given part
//start: is included in resultant part
//end: is not included in resultant part


//--------------flat------------------//
//Example 1 :
//By using flat
let num = [10,[[20,30],40,50,60,70],80,90]
let result = num.flat(4);
cl(result);

//Example 2 :
//By using flat
let numbers = [10,[[20,30,40],[50,[60,70],80,[90,100],110],][120,130],140];
let result1 = num.flat(Infinity);
cl(result1);

//--------------fill------------------//
//Example 1 :
//By using fill
let num1 = [10,20,30,40,50,60];
num1.fill(0,1,4)
cl(num1);

//Example 2 :
//By using fill
let result2 = new Array(5).fill(0);
cl(result2);

//Example 3 :
let result3 = (num) =>{
    return new Array(num).fill(0).map((_,i) => i+1)
    }
cl(result3(7));
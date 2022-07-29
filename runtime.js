const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(largeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(largeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


// extraLargeArray
// doublerInsert 949.142769 ms
// doublerAppend 4.083613 ms

// tinyArray
// doublerInsert 40.897 µs
// doublerappend 96.112 µs

// smallArray
// doublerInsert 52.586 µs
// doublerAppend 101.476 µs

// mediumArray
// doublerInsert 162.602 µs
// doublerappend 148.076 µs

// largeArray
// doublerInsert 6.698461 ms
// doublerAppend 619.55 µs


//SCALING


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}

// This one scales as constant O(1).

//The one above "doublerAppend" scales better because the equation is simply pushing a number to the end of the array, whereas the doublerInsert function has to loop through the array each time it wants to add a number, since .unshift pushes a number ot the beginning of the array. 


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}

//this one scales as linear O(n)


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}

//This one scales as constant O(1)

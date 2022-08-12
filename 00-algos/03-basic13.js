//print all the integers from 1-200

// for(let i = 1; i<=200; i++ ){
//     console.log(i);
// }


//print all the even numbers from 1-100
// for(let i = 2; i<=100; i=i+2 ){
//     console.log(i);
// }

//print all the odd numbers from 1-30
// for(let i = 1; i<=30; i++ ){
//     if(i % 2 === 1){
//         console.log(i);
//     }
// }


//print all the even numbers from 1-30
// for(let i = 1; i<=30; i++ ){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }


//print all the number from 1-30 that are divisible by 3
// for(let i = 1; i<=30; i++ ){
//     if(i % 3 === 0){
//         console.log(i);
//     }
// }




//Print integers from 0 to 255, and with each integer print the sum so far.

//create a variable to store the sum so far and set it to 0
// let sumSoFar = 0

// //loop from 0 to 255
// for(let i = 0; i<=255; i++){
//     //add i to the sumSoFar
//     sumSoFar += i;

//     //print i and sum so far
//     console.log(i,sumSoFar);

// }



//Iterate through a given array, printing each value.
//let favMeals = ["Calamari", "Sushi", "Steak", "Fried Chicken", "Lasagna"]; //elements are (calamari, sushi, steak, etc;)
//                  0          1        2         3                4        //the indexes are the positions of each element in the array
    

// for(let i = 0; i< favMeals.length; i++){
//     console.log(favMeals[i])
// }

// console.log(favMeals[0])
// console.log(favMeals[1])
// console.log(favMeals[2])



//Given an array, find and print its largest element.

function findMax(arr){
    let max = arr[0];
    for(let i = 0; i< arr.length; i++){
        //if the current value (arr[i]) is greater than our max, then update max to be the current value
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log(max);
}


// findMax([3,16,7,2])
// findMax([1,2,3,4,20])


//write a function that accepts an array and finds the sum of all the values in the given array

function sumOfAll(arr){
    let totalSum = 0;
    //go through each and every element in the array and add that element to the total sum
    for(let i = 0; i<arr.length; i++){
        totalSum+= arr[i];
    }

    console.log('total sum from sum function', totalSum)
    return totalSum
}


// sumOfAll([2,4,10,100]) //116;
//        0 1 2  3


function findAverage(arr){
    //find the sum of all values in the array
    let totalSum = sumOfAll(arr);
    // console.log('total sum in find average function', totalSum)
    //divide the sum by the number of values in the array
    let average = totalSum/arr.length;
    // console.log(average)
    return average;
}


function returnOddsArray1To255(){
    //create an empty array to put numbers inside of
    let result = [];
    //start at 1 and generate all the odd numbers from there by adding 2 each time until i reach 255
    for(let i = 1; i<=255; i=i+2){
        //each time i have an odd number, i will put it into the array
        result.push(i);
    }

    // console.log(result);
    return result;
}

//the value of a function call is whatever that function call returns
// console.log(returnOddsArray1To255());



//SquareArrayVals(arr)- Square each value in a given array, returning that same array with changed values.

function squareArrayVals(arr){
    //go through the array and look at each and every value
    for(let i = 0; i<arr.length; i++){
        // console.log(arr[i]);
        //for each value i have to multiply it by itself to get the squard value
        let squardVal = arr[i] * arr[i];
        
        //update the array to have that squared value at the current position i was looking at
        arr[i] = squardVal;
    }

    // console.log(arr)
    return arr;

}

// squareArrayVals([2,5,9,12]) 


//ReturnArrayCountGreaterThanY(arr, y) -- Given an array and a value Y, count and print the number of array values greater than Y.


// [23,3,0,1,11,32,8,24,6]

// 4

function returnArrayCountGreaterThanY(arr, y){
    //need to keep track of how many values i find that are greater than y
    let hand = 0;
    //look at each and every element in the array
    for(let i = 0; i<arr.length; i++){
        //for each element check IF the element is bigger than y
        if(arr[i]>y){
            //if current element is bigger than y, increase count by 1
            hand++;
        }

    }
    // console.log(hand)
    return hand;
}


// console.log(returnArrayCountGreaterThanY([23,3,0,1,11,32,8,24,6], 4));



//ZeroOutArrayNegativeVals(arr) Return the given array, after setting any negative values to zero.


//[23,-6,-8,12,9,-3]


function ZeroOutArrayNegativeVals(arr){
    //look at each and every value in array
    for(let i = 0; i<arr.length; i++){
        //if the current value less than zero
        if(arr[i]<0){
            //update the array at that current POSITION  with the number 0
            arr[i] = 0;
        }

    }

    // console.log(arr)
    return arr;

}

// console.log(ZeroOutArrayNegativeVals([23,-6,-8,12,9,-3]));

//PrintMaxMinAverageArrayVals(arr)--> Given an array, print the max, min and average values for that array.


// [2,4,6,0]

function PrintMaxMinAverageArrayVals(arr){
    //assume the first value is the max and store it in a variable
    let max = arr[0];
    //assume the first value is the min and store it in a variable
    let min = arr[0];

    //go through the elements in the array
    for(let i = 1; i<arr.length; i++){
        //compare each element to see IF it is larger than the current max
        if(arr[i] > max){
            //if larger than current max, update max to be the current element
            max = arr[i];
        }

        //compare each element to see IF it is smaller than the current min
        if(arr[i] < min){
            //if less than current min, update min to be the current element
            min = arr[i];
        }

    }

    console.log("Max is this", max)
    console.log("Min is this", min)
    let average = findAverage(arr);
    console.log("Average is: ", average)

}

// console.log(PrintMaxMinAverageArrayVals([2,4,6,0]))



//ShiftArrayValsLeft(arr)- Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.


//[23,8,99,11,12]
// 0  1  2  3  4


function ShiftArrayValsLeft(arr){
    //go through each element in the array at every index
    for(let i = 0; i<arr.length; i++){
        //at the current index, figure out what value is at the next index and updated teh array at the current index to have that value from the next index
        if(arr[i+1] !== undefined){
            arr[i] = arr[i+1];
        }else{
            //if i am at the last index and there is not value at the next index, i will update the current indx with 0
            arr[i] = 0;
        }
    }

    return arr;
}

// console.log(ShiftArrayValsLeft([23,8,99,11,12]));




//SwapStringForArrayNegativeVals(arr)- Given an array of numbers, replace any negative values with the string 'Dojo'.
function SwapStringForArrayNegativeVals(arr){
    //look at each and every value in array
    for(let i = 0; i<arr.length; i++){
        //if the current value less than zero
        if(arr[i]<0){
            //update the array at that current POSITION  with the number "dojo"
            arr[i] = "Dojo";
        }

    }

    // console.log(arr)
    return arr;

}


console.log(SwapStringForArrayNegativeVals([4,-7,5,-2,-9,2]))




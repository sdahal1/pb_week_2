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
    console.log('total sum in find average function', totalSum)
    //divide the sum by the number of values in the array
    let average = totalSum/arr.length;
    console.log(average)
}


findAverage([10,20,30,40,50])



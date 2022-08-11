// Week 2 Day 2
// WARM UP: Write some code that loops through an array and prints the values out.
// EX: given var arr = [1,5,8,2,6], your console should print out:
// 1
// 5
// 8
// 2



let topArtists = ["Drake", "Lupe Fiasco", "Tupac", "Cardi B", "Rihanna", "Adele", "Bab Bunny", "Machine Gun Kelly", "Carrie Underwood", "Kanye"]; //each value in the array is called an element
//index             0           1           2           3           4       5           6           7                   8                   9      10
let topBallers = ["Lebron", "Kobe", "Luka", "Steph", "Giannis", "KD"];
//index             0           1       2       3       4          5
//last index number of an array is calculated by : array.length-1


// console.log(topArtists[0]);
// console.log(topArtists[1]);
// console.log(topArtists[2]);
// console.log(topArtists[3]);
// console.log(topArtists[4]);

function printValuesInArray(arr){
    for(let i = 0; i<arr.length; i++){
        console.log(arr[i]);
    }
}


// printValuesInArray(topArtists);
// console.log("*******");
// printValuesInArray(topBallers);
// console.log("*******");
// printValuesInArray([3,6,9,10]);



// Values greater than second
// Given an array, write a function that returns the number of values in the array that are larger than the second value in the array.


// EX: given an array [2,5,19,3,10,9], your second value is 5 and the number of values greater than 5 in the array is 3
// EX: given an array [4,3,10,1,6,9,2], your second value is 3 and the number of values greater than 3 in the array is 4



let randomNums = [23, 2, 3, 0, 12, 10, -5, 6, -23];
//                0   1  2  3   4   5   6   7   8

//second value in randomNums is 2

function valuesGreaterThanSecondVal(arr){
    //store the second value in the array inside a variable
    let secondVal = arr[1];
    let count = 0;
    //loop through the array starting at index 0 all the way to the end of the array (last index of array)
    for(let i= 0; i<arr.length; i++){
        //if the current element at the current index (arr[i]) is greater than the second value (secondVal), then we will print the current element
        if(arr[i] > secondVal){
            count++;
            // console.log(arr[i]); //print the current element
        }
    }

    console.log(count)
    return count;
}


valuesGreaterThanSecondVal(randomNums)











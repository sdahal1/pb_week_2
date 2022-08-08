//a loop is used whenever we want to repeat a process a certain number of times
//a function is a set of instructions that we can execute and we can pass in data to it as inputs



//create a function that will accept a number as an input to count down from, and it will count down from that number until it hits 0;
function countDown(num, stopNum){ //num is the parameter
    //this is the body of the function
    for(let i = num; i>=stopNum; i--){
        //this is the body of the for loop
        console.log(i);
    }
    console.log("finished");
}

//this is us calling the function (in other words: invoking the function/executing the function)
countDown(23, 3); //23 is the argument
countDown(3, 0); //3 is the argument
countDown(8, -23); //8 is the argument







console.log("finished!")
//in a for loop, inside the parenthesis, there are three parts:
    //let i = 5 --> where to start our loop from
    //middle part ( i>=1) --> when to stop the looping process
    //third part (i--) ---> what to do with our variable after each iteration
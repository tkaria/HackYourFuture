var divisible3 = function () {
    console.log('The number is divisible by 3 \n');
}

var divisible5 = function () {
    console.log('The number is divisible by 5 \n');
}


function threeFive(startIndex, endIndex, div3, div5) {
    for (var i = startIndex; i < endIndex; i++) {
        var arr = [];
        arr.push(i);
        console.log(arr);
        console.log('Added number ' + i);
        console.log('Checking array position: ' + i);
        if (typeof arr[i] === 'undefined') {
            console.error('arr[' + i + '] is undefined')
        }
        if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
            div3;
            div5;
        } else {
            if (arr[i] % 3 === 0) {
                return div3;
            } else if (arr[i] % 5 === 0) {
                return div5;
            } else {
                console.log('The number ' + arr[i] + ' is not divisible by 3 or 5');
            }
        }
    }
}

// What's going on when we run this? 
threeFive(1, 15, divisible3, divisible5);

/** 
What do we expect? 
We defined the problem to be inclusive of the start and end indices. 
So we have a bug(s)... let's debug

1) We should be creating an array that has all elements between 1 and 15 INCLUSIVE!
How do we change the loop indices to fix this? 

2) Put a log statement to see what number we are actually testing!
Where? 

3) Printing the array shows that we have only one element in the array at any time! 
Why?

4) Let's separate the creation of the array from the checking of the numbers in it? 
How? Hint: we'll need two for loops

5) Remember that calling a function is different from the variable that holds a function. 
Calling a function means you have to use the () syntax and optionally pass any arguments. 
Are we calling div3 or printing it's values? 


*/



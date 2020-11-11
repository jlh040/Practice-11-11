//Write a function to find the sum of numbers in an array

function sum(arr) {
    return arr.reduce(function(accumulator, nextValue) {
        return accumulator + nextValue;
    })
}

//Write a function to find the maximum number in an array

function minNum(arr) {
    return arr.reduce(function(min, nextValue) {
        if (nextValue < min) {
            min = nextValue;
            return min
        }
        return  min;
    })
}








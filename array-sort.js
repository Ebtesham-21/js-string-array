const numbers = [4, 7, 1, 3, 9, 2, 5];
const sortedNumbers = numbers.sort();
console.log(sortedNumbers);
console.log(numbers.reverse());

// number sorting fun

const bigNumbers = [66, 58, 81, 92, 9, 6, 37, 13, 2];
const sortedBignumbers = bigNumbers.sort(function(a, b) {
    return (a - b);
});
console.log(sortedBignumbers);
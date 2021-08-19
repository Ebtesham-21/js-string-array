const anthem = 'Amar Sonar Bangla Ami Tomay Valobashi';
const words = anthem.split('');
const wihtoutA = anthem.split('a');

// slice 
const smallSlice = anthem.slice(5, 13);

// substr
const anotherPart = anthem.substr(5, 7);

// substring 
const again = anthem.substring(5, 7);

// concat 
const first = 'amader';
const second = 'city';
const fullString = first + second;
// or
const fullString = first.concat(second);
// this is another way to connect
const words = ['a', 'b', 'c', 'd'];
const allJoined = words2.join(' ');
const allJoined = words2.join(',  ');
console.log(allJoined);
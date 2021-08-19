// function megaFriend(friends) {
//     // isarray to check invalid Input(perameter) 
//     if (Array.isArray(friends) == false) {
//         return 'Please Provide An Array'
//     }
//     let mega = friends[0];
//     for (const friend of friends) {
//         if (friend.length > mega.length) {
//             mega = friend;

//         }
//     }
//     return mega;
// }
// const friends = ['kutub', 'lion', 'Shamol', 'Sabbir'];
// const myBigBuddy = megaFriend();

// // indexOf to check if an item exists
// if (friends.indexOf('Fox') != -1) {
//     console.log('lion exists');
// } else {
//     console.log('Fox dont exists');
// }


// // includes just like string 
// if (friends.includes('Lion')) {
//     console.log('Lion exists ');
// }

// concat just like string to connect two arrays
const first = [1, 2, 3, 4];
const second = [5, 6, 7, 8];
const combined = first.concat(second);
console.log(combined);
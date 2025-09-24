// Generate two arrays with 1000 elements each
// Only the last element should be the same between both arrays

// Create array1 with 999 unique elements + 1 common element at the end
const array1 = [];
for (let i = 0; i < 999; i++) {
    array1.push(`a${i}`);
}
array1.push('common_element'); // Last element - same in both arrays

// Create array2 with 999 different unique elements + 1 common element at the end
const array2 = [];
for (let i = 0; i < 1999; i++) {
    array2.push(`b${i}`);
}
array2.push('common_element'); // Last element - same as array1

// function containsCommonItem(array1, array2) {
//     const start = performance.now();    
//     for (let i = 0; i < array1.length; i++) {
//         for (let j = 0; j < array2.length; j++) {
//             if (array1[i] === array2[j]) {
//                 const end = performance.now();
//                 console.log('Time taken: ' + (end - start) + ' milliseconds');
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// function containsCommonItem(array1, array2) {
//     let map = {};
//     const start = performance.now();
//    for (let i = 0; i < array1.length; i++) {
//     map[array1[i]] = true;
//    }
//    for (let i = 0; i < array2.length; i++) {
//     if (map[array2[i]]) {
//         const end = performance.now();
//         console.log('Time taken: ' + (end - start) + ' milliseconds');
//         return true;
//     }
//    }
//     return false;
// }

function containsCommonItem(array1, array2) {
    const start = performance.now();
    const result = array1.some(item => array2.includes(item));
    const end = performance.now();
    console.log('Time taken: ' + (end - start) + ' milliseconds');
    return result;
 }

console.log(containsCommonItem(array1, array2));
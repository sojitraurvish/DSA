// const array1=[2,1,1,2,3,5,1,2,8];


// let result = [];
// let answer ;
// for(let i=0;i<array1.length;i++){
//     if(!result.includes(array1[i])){
//         result.push(array1[i]);
//         continue;
//     }else{
//         answer = array1[i];
//         break;
//     }

// }
// // this logic is impletemted by mine but here we used somgin called as hash table check image

// console.log(answer);


const array2=[2,1,1,2,3,5,1,2,8];

function firstRecurringCharacter(array){
    // let map = new Map();
    let map = {};
    for(let i=0;i<array.length;i++){
        if(map[array[i]]!==undefined){
            return array[i];
        }else{
            map[array[i]]=i;
        }
    }
}

console.log(firstRecurringCharacter(array2));
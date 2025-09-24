// merge to arrays


const array1=[0,3,4,31];
const array2=[4,6,30];

// const mergeArray=(arr1,arr2)=>{
//     return [...arr1,...arr2];
// } 
const mergeArray=(arr1,arr2)=>{
    const mergedArray=[];
    let i=0;
    let j=0;
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i]<arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    return mergedArray;
}

console.log(mergeArray(array1,array2));
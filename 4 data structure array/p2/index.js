

const stringToReverce="Hi My name is Andrei"

// function reverse(str) {
//     return str.split('').reverse().join('');
 
// }

const reverse2=(str)=>[...str].split('').reverse().join('');
function reverse(str) {

    if(!str || str.length<2 || typeof str !=='string') {
        return "hmm that is not good";
    }

    let reversedString="";
    for(let i=str.length-1;i>=0;i--) {
        reversedString+=str[i];
    }
    return reversedString;
}
 
console.log(reverse(stringToReverce));
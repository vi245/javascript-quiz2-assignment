//Merge to sets in javascript 

const oddNumbers = new Set([1,3,5,7,9]);
const evenNumbers= new Set([2,4,6,8,10,10]);// contain only unique values

const oddEvenNumbers= new Set([...oddNumbers,...evenNumbers]);
console.log(oddEvenNumbers);
// Reverse an array

const swapTwoElement=(arrayOfNums,a,b)=>{
    let temp=arrayOfNums[a];
    arrayOfNums[a]=arrayOfNums[b];
    arrayOfNums[b]=temp;
}

const reverseAnArray=(arrayOfNums)=>{
    var n=arrayOfNums.length;
    console.log(n);
    var i=0;
    while(i<Math.floor(n/2))
    {
        if(arrayOfNums[i]===arrayOfNums[n-1-i])
        {
            continue;
        }
        else{
         swapTwoElement(arrayOfNums,i,n-1-i);
        }
        i++;
       
    }
    console.log(arrayOfNums);
    
}
const arrayOfNums=[5,8,6,4,7,1,25,4,1,5,4,55,56];
reverseAnArray(arrayOfNums);
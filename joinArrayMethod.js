// join() array method in javascript


let cars=["verna","brezza","bmw","wrangler"];

console.log(cars.join());//return the string with default comma as a separator
console.log(cars.join(' '));// return the array as a string with space between values
console.log(cars.join(' + '));
console.log(cars.join(' and '));
 
// use join on array of objects

let CarDetail=[{
    modelNo:1211,
    name:"verna",
},
{
    modelNo:1311,
    name:"brezza",}
,
{
    modelNo:1411,
    name:"bmw",
},
{
    modelNo:1511,
    name:"wrangler",
}];
console.log(Object.keys(CarDetail).map(key=>`${key}:${CarDetail[key].name}`).join(' '));
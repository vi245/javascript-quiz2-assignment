//Show all the values of an array in a html webpage using DOM and forEach method

let fruits=["apple","mango","banana","pineapple","figs"];
const root=document.getElementById('root');

fruits.forEach(fruit=>{
    const para=document.createElement('p');
    const text=document.createTextNode(`${fruit} `);
    para.appendChild(text);
    root.appendChild(para);
})

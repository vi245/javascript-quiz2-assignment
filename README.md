Javascript Quiz2 Assignment

# Why do we use functions in JavaScript?

Functions are reusable code that is used for specific purpose.It also removes
redundency in code and makes code clearer to understand.It also takes input and return
output.

```JavaScript
  function multiply(a,b) //input
  {
    let mult=a*b;
    return mult; //output
  }
```

# What is Function Invocation?

It is used to execute the code of function.Normally we used the term "call a function".

```JavaScript
  function multiply(a,b) //input
  {
    let mult=a*b;
    return mult; //output
  }
  multiply(2,3); //function invocation
```

# Does a function behave like an object in Javascript? Prove it by an example.

Yes, Functions are the instances of the Object prototype and they can also be stored in
variable or an array and be passed as arguments to other functions.
They also have properties and methods like an object.

```JavaScript
 function Person(name,age){
        this.name=name;
        this.age=age;
        this.getDetails=function(){
            return `${name} is ${age} years old`;
        }
 }
 Person p= new Person("John",25);
 console.log(p.getDetails()); // John is 25 years old

 function operation(callback,x,y)
 {
    var output=callback(x,y);
    console.log(output);
 }
 fucnction add(x,y)
 {
    return x+y;
 }
 fucnction multiply(x,y)
 {
    return x*y;
 }
 operation(add,5,7);//12
 operation(multiply,5,7);//35
```

# What are Events in Javascript?

Events are triggered when user interacts with webpage or it could be by browser also.
for example onclick,onload,onchange these are the events that get triggered when user
click on element or when window loaded.

# What is a string?

string is a primitive data type in javascript. It is used to store string values and are
immutable(means unchanging).It is a sequence of one or more characters.
for example:

```JavaScript
let name="john";
```

# What is an array? Is it static or dynamic in Javascript?

An array is dynamic in javascript as there is no need to define the size and type of data
during initialization.They are accessed using indexes.
for example:

```JavaScript
let fruits=["apple","mango","banana"];
```

# Difference between Map and Set?

- Map:
  A map holds data in the form of **key-value pair** where the keys can be of **any datatype**.
  It has the property which represents the size of the map and also remembers original insertion
  order of the keys.

```JavaScript
const cars=new Map([["verna",1211],["brezza",1311],["bmw",1411]]);
let text="";
for(const x of cars.entries()){
    text=text+x;
    console.log(text);//"verna",1211 "brezza",1311 "bmw",1411
}
```

- Set:
  A SET is a collection of unique values.Each value can occur only once in a set.
  It holds data in the form of value-value pair

```JavaScript
const cars=new Set([["verna",1211],["brezza",1311],["bmw",1411]]);
let text="";
for(const x of cars.entries()){
    text=text+x;
    console.log(text);//"verna",1211 "brezza",1311 "bmw",1411
}
```

# Difference between Array and Map?

Array is a collection of elements of same data type.It stores data in the form of numbered indexes
starting from 0.

A map holds data in the form of **key-value pair** where the keys can be of **any datatype**.
It has the property which represents the size of the map and also remembers original insertion
order of the keys.

# What are array methods? List a few names?

An array is an instance of the Object and method is a property of the Object(Array)
contaning function definition.
These are used to perform operations or manipulation on elements of the array.
for example->map(),filter(),join(),forEach(),fill() etc.

# In how many ways can we traverse through an array in Javascript?

We can traverse through an array using for() loop, while() loop, do while(),
map(),forEach().

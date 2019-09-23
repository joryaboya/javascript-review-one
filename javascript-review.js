
// You may NOT use Google. These questions are to test how you are progressing through the material, and to give you some feedback about where you might improve. Get through as many of these as you can. If you don’t get through all of them it’s ok - the test is designed to be difficult. If you can’t remember a bit of code, write the pseudo-code that represents how you would write your JS code.

// 1.

// Create an object that has four properties. One property should be set so that the value is a number, another property set to a string, the third to an array, and the fourth to a function. This function should simply console.log the value of the first property.

// const myObject = {
//     number: 9,
//     string: "string",
//     array: [],
//     myFunc: function() {
//         return this.number + this.string;
//     }
// }

// console.log(myObject.myFunc())

// 2.

// Write a constructor function (to create objects) that takes one argument. It should use that argument to set the value of the first attribute of the object. There should be a second attribute that stores the value ‘red’. 

// function Constructor(arg1){
//     this.firstAttribute = arg1;
//     this.secondAttribute = "red"
// }

// let me = new Constructor("Jordan")
// console.log(me)

// Note that a constructor function is the old school syntax that was used in javascript before the sugar class syntax came along. 

// 3.

// Can you access variables defined outside of functions within the scope of functions in JS? Show a simple example of this being used? (Define a constant in global scope and use that in a very simple function.)

// const number = 8

// function addMe(){
//     return 4 + number
// }

// console.log(addMe())

// 4.

// What two ways can be used to access the properties of objects in JS? Give examples of both (although assume the objects have been defined).

// const myObject = {
//     name: "Jordan",
//     age: 22,
// }

// console.log(myObject.name)
// console.log(myObject["age"])
// 5.

// What is JSON? Be clear but concise.

"JSON stands for Javascript OBject Notation, it is used as a file to transfer data in a small size to reduce cost and time"

// 6.

// What is a callback?

"A callback is a function that is defined globally or within scope of another function which is passed in as an argument or used inside of that function. Ot is usually executed after the parent function has finished"

// 7.

// Define a function with that takes two number arguments and a callback. The function will add the two numbers and pass them to the callback as an argument. Now call this function and in the callback simply console.log out the argument that has been passed through.

// function logInput(input){
//     console.log(input)
// }

// function addTwo(num1,num2){
//     result = num1+num2;
//     return logInput(result)
// }

// addTwo(7,3)

// 8.

// Why do we use promises?

"We use promises to handle asynchronous functions. These can be used when contacting an API for data exchange which take time, a promise allows the code to progress knowing something will be returned wehter it be handled data or an error thrown"

// 9.

// What are the two methods at our disposal if we have hold of a promise? What are the names of the functions that are related to these functions (that are called when the promise is fulfilled or fails).

"We have two methods for a function to be handled, resolve and reject which depending on what is returned by the promise handle it differently"

// 10.

// What is the DOM?

"DOM is the structure of our webpages and we can use javascript to manipulate it by accessing/appending elements to it"

// 11.

// Create an object that has three properties. One property is called ‘count’ and will be set to a number, the second will be set to an array, and the third to a function. This function should simply console.log each of the values of the second property on a new line.

// const myNewObj = {
//     count: 0,
//     arr: [1,2,3,4,5],
//     logger: function(){
//         this.arr.forEach(number => {
//             console.log(number)
//         })
//     }
// }

// myNewObj.logger()

// 12.

// What is NPM? In your brief explanation refer to package.json.

"Is a library that contains various javascipt dependencys that can be required into code, it installs these dependencys to the package.json"

// 13.

// What are Event Listeners? Gives some examples in your response.

"Event listeners are used to carry out functions upon action to an element on a webpage. They can be triggered on click or on-hover"

// 14.

// Define a function called numMult that takes two number arguments and a callback. The function will multiply the two numbers and pass the result to the callback as an argument. Now call numMult and in the callback simply console.log out the argument that has been passed through.

// function callBack(arg){
//     console.log(arg)
// }

// function numMult(num1,num2){
//     result = num1*num2;
//     return callBack(result)
// }

// numMult(4,5)

// 15.

// a.
// Define a function called addNum with that takes two number arguments. In this function simply return the addition of these numbers. 

// function addNum(num1,num2){
//     return num1+num2
// }

// b.
// Write a second function called numsPlusFunct that takes three arguments, two numbers and a function. Inside numsPlusFunct call the function that is passed as an argument, and pass the two number arguments to this function. numsPlusFunct will return an object where the first property has the value returned from that function call, and the second property is a string. 

// function numsPlusFunct(num1,num2, func){
//     callbackResult = func(num1,num2)
//     returnObject = new Object
//     returnObject.resultant = callbackResult;
//     returnObject.string = "Multiplication is Cool"
//     return returnObject
// }



// c.
// You have now made two functions. Call the numsPlusFunct and pass addNum as the appropriate argument. 

// console.log(numsPlusFunct(8,3,addNum))

// 16.

// What is Express? What does it help us to do?

"Express is a web framework that allows us to use local servers to display our code"

// 17.

// What is the difference between synchronous and asynchronous code? Name some ways that JS deals with the issue of asynchronous code. 

"Asynchronous code includes functions or promises that are not run when the machine reads it, instead the code progresses as it always does in synchronous code and later executes the code that is time dependent"

// 18.

// What is fetch and how does it relate to AJAX? Give an example of how you would use it. What does fetch return? Give a very basic example of fetch.

"Fetch is a dependency that you can install using npm, it allows you to exchange data with an api endpoint and in doing so returns a promise meaning it is also an asyncronous function which is how it relates to AJAX. If you wanted a set of Pokemon data you can use fetch to access the API endpoint and it returns a response in the form of a promise, once fullfilled the promise data can be used in the applicaiton"

// 19.

// A JS object looks like this: const southernField = { location: “upper”, crop: “sorghum”, watered: false }. Use destructuring to store the value of watered in a variable.

// 20.

// a.
// Uncomment the code below.

// let newNum = 1

// const myFunc = (num, callback) => {
//   newNum *= num
//   callback(newNum)
// }

// myFunc(10, (sum) => {
//   myFunc(10, (sum) => {
//     myFunc(10, (sum) => {
//       console.log(sum)
//     })
//   })
// })

// b.
// Explain in your own words how this code works. For example you could start with something like:

// "Firstly, the letNum variable is initialized and receives the value of the number 1. Secondly, the myFunc function is invoked. It received the arguments of..." 

"newNum is initiallised to be 1, then myFunc is inititalised with a callback function within it where newNum is being multiplied by the argument num. By calling the function initially with num = 10, the function is called back by itself meaning it will update newNum 3 times as it is called back that many times using num = 10, yet the last time the function just logs the result which after 3 functions have been run will return 1000"

// 21.

// a. Uncomment the code from below

// // this is a factory function, it's another syntax for creating objects similar to the constructor function syntax

// function Person(name) {
//   function sayHi() {
//     console.log('hello')
//   }
//   return {
//     name,
//     sayHi
//   }
// }

// const harrison = Person("harrison")

// console.log(harrison)
// b. 
// What does this function return?
"This function returns an object with the keys of name and sayHi, where sayHi is a function"
// c.
// How do you call the sayHi() function?

// harrison.sayHi()

// 22. 

// a. 
// Using the code from above as a template, implement the same functionality using the class sugar syntax 
// Note that you'll need to comment out the code from above for this to work
// b. 
// Implement another instance method for your class that takes in age and height (in cms) as arguments (both number type) and adds these arguments as attributes to your person object

// console.log the updated person object showing all three attributes (name, age, height) as being a part of the person object

// class Person{
//     constructor(name, age, height){
//         this.name = name,
//         this.age = age,
//         this.height = `${height}cm`,
//         this.sayHi = function(){
//             console.log("hello")
//         }
//         this.personObj = {name,age,height}
//     }
// }

// const harrison = new Person("harrison", 23, 190)
// console.log(harrison.personObj)




// 23. 

// Define a function named waitBeforeSum that takes 2 numbers as arguments. Your function should sum these numbers together but only after waiting for 4 seconds inside of a setTimeout.
// What do we need to use to access the value in the setTimeout only after the 4 seconds? Write the code to achieve this.

function waitBeforeSum(num1,num2){
    setTimeout(function(){console.log(num1 + num2)}, 4000)
}




// waitBeforeSum(3,2)



// When we invoke waitBeforeSum we'll have two different options to avoid getting a pending promise. What are these 2 options?

"Make it an async function and in doing so could make it thenable"

// Define another function named accessSum and make it an async function. Using the await keyword call waitBeforeSum inside of the accessSum function and store the resolve in a variable called result. console.log the result inside of the async function

// Add a try and catch block to your accessSum function, make it go into the catch when the sum is greater than 10, when you console.log the the error that you get as a parameter in the catch it should say 'the sum was greater than 10'


// async function accessSum(){
//     try{
//     const result = await waitBeforeSum(10,2)
//     console.log(result)
//     if(result > 10){throw"sum was greater than 10"}
//     else if(result<10){console.log(result)}
//     }catch(err){
//         console.log(err)
//     }
// }

// accessSum()

// 24. 

// a. 
// run the following commands
// npm init -y
// npm install node-fetch

// b. 
// Using the following API endpoint access the Australian flag svg link and console.log it
// => https://restcountries.eu/rest/v2/all
const fetch = require('node-fetch');
// const flags = fetch("https://restcountries.eu/rest/v2/all")
// flags.then(response => {
//     const resp = response.json()
//     return resp
// }).then(data => {
//     data.forEach(country =>{
//         if(country.name === "Australia"){
//             console.log(country.flag)
//         }
//     })
// })


// c.
// Using the following API endpoint console.log all the characters names, you'll need to perform a nested fetch 
// => https://swapi.co/api/films/1/

const flags = fetch("https://swapi.co/api/films/1/")
flags.then(response => {
    const resp = response.json()
    return resp
}).then(data => {
    data.characters.forEach(character =>{
        fetch(character)
        .then(response => {
            const resp = response.json();
            return resp 
        }).then(character =>{
            console.log(character.name)
        })
    })
})

// 25. 

// a. 
// In this directory create a new folder named dom

// b.
// Inside of the dom directory create these two files index.html and script.js

// c.
// Append the following elements to the body of the index.html using javascript, it should look like this https://dl.dropboxusercontent.com/s/qudmuyn8tpvyhtc/javascript_site.png
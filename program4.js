// const EventEmitter = require('events');
// const myEmitter = new EventEmitter();


// myEmitter.once('greet', (name) => {
//     console.log(`Hello, ${name}! This will only be logged once.`);
// });


// myEmitter.emit('greet', 'Alice'); 
// myEmitter.emit('greet', 'Bob');  
const EventEmitter=require('events');
const myemitter=new EventEmitter();
myemitter.once("greet",(name,age)=>
{
    console.log(`hello ${name}! your are ${age} years old`);

});
myemitter.emit('greet','satya',17);
myemitter.emit('greet','Alice',18)

const EventEmitter=require('events');
const myemitter=new EventEmitter();
myemitter.on("greet",(name,age)=>
{
    console.log(`hello ${name}! your are ${age} years old`);

});
myemitter.emit('greet','satya',17);

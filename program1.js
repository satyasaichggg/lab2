
const process = require('os')

setInterval(()=>{
    const total = process.totalmem()
    const free = process.freemem()
    const used = (total - free);
    console.log("Current Memory Usage: ", used);
    console.log("Free Memory Percentage: ", (free/total)*100);
}, 5000);

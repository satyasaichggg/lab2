const os = require('os')

const uptime = os.uptime()

const mins = (Math.floor(uptime / 60))%60;
const hours = (Math.floor(uptime / 3600))%24
const days = Math.floor(uptime / 86400)%30

console.log("System Uptime is")
console.log(`${days} days, ${hours} hours, ${mins} minutes`);
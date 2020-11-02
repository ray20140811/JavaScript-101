
const fs = require('fs')
const file = fs.readFileSync('./hello.txt')
console.log(file.toString('utf8'))

// Modules
// EVERY FILE IN NODE IS MODULE (BY DEFAULT)
// execute one file, but split the code in modules,
// Modules - Encapsulated Code(only share minimum)

const names = require('./4-module')
const sayHi = require('./5-utils')
const data = require('./6-alternative')
require('./7-mind-granade')

console.log(data)
sayHi('susan')
sayHi(names.peter)
sayHi(names.nadin)

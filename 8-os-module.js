// BUILT IN MODULES
const os = require('os') // build in so just say os

// info about current user
const user = os.userInfo()
console.log(user)

// OUTPUT
// {
//   uid: 502,
//   gid: 20,
//   username: 'ktoufighi',
//   homedir: '/Users/ktoufighi',
//   shell: '/bin/zsh'
// }

// method returs the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

// OUTPUT
// the system uptime is 2165561 seconds

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS)

// OUTPUT
// {
//   name: 'Darwin',
//   release: '21.6.0',
//   totalMem: 17179869184,
//   freeMem: 974917632
// }

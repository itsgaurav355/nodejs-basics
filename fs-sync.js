//File system in sync mode
const {writeFileSync, readFileSync} = require('fs')
console.log("start");
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

// console.log(first,second)
//for writing in the file
// writeFileSync(
// './content/result-sync.txt',
// `Here is the result: ${first}, ${second}`
// )
//for appending into the file
writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    {flag : 'a'}
    )
    console.log("Done with the task");
    console.log("starting the next one")
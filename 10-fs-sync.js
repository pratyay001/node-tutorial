const { readFileSync , writeFileSync } = require('fs');
console.log('start');

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first,second);

writeFileSync('./content/result.txt',`Hi this is your collective data ${first + second}`);

console.log('donw with the task');

console.log('starting the next task');
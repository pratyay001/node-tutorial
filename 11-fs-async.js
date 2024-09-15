const { readFile , writeFile } = require('fs');

console.log('start async');
readFile('./content/first.txt','utf8', (err, data) => {
    if(err){
        console.log(err);
        return;
    }
    const first = data;

    readFile('./content/second.txt','utf8', (err,data1)=>{
        if(err){
            console.log(err);
            return;
        }
    const second = data1;

    writeFile('./content/result-async.txt', `Hi two files combined are ${first  + second}`, (err, data2) => {
        if(err){
            console.log(err);
            return;
        }
        console.log('done with this task');
    });
    })
})
console.log('starting next task')

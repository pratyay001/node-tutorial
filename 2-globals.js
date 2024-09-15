// Global variable- you can access this variable from anywhere you want , from any type of nested structure

// some global variable -
// __dirname - path to current directory 
// __filename - file name 
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about the env where your program is executing , its a huge object of data about the system.


console.log(process);

setInterval(()=>{
    console.log('hello world')
}, 5000);
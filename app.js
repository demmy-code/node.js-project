console.log('Hello World!');

const fs = require('fs');
fs.readFile('myfile.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file: ' + err);
        return;
    }
    console.log('File contents: ' + data);
});

console.log('Reading file....(this runs first!)');


let name = 'Node.js';
const version = 20 ;
function greet (user) {
    return `Hello ${user}!`;
}

const add = (a, b) => a + b;
console.log(greet('Developer'));
console.log(add(5, 3));

// object
const user = {
    name : 'Alice',
    age : 25,
    greet() {
        console.log (`Hi, I'm ${this.name}`);
    }
};

// array
const colors = ['red', 'green', 'blue'];

// array methods
colors.forEach(color => console.log(color));
const lengths = colors.map(color => color.length);

// callbacks
function fetchData(callback) {
    setTimeout(() => {
        callback('Data recieved!');
    }, 1000);
}

// promises (ES6+)
const fetchDataPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Promise resolved!'), 1000);
    });
};

// Async/await (ES8+)
async function getData() {
    const result = await fetchDataPromise();
    console.log(result);
}

// call async function
getData(); 

// global objects
global.mylet = 42;
console.log(global.mylet);

// file access
// Node.js
// const fs = require('fs');
fs.readFile('myfile.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// HTTPs Request
const https = require('https');
https.get('https://example.com', res =>{
    let data = '';
    res.on('data', chunck => data += chunck);
    res.on('end ', () => console.log(data));
});

// Check V8 version
console.log(`V8 version: ${process.version.v8}`)

// Get information about V8's heap memory usage
const v8 = require('v8');
const heapStats = v8.getHeapStatistics();

console.log('Heap size limit:', (heapStats.heap_size_limit / 1024 / 1024).toFixed(2), 'MB');
console.log('Total heap size:', (heapStats.total_heap_size / 1024 / 1024).toFixed(2), 'MB');
console.log('Used heap size:', (heapStats.used_heap_size / 1024 / 1024).toFixed(2), 'MB');

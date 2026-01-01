import { Question } from "../questions";

export const nodejsQuestions: Question[] = [
  {
    id: 1,
    language: "Node.js",
    difficulty: "Easy",
    question: "Which module is used to work with the file system?",
    code: `const ??? = require('???');`,
    options: ["fs", "file", "filesystem", "io"],
    correct: 0,
    explanation: "The 'fs' module provides APIs for interacting with the file system."
  },
  {
    id: 2,
    language: "Node.js",
    difficulty: "Easy",
    question: "Which module allows creating HTTP servers?",
    options: ["http", "net", "https", "url"],
    correct: 0,
    explanation: "The 'http' module is used to create HTTP servers."
  },
  {
    id: 3,
    language: "Node.js",
    difficulty: "Easy",
    question: "Which module helps parse URL strings?",
    options: ["url", "path", "querystring", "fs"],
    correct: 0,
    explanation: "The 'url' module provides utilities to parse URLs."
  },
  {
    id: 4,
    language: "Node.js",
    difficulty: "Easy",
    question: "How do you read environment variables?",
    code: `const port = ???;`,
    options: ["process.env.PORT", "process.port", "process.env.get('PORT')", "env.PORT"],
    correct: 0,
    explanation: "Environment variables are accessed via process.env."
  },
  {
    id: 5,
    language: "Node.js",
    difficulty: "Easy",
    question: "What is the purpose of 'require'?",
    options: [
      "Import modules",
      "Export modules",
      "Create functions",
      "Handle errors"
    ],
    correct: 0,
    explanation: "'require' is used to import modules in Node.js."
  },
  {
    id: 6,
    language: "Node.js",
    difficulty: "Medium",
    question: "What is the output of this code?",
    code: `console.log('Start');

setTimeout(() => console.log('Timeout'), 0);

console.log('End');`,
    options: ["Start End Timeout", "Start Timeout End", "Timeout Start End", "End Start Timeout"],
    correct: 0,
    explanation: "setTimeout is asynchronous; synchronous code runs first."
  },
  {
    id: 7,
    language: "Node.js",
    difficulty: "Medium",
    question: "How do you read a file asynchronously?",
    code: `const fs = require('fs');
fs.???('file.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});`,
    options: ["readFile", "readFileSync", "open", "createReadStream"],
    correct: 0,
    explanation: "readFile reads files asynchronously and executes a callback when done."
  },
  {
    id: 8,
    language: "Node.js",
    difficulty: "Medium",
    question: "What is the difference between readFile and createReadStream?",
    options: [
      "readFile reads entire file at once; createReadStream streams chunks",
      "Both same",
      "createReadStream reads entire file; readFile streams",
      "Neither reads files"
    ],
    correct: 0,
    explanation: "Streams read data in chunks and are efficient for large files."
  },
  {
    id: 9,
    language: "Node.js",
    difficulty: "Medium",
    question: "How do you handle errors globally in Node.js?",
    code: `process.on('???', (err) => console.log(err));`,
    options: ["uncaughtException", "error", "unhandledRejection", "warning"],
    correct: 0,
    explanation: "uncaughtException handles synchronous uncaught errors globally."
  },
  {
    id: 10,
    language: "Node.js",
    difficulty: "Medium",
    question: "What is the purpose of 'buffer' module?",
    options: [
      "Handle binary data",
      "Handle JSON",
      "Handle strings",
      "Handle streams"
    ],
    correct: 0,
    explanation: "Buffer provides a way to handle raw binary data efficiently."
  },
  {
    id: 11,
    language: "Node.js",
    difficulty: "Medium",
    question: "How do you check if a module is cached?",
    code: `console.log(require.???['fs']);`,
    options: ["cache", "modules", "loaded", "exports"],
    correct: 0,
    explanation: "require.cache stores cached modules for faster reuse."
  },
  {
    id: 12,
    language: "Node.js",
    difficulty: "Hard",
    question: "How do you create a simple HTTP server?",
    code: `const http = require('http');
const server = http.createServer((req, res) => {
  ???;
});
server.listen(3000);`,
    options: [
      "res.end('Hello World')",
      "res.send('Hello World')",
      "console.log('Hello')",
      "return 'Hello'"
    ],
    correct: 0,
    explanation: "res.end sends a response and ends the request in Node.js HTTP server."
  },
  {
    id: 13,
    language: "Node.js",
    difficulty: "Hard",
    question: "What happens if you don’t call next() in Express middleware?",
    options: [
      "Request hangs",
      "Server crashes",
      "Request skips middleware",
      "Error thrown"
    ],
    correct: 0,
    explanation: "Without next(), the request does not proceed to the next middleware or route."
  },
  {
    id: 14,
    language: "Node.js",
    difficulty: "Hard",
    question: "What is the purpose of cluster module?",
    options: [
      "Enable multi-core Node.js processes",
      "Handle HTTP requests",
      "Stream files",
      "Read environment variables"
    ],
    correct: 0,
    explanation: "Cluster module allows Node.js to spawn worker processes for multi-core utilization."
  },
  {
    id: 15,
    language: "Node.js",
    difficulty: "Hard",
    question: "What is the event loop in Node.js?",
    options: [
      "Mechanism that handles asynchronous operations",
      "A loop for CPU tasks",
      "A module",
      "A global object"
    ],
    correct: 0,
    explanation: "The event loop handles non-blocking asynchronous operations."
  },
  {
    id: 16,
    language: "Node.js",
    difficulty: "Hard",
    question: "What is the difference between process.nextTick() and setImmediate()?",
    options: [
      "nextTick queues microtask before I/O; setImmediate queues macrotask after I/O",
      "Both same",
      "nextTick after I/O; setImmediate before I/O",
      "Neither is async"
    ],
    correct: 0,
    explanation: "nextTick executes callbacks before I/O; setImmediate executes after I/O events."
  },
  {
    id: 17,
    language: "Node.js",
    difficulty: "Hard",
    question: "What is the difference between Promise.all and Promise.allSettled?",
    options: [
      "all rejects if any promise rejects; allSettled waits for all promises",
      "Both same",
      "allSettled rejects if any rejects",
      "all resolves individually"
    ],
    correct: 0,
    explanation: "Promise.all fails fast on first rejection; allSettled returns results for all promises."
  },
  {
    id: 18,
    language: "Node.js",
    difficulty: "Hard",
    question: "How do you deep clone an object in Node.js?",
    code: `const clone = ???;`,
    options: [
      "JSON.parse(JSON.stringify(obj))",
      "Object.assign({}, obj)",
      "Spread operator {...obj}",
      "Object.freeze(obj)"
    ],
    correct: 0,
    explanation: "JSON methods provide deep cloning for serializable objects."
  },
  {
    id: 19,
    language: "Node.js",
    difficulty: "Hard",
    question: "What is memoization in Node.js?",
    options: [
      "Caching function results for efficiency",
      "Creating global variables",
      "Reading environment variables",
      "Streaming files"
    ],
    correct: 0,
    explanation: "Memoization stores previous function outputs to avoid recomputation."
  },
  {
    id: 20,
    language: "Node.js",
    difficulty: "Hard",
    question: "What is the difference between Object.freeze() and Object.seal()?",
    options: [
      "freeze prevents changes to properties; seal allows changing values but not adding/removing keys",
      "Both same",
      "seal prevents all changes",
      "freeze allows adding properties"
    ],
    correct: 0,
    explanation: "freeze makes object immutable; seal only prevents adding/removing keys."
  },
  {
    id: 21,
    language: "Node.js",
    difficulty: "Hard",
    question: "What is a WeakMap in Node.js?",
    options: [
      "A collection of key-value pairs with weakly referenced keys",
      "A normal Map",
      "A type of buffer",
      "A module"
    ],
    correct: 0,
    explanation: "WeakMap allows garbage collection if no other reference exists for keys."
  },
  {
    id: 22,
    language: "Node.js",
    difficulty: "Hard",
    question: "How does Node.js handle garbage collection?",
    options: [
      "Automatically via V8 engine",
      "Manually via require",
      "Using setTimeout",
      "Through cluster module"
    ],
    correct: 0,
    explanation: "Node.js relies on V8’s garbage collector to free memory automatically."
  },
  {
    id: 23,
    language: "Node.js",
    difficulty: "Hard",
    question: "What is the prototype chain in Node.js?",
    options: [
      "Mechanism for object inheritance",
      "Event loop sequence",
      "Cluster hierarchy",
      "Module cache"
    ],
    correct: 0,
    explanation: "Objects inherit properties via prototype chain in JavaScript, including Node.js."
  },
  {
    id: 24,
    language: "Node.js",
    difficulty: "Hard",
    question: "What is Shadow DOM concept in Node.js context?",
    options: [
      "Not applicable; it's a browser DOM concept",
      "A Node module",
      "A buffer type",
      "Event emitter internal"
    ],
    correct: 0,
    explanation: "Shadow DOM is a browser feature; Node.js does not implement it."
  },
  {
    id: 25,
    language: "Node.js",
    difficulty: "Medium",
    question: "How do you use environment variables with dotenv?",
    code: `require('dotenv').???(); console.log(process.env.PORT);`,
    options: ["config", "load", "init", "start"],
    correct: 0,
    explanation: "dotenv.config() loads environment variables from .env file."
  },
  {
    id: 26,
    language: "Node.js",
    difficulty: "Medium",
    question: "Which module is used to handle paths?",
    options: ["path", "fs", "url", "os"],
    correct: 0,
    explanation: "The path module provides utilities for file and directory paths."
  },
  {
    id: 27,
    language: "Node.js",
    difficulty: "Medium",
    question: "How do you create a readable stream from a file?",
    code: `const fs = require('fs'); const stream = fs.???('file.txt');`,
    options: ["createReadStream", "readFile", "open", "readFileSync"],
    correct: 0,
    explanation: "createReadStream creates a readable stream for large file reading."
  },
  {
    id: 28,
    language: "Node.js",
    difficulty: "Medium",
    question: "How do you create a writable stream?",
    code: `const fs = require('fs'); const stream = fs.???('output.txt');`,
    options: ["createWriteStream", "writeFile", "appendFile", "openSync"],
    correct: 0,
    explanation: "createWriteStream is used to write data to files in a streaming manner."
  },
  {
    id: 29,
    language: "Node.js",
    difficulty: "Medium",
    question: "How do you handle uncaught Promise rejections globally?",
    code: `process.???((reason, promise) => { console.log(reason); });`,
    options: ["unhandledRejection", "uncaughtException", "exit", "warning"],
    correct: 0,
    explanation: "The 'unhandledRejection' event handles Promises rejected without catch."
  },
  {
    id: 30,
    language: "Node.js",
    difficulty: "Medium",
    question: "How do you debug Node.js applications?",
    options: [
      "node --inspect or using VSCode debugger",
      "console.log only",
      "require('debug') mandatory",
      "Use cluster"
    ],
    correct: 0,
    explanation: "Node.js can be debugged using built-in inspect flag or IDE tools."
  },
  {
    id: 31,
    language: "Node.js",
    difficulty: "Medium",
    question: "Which method is used to send JSON response in Express?",
    code: `res.???({ message: 'Hello' });`,
    options: ["json", "send", "write", "end"],
    correct: 0,
    explanation: "res.json() sends a JSON response with correct content-type."
  },
  {
    id: 32,
    language: "Node.js",
    difficulty: "Medium",
    question: "What is the order of middleware execution in Express?",
    options: [
      "Sequential order of definition",
      "Random order",
      "Alphabetical order",
      "Reverse order of definition"
    ],
    correct: 0,
    explanation: "Middleware executes in the order they are defined in the code."
  },
  {
    id: 33,
    language: "Node.js",
    difficulty: "Hard",
    question: "What is the difference between app.use and app.get?",
    options: [
      "app.use applies to all HTTP methods; app.get applies only to GET",
      "Both same",
      "app.use only for POST",
      "app.get for middleware"
    ],
    correct: 0,
    explanation: "app.use registers middleware for all methods; app.get handles GET requests."
  },
  {
    id: 34,
    language: "Node.js",
    difficulty: "Hard",
    question: "How do you implement error-handling middleware in Express?",
    code: `app.use((??? , req, res, next) => { res.status(500).send(err.message); });`,
    options: ["err", "error", "exception", "e"],
    correct: 0,
    explanation: "Error-handling middleware must have four parameters, starting with 'err'."
  },
  {
    id: 35,
    language: "Node.js",
    difficulty: "Medium",
    question: "Which event is emitted when a readable stream ends?",
    options: ["end", "finish", "close", "data"],
    correct: 0,
    explanation: "The 'end' event is emitted when no more data will be provided."
  },
  {
    id: 36,
    language: "Node.js",
    difficulty: "Medium",
    question: "Which event is emitted when writable stream finishes writing?",
    options: ["finish", "end", "close", "data"],
    correct: 0,
    explanation: "The 'finish' event indicates all data has been flushed to the underlying system."
  },
  {
    id: 37,
    language: "Node.js",
    difficulty: "Hard",
    question: "What is backpressure in Node.js streams?",
    options: [
      "When writable stream cannot handle data fast enough",
      "Memory leak in Node.js",
      "Too many async callbacks",
      "A cluster problem"
    ],
    correct: 0,
    explanation: "Backpressure occurs when writable stream buffers are full and can't process data fast enough."
  },
  {
    id: 38,
    language: "Node.js",
    difficulty: "Medium",
    question: "How do you convert a buffer to string?",
    code: `const buf = Buffer.from('Hello'); const str = buf.???('utf-8');`,
    options: ["toString", "toJSON", "valueOf", "read"],
    correct: 0,
    explanation: "Buffer.toString() converts buffer content to a string."
  },
  {
    id: 39,
    language: "Node.js",
    difficulty: "Medium",
    question: "Which method creates a buffer of specified size?",
    code: `const buf = Buffer.???(10);`,
    options: ["alloc", "from", "new", "create"],
    correct: 0,
    explanation: "Buffer.alloc(size) creates a new buffer of given size initialized to 0."
  },
  {
    id: 40,
    language: "Node.js",
    difficulty: "Hard",
    question: "What is the difference between setImmediate() and setTimeout(fn, 0)?",
    options: [
      "setImmediate executes after I/O; setTimeout schedules timer for next tick",
      "Both same",
      "setImmediate blocks event loop",
      "setTimeout is synchronous"
    ],
    correct: 0,
    explanation: "setImmediate runs after I/O callbacks; setTimeout(fn, 0) schedules a timer for the next event loop iteration."
  },
  {
    id: 41,
    language: "Node.js",
    difficulty: "Hard",
    question: "What is the difference between process.nextTick() and Promise.resolve().then()?",
    options: [
      "Both queue microtasks, but nextTick has higher priority",
      "Both same",
      "Promise.then runs first",
      "nextTick runs after I/O"
    ],
    correct: 0,
    explanation: "nextTick callbacks run before Promise microtasks in the event loop."
  },
  {
    id: 42,
    language: "Node.js",
    difficulty: "Medium",
    question: "How do you watch a file for changes in Node.js?",
    code: `const fs = require('fs'); fs.???('file.txt', (eventType, filename) => console.log(eventType));`,
    options: ["watchFile", "watch", "readFile", "open"],
    correct: 1,
    explanation: "fs.watch monitors changes to a file or directory."
  },
  {
    id: 43,
    language: "Node.js",
    difficulty: "Medium",
    question: "What is the use of the os module?",
    options: [
      "Provides operating system-related utility methods",
      "Handles files",
      "Manages streams",
      "Creates HTTP servers"
    ],
    correct: 0,
    explanation: "The os module provides platform-specific information like CPU, memory, and OS type."
  },
  {
    id: 44,
    language: "Node.js",
    difficulty: "Medium",
    question: "Which method stops a readable stream?",
    code: `stream.???();`,
    options: ["pause", "end", "destroy", "resume"],
    correct: 0,
    explanation: "pause() temporarily stops emitting data from readable streams."
  },
  {
    id: 45,
    language: "Node.js",
    difficulty: "Medium",
    question: "Which method resumes a paused stream?",
    code: `stream.???();`,
    options: ["resume", "end", "pause", "write"],
    correct: 0,
    explanation: "resume() resumes emitting data from paused streams."
  },
  {
    id: 46,
    language: "Node.js",
    difficulty: "Hard",
    question: "How do you use Promises with fs.readFile?",
    code: `const fs = require('fs').promises;
fs.???('file.txt').then(data => console.log(data.toString()));`,
    options: ["readFile", "readFileSync", "open", "createReadStream"],
    correct: 0,
    explanation: "fs.promises.readFile returns a promise instead of using callback."
  },
  {
    id: 47,
    language: "Node.js",
    difficulty: "Hard",
    question: "What is the difference between cluster.fork() and child_process.fork()?",
    options: [
      "cluster.fork creates worker process sharing server; child_process.fork spawns a new Node process",
      "Both same",
      "child_process.fork shares server",
      "cluster.fork is deprecated"
    ],
    correct: 0,
    explanation: "cluster.fork creates workers sharing server ports; child_process.fork spawns independent Node processes."
  },
  {
    id: 48,
    language: "Node.js",
    difficulty: "Hard",
    question: "What is the difference between synchronous and asynchronous methods in Node.js?",
    options: [
      "Sync blocks event loop; async is non-blocking",
      "Both same",
      "Async blocks event loop",
      "Sync is faster"
    ],
    correct: 0,
    explanation: "Synchronous methods block the event loop; asynchronous methods allow other tasks to execute."
  },
  {
    id: 49,
    language: "Node.js",
    difficulty: "Medium",
    question: "How do you create an EventEmitter?",
    code: `const EventEmitter = require('events'); const emitter = new ???();`,
    options: ["EventEmitter", "Emitter", "Events", "emitter"],
    correct: 0,
    explanation: "EventEmitter is a class to create and handle custom events."
  },
  {
    id: 50,
    language: "Node.js",
    difficulty: "Medium",
    question: "How do you listen to a custom event?",
    code: `emitter.???('greet', () => console.log('Hello'));`,
    options: ["on", "emit", "once", "addListener"],
    correct: 0,
    explanation: "emitter.on('event', callback) listens to a custom event."
  },
  {
    id: 51,
    language: "Node.js",
    difficulty: "Medium",
    question: "What is the difference between emitter.on and emitter.once?",
    options: [
      "on listens multiple times; once listens only once",
      "Both same",
      "once listens multiple times",
      "on removes event after first call"
    ],
    correct: 0,
    explanation: "emitter.once triggers only the first time the event occurs."
  },
  {
    id: 52,
    language: "Node.js",
    difficulty: "Hard",
    question: "What is the difference between process.exit() and process.kill()?",
    options: [
      "exit ends current process; kill sends signal to terminate process",
      "Both same",
      "kill ends current process",
      "exit sends signal"
    ],
    correct: 0,
    explanation: "process.exit terminates the process immediately; process.kill sends signals to any process."
  },
  {
    id: 53,
    language: "Node.js",
    difficulty: "Hard",
    question: "How do you use async/await with try/catch in Node.js?",
    code: `async function readFile() {
  try {
    const data = await fs.promises.readFile('file.txt');
    console.log(data.toString());
  } catch (???) {
    console.log(err);
  }
}`,
    options: ["err", "error", "e", "exception"],
    correct: 0,
    explanation: "The catch block captures errors, often named 'err'."
  },
  {
    id: 54,
    language: "Node.js",
    difficulty: "Medium",
    question: "Which method allows reading a directory asynchronously?",
    code: `fs.???('folder', (err, files) => console.log(files));`,
    options: ["readdir", "readDirSync", "open", "stat"],
    correct: 0,
    explanation: "fs.readdir reads directory contents asynchronously."
  },
  {
    id: 55,
    language: "Node.js",
    difficulty: "Medium",
    question: "What is the use of process.argv?",
    options: [
      "Access command line arguments",
      "Handle environment variables",
      "Manage async tasks",
      "Monitor memory"
    ],
    correct: 0,
    explanation: "process.argv contains command line arguments passed to Node.js."
  },
  {
    id: 56,
    language: "Node.js",
    difficulty: "Medium",
    question: "What is the default encoding for fs.readFile?",
    options: ["Buffer (binary)", "utf-8", "ascii", "hex"],
    correct: 0,
    explanation: "If no encoding is specified, fs.readFile returns a Buffer object."
  },
  {
    id: 57,
    language: "Node.js",
    difficulty: "Hard",
    question: "What are microtasks and macrotasks in Node.js event loop?",
    options: [
      "Microtasks: process.nextTick & Promise.then; Macrotasks: setTimeout & setImmediate",
      "Both same",
      "Microtasks run after macrotasks",
      "Macrotasks run first always"
    ],
    correct: 0,
    explanation: "Microtasks run after current operation but before the next event loop phase; macrotasks run in event loop phases."
  },
  {
    id: 58,
    language: "Node.js",
    difficulty: "Hard",
    question: "How do you share data between processes in Node.js?",
    options: [
      "Using process.send and process.on('message')",
      "Using global variables",
      "Using cluster module only",
      "Using buffer module"
    ],
    correct: 0,
    explanation: "Child processes can communicate via messages."
  },
  {
    id: 59,
    language: "Node.js",
    difficulty: "Hard",
    question: "What is the difference between require() and import in Node.js?",
    options: [
      "require is CommonJS; import is ES module syntax",
      "Both same",
      "import is synchronous",
      "require is deprecated"
    ],
    correct: 0,
    explanation: "Node.js supports CommonJS (require) and ES modules (import) with different syntax and behavior."
  },
  {
    id: 60,
    language: "Node.js",
    difficulty: "Hard",
    question: "How do you handle uncaught async errors globally in Node.js 14+?",
    options: [
      "process.on('unhandledRejection')",
      "process.on('uncaughtException')",
      "Using try/catch everywhere",
      "Using cluster module"
    ],
    correct: 0,
    explanation: "unhandledRejection event handles Promises rejected without catch."
  },
  {
    id: 61,
    language: "Node.js",
    difficulty: "Hard",
    question: "What is the difference between readable.pipe() and readable.on('data')?",
    options: [
      "pipe handles backpressure automatically; on('data') does not",
      "Both same",
      "on('data') handles backpressure; pipe does not",
      "pipe is deprecated"
    ],
    correct: 0,
    explanation: "pipe automatically manages flow and backpressure; reading data with on('data') requires manual handling."
  },
  {
    id: 62,
    language: "Node.js",
    difficulty: "Medium",
    question: "Which module allows you to create HTTP server?",
    code: `const http = require('???');`,
    options: ["http", "https", "net", "fs"],
    correct: 0,
    explanation: "The 'http' module allows creation of HTTP servers."
  },
  {
    id: 63,
    language: "Node.js",
    difficulty: "Medium",
    question: "How do you parse JSON data in Node.js?",
    code: `const obj = ???(jsonString);`,
    options: ["JSON.parse", "JSON.stringify", "Buffer.from", "require"],
    correct: 0,
    explanation: "JSON.parse converts JSON string to JavaScript object."
  },
  {
    id: 64,
    language: "Node.js",
    difficulty: "Medium",
    question: "Which method writes data to a writable stream?",
    code: `stream.???('Hello');`,
    options: ["write", "end", "pipe", "send"],
    correct: 0,
    explanation: "stream.write writes data to a writable stream."
  },
  {
    id: 65,
    language: "Node.js",
    difficulty: "Hard",
    question: "What happens if a stream emits an error but no 'error' listener is attached?",
    options: [
      "The process crashes",
      "Error is ignored",
      "Stream ends silently",
      "Backpressure occurs"
    ],
    correct: 0,
    explanation: "Uncaught 'error' event on streams causes the Node.js process to terminate."
  },
  {
    id: 66,
    language: "Node.js",
    difficulty: "Medium",
    question: "Which method allows reading large files efficiently?",
    options: [
      "fs.createReadStream()",
      "fs.readFileSync()",
      "fs.readFile()",
      "fs.open()"
    ],
    correct: 0,
    explanation: "fs.createReadStream reads large files in chunks, avoiding memory overload."
  },
  {
    id: 67,
    language: "Node.js",
    difficulty: "Medium",
    question: "What is the purpose of cluster module?",
    options: [
      "To take advantage of multi-core CPUs",
      "To manage database connections",
      "To handle HTTP requests sequentially",
      "To log errors"
    ],
    correct: 0,
    explanation: "Cluster module allows creating worker processes to utilize multiple CPU cores."
  },
  {
    id: 68,
    language: "Node.js",
    difficulty: "Hard",
    question: "How do you gracefully shutdown a cluster worker?",
    code: `worker.???();`,
    options: ["disconnect", "kill", "exit", "terminate"],
    correct: 0,
    explanation: "worker.disconnect allows the worker to finish processing before shutting down."
  },
  {
    id: 69,
    language: "Node.js",
    difficulty: "Medium",
    question: "Which method is used to inspect objects for debugging?",
    code: `const util = require('util'); console.log(util.???(obj));`,
    options: ["inspect", "debug", "log", "format"],
    correct: 0,
    explanation: "util.inspect provides a string representation of objects for debugging."
  },
  {
    id: 70,
    language: "Node.js",
    difficulty: "Hard",
    question: "What is the difference between process.memoryUsage().rss and heapUsed?",
    options: [
      "rss is total memory allocated; heapUsed is memory used by JS objects",
      "Both same",
      "heapUsed includes buffers; rss does not",
      "rss is only JS memory"
    ],
    correct: 0,
    explanation: "rss includes all memory allocated for the process; heapUsed only counts memory used by V8 objects."
  },
  {
    id: 71,
    language: "Node.js",
    difficulty: "Medium",
    question: "Which method stops a timer created by setTimeout?",
    code: `const timer = setTimeout(fn, 1000); clear???(timer);`,
    options: ["Timeout", "Interval", "Immediate", "All"],
    correct: 0,
    explanation: "clearTimeout stops a timer created by setTimeout."
  },
  {
    id: 72,
    language: "Node.js",
    difficulty: "Medium",
    question: "Which method stops a timer created by setInterval?",
    code: `const interval = setInterval(fn, 1000); clear???(interval);`,
    options: ["Interval", "Timeout", "Immediate", "All"],
    correct: 0,
    explanation: "clearInterval stops an interval timer."
  },
  {
    id: 73,
    language: "Node.js",
    difficulty: "Hard",
    question: "Which Node.js global variable provides the current module file path?",
    options: ["__filename", "__dirname", "module.filename", "process.cwd()"],
    correct: 0,
    explanation: "__filename gives the absolute path of the current module file."
  },
  {
    id: 74,
    language: "Node.js",
    difficulty: "Hard",
    question: "Which Node.js global variable provides the directory of the current module?",
    options: ["__dirname", "__filename", "process.cwd()", "module.path"],
    correct: 0,
    explanation: "__dirname gives the absolute path of the directory containing the current module."
  },
  {
    id: 75,
    language: "Node.js",
    difficulty: "Medium",
    question: "What is the purpose of process.env?",
    options: [
      "Access environment variables",
      "Manage processes",
      "Handle events",
      "Monitor streams"
    ],
    correct: 0,
    explanation: "process.env contains environment variables of the Node.js process."
  },
  {
    id: 76,
    language: "Node.js",
    difficulty: "Hard",
    question: "Which module is used to handle binary data?",
    options: ["Buffer", "fs", "stream", "http"],
    correct: 0,
    explanation: "Buffer module allows manipulation of binary data efficiently."
  },
  {
    id: 77,
    language: "Node.js",
    difficulty: "Hard",
    question: "What is the difference between Buffer.alloc() and Buffer.from()?",
    options: [
      "alloc creates empty buffer; from creates buffer from existing data",
      "Both same",
      "from creates empty buffer",
      "alloc copies data from array"
    ],
    correct: 0,
    explanation: "Buffer.alloc(size) creates a zero-filled buffer; Buffer.from(data) creates buffer from data."
  },
  {
    id: 78,
    language: "Node.js",
    difficulty: "Hard",
    question: "How do you create a readable stream from a string?",
    code: `const { Readable } = require('stream');
const stream = Readable.from(???);`,
    options: ["'Hello world'", "[1,2,3]", "Buffer.alloc(10)", "fs.createReadStream('file')"],
    correct: 0,
    explanation: "Readable.from(string) creates a readable stream from string or iterable."
  },
  {
    id: 79,
    language: "Node.js",
    difficulty: "Hard",
    question: "Which method allows chaining streams (pipe)?",
    code: `readable.???().pipe(writable);`,
    options: ["pipe", "write", "end", "on"],
    correct: 0,
    explanation: "Streams can be chained using pipe() for efficient data flow."
  },
  {
    id: 80,
    language: "Node.js",
    difficulty: "Hard",
    question: "How do you measure performance time in Node.js?",
    code: `const start = ???; /* code */ const end = ???; console.log(end - start);`,
    options: ["process.hrtime()", "Date.now()", "performance.now()", "Both 1 and 3"],
    correct: 3,
    explanation: "Both process.hrtime() and performance.now() provide high-resolution timing."
  },
  {
    id: 81,
    language: "Node.js",
    difficulty: "Medium",
    question: "Which method converts object to query string?",
    code: `const qs = require('querystring'); qs.???({ a:1, b:2 });`,
    options: ["stringify", "parse", "format", "encode"],
    correct: 0,
    explanation: "querystring.stringify converts an object to URL query string."
  },
  {
    id: 82,
    language: "Node.js",
    difficulty: "Medium",
    question: "Which module allows spawning child processes?",
    options: ["child_process", "cluster", "events", "fs"],
    correct: 0,
    explanation: "child_process module allows spawning independent Node processes."
  },
  {
    id: 83,
    language: "Node.js",
    difficulty: "Hard",
    question: "How do you share data between main process and worker in Node.js?",
    options: [
      "Using process.send() and message event",
      "Using global variables",
      "Using cluster only",
      "Cannot share data"
    ],
    correct: 0,
    explanation: "Processes communicate via message passing using send() and message event."
  },
  {
    id: 84,
    language: "Node.js",
    difficulty: "Hard",
    question: "Which method is used to inspect memory leaks?",
    options: [
      "process.memoryUsage() and heap snapshots",
      "console.log",
      "fs.readFile",
      "EventEmitter.on()"
    ],
    correct: 0,
    explanation: "Memory leaks can be detected using process.memoryUsage() and V8 heap snapshots."
  },
  {
    id: 85,
    language: "Node.js",
    difficulty: "Medium",
    question: "Which module provides operating system info?",
    options: ["os", "process", "util", "cluster"],
    correct: 0,
    explanation: "os module provides CPU, memory, and other OS information."
  },
  {
    id: 86,
    language: "Node.js",
    difficulty: "Hard",
    question: "How do you enable strict mode in Node.js modules?",
    code: `???; console.log('Strict mode');`,
    options: ["'use strict'", "//strict", "#strict", "strict"],
    correct: 0,
    explanation: "Placing 'use strict' at the top enables strict mode in Node.js modules."
  },
  {
    id: 87,
    language: "Node.js",
    difficulty: "Hard",
    question: "How do you debug Node.js applications?",
    options: [
      "node --inspect app.js or node --inspect-brk app.js",
      "console.log only",
      "Cannot debug",
      "Using fs module"
    ],
    correct: 0,
    explanation: "Node.js can be debugged using built-in inspector and Chrome DevTools."
  },
  {
    id: 88,
    language: "Node.js",
    difficulty: "Medium",
    question: "What is the default maximum listeners on an EventEmitter?",
    options: ["10", "5", "Unlimited", "1"],
    correct: 0,
    explanation: "Default maximum listeners is 10 to prevent memory leaks warnings."
  },
  {
    id: 89,
    language: "Node.js",
    difficulty: "Hard",
    question: "How do you increase the maximum listeners on an EventEmitter?",
    code: `emitter.???(20);`,
    options: ["setMaxListeners", "increaseListeners", "maxListeners", "setListeners"],
    correct: 0,
    explanation: "emitter.setMaxListeners(n) sets the maximum listeners for that emitter."
  },
  {
    id: 90,
    language: "Node.js",
    difficulty: "Medium",
    question: "Which module allows inspecting async call stack?",
    options: ["async_hooks", "events", "fs", "cluster"],
    correct: 0,
    explanation: "async_hooks allows tracking asynchronous resources and callbacks."
  },
  {
    id: 91,
    language: "Node.js",
    difficulty: "Hard",
    question: "Which Node.js method provides uptime in seconds?",
    code: `process.???()`,
    options: ["uptime", "memoryUsage", "hrtime", "env"],
    correct: 0,
    explanation: "process.uptime() returns the process uptime in seconds."
  },
  {
    id: 92,
    language: "Node.js",
    difficulty: "Medium",
    question: "How do you make a function return a Promise?",
    code: `function read() { return new ???((resolve, reject) => {}); }`,
    options: ["Promise", "Async", "Observable", "Buffer"],
    correct: 0,
    explanation: "Wrapping in new Promise allows asynchronous handling with resolve/reject."
  },
  {
    id: 93,
    language: "Node.js",
    difficulty: "Hard",
    question: "What is the difference between process.nextTick and setImmediate?",
    options: [
      "nextTick executes before I/O callbacks; setImmediate executes after I/O callbacks",
      "Both same",
      "setImmediate executes before nextTick",
      "nextTick is macro task"
    ],
    correct: 0,
    explanation: "nextTick callbacks run before I/O phase; setImmediate runs in check phase after I/O."
  },
  {
    id: 94,
    language: "Node.js",
    difficulty: "Medium",
    question: "Which method allows synchronous reading of files?",
    code: `fs.???('file.txt');`,
    options: ["readFileSync", "readFile", "createReadStream", "openSync"],
    correct: 0,
    explanation: "fs.readFileSync reads a file synchronously, blocking the event loop."
  },
  {
    id: 95,
    language: "Node.js",
    difficulty: "Hard",
    question: "Which global object is available in all modules?",
    options: ["global", "window", "module", "process"],
    correct: 0,
    explanation: "global is the Node.js global object accessible in all modules."
  },
  {
    id: 96,
    language: "Node.js",
    difficulty: "Hard",
    question: "How do you measure high-resolution time for benchmarking?",
    code: `const start = ???; /* code */ const diff = process.hrtime(start);`,
    options: ["process.hrtime()", "Date.now()", "performance.now()", "console.time()"],
    correct: 0,
    explanation: "process.hrtime() provides high-resolution [seconds, nanoseconds] for benchmarking."
  },
  {
    id: 97,
    language: "Node.js",
    difficulty: "Hard",
    question: "Which method handles unhandled Promise rejections globally?",
    code: `process.???('unhandledRejection', (reason, promise) => {});`,
    options: ["on", "once", "addListener", "emit"],
    correct: 0,
    explanation: "process.on('unhandledRejection') handles Promises rejected without catch."
  },
  {
    id: 98,
    language: "Node.js",
    difficulty: "Hard",
    question: "Which Node.js module allows working with binary and octet streams?",
    options: ["Buffer", "fs", "stream", "http"],
    correct: 0,
    explanation: "Buffer module is used for handling binary data efficiently."
  },
  {
    id: 99,
    language: "Node.js",
    difficulty: "Hard",
    question: "What is the difference between fs.open and fs.openSync?",
    options: [
      "fs.open is async; fs.openSync is synchronous",
      "Both same",
      "openSync is async",
      "fs.open throws error"
    ],
    correct: 0,
    explanation: "fs.open is asynchronous and non-blocking; fs.openSync blocks the event loop."
  },
  {
    id: 100,
    language: "Node.js",
    difficulty: "Hard",
    question: "Which Node.js module is recommended for high-performance TCP servers?",
    options: ["net", "http", "stream", "os"],
    correct: 0,
    explanation: "net module allows creation of TCP servers for high-performance networking."
  }

];

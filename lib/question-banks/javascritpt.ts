import { Question } from "../questions";

export const javascriptQuestions:Question[] = [
    {
      id: 1,
      language: "JavaScript",
      difficulty: "Easy",
      question: "What is the output?",
      code: `console.log(typeof null);`,
      options: ["null", "object", "undefined", "number"],
      correct: 1,
      explanation: "typeof null returns 'object' (JavaScript quirk)."
    },
    {
      id: 2,
      language: "JavaScript",
      difficulty: "Easy",
      question: "Which keyword declares a block-scoped variable?",
      options: ["var", "let", "const", "static"],
      correct: 1,
      explanation: "let is block-scoped."
    },
    {
      id: 3,
      language: "JavaScript",
      difficulty: "Easy",
      question: "What is the output?",
      code: `console.log(2 + '3');`,
      options: ["5", "23", "NaN", "Error"],
      correct: 1,
      explanation: "Number is coerced to string."
    },
    {
      id: 4,
      difficulty: "Easy",
      language: "JavaScript",
      question: "Which value is falsy?",
      options: ["[]", "{}", "0", "'false'"],
      correct: 2,
      explanation: "0 is falsy."
    },
    {
      id: 5,
      difficulty: "Easy",
      language: "JavaScript",
      question: "Which method converts JSON to object?",
      options: ["JSON.stringify()", "JSON.parse()", "JSON.object()", "parseJSON()"],
      correct: 1,
      explanation: "JSON.parse converts JSON string to object."
    },
    {
      id: 6,
      difficulty: "Easy",
      language: "JavaScript",
      question: "What does === do?",
      options: ["Type coercion", "Strict comparison", "Assignment", "Casting"],
      correct: 1,
      explanation: "=== checks value and type."
    },
    {
      id: 7,
      difficulty: "Easy",
      language: "JavaScript",
      question: "What is the output?",
      code: `console.log(Boolean(''));`,
      options: ["true", "false", "null", "undefined"],
      correct: 1,
      explanation: "Empty string is falsy."
    },
    {
      id: 8,
      difficulty: "Easy",
      language: "JavaScript",
      question: "Which loop runs at least once?",
      options: ["for", "while", "do...while", "foreach"],
      correct: 2,
      explanation: "do...while runs at least once."
    },
    {
      id: 9,
      difficulty: "Easy",
      language: "JavaScript",
      question: "What does Array.length return?",
      options: ["Last index", "Total elements", "Size in bytes", "Boolean"],
      correct: 1,
      explanation: "length returns number of elements."
    },
    {
      id: 10,
      difficulty: "Easy",
      language: "JavaScript",
      question: "Which symbol is used for comments?",
      options: ["//", "#", "<!--", "**"],
      correct: 0,
      explanation: "// is single-line comment."
    },
    {
      id: 11,
      language: "JavaScript",
      difficulty: "Easy",
      question: "What is the output?",
      code: `console.log(typeof 123);`,
      options: ["string", "number", "object", "undefined"],
      correct: 1,
      explanation: "Numbers have type 'number'."
    },
    {
      id: 12,
      language: "JavaScript",
      difficulty: "Easy",
      question: "Which keyword prevents reassignment?",
      options: ["var", "let", "const", "static"],
      correct: 2,
      explanation: "Variables declared with const cannot be reassigned."
    },
    {
      id: 13,
      language: "JavaScript",
      difficulty: "Easy",
      question: "What is the output?",
      code: `console.log(5 > 3);`,
      options: ["true", "false", "undefined", "Error"],
      correct: 0,
      explanation: "5 is greater than 3."
    },
    {
      id: 14,
      language: "JavaScript",
      difficulty: "Easy",
      question: "Which method adds an item to the end of an array?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      correct: 0,
      explanation: "push() adds an element to the end of an array."
    },
    {
      id: 15,
      language: "JavaScript",
      difficulty: "Easy",
      question: "What does this return?",
      code: `Boolean(0);`,
      options: ["true", "false", "null", "undefined"],
      correct: 1,
      explanation: "0 is a falsy value."
    },
    {
      id: 16,
      language: "JavaScript",
      difficulty: "Easy",
      question: "What is the output?",
      code: `console.log('Hello'.length);`,
      options: ["4", "5", "6", "undefined"],
      correct: 1,
      explanation: "The string 'Hello' has 5 characters."
    },
    {
      id: 17,
      language: "JavaScript",
      difficulty: "Easy",
      question: "Which operator is used for logical AND?",
      options: ["&&", "||", "!", "&"],
      correct: 0,
      explanation: "&& represents logical AND."
    },
    {
      id: 18,
      language: "JavaScript",
      difficulty: "Easy",
      question: "What is the output?",
      code: `console.log(10 % 3);`,
      options: ["1", "3", "0", "10"],
      correct: 0,
      explanation: "The modulus operator returns the remainder."
    },
    {
      id: 19,
      language: "JavaScript",
      difficulty: "Easy",
      question: "Which method removes the last array element?",
      options: ["pop()", "push()", "shift()", "slice()"],
      correct: 0,
      explanation: "pop() removes the last element of an array."
    },
    {
      id: 20,
      language: "JavaScript",
      difficulty: "Easy",
      question: "What is the output?",
      code: `console.log(typeof []);`,
      options: ["array", "object", "undefined", "null"],
      correct: 1,
      explanation: "Arrays are objects in JavaScript."
    },
    {
      id: 21,
      language: "JavaScript",
      difficulty: "Easy",
      question: "Which statement creates a function?",
      options: [
        "function myFunc() {}",
        "create myFunc() {}",
        "def myFunc() {}",
        "fn myFunc() {}"
      ],
      correct: 0,
      explanation: "Functions are declared using the function keyword."
    },
    {
      id: 22,
      language: "JavaScript",
      difficulty: "Easy",
      question: "What is the output?",
      code: `console.log(!!false);`,
      options: ["true", "false", "undefined", "Error"],
      correct: 1,
      explanation: "Double negation converts to boolean."
    },
    {
      id: 23,
      language: "JavaScript",
      difficulty: "Easy",
      question: "Which keyword exits a loop?",
      options: ["stop", "exit", "break", "return"],
      correct: 2,
      explanation: "break exits a loop immediately."
    },
    {
      id: 24,
      language: "JavaScript",
      difficulty: "Easy",
      question: "What does isNaN('abc') return?",
      options: ["true", "false", "null", "Error"],
      correct: 0,
      explanation: "'abc' cannot be converted to a number."
    },
    {
      id: 25,
      language: "JavaScript",
      difficulty: "Easy",
      question: "Which symbol is used for strict equality?",
      options: ["==", "===", "=", "!=="],
      correct: 1,
      explanation: "=== compares both value and type."
    },
    {
      id: 26,
      language: "JavaScript",
      difficulty: "Easy",
      question: "What is the output?",
      code: `console.log(Math.floor(4.7));`,
      options: ["4", "5", "4.7", "Error"],
      correct: 0,
      explanation: "Math.floor rounds down."
    },
    {
      id: 27,
      language: "JavaScript",
      difficulty: "Easy",
      question: "Which method converts a string to uppercase?",
      options: ["toUpper()", "toUpperCase()", "upper()", "capitalize()"],
      correct: 1,
      explanation: "toUpperCase converts string to uppercase."
    },
    {
      id: 28,
      language: "JavaScript",
      difficulty: "Easy",
      question: "What is the output?",
      code: `console.log(3 * '3');`,
      options: ["9", "33", "NaN", "Error"],
      correct: 0,
      explanation: "String '3' is coerced into number."
    },
    {
      id: 29,
      language: "JavaScript",
      difficulty: "Easy",
      question: "Which value represents 'no value'?",
      options: ["null", "0", "false", "NaN"],
      correct: 0,
      explanation: "null represents intentional absence of value."
    },
    {
      id: 30,
      language: "JavaScript",
      difficulty: "Easy",
      question: "What does console.log() do?",
      options: [
        "Displays output in console",
        "Shows alert",
        "Writes to DOM",
        "Stops execution"
      ],
      correct: 0,
      explanation: "console.log outputs messages to the console."
    },
    {
      id: 31,
      difficulty: "Medium",
      language: "JavaScript",
      question: "What is a closure?",
      options: [
        "A function inside loop",
        "Function with access to outer scope",
        "Callback function",
        "Async function"
      ],
      correct: 1,
      explanation: "Closures retain access to outer variables."
    },
    {
      id: 32,
      difficulty: "Medium",
      language: "JavaScript",
      question: "What is the output?",
      code: `console.log([] == false);`,
      options: ["true", "false", "Error", "undefined"],
      correct: 0,
      explanation: "[] coerces to 0."
    },
    {
      id: 33,
      difficulty: "Medium",
      language: "JavaScript",
      question: "What does map() return?",
      options: ["Same array", "New array", "Boolean", "Undefined"],
      correct: 1,
      explanation: "map returns a new array."
    },
    {
      id: 34,
      difficulty: "Medium",
      language: "JavaScript",
      question: "What is hoisting?",
      options: [
        "Moving variables to top",
        "Function execution",
        "Async behavior",
        "Garbage collection"
      ],
      correct: 0,
      explanation: "Declarations are hoisted."
    },
    {
      id: 35,
      difficulty: "Medium",
      language: "JavaScript",
      question: "What happens here?",
      code: `console.log(a); let a = 5;`,
      options: ["5", "undefined", "ReferenceError", "null"],
      correct: 2,
      explanation: "Temporal Dead Zone."
    },
    {
      id: 36,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What is the output?",
      code: `console.log([] == false);`,
      options: ["true", "false", "Error", "undefined"],
      correct: 0,
      explanation: "[] is coerced to '' then to 0, which equals false."
    },
    {
      id: 37,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What does typeof NaN return?",
      options: ["NaN", "number", "undefined", "object"],
      correct: 1,
      explanation: "NaN is considered a number type."
    },
    {
      id: 38,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What is the output?",
      code: `console.log([1, 2, 3] + [4, 5]);`,
      options: ["[1,2,3,4,5]", "1,2,34,5", "1,2,3,4,5", "NaN"],
      correct: 1,
      explanation: "Arrays are converted to strings and concatenated."
    },
    {
      id: 39,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What is a closure?",
      options: [
        "A function inside a loop",
        "A function that remembers its outer variables",
        "A block scope",
        "An async function"
      ],
      correct: 1,
      explanation: "Closures allow access to outer scope variables even after execution."
    },
    {
      id: 40,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What is the output?",
      code: `console.log('5' - 3);`,
      options: ["2", "53", "NaN", "Error"],
      correct: 0,
      explanation: "The string is coerced into a number."
    },
    {
      id: 41,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What does Array.map() return?",
      options: ["Modified array", "New array", "Boolean", "Undefined"],
      correct: 1,
      explanation: "map returns a new array without mutating the original."
    },
    {
      id: 42,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What happens here?",
      code: `console.log(a);
var a = 10;`,
      options: ["10", "undefined", "ReferenceError", "null"],
      correct: 1,
      explanation: "Variable declaration is hoisted, but not initialization."
    },
    {
      id: 43,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What is the output?",
      code: `console.log(this === window);`,
      options: ["true", "false", "Error", "undefined"],
      correct: 0,
      explanation: "In the browser global scope, this refers to window."
    },
    {
      id: 44,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What does Promise.resolve(5) return?",
      options: [
        "5",
        "Resolved Promise with value 5",
        "Rejected Promise",
        "Error"
      ],
      correct: 1,
      explanation: "Promise.resolve wraps the value in a resolved Promise."
    },
    {
      id: 45,
      language: "JavaScript",
      difficulty: "Medium",
      question: "Which method converts object keys into an array?",
      options: ["Object.keys()", "Object.values()", "Object.entries()", "Object.map()"],
      correct: 0,
      explanation: "Object.keys() returns an array of keys."
    },
    {
      id: 46,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What is event bubbling?",
      options: [
        "Event flows from parent to child",
        "Event flows from child to parent",
        "Event stops immediately",
        "Async event handling"
      ],
      correct: 1,
      explanation: "Event bubbling propagates from child to parent."
    },
    {
      id: 47,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What does bind() do?",
      options: [
        "Calls a function immediately",
        "Creates a new function with bound this",
        "Stops execution",
        "Copies an object"
      ],
      correct: 1,
      explanation: "bind returns a new function with fixed this context."
    },
    {
      id: 48,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What is the output?",
      code: `console.log([...'hello']);`,
      options: [
        "['hello']",
        "['h','e','l','l','o']",
        "['h']",
        "Error"
      ],
      correct: 1,
      explanation: "Spread operator splits string into characters."
    },
    {
      id: 49,
      language: "JavaScript",
      difficulty: "Medium",
      question: "Which keyword is used to handle errors?",
      options: ["catch", "error", "try", "throw"],
      correct: 2,
      explanation: "Errors are handled using try...catch."
    },
    {
      id: 50,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What does Array.filter() do?",
      options: [
        "Transforms array",
        "Returns elements matching condition",
        "Sorts array",
        "Removes duplicates"
      ],
      correct: 1,
      explanation: "filter returns elements that satisfy a condition."
    },
    {
      id: 51,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What is the output?",
      code: `console.log(!![]);`,
      options: ["true", "false", "undefined", "Error"],
      correct: 0,
      explanation: "Arrays are truthy."
    },
    {
      id: 52,
      language: "JavaScript",
      difficulty: "Medium",
      question: "Which statement about arrow functions is true?",
      options: [
        "They have their own this",
        "They inherit this from parent scope",
        "They must return values",
        "They cannot be async"
      ],
      correct: 1,
      explanation: "Arrow functions do not have their own this."
    },
    {
      id: 53,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What is the output?",
      code: `console.log(typeof function(){});`,
      options: ["object", "function", "undefined", "class"],
      correct: 1,
      explanation: "Functions have type 'function'."
    },
    {
      id: 54,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What does Array.reduce() do?",
      options: [
        "Filters values",
        "Reduces array to single value",
        "Maps values",
        "Sorts array"
      ],
      correct: 1,
      explanation: "reduce accumulates values into one result."
    },
    {
      id: 55,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What is the output?",
      code: `console.log(1 + true);`,
      options: ["2", "true1", "NaN", "Error"],
      correct: 0,
      explanation: "true is coerced to 1."
    },
    {
      id: 56,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What does Object.freeze() do?",
      options: [
        "Deletes object",
        "Prevents modification",
        "Clones object",
        "Makes object iterable"
      ],
      correct: 1,
      explanation: "Frozen objects cannot be mutated."
    },
    {
      id: 57,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What is the output?",
      code: `console.log('hello'.split(''));`,
      options: [
        "['hello']",
        "['h','e','l','l','o']",
        "['h']",
        "Error"
      ],
      correct: 1,
      explanation: "split('') splits string into characters."
    },
    {
      id: 58,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What does setTimeout do?",
      options: [
        "Executes immediately",
        "Executes after delay",
        "Blocks execution",
        "Stops execution"
      ],
      correct: 1,
      explanation: "setTimeout executes code after delay."
    },
    {
      id: 59,
      language: "JavaScript",
      difficulty: "Medium",
      question: "Which value is NOT truthy?",
      options: ["{}", "[]", "1", "NaN"],
      correct: 3,
      explanation: "NaN is falsy."
    },
    {
      id: 60,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What does call() do?",
      options: [
        "Invokes function with specified this",
        "Returns new function",
        "Stops execution",
        "Clones function"
      ],
      correct: 0,
      explanation: "call invokes function with a specified this value."
    },
    {
      id: 61,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What is the output?",
      code: `console.log([1,2,3].includes(2));`,
      options: ["true", "false", "undefined", "Error"],
      correct: 0,
      explanation: "includes checks existence of element."
    },
    {
      id: 62,
      language: "JavaScript",
      difficulty: "Medium",
      question: "Which operator checks property existence?",
      options: ["has", "in", "of", "exists"],
      correct: 1,
      explanation: "'in' checks if property exists in object."
    },
    {
      id: 63,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What does JSON.stringify() do?",
      options: [
        "Parses JSON",
        "Converts object to JSON string",
        "Clones object",
        "Validates JSON"
      ],
      correct: 1,
      explanation: "It converts object to JSON string."
    },
    {
      id: 64,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What is the output?",
      code: `console.log(Math.max(...[1, 5, 3]));`,
      options: ["5", "3", "1", "NaN"],
      correct: 0,
      explanation: "Spread operator expands array values."
    },
    {
      id: 65,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What does async function return?",
      options: ["Value", "Promise", "Callback", "Undefined"],
      correct: 1,
      explanation: "Async functions always return a Promise."
    },
    {
      id: 66,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What is the output?",
      code: `console.log(typeof [] === 'object');`,
      options: ["true", "false", "undefined", "Error"],
      correct: 0,
      explanation: "Arrays are objects."
    },
    {
      id: 67,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What does preventDefault() do?",
      options: [
        "Stops event bubbling",
        "Stops default browser behavior",
        "Removes event listener",
        "Triggers event"
      ],
      correct: 1,
      explanation: "It prevents default browser action."
    },
    {
      id: 68,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What is prototype used for?",
      options: [
        "Styling",
        "Inheritance",
        "Async operations",
        "DOM manipulation"
      ],
      correct: 1,
      explanation: "Prototypes enable inheritance."
    },
    {
      id: 69,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What is the output?",
      code: `console.log('5' == 5 && '5' === 5);`,
      options: ["true", "false", "undefined", "Error"],
      correct: 1,
      explanation: "== is true, === is false."
    },
    {
      id: 70,
      language: "JavaScript",
      difficulty: "Medium",
      question: "What does Array.some() return?",
      options: ["Array", "Boolean", "Object", "Number"],
      correct: 1,
      explanation: "some returns true if at least one element matches."
    },
    {
      id: 71,
      difficulty: "Hard",
      language: "JavaScript",
      question: "What is the output?",
      code: `console.log(typeof typeof 1);`,
      options: ["number", "string", "object", "undefined"],
      correct: 1,
      explanation: "typeof always returns a string."
    },
    {
      id: 72,
      difficulty: "Hard",
      language: "JavaScript",
      question: "What is the output?",
      code: `console.log(0.1 + 0.2 === 0.3);`,
      options: ["true", "false", "NaN", "Error"],
      correct: 1,
      explanation: "Floating point precision issue."
    },
    {
      id: 73,
      difficulty: "Hard",
      language: "JavaScript",
      question: "What happens?",
      code: `for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
  }`,
      options: ["0 1 2", "3 3 3", "undefined", "Error"],
      correct: 1,
      explanation: "var is function scoped."
    },
    {
      id: 74,
      difficulty: "Hard",
      language: "JavaScript",
      question: "What is the output?",
      code: `console.log([] + {});`,
      options: ["[object Object]", "{}", "NaN", "Error"],
      correct: 0,
      explanation: "Array coerces to empty string."
    },
    {
      id: 75,
      difficulty: "Hard",
      language: "JavaScript",
      question: "What does finally do?",
      options: [
        "Overrides return",
        "Runs only on error",
        "Stops execution",
        "Catches error"
      ],
      correct: 0,
      explanation: "finally overrides return value."
    },
    {
      id: 76,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What is the output?",
      code: `console.log(typeof typeof 1);`,
      options: ["number", "string", "object", "undefined"],
      correct: 1,
      explanation: "`typeof 1` is 'number', and `typeof 'number'` is 'string'."
    },
    {
      id: 77,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What is the output?",
      code: `console.log(0.1 + 0.2 === 0.3);`,
      options: ["true", "false", "NaN", "Error"],
      correct: 1,
      explanation: "Floating-point precision causes 0.1 + 0.2 !== 0.3."
    },
    {
      id: 78,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What is the output?",
      code: `console.log([] + []);`,
      options: ["[]", "''", "0", "undefined"],
      correct: 1,
      explanation: "Both arrays convert to empty strings and concatenate."
    },
    {
      id: 79,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What is the output?",
      code: `console.log([] + {});`,
      options: ["[object Object]", "{}", "NaN", "Error"],
      correct: 0,
      explanation: "Array becomes empty string, object becomes '[object Object]'."
    },
    {
      id: 80,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What is the output?",
      code: `console.log(null + 1);`,
      options: ["1", "null", "NaN", "Error"],
      correct: 0,
      explanation: "null is coerced to 0."
    },
    {
      id: 81,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What happens here?",
      code: `for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}`,
      options: ["0 1 2", "3 3 3", "undefined", "Error"],
      correct: 1,
      explanation: "var is function-scoped; i ends at 3."
    },
    {
      id: 82,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What is the output?",
      code: `console.log([] == ![]);`,
      options: ["true", "false", "Error", "undefined"],
      correct: 0,
      explanation: "![] is false, [] coerces to 0."
    },
    {
      id: 83,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What is returned?",
      code: `(() => {
  try {
    return 1;
  } finally {
    return 2;
  }
})();`,
      options: ["1", "2", "Error", "undefined"],
      correct: 1,
      explanation: "Return in finally overrides previous return."
    },
    {
      id: 84,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What is the output?",
      code: `console.log(1 < 2 < 3);`,
      options: ["true", "false", "Error", "undefined"],
      correct: 0,
      explanation: "`1 < 2` is true, and `true < 3` becomes `1 < 3`."
    },
    {
      id: 85,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What is the output?",
      code: `console.log(3 > 2 > 1);`,
      options: ["true", "false", "Error", "undefined"],
      correct: 1,
      explanation: "`3 > 2` is true, and `true > 1` becomes `1 > 1`."
    },
    {
      id: 86,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What does Promise.all() do?",
      options: [
        "Resolves when all promises resolve",
        "Resolves when first promise resolves",
        "Rejects silently",
        "Executes sequentially"
      ],
      correct: 0,
      explanation: "Promise.all resolves when all promises succeed."
    },
    {
      id: 87,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What is the output?",
      code: `console.log(typeof NaN === 'number');`,
      options: ["true", "false", "undefined", "Error"],
      correct: 0,
      explanation: "NaN is still a number type."
    },
    {
      id: 88,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What happens?",
      code: `const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);`,
      options: ["2", "1", "Error", "undefined"],
      correct: 1,
      explanation: "Frozen objects cannot be mutated."
    },
    {
      id: 89,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What is the output?",
      code: `console.log((function() {
  return
  {
    a: 1
  }
})());`,
      options: ["{ a: 1 }", "undefined", "Error", "null"],
      correct: 1,
      explanation: "Automatic semicolon insertion ends return statement."
    },
    {
      id: 90,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What is the output?",
      code: `console.log([1,2,3].map(parseInt));`,
      options: ["[1,2,3]", "[1, NaN, NaN]", "[1,1,1]", "Error"],
      correct: 1,
      explanation: "parseInt receives index as radix."
    },
    {
      id: 91,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What is the output?",
      code: `console.log('b' + 'a' + +'a' + 'a');`,
      options: ["banana", "baNaNa", "banaa", "Error"],
      correct: 0,
      explanation: "+'a' becomes NaN, resulting in 'banana'."
    },
    {
      id: 92,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What does the event loop do?",
      options: [
        "Executes synchronous code",
        "Handles async callbacks",
        "Manages memory",
        "Blocks execution"
      ],
      correct: 1,
      explanation: "Event loop manages asynchronous execution."
    },
    {
      id: 93,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What is the output?",
      code: `console.log(Object.is(NaN, NaN));`,
      options: ["true", "false", "Error", "undefined"],
      correct: 0,
      explanation: "Object.is correctly compares NaN."
    },
    {
      id: 94,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What does WeakMap allow?",
      options: [
        "Primitive keys",
        "Object-only keys",
        "Array values only",
        "Iteration"
      ],
      correct: 1,
      explanation: "WeakMap keys must be objects."
    },
    {
      id: 95,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What is the output?",
      code: `console.log(typeof class Test {});`,
      options: ["class", "function", "object", "undefined"],
      correct: 1,
      explanation: "Classes are functions under the hood."
    },
    {
      id: 96,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What happens?",
      code: `new Promise((_, reject) => reject('err'))
  .then(() => console.log('then'))
  .catch(() => console.log('catch'));`,
      options: ["then", "catch", "Error", "Nothing"],
      correct: 1,
      explanation: "Rejected promise triggers catch."
    },
    {
      id: 97,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What is the output?",
      code: `console.log([...new Set([1,1,2,2,3])]);`,
      options: ["[1,2,3]", "[1,1,2,2,3]", "[3,2,1]", "Error"],
      correct: 0,
      explanation: "Set removes duplicate values."
    },
    {
      id: 98,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What does debounce do?",
      options: [
        "Limits calls per time",
        "Delays execution until inactivity",
        "Executes immediately",
        "Cancels function"
      ],
      correct: 1,
      explanation: "Debounce delays execution until no calls occur."
    },
    {
      id: 99,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What is the output?",
      code: `console.log(Reflect.ownKeys({ a:1, [Symbol()]:2 }));`,
      options: [
        "['a']",
        "['a', Symbol()]",
        "['Symbol']",
        "Error"
      ],
      correct: 1,
      explanation: "Reflect.ownKeys returns string and symbol keys."
    },
    {
      id: 100,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What is the output?",
      code: `console.log(typeof (() => {})());`,
      options: ["function", "undefined", "object", "null"],
      correct: 1,
      explanation: "Arrow function returns undefined by default."
    }, {
      id: 101,
      language: "JavaScript",
      difficulty: "Hard",
      question: "Which queue has higher priority in the event loop?",
      options: ["Macrotask", "Microtask", "Render queue", "Call stack"],
      correct: 1,
      explanation: "Microtasks (Promises, queueMicrotask) run before macrotasks."
    },
    {
      id: 102,
      language: "JavaScript",
      difficulty: "Hard",
      question: "Which is a microtask?",
      options: ["setTimeout", "setInterval", "Promise.then", "requestAnimationFrame"],
      correct: 2,
      explanation: "Promise.then callbacks are queued as microtasks."
    },
    {
      id: 103,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What runs first?",
      code: `
setTimeout(() => console.log('timeout'));
Promise.resolve().then(() => console.log('promise'));
console.log('sync');
`,
      options: [
        "timeout → promise → sync",
        "sync → promise → timeout",
        "promise → sync → timeout",
        "sync → timeout → promise"
      ],
      correct: 1,
      explanation: "Synchronous code → microtasks → macrotasks."
    },
    {
      id: 104,
      language: "JavaScript",
      difficulty: "Hard",
      question: "Difference between Promise.all and Promise.allSettled?",
      options: [
        "allSettled stops on rejection",
        "all resolves partial results",
        "allSettled waits for all promises",
        "They are identical"
      ],
      correct: 2,
      explanation: "Promise.allSettled waits for all promises regardless of rejection."
    },
    {
      id: 105,
      language: "JavaScript",
      difficulty: "Hard",
      question: "When does Promise.all reject?",
      options: [
        "After all promises finish",
        "When first promise rejects",
        "Never rejects",
        "Only if all reject"
      ],
      correct: 1,
      explanation: "Promise.all rejects immediately on the first rejection."
    },
    {
      id: 106,
      language: "JavaScript",
      difficulty: "Hard",
      question: "Which creates a deep clone?",
      options: [
        "Object.assign",
        "Spread operator",
        "JSON.parse(JSON.stringify(obj))",
        "obj = other"
      ],
      correct: 2,
      explanation: "JSON serialization creates a deep clone (with limitations)."
    },
    {
      id: 107,
      language: "JavaScript",
      difficulty: "Hard",
      question: "Main limitation of JSON deep cloning?",
      options: [
        "Slow performance",
        "Loses functions & symbols",
        "Does not clone objects",
        "Throws error always"
      ],
      correct: 1,
      explanation: "Functions, undefined, symbols are lost."
    },
    {
      id: 108,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What is currying?",
      options: [
        "Caching results",
        "Transforming function with multiple args into chained functions",
        "Binding this",
        "Creating closures"
      ],
      correct: 1,
      explanation: "Currying converts f(a,b) → f(a)(b)."
    },
    {
      id: 109,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What does this return?",
      code: `const add = a => b => a + b; add(2)(3);`,
      options: ["5", "undefined", "NaN", "Error"],
      correct: 0,
      explanation: "Currying allows chained invocation."
    },
    {
      id: 110,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What is memoization?",
      options: [
        "Delaying execution",
        "Caching function results",
        "Binding arguments",
        "Cloning objects"
      ],
      correct: 1,
      explanation: "Memoization stores computed results for reuse."
    },
    {
      id: 111,
      language: "JavaScript",
      difficulty: "Hard",
      question: "Main benefit of memoization?",
      options: [
        "Memory optimization",
        "Improved performance",
        "Code readability",
        "Security"
      ],
      correct: 1,
      explanation: "Avoids repeated expensive computations."
    },
    {
      id: 112,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What does Object.freeze do?",
      options: [
        "Prevents reassignment",
        "Prevents adding/removing/modifying properties",
        "Only prevents deletion",
        "Deep freezes objects"
      ],
      correct: 1,
      explanation: "Frozen objects are completely immutable (shallow)."
    },
    {
      id: 113,
      language: "JavaScript",
      difficulty: "Hard",
      question: "Object.seal allows?",
      options: [
        "Adding properties",
        "Deleting properties",
        "Modifying existing properties",
        "Freezing values"
      ],
      correct: 2,
      explanation: "Sealed objects allow modification but not add/remove."
    },
    {
      id: 114,
      language: "JavaScript",
      difficulty: "Hard",
      question: "Difference between freeze and seal?",
      options: [
        "freeze allows edits",
        "seal prevents edits",
        "freeze prevents edits, seal allows edits",
        "No difference"
      ],
      correct: 2,
      explanation: "freeze = immutable, seal = mutable but fixed shape."
    },
    {
      id: 115,
      language: "JavaScript",
      difficulty: "Hard",
      question: "Why use WeakMap?",
      options: [
        "Faster lookups",
        "Primitive keys",
        "Garbage collection friendly",
        "Iteration support"
      ],
      correct: 2,
      explanation: "WeakMap allows garbage collection of unused keys."
    },
    {
      id: 116,
      language: "JavaScript",
      difficulty: "Hard",
      question: "Which keys does WeakMap allow?",
      options: [
        "Strings",
        "Numbers",
        "Objects",
        "Symbols"
      ],
      correct: 2,
      explanation: "WeakMap keys must be objects."
    },
    {
      id: 117,
      language: "JavaScript",
      difficulty: "Hard",
      question: "Why can’t WeakMap be iterated?",
      options: [
        "Performance",
        "Security",
        "Keys are weakly referenced",
        "Syntax limitation"
      ],
      correct: 2,
      explanation: "Keys may disappear due to garbage collection."
    },
    {
      id: 118,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What triggers garbage collection?",
      options: [
        "Manual call",
        "Unused references",
        "Timeout",
        "Memory overflow only"
      ],
      correct: 1,
      explanation: "Objects with no reachable references are collected."
    },
    {
      id: 119,
      language: "JavaScript",
      difficulty: "Hard",
      question: "Which prevents garbage collection?",
      options: [
        "Closures",
        "WeakMap",
        "Local variables",
        "Block scope"
      ],
      correct: 0,
      explanation: "Closures can keep references alive."
    },
    {
      id: 120,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What is the Shadow DOM?",
      options: [
        "Hidden HTML",
        "Scoped DOM tree",
        "Virtual DOM",
        "Server DOM"
      ],
      correct: 1,
      explanation: "Shadow DOM provides DOM encapsulation."
    },
    {
      id: 121,
      language: "JavaScript",
      difficulty: "Hard",
      question: "Main benefit of Shadow DOM?",
      options: [
        "Faster rendering",
        "Style encapsulation",
        "SEO optimization",
        "State management"
      ],
      correct: 1,
      explanation: "Prevents CSS and DOM conflicts."
    },
    {
      id: 122,
      language: "JavaScript",
      difficulty: "Hard",
      question: "Where is Shadow DOM commonly used?",
      options: [
        "React hooks",
        "Web Components",
        "Node.js",
        "Service Workers"
      ],
      correct: 1,
      explanation: "Shadow DOM is core to Web Components."
    },
    {
      id: 123,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What is the prototype chain?",
      options: [
        "Function scope",
        "Object inheritance lookup path",
        "Call stack order",
        "Event loop queue"
      ],
      correct: 1,
      explanation: "JS searches properties along the prototype chain."
    },
    {
      id: 124,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What does Object.getPrototypeOf do?",
      options: [
        "Clones object",
        "Returns prototype",
        "Sets prototype",
        "Freezes object"
      ],
      correct: 1,
      explanation: "Returns an object's internal [[Prototype]]."
    },
    {
      id: 125,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What ends the prototype chain?",
      options: [
        "undefined",
        "Object",
        "null",
        "Function"
      ],
      correct: 2,
      explanation: "Prototype chain ends at null."
    },
    {
      id: 126,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What does this check?",
      code: `obj.hasOwnProperty('x')`,
      options: [
        "Prototype property",
        "Own property only",
        "Any property",
        "Inherited property"
      ],
      correct: 1,
      explanation: "Checks only direct properties."
    },
    {
      id: 127,
      language: "JavaScript",
      difficulty: "Hard",
      question: "Which creates prototypal inheritance?",
      options: [
        "Object.create(proto)",
        "new Object()",
        "Object.assign",
        "Spread operator"
      ],
      correct: 0,
      explanation: "Object.create links to a prototype."
    },
    {
      id: 128,
      language: "JavaScript",
      difficulty: "Hard",
      question: "Why avoid modifying Object.prototype?",
      options: [
        "Performance",
        "Security",
        "Affects all objects",
        "Syntax error"
      ],
      correct: 2,
      explanation: "Changes propagate to all objects globally."
    },
    {
      id: 129,
      language: "JavaScript",
      difficulty: "Hard",
      question: "What happens when property is not found?",
      options: [
        "Error",
        "null",
        "undefined",
        "Searches prototype chain"
      ],
      correct: 3,
      explanation: "JS walks up the prototype chain."
    },
    {
      id: 130,
      language: "JavaScript",
      difficulty: "Hard",
      question: "Which best describes JavaScript inheritance?",
      options: [
        "Class-based",
        "Prototype-based",
        "Interface-based",
        "Object-based only"
      ],
      correct: 1,
      explanation: "JavaScript uses prototype-based inheritance."
    }
  ]
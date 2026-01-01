import { Question } from "../questions";

export const pythonQuestions: Question[] = [
    {
      id: 1,
      language: "Python",
      difficulty: "Easy",
      question: "What is the output?",
      code: `print(type(5))`,
      options: ["<class 'int'>", "<class 'str'>", "<class 'float'>", "<class 'bool'>"],
      correct: 0,
      explanation: "5 is an integer in Python."
    },
    {
      id: 2,
      language: "Python",
      difficulty: "Easy",
      question: "Which keyword is used to define a function?",
      options: ["func", "define", "def", "function"],
      correct: 2,
      explanation: "Functions in Python are defined using the def keyword."
    },
    {
      id: 3,
      language: "Python",
      difficulty: "Easy",
      question: "What is the output?",
      code: `print(3 == 3.0)`,
      options: ["True", "False", "Error", "None"],
      correct: 0,
      explanation: "Python compares values, not types."
    },
    {
      id: 4,
      language: "Python",
      difficulty: "Easy",
      question: "Which data type is immutable?",
      options: ["list", "dict", "set", "tuple"],
      correct: 3,
      explanation: "Tuples cannot be changed after creation."
    },
    {
      id: 5,
      language: "Python",
      difficulty: "Easy",
      question: "What is the output?",
      code: `print(len('Python'))`,
      options: ["5", "6", "7", "Error"],
      correct: 1,
      explanation: "The word 'Python' has 6 characters."
    },
    {
      id: 6,
      language: "Python",
      difficulty: "Easy",
      question: "Which symbol is used for comments?",
      options: ["//", "#", "/* */", "--"],
      correct: 1,
      explanation: "Python uses # for comments."
    },
    {
      id: 7,
      language: "Python",
      difficulty: "Easy",
      question: "What is the output?",
      code: `print(bool(0))`,
      options: ["True", "False", "None", "Error"],
      correct: 1,
      explanation: "0 is considered False."
    },
    {
      id: 8,
      language: "Python",
      difficulty: "Easy",
      question: "Which function converts string to integer?",
      options: ["str()", "int()", "float()", "bool()"],
      correct: 1,
      explanation: "int() converts strings to integers."
    },
    {
      id: 9,
      language: "Python",
      difficulty: "Easy",
      question: "What is the output?",
      code: `print(2 ** 3)`,
      options: ["6", "8", "9", "Error"],
      correct: 1,
      explanation: "** is the power operator."
    },
    {
      id: 10,
      language: "Python",
      difficulty: "Easy",
      question: "Which collection does not allow duplicates?",
      options: ["list", "tuple", "set", "dict"],
      correct: 2,
      explanation: "Sets store unique values."
    },
    {
      id: 11,
      language: "Python",
      difficulty: "Easy",
      question: "What is the output?",
      code: `print(type([]))`,
      options: ["list", "<class 'list'>", "<class 'array'>", "array"],
      correct: 1,
      explanation: "Lists are of type list."
    },
    {
      id: 12,
      language: "Python",
      difficulty: "Easy",
      question: "Which keyword stops a loop?",
      options: ["stop", "exit", "break", "return"],
      correct: 2,
      explanation: "break exits loops."
    },
    {
      id: 13,
      language: "Python",
      difficulty: "Easy",
      question: "What is the output?",
      code: `print('a' * 3)`,
      options: ["aaa", "a3", "Error", "None"],
      correct: 0,
      explanation: "Strings can be multiplied."
    },
    {
      id: 14,
      language: "Python",
      difficulty: "Easy",
      question: "Which keyword creates a class?",
      options: ["class", "struct", "object", "define"],
      correct: 0,
      explanation: "Classes are created using class keyword."
    },
    {
      id: 15,
      language: "Python",
      difficulty: "Easy",
      question: "What is the output?",
      code: `print(type(None))`,
      options: ["None", "<class 'NoneType'>", "null", "undefined"],
      correct: 1,
      explanation: "None has its own type."
    },
    {
      id: 16,
      language: "Python",
      difficulty: "Easy",
      question: "Which function returns absolute value?",
      options: ["abs()", "round()", "floor()", "ceil()"],
      correct: 0,
      explanation: "abs() returns absolute value."
    },
    {
      id: 17,
      language: "Python",
      difficulty: "Easy",
      question: "What is the output?",
      code: `print(10 // 3)`,
      options: ["3", "3.33", "4", "Error"],
      correct: 0,
      explanation: "Floor division rounds down."
    },
    {
      id: 18,
      language: "Python",
      difficulty: "Easy",
      question: "Which keyword is used for exception handling?",
      options: ["try", "catch", "except", "finally"],
      correct: 0,
      explanation: "Exception blocks start with try."
    },
    {
      id: 19,
      language: "Python",
      difficulty: "Easy",
      question: "What does len() do?",
      options: [
        "Counts elements",
        "Finds type",
        "Returns index",
        "Stops loop"
      ],
      correct: 0,
      explanation: "len() returns number of items."
    },
    {
      id: 20,
      language: "Python",
      difficulty: "Easy",
      question: "What is the output?",
      code: `print(True and False)`,
      options: ["True", "False", "None", "Error"],
      correct: 1,
      explanation: "Logical AND requires both values to be True."
    }, {
      id: 21,
      language: "Python",
      difficulty: "Medium",
      question: "What is the output?",
      code: `x = [1, 2, 3]
y = x
y.append(4)
print(x)`,
      options: ["[1, 2, 3]", "[1, 2, 3, 4]", "Error", "None"],
      correct: 1,
      explanation: "Both x and y reference the same list."
    },
    {
      id: 22,
      language: "Python",
      difficulty: "Medium",
      question: "What is the output?",
      code: `def func(a, b=2, c=3):
    return a + b + c

print(func(1, c=5))`,
      options: ["6", "8", "10", "Error"],
      correct: 1,
      explanation: "a=1, b=2 (default), c=5 → total = 8."
    },
    {
      id: 23,
      language: "Python",
      difficulty: "Medium",
      question: "What does this list comprehension do?",
      code: `[x*x for x in range(5) if x % 2 == 0]`,
      options: [
        "Squares of even numbers",
        "Squares of odd numbers",
        "All squares",
        "Even numbers only"
      ],
      correct: 0,
      explanation: "It filters even numbers then squares them."
    },
    {
      id: 24,
      language: "Python",
      difficulty: "Medium",
      question: "What is the output?",
      code: `print(type(lambda x: x))`,
      options: ["<class 'function'>", "<class 'lambda'>", "<class 'object'>", "Error"],
      correct: 0,
      explanation: "Lambda functions are of type function."
    },
    {
      id: 25,
      language: "Python",
      difficulty: "Medium",
      question: "What is the output?",
      code: `print(bool([]))`,
      options: ["True", "False", "None", "Error"],
      correct: 1,
      explanation: "Empty collections evaluate to False."
    },
    {
      id: 26,
      language: "Python",
      difficulty: "Medium",
      question: "Which statement is TRUE?",
      options: [
        "Tuples are mutable",
        "Lists are immutable",
        "Strings are immutable",
        "Dictionaries are ordered"
      ],
      correct: 2,
      explanation: "Strings cannot be changed after creation."
    },
    {
      id: 27,
      language: "Python",
      difficulty: "Medium",
      question: "What does *args allow?",
      options: [
        "Keyword arguments",
        "Variable number of arguments",
        "Default arguments",
        "Named arguments"
      ],
      correct: 1,
      explanation: "*args allows variable positional arguments."
    },
    {
      id: 28,
      language: "Python",
      difficulty: "Medium",
      question: "What is the output?",
      code: `print([i for i in range(3)])`,
      options: ["[0, 1, 2]", "[1, 2, 3]", "[0, 1, 2, 3]", "Error"],
      correct: 0,
      explanation: "range(3) generates 0 to 2."
    },
    {
      id: 29,
      language: "Python",
      difficulty: "Medium",
      question: "What is the output?",
      code: `a = [1, 2]
b = a.copy()
b.append(3)
print(a)`,
      options: ["[1, 2, 3]", "[1, 2]", "Error", "None"],
      correct: 1,
      explanation: "copy() creates a shallow copy."
    },
    {
      id: 30,
      language: "Python",
      difficulty: "Medium",
      question: "What does enumerate() return?",
      options: [
        "Index only",
        "Value only",
        "Index and value",
        "Key-value pair"
      ],
      correct: 2,
      explanation: "enumerate() returns tuples of (index, value)."
    },
    {
      id: 31,
      language: "Python",
      difficulty: "Medium",
      question: "What is the output?",
      code: `print({x: x*x for x in range(3)})`,
      options: [
        "{0:0,1:1,2:4}",
        "{1:1,2:4}",
        "[0,1,4]",
        "Error"
      ],
      correct: 0,
      explanation: "Dictionary comprehension maps x to x*x."
    },
    {
      id: 32,
      language: "Python",
      difficulty: "Medium",
      question: "Which module is used for regular expressions?",
      options: ["regex", "re", "match", "pattern"],
      correct: 1,
      explanation: "Python uses the re module."
    },
    {
      id: 33,
      language: "Python",
      difficulty: "Medium",
      question: "What is the output?",
      code: `print(type((1)))`,
      options: [
        "<class 'tuple'>",
        "<class 'int'>",
        "<class 'list'>",
        "Error"
      ],
      correct: 1,
      explanation: "(1) is just an integer. Tuples need a comma."
    },
    {
      id: 34,
      language: "Python",
      difficulty: "Medium",
      question: "Which keyword creates a generator?",
      options: ["yield", "return", "async", "await"],
      correct: 0,
      explanation: "yield creates generator functions."
    },
    {
      id: 35,
      language: "Python",
      difficulty: "Medium",
      question: "What does isinstance(x, int) return?",
      options: [
        "Checks value",
        "Checks type",
        "Checks memory",
        "Checks scope"
      ],
      correct: 1,
      explanation: "isinstance checks object type."
    },
    {
      id: 36,
      language: "Python",
      difficulty: "Medium",
      question: "What is the output?",
      code: `print(sorted([3, 1, 2]))`,
      options: ["[1, 2, 3]", "[3, 2, 1]", "None", "Error"],
      correct: 0,
      explanation: "sorted returns a new sorted list."
    },
    {
      id: 37,
      language: "Python",
      difficulty: "Medium",
      question: "What does __init__ do?",
      options: [
        "Deletes object",
        "Initializes object",
        "Creates class",
        "Destroys class"
      ],
      correct: 1,
      explanation: "__init__ initializes class instances."
    },
    {
      id: 38,
      language: "Python",
      difficulty: "Medium",
      question: "What is the output?",
      code: `print(10 in [1, 2, 10])`,
      options: ["True", "False", "None", "Error"],
      correct: 0,
      explanation: "10 exists in the list."
    },
    {
      id: 39,
      language: "Python",
      difficulty: "Medium",
      question: "Which data type is unordered?",
      options: ["list", "tuple", "set", "string"],
      correct: 2,
      explanation: "Sets do not maintain order."
    },
    {
      id: 40,
      language: "Python",
      difficulty: "Medium",
      question: "What is the output?",
      code: `x = 5
def test():
    global x
    x = 10

test()
print(x)`,
      options: ["5", "10", "Error", "None"],
      correct: 1,
      explanation: "global allows modification of global variable."
    },
    {
      id: 41,
      language: "Python",
      difficulty: "Medium",
      question: "Which function opens a file?",
      options: ["read()", "open()", "file()", "load()"],
      correct: 1,
      explanation: "open() is used to open files."
    },
    {
      id: 42,
      language: "Python",
      difficulty: "Medium",
      question: "What does map() return?",
      options: [
        "List",
        "Tuple",
        "Iterator",
        "Dictionary"
      ],
      correct: 2,
      explanation: "map returns an iterator."
    },
    {
      id: 43,
      language: "Python",
      difficulty: "Medium",
      question: "What is the output?",
      code: `print(list(filter(lambda x: x > 2, [1,2,3,4])))`,
      options: ["[3, 4]", "[1, 2]", "[2, 3, 4]", "Error"],
      correct: 0,
      explanation: "Filter keeps values greater than 2."
    },
    {
      id: 44,
      language: "Python",
      difficulty: "Medium",
      question: "What is the output?",
      code: `print({1,2,3} & {3,4,5})`,
      options: ["{3}", "{1,2}", "{4,5}", "Error"],
      correct: 0,
      explanation: "Set intersection returns common elements."
    },
    {
      id: 45,
      language: "Python",
      difficulty: "Medium",
      question: "What does zip() do?",
      options: [
        "Sorts lists",
        "Merges iterables element-wise",
        "Filters items",
        "Splits strings"
      ],
      correct: 1,
      explanation: "zip pairs elements from iterables."
    },
    {
      id: 46,
      language: "Python",
      difficulty: "Medium",
      question: "What is the output?",
      code: `print(type({}))`,
      options: [
        "<class 'dict'>",
        "<class 'set'>",
        "<class 'list'>",
        "<class 'tuple'>"
      ],
      correct: 0,
      explanation: "{} creates a dictionary."
    },
    {
      id: 47,
      language: "Python",
      difficulty: "Medium",
      question: "Which statement is correct?",
      options: [
        "finally runs only on error",
        "except runs always",
        "finally always runs",
        "try stops execution"
      ],
      correct: 2,
      explanation: "finally always executes."
    },
    {
      id: 48,
      language: "Python",
      difficulty: "Medium",
      question: "What is the output?",
      code: `print(any([0, False, 1]))`,
      options: ["True", "False", "None", "Error"],
      correct: 0,
      explanation: "any returns True if at least one value is truthy."
    },
    {
      id: 49,
      language: "Python",
      difficulty: "Medium",
      question: "What does all() return?",
      options: [
        "True if all values are truthy",
        "True if any value is truthy",
        "Always True",
        "Always False"
      ],
      correct: 0,
      explanation: "all checks all values."
    },
    {
      id: 50,
      language: "Python",
      difficulty: "Medium",
      question: "What is the output?",
      code: `print(type((1,)))`,
      options: [
        "<class 'tuple'>",
        "<class 'int'>",
        "<class 'list'>",
        "Error"
      ],
      correct: 0,
      explanation: "Comma makes it a tuple."
    }, {
      id: 51,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `a = [1, 2, 3]
b = a
a = a + [4]
print(b)`,
      options: ["[1,2,3]", "[1,2,3,4]", "Error", "None"],
      correct: 0,
      explanation: "a reassigned to new list; b still points to original."
    },
    {
      id: 52,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `a = [1, 2, 3]
b = a
a += [4]
print(b)`,
      options: ["[1,2,3]", "[1,2,3,4]", "Error", "None"],
      correct: 1,
      explanation: "+= mutates the list in-place."
    },
    {
      id: 53,
      language: "Python",
      difficulty: "Hard",
      question: "What happens?",
      code: `def func(x=[]):
    x.append(1)
    return x

print(func())
print(func())`,
      options: [
        "[1] [1]",
        "[1] [1,1]",
        "Error",
        "[] []"
      ],
      correct: 1,
      explanation: "Default mutable arguments persist across calls."
    },
    {
      id: 54,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `print([i for i in range(5)][::-1])`,
      options: ["[4,3,2,1,0]", "[0,1,2,3,4]", "Error", "None"],
      correct: 0,
      explanation: "[::-1] reverses the list."
    },
    {
      id: 55,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `print(0.1 + 0.2 == 0.3)`,
      options: ["True", "False", "Error", "None"],
      correct: 1,
      explanation: "Floating-point precision issue."
    },
    {
      id: 56,
      language: "Python",
      difficulty: "Hard",
      question: "What does __slots__ do?",
      options: [
        "Improves performance",
        "Restricts attributes",
        "Prevents inheritance",
        "Manages threads"
      ],
      correct: 1,
      explanation: "__slots__ restricts dynamic attribute creation."
    },
    {
      id: 57,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `x = 10
def outer():
    x = 20
    def inner():
        nonlocal x
        x = 30
    inner()
    return x

print(outer())`,
      options: ["10", "20", "30", "Error"],
      correct: 2,
      explanation: "nonlocal modifies enclosing scope variable."
    },
    {
      id: 58,
      language: "Python",
      difficulty: "Hard",
      question: "What happens?",
      code: `print(bool(float('nan')))`,
      options: ["True", "False", "Error", "None"],
      correct: 0,
      explanation: "NaN is truthy."
    },
    {
      id: 59,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `print(type(iter([])))`,
      options: [
        "<class 'list'>",
        "<class 'iterator'>",
        "<class 'list_iterator'>",
        "Error"
      ],
      correct: 2,
      explanation: "iter(list) returns a list_iterator."
    },
    {
      id: 60,
      language: "Python",
      difficulty: "Hard",
      question: "What does deepcopy do?",
      options: [
        "Copies reference",
        "Copies first level only",
        "Copies all nested objects",
        "Freezes object"
      ],
      correct: 2,
      explanation: "deepcopy clones nested structures."
    },
    {
      id: 61,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `a = [[1,2],[3,4]]
b = a.copy()
b[0][0] = 99
print(a)`,
      options: [
        "[[99,2],[3,4]]",
        "[[1,2],[3,4]]",
        "Error",
        "None"
      ],
      correct: 0,
      explanation: "Shallow copy shares nested objects."
    },
    {
      id: 62,
      language: "Python",
      difficulty: "Hard",
      question: "What is GIL?",
      options: [
        "Garbage Interface Layer",
        "Global Interpreter Lock",
        "Graphical Interface Library",
        "Global Import Loader"
      ],
      correct: 1,
      explanation: "GIL allows only one thread to execute Python bytecode."
    },
    {
      id: 63,
      language: "Python",
      difficulty: "Hard",
      question: "What does async/await enable?",
      options: [
        "Multithreading",
        "Multiprocessing",
        "Non-blocking concurrency",
        "Parallel execution"
      ],
      correct: 2,
      explanation: "Async enables cooperative concurrency."
    },
    {
      id: 64,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `print({}.get('a', 5))`,
      options: ["None", "5", "KeyError", "Error"],
      correct: 1,
      explanation: "get returns default if key not found."
    },
    {
      id: 65,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `print(type(lambda x: x))`,
      options: [
        "<class 'function'>",
        "<class 'lambda'>",
        "<class 'object'>",
        "Error"
      ],
      correct: 0,
      explanation: "Lambda is still a function."
    },
    {
      id: 66,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `print([[]] * 3)`,
      options: [
        "[[],[],[]]",
        "[[ ],[ ],[ ]] with shared reference",
        "Error",
        "None"
      ],
      correct: 1,
      explanation: "All inner lists reference same object."
    },
    {
      id: 67,
      language: "Python",
      difficulty: "Hard",
      question: "What does __new__ do?",
      options: [
        "Initializes object",
        "Creates instance",
        "Destroys instance",
        "Copies object"
      ],
      correct: 1,
      explanation: "__new__ creates the object before __init__."
    },
    {
      id: 68,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `print(isinstance(True, int))`,
      options: ["True", "False", "Error", "None"],
      correct: 0,
      explanation: "bool is subclass of int."
    },
    {
      id: 69,
      language: "Python",
      difficulty: "Hard",
      question: "What does @staticmethod do?",
      options: [
        "Uses instance",
        "Uses class",
        "No self or cls",
        "Creates singleton"
      ],
      correct: 2,
      explanation: "Static methods don't receive self or cls."
    },
    {
      id: 70,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `print([i for i in range(3) for j in range(2)])`,
      options: ["[0,0,1,1,2,2]", "[0,1,2]", "[0,1,0,1,0,1]", "Error"],
      correct: 0,
      explanation: "Nested comprehension duplicates each i."
    },
    {
      id: 71,
      language: "Python",
      difficulty: "Hard",
      question: "What does __dict__ store?",
      options: [
        "Methods",
        "Attributes",
        "Memory address",
        "Class name"
      ],
      correct: 1,
      explanation: "__dict__ stores object attributes."
    },
    {
      id: 72,
      language: "Python",
      difficulty: "Hard",
      question: "What happens?",
      code: `x = (1, [2, 3])
x[1].append(4)
print(x)`,
      options: [
        "Error",
        "(1,[2,3,4])",
        "(1,[2,3])",
        "None"
      ],
      correct: 1,
      explanation: "Tuple immutable, but inner list is mutable."
    },
    {
      id: 73,
      language: "Python",
      difficulty: "Hard",
      question: "What is a closure?",
      options: [
        "Nested function",
        "Function with preserved scope",
        "Decorator",
        "Generator"
      ],
      correct: 1,
      explanation: "Closures remember enclosing variables."
    },
    {
      id: 74,
      language: "Python",
      difficulty: "Hard",
      question: "What does yield from do?",
      options: [
        "Stops generator",
        "Delegates generator",
        "Creates coroutine",
        "Raises error"
      ],
      correct: 1,
      explanation: "yield from delegates to sub-generator."
    },
    {
      id: 75,
      language: "Python",
      difficulty: "Hard",
      question: "What happens?",
      code: `print(hash((1,2,[3])))`,
      options: [
        "Returns hash",
        "TypeError",
        "None",
        "0"
      ],
      correct: 1,
      explanation: "Tuples containing mutable types are unhashable."
    },
    {
      id: 76,
      language: "Python",
      difficulty: "Hard",
      question: "What does __enter__ relate to?",
      options: [
        "Decorators",
        "Context managers",
        "Async",
        "Threads"
      ],
      correct: 1,
      explanation: "__enter__ is used in context managers."
    },
    {
      id: 77,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `print(type(None) == None)`,
      options: ["True", "False", "Error", "None"],
      correct: 1,
      explanation: "None is an instance, not a type."
    },
    {
      id: 78,
      language: "Python",
      difficulty: "Hard",
      question: "What does __call__ allow?",
      options: [
        "Calling classes",
        "Calling objects",
        "Calling modules",
        "Calling files"
      ],
      correct: 1,
      explanation: "__call__ makes objects callable."
    },
    {
      id: 79,
      language: "Python",
      difficulty: "Hard",
      question: "What is monkey patching?",
      options: [
        "Editing source code",
        "Runtime modification",
        "Subclassing",
        "Refactoring"
      ],
      correct: 1,
      explanation: "Monkey patching modifies behavior at runtime."
    },
    {
      id: 80,
      language: "Python",
      difficulty: "Hard",
      question: "What does functools.lru_cache do?",
      options: [
        "Caching",
        "Threading",
        "Logging",
        "Validation"
      ],
      correct: 0,
      explanation: "Caches function results (memoization)."
    },
    {
      id: 81,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `print(list(map(lambda x: x*x, filter(lambda x: x>2, [1,2,3,4]))))`,
      options: ["[9,16]", "[4,9,16]", "[3,4]", "Error"],
      correct: 0,
      explanation: "Filter >2 then square."
    },
    {
      id: 82,
      language: "Python",
      difficulty: "Hard",
      question: "What does __mro__ show?",
      options: [
        "Memory layout",
        "Method resolution order",
        "Runtime objects",
        "Module registry"
      ],
      correct: 1,
      explanation: "__mro__ defines inheritance lookup order."
    },
    {
      id: 83,
      language: "Python",
      difficulty: "Hard",
      question: "What is pickling?",
      options: [
        "Encrypting data",
        "Serializing objects",
        "Hashing data",
        "Compressing data"
      ],
      correct: 1,
      explanation: "Pickle serializes Python objects."
    },
    {
      id: 84,
      language: "Python",
      difficulty: "Hard",
      question: "What happens?",
      code: `assert 2 + 2 == 5`,
      options: [
        "Nothing",
        "AssertionError",
        "SyntaxError",
        "RuntimeError"
      ],
      correct: 1,
      explanation: "Assertion fails."
    },
    {
      id: 85,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `print({i:i*i for i in range(3) if i})`,
      options: ["{1:1,2:4}", "{0:0,1:1,2:4}", "{}", "Error"],
      correct: 0,
      explanation: "0 is falsy."
    },
    {
      id: 86,
      language: "Python",
      difficulty: "Hard",
      question: "What does sys.getsizeof return?",
      options: [
        "Object memory size",
        "Deep memory size",
        "Heap usage",
        "Stack size"
      ],
      correct: 0,
      explanation: "Returns shallow object size."
    },
    {
      id: 87,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `print(type(True + True))`,
      options: [
        "<class 'int'>",
        "<class 'bool'>",
        "<class 'float'>",
        "Error"
      ],
      correct: 0,
      explanation: "Booleans act as integers."
    },
    {
      id: 88,
      language: "Python",
      difficulty: "Hard",
      question: "What does weakref do?",
      options: [
        "Prevent GC",
        "Allow GC",
        "Freeze object",
        "Clone object"
      ],
      correct: 1,
      explanation: "Weak references don't prevent garbage collection."
    },
    {
      id: 89,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `print({}.fromkeys([1,2], []))`,
      options: [
        "{1:[],2:[]}",
        "{1:[ ],2:[ ] shared}",
        "Error",
        "None"
      ],
      correct: 1,
      explanation: "Same list shared as value."
    },
    {
      id: 90,
      language: "Python",
      difficulty: "Hard",
      question: "What does __repr__ do?",
      options: [
        "User output",
        "Debug representation",
        "Logging",
        "Printing only"
      ],
      correct: 1,
      explanation: "__repr__ is for unambiguous object representation."
    },
    {
      id: 91,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `print((lambda x: x)(5))`,
      options: ["5", "None", "Error", "Function"],
      correct: 0,
      explanation: "Lambda immediately invoked."
    },
    {
      id: 92,
      language: "Python",
      difficulty: "Hard",
      question: "What does asyncio run?",
      options: [
        "Threads",
        "Processes",
        "Event loop",
        "Parallel CPU"
      ],
      correct: 2,
      explanation: "Asyncio uses an event loop."
    },
    {
      id: 93,
      language: "Python",
      difficulty: "Hard",
      question: "What happens?",
      code: `print(list({1,2,3}))`,
      options: [
        "Ordered list",
        "Unordered list",
        "Error",
        "None"
      ],
      correct: 1,
      explanation: "Sets are unordered."
    },
    {
      id: 94,
      language: "Python",
      difficulty: "Hard",
      question: "What does __eq__ override?",
      options: [
        "Identity",
        "Equality",
        "Hashing",
        "Comparison only"
      ],
      correct: 1,
      explanation: "__eq__ controls equality checks."
    },
    {
      id: 95,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `print(type(type(1)))`,
      options: [
        "<class 'int'>",
        "<class 'type'>",
        "<class 'object'>",
        "Error"
      ],
      correct: 1,
      explanation: "Types are instances of type."
    },
    {
      id: 96,
      language: "Python",
      difficulty: "Hard",
      question: "What does del do?",
      options: [
        "Deletes object",
        "Deletes reference",
        "Frees memory immediately",
        "Resets variable"
      ],
      correct: 1,
      explanation: "del removes reference."
    },
    {
      id: 97,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `print(callable(print))`,
      options: ["True", "False", "None", "Error"],
      correct: 0,
      explanation: "print is callable."
    },
    {
      id: 98,
      language: "Python",
      difficulty: "Hard",
      question: "What does inspect do?",
      options: [
        "Debug code",
        "Analyze objects",
        "Compile code",
        "Run tests"
      ],
      correct: 1,
      explanation: "inspect analyzes live objects."
    },
    {
      id: 99,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `print(type(NotImplemented))`,
      options: [
        "<class 'NoneType'>",
        "<class 'NotImplementedType'>",
        "<class 'bool'>",
        "Error"
      ],
      correct: 1,
      explanation: "NotImplemented has its own type."
    },
    {
      id: 100,
      language: "Python",
      difficulty: "Hard",
      question: "What is Python?",
      options: [
        "Compiled language",
        "Interpreted language",
        "Both compiled and interpreted",
        "Assembly language"
      ],
      correct: 2,
      explanation: "Python compiles to bytecode then interprets."
    }, {
      id: 101,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `a = [1, 2, 3]
b = a
a *= 2
print(b)`,
      options: ["[1,2,3]", "[1,2,3,1,2,3]", "Error", "None"],
      correct: 1,
      explanation: "*= mutates the list in-place; b references the same list."
    },
    {
      id: 102,
      language: "Python",
      difficulty: "Hard",
      question: "What does the yield keyword do?",
      options: [
        "Stops function",
        "Returns a generator",
        "Creates a thread",
        "Raises error"
      ],
      correct: 1,
      explanation: "yield returns a generator, allowing lazy iteration."
    },
    {
      id: 103,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `def f(val, lst=[]):
    lst.append(val)
    return lst

print(f(1))
print(f(2, []))
print(f(3))`,
      options: [
        "[1] [2] [1,3]",
        "[1] [2] [3]",
        "[1] [2] [1]",
        "Error"
      ],
      correct: 0,
      explanation: "Default list persists across calls unless overridden."
    },
    {
      id: 104,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `x = 10
def outer():
    x = 20
    def inner():
        global x
        x = 30
    inner()
    return x
print(outer(), x)`,
      options: ["20 10", "30 10", "20 30", "30 30"],
      correct: 2,
      explanation: "inner changes global x, outer local x remains."
    },
    {
      id: 105,
      language: "Python",
      difficulty: "Hard",
      question: "What is memoization used for?",
      options: [
        "Caching results of function calls",
        "Deleting unused memory",
        "Sorting data",
        "Concurrency"
      ],
      correct: 0,
      explanation: "Memoization stores previous function results for faster future calls."
    },
    {
      id: 106,
      language: "Python",
      difficulty: "Hard",
      question: "What is the difference between deep copy and shallow copy?",
      options: [
        "Shallow copies object and nested objects; deep copies only top-level",
        "Shallow copies only top-level; deep copies all nested objects",
        "No difference",
        "Deep copy is faster"
      ],
      correct: 1,
      explanation: "Shallow copy references nested objects; deep copy duplicates all levels."
    },
    {
      id: 107,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `print(list(range(0, 10, 2)))`,
      options: ["[0,2,4,6,8]", "[0,1,2,3,4]", "[2,4,6,8,10]", "Error"],
      correct: 0,
      explanation: "range(start, stop, step) generates numbers up to stop-1."
    },
    {
      id: 108,
      language: "Python",
      difficulty: "Hard",
      question: "What does functools.partial do?",
      options: [
        "Freezes function arguments",
        "Delays execution",
        "Caches function result",
        "Runs function async"
      ],
      correct: 0,
      explanation: "partial allows pre-filling some arguments of a function."
    },
    {
      id: 109,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `a = [1,2,3]
b = a
b.append(4)
print(a is b)`,
      options: ["True", "False", "Error", "None"],
      correct: 0,
      explanation: "Both variables reference the same list object."
    },
    {
      id: 110,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `print([i*i for i in range(3) if i%2==0])`,
      options: ["[0,4]", "[0,1,4]", "[1,4]", "Error"],
      correct: 0,
      explanation: "Only even numbers (0,2) squared."
    },
    {
      id: 111,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `print(1 < 2 < 3)`,
      options: ["True", "False", "Error", "None"],
      correct: 0,
      explanation: "Python supports chained comparisons."
    },
    {
      id: 112,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `print(all([True, 1, "non-empty"]))`,
      options: ["True", "False", "Error", "None"],
      correct: 0,
      explanation: "all() checks truthiness of all elements."
    },
    {
      id: 113,
      language: "Python",
      difficulty: "Hard",
      question: "What is the difference between @staticmethod and @classmethod?",
      options: [
        "staticmethod receives class, classmethod receives instance",
        "staticmethod receives instance, classmethod receives class",
        "staticmethod has no implicit argument, classmethod receives class",
        "No difference"
      ],
      correct: 2,
      explanation: "staticmethod has no self or cls; classmethod receives class."
    },
    {
      id: 114,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `print(sorted(['a','B','c'], key=str.lower))`,
      options: ["['a','B','c']", "['B','a','c']", "['a','c','B']", "Error"],
      correct: 0,
      explanation: "sorted with key=str.lower sorts ignoring case."
    },
    {
      id: 115,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `x = [1,2,3]
y = x
x = x.copy()
x.append(4)
print(y)`,
      options: ["[1,2,3]", "[1,2,3,4]", "Error", "None"],
      correct: 0,
      explanation: "y still points to original list; x copy is new."
    },
    {
      id: 116,
      language: "Python",
      difficulty: "Hard",
      question: "What is the difference between is and ==",
      options: [
        "is checks identity, == checks equality",
        "is checks equality, == checks identity",
        "Both same",
        "Both compare memory"
      ],
      correct: 0,
      explanation: "is checks if objects are same; == checks value equality."
    },
    {
      id: 117,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `a = [1,2,3]
b = a[:]
b.append(4)
print(a)`,
      options: ["[1,2,3]", "[1,2,3,4]", "Error", "None"],
      correct: 0,
      explanation: "Slicing creates shallow copy."
    },
    {
      id: 118,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `print({1,2,3} & {2,3,4})`,
      options: ["{2,3}", "{1,2,3,4}", "{1,2,3}", "Error"],
      correct: 0,
      explanation: "& returns intersection of sets."
    },
    {
      id: 119,
      language: "Python",
      difficulty: "Hard",
      question: "What is the output?",
      code: `x = 5
def func():
    global x
    x = x + 1
func()
print(x)`,
      options: ["5", "6", "Error", "None"],
      correct: 1,
      explanation: "global keyword modifies global variable."
    },
    {
      id: 120,
      language: "Python",
      difficulty: "Hard",
      question: "What is the difference between Python lists and tuples?",
      options: [
        "Lists immutable, tuples mutable",
        "Lists mutable, tuples immutable",
        "No difference",
        "Both immutable"
      ],
      correct: 1,
      explanation: "Lists are mutable; tuples are immutable."
    }

  ]
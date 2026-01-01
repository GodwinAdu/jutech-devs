import { Question } from "../questions";

export const typescriptQuestions: Question[] = [
  {
    id: 1,
    language: "TypeScript",
    difficulty: "Easy",
    question: "What is TypeScript?",
    options: [
      "A superset of JavaScript with types",
      "A CSS framework",
      "A database",
      "A backend language"
    ],
    correct: 0,
    explanation: "TypeScript is a superset of JavaScript that adds static typing and other features."
  },
  {
    id: 2,
    language: "TypeScript",
    difficulty: "Easy",
    question: "How do you define a typed variable?",
    code: `let name: ??? = "John";`,
    options: ["string", "number", "any", "boolean"],
    correct: 0,
    explanation: "The syntax 'let variableName: type' is used to declare typed variables."
  },
  {
    id: 3,
    language: "TypeScript",
    difficulty: "Easy",
    question: "What does the 'any' type do?",
    code: `let data: any;`,
    options: [
      "Disables type checking",
      "Allows only strings",
      "Only numbers allowed",
      "Required type inference"
    ],
    correct: 0,
    explanation: "'any' allows any value, bypassing TypeScript's type checking."
  },
  {
    id: 4,
    language: "TypeScript",
    difficulty: "Easy",
    question: "Which type allows multiple types?",
    code: `let value: ???;`,
    options: ["string | number", "any", "unknown", "never"],
    correct: 0,
    explanation: "Union types (using '|') allow a variable to hold multiple types."
  },
  {
    id: 5,
    language: "TypeScript",
    difficulty: "Easy",
    question: "What is the purpose of interfaces?",
    options: [
      "To define object shapes",
      "To declare variables",
      "To write loops",
      "To style elements"
    ],
    correct: 0,
    explanation: "Interfaces define the structure of objects and enforce contracts."
  },
  {
    id: 6,
    language: "TypeScript",
    difficulty: "Easy",
    question: "How do you define an optional property in an interface?",
    code: `interface User {
  name: string;
  age?: number;
}`,
    options: [
      "Use '?' after property name",
      "Use 'optional'",
      "Use 'any'",
      "Use 'undefined'"
    ],
    correct: 0,
    explanation: "The '?' symbol makes a property optional in TypeScript interfaces."
  },
  {
    id: 7,
    language: "TypeScript",
    difficulty: "Easy",
    question: "How do you define a readonly property?",
    code: `interface User {
  readonly id: number;
}`,
    options: [
      "Readonly property cannot be changed after initialization",
      "Can be changed anytime",
      "Property is optional",
      "Property is private"
    ],
    correct: 0,
    explanation: "Readonly properties can only be set during initialization or in the constructor."
  },
  {
    id: 8,
    language: "TypeScript",
    difficulty: "Easy",
    question: "What is the 'never' type used for?",
    options: [
      "Represents values that never occur",
      "Represents undefined values",
      "Represents strings",
      "Represents any type"
    ],
    correct: 0,
    explanation: "'never' is used for functions that never return or always throw errors."
  },
  {
    id: 9,
    language: "TypeScript",
    difficulty: "Easy",
    question: "Which type checks if value is unknown?",
    code: `let val: unknown;`,
    options: [
      "unknown forces type checking before usage",
      "any skips type checking",
      "never returns value",
      "void returns nothing"
    ],
    correct: 0,
    explanation: "Unknown requires explicit type checking before assigning or using the value."
  },
  {
    id: 10,
    language: "TypeScript",
    difficulty: "Medium",
    question: "What is the difference between type and interface?",
    options: [
      "Types can represent primitives, unions, tuples; interfaces define object shapes",
      "Both same",
      "Interface can do unions",
      "Type cannot be reused"
    ],
    correct: 0,
    explanation: "Type aliases can represent multiple types; interfaces are mainly for objects."
  },
  {
    id: 11,
    language: "TypeScript",
    difficulty: "Medium",
    question: "What does 'as' keyword do?",
    code: `let value: any = "Hello";\nlet str = value as string;`,
    options: [
      "Type assertion to tell compiler the variable type",
      "Declares a new variable",
      "Assigns value",
      "Creates interface"
    ],
    correct: 0,
    explanation: "The 'as' keyword asserts a variable type for the compiler without runtime checks."
  },
  {
    id: 12,
    language: "TypeScript",
    difficulty: "Medium",
    question: "How do you define a tuple?",
    code: `let person: ??? = ["John", 30];`,
    options: ["[string, number]", "any[]", "object", "Array<string | number>"],
    correct: 0,
    explanation: "Tuples define fixed-length arrays with specified types for each element."
  },
  {
    id: 13,
    language: "TypeScript",
    difficulty: "Medium",
    question: "What is the 'unknown' type?",
    options: [
      "Type-safe counterpart of 'any' requiring checks before usage",
      "Same as 'any'",
      "Never returns value",
      "Represents strings only"
    ],
    correct: 0,
    explanation: "'unknown' allows any value but requires type checking before operations."
  },
  {
    id: 14,
    language: "TypeScript",
    difficulty: "Medium",
    question: "How do you define a generic function?",
    code: `function identity<T>(value: T): T { return value; }`,
    options: [
      "T is a generic type parameter, allows flexibility",
      "T is always number",
      "T is optional",
      "T is interface"
    ],
    correct: 0,
    explanation: "Generics allow functions or classes to operate on multiple types while preserving type safety."
  },
  {
    id: 15,
    language: "TypeScript",
    difficulty: "Medium",
    question: "What does keyof operator do?",
    code: `type User = { name: string; age: number; }\ntype Keys = keyof User;`,
    options: [
      "Creates union of keys ('name' | 'age')",
      "Creates values union",
      "Creates array",
      "Assigns values"
    ],
    correct: 0,
    explanation: "keyof produces a union of property names of an object type."
  },
  {
    id: 16,
    language: "TypeScript",
    difficulty: "Medium",
    question: "How do you extend an interface?",
    code: `interface Person { name: string; }\ninterface Employee extends Person { salary: number; }`,
    options: [
      "Extends adds more properties to existing interface",
      "Replaces interface",
      "Cannot extend interface",
      "Overwrites types"
    ],
    correct: 0,
    explanation: "Extending interfaces allows building new interfaces with additional properties."
  },
  {
    id: 17,
    language: "TypeScript",
    difficulty: "Medium",
    question: "What does Partial<T> utility type do?",
    options: [
      "Makes all properties of T optional",
      "Makes all properties required",
      "Removes properties",
      "Makes properties readonly"
    ],
    correct: 0,
    explanation: "Partial<T> converts all properties in T into optional properties."
  },
  {
    id: 18,
    language: "TypeScript",
    difficulty: "Medium",
    question: "What does Readonly<T> do?",
    options: [
      "Marks all properties of T as readonly",
      "Allows mutation",
      "Removes properties",
      "Makes properties optional"
    ],
    correct: 0,
    explanation: "Readonly<T> makes all properties of a type immutable."
  },
  {
    id: 19,
    language: "TypeScript",
    difficulty: "Medium",
    question: "What does Record<K, T> utility type do?",
    options: [
      "Creates an object type with keys K and values T",
      "Records function calls",
      "Readonly object",
      "Union type"
    ],
    correct: 0,
    explanation: "Record<K, T> constructs an object type with specified keys and values types."
  },
  {
    id: 20,
    language: "TypeScript",
    difficulty: "Medium",
    question: "How do you define a conditional type?",
    code: `type TypeName<T> = T extends string ? "string" : "other";`,
    options: [
      "Conditionally chooses type based on T",
      "Runtime if",
      "Optional type",
      "Deprecated feature"
    ],
    correct: 0,
    explanation: "Conditional types allow choosing a type based on another type."
  },
  {
    id: 21,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is the difference between interface and type for objects?",
    options: [
      "Interfaces can be merged, types cannot",
      "Both same",
      "Types are faster",
      "Interfaces cannot extend"
    ],
    correct: 0,
    explanation: "Interfaces can be merged and extended multiple times, whereas type aliases cannot."
  },
  {
    id: 22,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is the purpose of the never type in functions?",
    code: `function error(message: string): never { throw new Error(message); }`,
    options: [
      "Indicates function never returns normally",
      "Indicates undefined return",
      "Indicates optional return",
      "Indicates any return"
    ],
    correct: 0,
    explanation: "Functions that throw or never return have the 'never' type."
  },
  {
    id: 23,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is type inference in TypeScript?",
    options: [
      "Compiler automatically infers types when not explicitly declared",
      "You must always declare types",
      "Only works for arrays",
      "Deprecated feature"
    ],
    correct: 0,
    explanation: "TypeScript can infer types of variables and function return types automatically."
  },
  {
    id: 24,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is the difference between any and unknown?",
    options: [
      "any disables type checking; unknown requires checks before usage",
      "Both same",
      "unknown is unsafe",
      "any is readonly"
    ],
    correct: 0,
    explanation: "'unknown' is safer than 'any' as it forces type checking before operations."
  },
  {
    id: 25,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you define a mapped type?",
    code: `type Keys = 'a' | 'b';\ntype Obj = { [K in Keys]: number; };`,
    options: [
      "Creates new type by transforming existing keys",
      "Creates union type",
      "Creates optional type",
      "Creates class"
    ],
    correct: 0,
    explanation: "Mapped types allow creating new types by iterating over keys."
  },
  {
    id: 26,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What does the infer keyword do in conditional types?",
    code: `type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;`,
    options: [
      "Extracts type from another type",
      "Defines generic",
      "Optional type",
      "Deprecated"
    ],
    correct: 0,
    explanation: "The infer keyword lets you extract a type inside a conditional type."
  },
  {
    id: 27,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is the difference between interface merging and type alias?",
    options: [
      "Interfaces can merge multiple declarations; type aliases cannot",
      "Both same",
      "Type alias merges automatically",
      "Interfaces cannot extend"
    ],
    correct: 0,
    explanation: "Interfaces support declaration merging, allowing multiple interface declarations to combine."
  },
  {
    id: 28,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is a discriminated union?",
    code: `type Shape = { kind: 'circle'; radius: number; } | { kind: 'square'; size: number; };`,
    options: [
      "Union of types with a common literal property to differentiate",
      "Any union type",
      "Optional type",
      "Never type"
    ],
    correct: 0,
    explanation: "Discriminated unions use a literal property (e.g., kind) to safely narrow types."
  },
  {
    id: 29,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is the difference between unknown[] and any[]?",
    options: [
      "unknown[] forces type checking on elements; any[] allows any operations",
      "Both same",
      "any[] is safer",
      "unknown[] deprecated"
    ],
    correct: 0,
    explanation: "unknown[] elements cannot be used without type checks, unlike any[]."
  },
  {
    id: 30,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you create a readonly array?",
    code: `let arr: ??? = [1,2,3];`,
    options: ["ReadonlyArray<number>", "number[]", "any[]", "Array<number>"],
    correct: 0,
    explanation: "ReadonlyArray<T> ensures the array cannot be mutated (push, pop, etc.)."
  },
  {
    id: 31,
    language: "TypeScript",
    difficulty: "Easy",
    question: "Which keyword is used to declare a constant in TypeScript?",
    code: `??? PI = 3.14;`,
    options: ["const", "let", "var", "static"],
    correct: 0,
    explanation: "'const' declares a constant whose value cannot be changed."
  },
  {
    id: 32,
    language: "TypeScript",
    difficulty: "Easy",
    question: "What is the default type of a variable if no type is specified?",
    options: ["any", "unknown", "string", "number"],
    correct: 0,
    explanation: "TypeScript defaults to 'any' type when no explicit type or inference is provided."
  },
  {
    id: 33,
    language: "TypeScript",
    difficulty: "Easy",
    question: "Which type represents functions that return nothing?",
    options: ["void", "never", "any", "unknown"],
    correct: 0,
    explanation: "The 'void' type is used for functions that do not return a value."
  },
  {
    id: 34,
    language: "TypeScript",
    difficulty: "Easy",
    question: "Which type is used for integer and floating-point numbers?",
    options: ["number", "int", "float", "double"],
    correct: 0,
    explanation: "TypeScript has a single 'number' type for all numeric values."
  },
  {
    id: 35,
    language: "TypeScript",
    difficulty: "Easy",
    question: "How do you declare an array of numbers?",
    code: `let nums: ??? = [1,2,3];`,
    options: ["number[]", "Array<number>", "Both A and B", "int[]"],
    correct: 2,
    explanation: "Both 'number[]' and 'Array<number>' are valid ways to declare arrays of numbers."
  },
  {
    id: 36,
    language: "TypeScript",
    difficulty: "Medium",
    question: "What does the 'enum' keyword do?",
    code: `enum Direction { Up, Down, Left, Right }`,
    options: [
      "Defines a set of named constants",
      "Declares a class",
      "Declares an interface",
      "Creates a union type"
    ],
    correct: 0,
    explanation: "Enums allow defining a set of named constants for better readability."
  },
  {
    id: 37,
    language: "TypeScript",
    difficulty: "Medium",
    question: "What is the purpose of the 'unknown' type?",
    options: [
      "Safe counterpart of 'any' requiring type checks",
      "Deprecated any type",
      "Represents undefined",
      "Represents null"
    ],
    correct: 0,
    explanation: "'unknown' allows any value but requires explicit type checking before use."
  },
  {
    id: 38,
    language: "TypeScript",
    difficulty: "Medium",
    question: "How do you declare a function type?",
    code: `let add: ??? = (a, b) => a + b;`,
    options: ["(a: number, b: number) => number", "function", "any", "void"],
    correct: 0,
    explanation: "Function types specify the argument types and return type."
  },
  {
    id: 39,
    language: "TypeScript",
    difficulty: "Medium",
    question: "How do you make all properties of an interface optional?",
    code: `interface User { name: string; age: number; }`,
    options: [
      "Partial<User>",
      "Readonly<User>",
      "Pick<User>",
      "Record<User>"
    ],
    correct: 0,
    explanation: "Partial<T> converts all properties in a type or interface into optional."
  },
  {
    id: 40,
    language: "TypeScript",
    difficulty: "Medium",
    question: "What does 'Readonly<T>' utility type do?",
    options: [
      "Marks all properties as readonly",
      "Allows mutation",
      "Optional properties",
      "Deletes properties"
    ],
    correct: 0,
    explanation: "Readonly<T> ensures that all properties in T cannot be modified after assignment."
  },
  {
    id: 41,
    language: "TypeScript",
    difficulty: "Medium",
    question: "What is the difference between type aliases and interfaces?",
    options: [
      "Type aliases can represent primitives, unions, tuples; interfaces mainly for objects",
      "Both same",
      "Type aliases cannot represent objects",
      "Interfaces cannot extend"
    ],
    correct: 0,
    explanation: "Type aliases are more flexible, while interfaces are extendable and mergeable."
  },
  {
    id: 42,
    language: "TypeScript",
    difficulty: "Medium",
    question: "What does 'keyof' operator do?",
    code: `type User = { name: string; age: number; }`,
    options: [
      "Creates a union of keys ('name' | 'age')",
      "Creates a union of values",
      "Creates array",
      "Assigns value"
    ],
    correct: 0,
    explanation: "keyof produces a union type of the keys of a given type or interface."
  },
  {
    id: 43,
    language: "TypeScript",
    difficulty: "Medium",
    question: "What does 'Record<K, T>' utility type do?",
    options: [
      "Creates an object type with keys K and values T",
      "Creates a union type",
      "Creates an array",
      "Creates a class"
    ],
    correct: 0,
    explanation: "Record<K, T> allows defining object types with specific keys and value types."
  },
  {
    id: 44,
    language: "TypeScript",
    difficulty: "Medium",
    question: "What is the purpose of 'infer' in conditional types?",
    code: `type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;`,
    options: [
      "Extracts type from another type",
      "Declares function",
      "Optional type",
      "Never type"
    ],
    correct: 0,
    explanation: "The 'infer' keyword is used to extract types in conditional types."
  },
  {
    id: 45,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is a discriminated union?",
    code: `type Shape = { kind: 'circle'; radius: number } | { kind: 'square'; size: number };`,
    options: [
      "Union of types with a common literal property for type narrowing",
      "Any union type",
      "Optional type",
      "Readonly type"
    ],
    correct: 0,
    explanation: "Discriminated unions use a literal property (like 'kind') to safely narrow the type."
  },
  {
    id: 46,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is the difference between 'any' and 'unknown'?",
    options: [
      "any disables type checking; unknown requires type checks",
      "Both same",
      "unknown is unsafe",
      "any is readonly"
    ],
    correct: 0,
    explanation: "'unknown' is safer than 'any' because it enforces type checking."
  },
  {
    id: 47,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you create a mapped type?",
    code: `type Keys = 'a' | 'b'; type Obj = { [K in Keys]: number };`,
    options: [
      "Transforms keys into a new type",
      "Creates union type",
      "Creates optional type",
      "Creates interface"
    ],
    correct: 0,
    explanation: "Mapped types transform existing keys into new type structures."
  },
  {
    id: 48,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is the difference between type alias merging and interface merging?",
    options: [
      "Interfaces can merge multiple declarations; type aliases cannot",
      "Both merge same way",
      "Type aliases can merge",
      "Interfaces cannot merge"
    ],
    correct: 0,
    explanation: "Interfaces support declaration merging while type aliases do not."
  },
  {
    id: 49,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is type inference?",
    options: [
      "Compiler automatically determines type if not specified",
      "You must declare type explicitly",
      "Only works for arrays",
      "Deprecated feature"
    ],
    correct: 0,
    explanation: "TypeScript can infer variable and function return types automatically."
  },
  {
    id: 50,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What does the 'extends' keyword do in generics?",
    code: `function logLength<T extends { length: number }>(arg: T) { return arg.length; }`,
    options: [
      "Constrains generic type to types with 'length'",
      "Declares interface",
      "Creates union type",
      "Optional type"
    ],
    correct: 0,
    explanation: "'extends' allows constraining generics to a specific type or interface."
  },
  {
    id: 51,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you create a function that accepts only specific string literals?",
    code: `function move(direction: ???) { }`,
    options: [
      "'up' | 'down' | 'left' | 'right'",
      "string",
      "any",
      "unknown"
    ],
    correct: 0,
    explanation: "Literal types restrict the allowed string values for a parameter."
  },
  {
    id: 52,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is the difference between interface and abstract class?",
    options: [
      "Interface defines a contract; abstract class can have implementation",
      "Both same",
      "Abstract class cannot have methods",
      "Interface cannot extend"
    ],
    correct: 0,
    explanation: "Abstract classes can implement methods, while interfaces only define structure."
  },
  {
    id: 53,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What does 'never' type indicate?",
    options: [
      "Function never returns normally",
      "Optional type",
      "Unknown type",
      "Any type"
    ],
    correct: 0,
    explanation: "'never' is used for functions that throw errors or never return."
  },
  {
    id: 54,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is the purpose of the 'as const' assertion?",
    code: `let arr = [1,2,3] as const;`,
    options: [
      "Makes array readonly and literal types",
      "Type any",
      "Mutable array",
      "Optional type"
    ],
    correct: 0,
    explanation: "'as const' makes the array immutable and its values literal types."
  },
  {
    id: 55,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you extract the return type of a function type?",
    code: `type Fn = () => number; type R = ???;`,
    options: [
      "ReturnType<Fn>",
      "FnReturn",
      "FnType",
      "any"
    ],
    correct: 0,
    explanation: "ReturnType<T> utility type extracts the return type of a function."
  },
  {
    id: 56,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you make all properties of a type optional and readonly?",
    options: [
      "Readonly<Partial<T>>",
      "Partial<Readonly<T>>",
      "Pick<T>",
      "Record<T>"
    ],
    correct: 0,
    explanation: "Combining Readonly and Partial makes all properties optional and immutable."
  },
  {
    id: 57,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What does 'unknown extends any' evaluate to?",
    options: [
      "true",
      "false",
      "never",
      "unknown"
    ],
    correct: 0,
    explanation: "Unknown is assignable to any type in conditional type checks."
  },
  {
    id: 58,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is a recursive type in TypeScript?",
    code: `type NestedArray<T> = T | NestedArray<T>[];`,
    options: [
      "A type that references itself",
      "Array type",
      "Optional type",
      "Never type"
    ],
    correct: 0,
    explanation: "Recursive types allow defining structures like nested arrays or trees."
  },
  {
    id: 59,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What does 'infer' allow in conditional types?",
    options: [
      "Extract a type inside a conditional type",
      "Optional property",
      "Readonly type",
      "Union type"
    ],
    correct: 0,
    explanation: "Infer allows extracting a type from another type in a conditional type."
  },
  {
    id: 60,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is the difference between T | undefined and T?",
    options: [
      "T | undefined allows variable to be undefined; T does not",
      "Both same",
      "T is optional",
      "T cannot hold values"
    ],
    correct: 0,
    explanation: "Union with undefined allows a variable to be optionally undefined."
  },
  {
    id: 61,
    language: "TypeScript",
    difficulty: "Medium",
    question: "What is the difference between 'interface' and 'type' when extending?",
    options: [
      "Both can extend, but interfaces can merge declarations; type cannot",
      "Only type can extend",
      "Only interface can extend",
      "Neither can extend"
    ],
    correct: 0,
    explanation: "Interfaces can extend other interfaces and merge declarations; type aliases can use intersections to extend."
  },
  {
    id: 62,
    language: "TypeScript",
    difficulty: "Medium",
    question: "Which utility type makes selected properties optional?",
    code: `type User = { name: string; age: number; email: string }; type PartialEmail = ???;`,
    options: [
      "Partial<Pick<User, 'email'>>",
      "Readonly<User>",
      "Pick<User, 'email'>",
      "Record<User>"
    ],
    correct: 0,
    explanation: "Combining Pick and Partial allows making only selected properties optional."
  },
  {
    id: 63,
    language: "TypeScript",
    difficulty: "Medium",
    question: "What is the purpose of the 'never' type in exhaustive checks?",
    options: [
      "Ensure all possible cases are handled in a switch or union type",
      "Represents void",
      "Optional type",
      "Readonly type"
    ],
    correct: 0,
    explanation: "Using 'never' in a default branch ensures the compiler warns about unhandled cases."
  },
  {
    id: 64,
    language: "TypeScript",
    difficulty: "Medium",
    question: "How do you make a property readonly after initialization?",
    code: `interface User { ??? name: string; }`,
    options: ["readonly", "const", "final", "static"],
    correct: 0,
    explanation: "'readonly' ensures that the property cannot be reassigned after initialization."
  },
  {
    id: 65,
    language: "TypeScript",
    difficulty: "Medium",
    question: "What is the difference between 'interface A extends B' and 'type A = B & {}'?",
    options: [
      "Interface allows declaration merging, type intersection does not",
      "Both same",
      "Type allows merging, interface does not",
      "Neither can extend"
    ],
    correct: 0,
    explanation: "Interfaces support declaration merging, while type intersections do not merge across declarations."
  },
  {
    id: 66,
    language: "TypeScript",
    difficulty: "Medium",
    question: "How do you define a tuple type with fixed length?",
    code: `let point: ??? = [1, 2];`,
    options: ["[number, number]", "number[]", "Array<number>", "Tuple<number>"],
    correct: 0,
    explanation: "Tuples allow fixed-length arrays with specific types in TypeScript."
  },
  {
    id: 67,
    language: "TypeScript",
    difficulty: "Medium",
    question: "What does 'as' keyword do in TypeScript?",
    options: [
      "Type assertion to tell the compiler the type",
      "Declares variable",
      "Optional property",
      "Readonly type"
    ],
    correct: 0,
    explanation: "'as' allows overriding TypeScript’s inferred type to a known type."
  },
  {
    id: 68,
    language: "TypeScript",
    difficulty: "Medium",
    question: "What is the difference between unknown and any in assignment?",
    options: [
      "any can be assigned freely; unknown requires type checking",
      "Both same",
      "unknown can be assigned to anything without checks",
      "any is safer"
    ],
    correct: 0,
    explanation: "unknown is safer than any as it requires type checking before use."
  },
  {
    id: 69,
    language: "TypeScript",
    difficulty: "Medium",
    question: "How do you create a union of literal types?",
    code: `type Direction = ???;`,
    options: [
      "'up' | 'down' | 'left' | 'right'",
      "string",
      "number",
      "any"
    ],
    correct: 0,
    explanation: "Literal union types restrict values to specific literals."
  },
  {
    id: 70,
    language: "TypeScript",
    difficulty: "Medium",
    question: "What is type narrowing?",
    options: [
      "Reducing a broad type to a more specific type through checks",
      "Assigning any type",
      "Declaring type",
      "Making type optional"
    ],
    correct: 0,
    explanation: "Type narrowing occurs when TypeScript detects a more specific type using conditionals or typeof checks."
  },
  {
    id: 71,
    language: "TypeScript",
    difficulty: "Medium",
    question: "How do you extract keys of a type as a union?",
    code: `type User = { name: string; age: number }; type Keys = ???;`,
    options: ["keyof User", "UserKeys", "KeysOf<User>", "Keys<User>"],
    correct: 0,
    explanation: "The 'keyof' operator produces a union of the keys of a type or interface."
  },
  {
    id: 72,
    language: "TypeScript",
    difficulty: "Medium",
    question: "How do you make a function parameter optional?",
    code: `function greet(name?: string) { console.log(name); }`,
    options: [
      "Use ? after parameter name",
      "Use | undefined",
      "Use readonly",
      "Use optional type utility"
    ],
    correct: 0,
    explanation: "Adding '?' after a parameter marks it as optional."
  },
  {
    id: 73,
    language: "TypeScript",
    difficulty: "Medium",
    question: "What is the difference between type alias and interface when adding new fields?",
    options: [
      "Interfaces can be reopened and extended; type aliases cannot",
      "Both can be extended",
      "Type alias is mutable",
      "Interface cannot extend"
    ],
    correct: 0,
    explanation: "Interfaces support declaration merging, while type aliases do not."
  },
  {
    id: 74,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you define a generic type constrained to number or string?",
    code: `function identity<T ??? ???>(arg: T): T { return arg; }`,
    options: [
      "extends number | string",
      "extends any",
      "extends unknown",
      "extends never"
    ],
    correct: 0,
    explanation: "You can constrain generics with 'extends' to restrict types to specific ones."
  },
  {
    id: 75,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is the difference between unknown[] and any[]?",
    options: [
      "unknown[] is safer; cannot use elements without type checks",
      "Both same",
      "any[] is safer",
      "unknown[] allows assignment to anything"
    ],
    correct: 0,
    explanation: "unknown[] requires explicit type checks before element usage, making it safer than any[]."
  },
  {
    id: 76,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is conditional type in TypeScript?",
    code: `type Check<T> = T extends string ? true : false;`,
    options: [
      "Type that depends on a condition",
      "Function type",
      "Optional type",
      "Never type"
    ],
    correct: 0,
    explanation: "Conditional types allow defining types based on a condition between two types."
  },
  {
    id: 77,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is the difference between interface merging and type alias intersection?",
    options: [
      "Interface merging allows multiple declarations; type intersections combine types",
      "Both same",
      "Type intersection allows merging multiple declarations",
      "Neither can merge"
    ],
    correct: 0,
    explanation: "Interface merging merges declarations; type intersections combine types but do not merge."
  },
  {
    id: 78,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is type assertion in TypeScript?",
    options: [
      "Overrides compiler inferred type with a specific type",
      "Declares variable",
      "Optional property",
      "Readonly type"
    ],
    correct: 0,
    explanation: "Type assertions tell the compiler to treat a value as a specific type."
  },
  {
    id: 79,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you prevent an object from having extra properties?",
    code: `const obj: ??? = { name: 'John', age: 30 };`,
    options: [
      "{ name: string; age: number; }",
      "any",
      "unknown",
      "Readonly"
    ],
    correct: 0,
    explanation: "Declaring an object with exact type prevents extra properties from being assigned."
  },
  {
    id: 80,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is the difference between 'type' and 'interface' when used with classes?",
    options: [
      "Interfaces can be implemented by classes; type cannot",
      "Both same",
      "Type can be implemented",
      "Neither can be used"
    ],
    correct: 0,
    explanation: "Classes can implement interfaces, but cannot implement type aliases."
  },
  {
    id: 81,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you declare a readonly tuple?",
    code: `let tuple: ??? = [1, 'hello'] as const;`,
    options: [
      "readonly [number, string]",
      "Tuple<number,string>",
      "Array<number|string>",
      "any"
    ],
    correct: 0,
    explanation: "Readonly tuples prevent modifying elements and enforce literal types."
  },
  {
    id: 82,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is the purpose of 'infer' in conditional types?",
    code: `type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;`,
    options: [
      "Extract a type from another type",
      "Declare a function",
      "Make optional",
      "Readonly type"
    ],
    correct: 0,
    explanation: "'infer' allows extracting a type inside a conditional type."
  },
  {
    id: 83,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you create a mapped type to make all properties readonly?",
    code: `type User = { name: string; age: number; }; type ReadonlyUser = ???;`,
    options: [
      "{ readonly [K in keyof User]: User[K] }",
      "Partial<User>",
      "Pick<User>",
      "Record<User>"
    ],
    correct: 0,
    explanation: "Mapped types allow transforming each property of a type, here making all readonly."
  },
  {
    id: 84,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is a recursive type?",
    code: `type Nested<T> = T | Nested<T>[];`,
    options: [
      "A type referencing itself",
      "Optional type",
      "Union type",
      "Any type"
    ],
    correct: 0,
    explanation: "Recursive types allow structures like nested arrays or trees."
  },
  {
    id: 85,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What does 'typeof' in types context mean?",
    code: `const x = 10; type XType = typeof x;`,
    options: [
      "Gets the type of a value",
      "Gets the value",
      "Creates union",
      "Optional type"
    ],
    correct: 0,
    explanation: "'typeof' can extract the type of a variable or constant."
  },
  {
    id: 86,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you make a type nullable?",
    code: `type User = string ??? null;`,
    options: ["|", "&", "&?", "as"],
    correct: 0,
    explanation: "Union with null allows a type to be nullable."
  },
  {
    id: 87,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you extract function parameter types?",
    code: `type Fn = (a: string, b: number) => void; type Params = ???;`,
    options: [
      "Parameters<Fn>",
      "ReturnType<Fn>",
      "FnParams",
      "Args<Fn>"
    ],
    correct: 0,
    explanation: "Parameters<T> extracts the types of function parameters."
  },
  {
    id: 88,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you define a generic constraint for objects with a 'name' property?",
    code: `function greet<T ??? ???>(obj: T) { console.log(obj.name); }`,
    options: [
      "extends { name: string }",
      "extends any",
      "extends object",
      "extends unknown"
    ],
    correct: 0,
    explanation: "Generic constraints can restrict T to types having specific properties."
  },
  {
    id: 89,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you make a function that returns a Promise of a type?",
    code: `function fetchData(): ??? { return Promise.resolve(10); }`,
    options: [
      "Promise<number>",
      "number",
      "any",
      "void"
    ],
    correct: 0,
    explanation: "The return type Promise<T> indicates the function resolves to type T."
  },
  {
    id: 90,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is the difference between readonly array and const array?",
    options: [
      "readonly prevents element modification; const prevents reassignment",
      "Both same",
      "const prevents element modification",
      "readonly prevents reassignment"
    ],
    correct: 0,
    explanation: "readonly arrays cannot be modified; const prevents reassigning the array variable."
  },
  {
    id: 91,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What does 'infer R' do inside a conditional type?",
    options: [
      "Extracts type R from a function signature",
      "Creates union type",
      "Optional type",
      "Readonly type"
    ],
    correct: 0,
    explanation: "infer allows extracting types from another type in conditional types."
  },
  {
    id: 92,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you declare a tuple with optional elements?",
    code: `type T = [number, ??? string?];`,
    options: [
      "string?",
      "optional string",
      "string | undefined",
      "string"
    ],
    correct: 0,
    explanation: "Adding ? after tuple element makes it optional."
  },
  {
    id: 93,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you extract the value type from an object type?",
    code: `type User = { name: string; age: number }; type Values = ???;`,
    options: [
      "User[keyof User]",
      "UserValues<User>",
      "ObjectValues<User>",
      "any"
    ],
    correct: 0,
    explanation: "Accessing an object type with keyof produces a union of value types."
  },
  {
    id: 94,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is the difference between 'interface' and 'abstract class'?",
    options: [
      "Abstract class can have implementation; interface only declares structure",
      "Both same",
      "Interface can implement methods",
      "Abstract class cannot extend"
    ],
    correct: 0,
    explanation: "Abstract classes can have methods; interfaces define only type structure."
  },
  {
    id: 95,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you declare a recursive type for nested arrays?",
    code: `type NestedArray<T> = ???;`,
    options: [
      "T | NestedArray<T>[]",
      "T[]",
      "Array<T>",
      "any"
    ],
    correct: 0,
    explanation: "Recursive types allow defining nested array or tree structures."
  },
  {
    id: 96,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you enforce exact property names in an object type?",
    code: `const obj: ??? = { name: 'John', age: 30 };`,
    options: [
      "{ name: string; age: number; }",
      "any",
      "unknown",
      "Partial"
    ],
    correct: 0,
    explanation: "Exact object types prevent extra properties from being assigned."
  },
  {
    id: 97,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What does the 'as const' assertion do?",
    code: `const arr = [1,2,3] as ???;`,
    options: ["const", "readonly", "any", "never"],
    correct: 0,
    explanation: "'as const' makes array or object immutable and literal type."
  },
  {
    id: 98,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you infer type of a function's return value?",
    code: `type Fn = () => number; type R = ???;`,
    options: [
      "ReturnType<Fn>",
      "FnReturn<Fn>",
      "FnType",
      "any"
    ],
    correct: 0,
    explanation: "ReturnType utility extracts the return type of a function."
  },
  {
    id: 99,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you create a mapped type that makes all properties optional?",
    code: `type User = { name: string; age: number }; type PartialUser = ???;`,
    options: [
      "Partial<User>",
      "Readonly<User>",
      "Pick<User>",
      "Record<User>"
    ],
    correct: 0,
    explanation: "Partial<T> makes all properties of a type optional."
  },
  {
    id: 100,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is the difference between 'T | undefined' and 'T?' in function parameters?",
    options: [
      "T | undefined allows passing undefined explicitly; T? also makes parameter optional",
      "Both same",
      "T? allows undefined but T | undefined does not",
      "Neither allows undefined"
    ],
    correct: 0,
    explanation: "T? marks a parameter optional; T | undefined allows explicitly passing undefined."
  },
  {
    id: 101,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is the difference between 'unknown' and 'never'?",
    options: [
      "unknown can hold any value; never cannot hold any value",
      "Both same",
      "never can hold any value; unknown cannot",
      "unknown is optional type"
    ],
    correct: 0,
    explanation: "'unknown' represents any value safely; 'never' represents a type that never occurs."
  },
  {
    id: 102,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you declare a function that accepts multiple types?",
    code: `function print(value: ???) { console.log(value); }`,
    options: [
      "string | number",
      "any",
      "unknown",
      "string & number"
    ],
    correct: 0,
    explanation: "Union types allow a function to accept multiple types."
  },
  {
    id: 103,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is the difference between interface and type when using union types?",
    options: [
      "Type aliases can define unions; interfaces cannot",
      "Both same",
      "Interface can define union",
      "Neither can"
    ],
    correct: 0,
    explanation: "Type aliases support union and intersection types; interfaces do not."
  },
  {
    id: 104,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you define a generic function with default type?",
    code: `function getValue<T = string>(value: T): T { return value; }`,
    options: [
      "Use = after generic parameter",
      "Use extends",
      "Use optional parameter",
      "Use type assertion"
    ],
    correct: 0,
    explanation: "Default generic type can be assigned using '=' after the type parameter."
  },
  {
    id: 105,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What does 'keyof typeof obj' do?",
    code: `const obj = { a: 1, b: 2 }; type Keys = ???;`,
    options: [
      "Produces a union of the object's keys as type",
      "Gets object values",
      "Returns any",
      "Creates readonly object"
    ],
    correct: 0,
    explanation: "'keyof typeof obj' extracts the keys of a runtime object as a TypeScript type."
  },
  {
    id: 106,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you declare a function that never returns?",
    code: `function fail(): ??? { throw new Error('Failed'); }`,
    options: ["never", "void", "any", "unknown"],
    correct: 0,
    explanation: "The 'never' type indicates a function does not return normally."
  },
  {
    id: 107,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is distributive conditional type?",
    code: `type T<T> = T extends string ? string : number;`,
    options: [
      "Conditional type that distributes over union types",
      "Type alias",
      "Optional type",
      "Never type"
    ],
    correct: 0,
    explanation: "Conditional types automatically distribute over union types in TypeScript."
  },
  {
    id: 108,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you enforce that an object type has at least one property?",
    options: [
      "Use a mapped type with 'keyof'",
      "Use Partial",
      "Use Readonly",
      "Use Pick"
    ],
    correct: 0,
    explanation: "Mapped types combined with 'keyof' can enforce at least one property present."
  },
  {
    id: 109,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is the difference between Record<K, T> and {[key: string]: T}?",
    options: [
      "Record allows specific key union; {[key: string]: T} allows any string key",
      "Both same",
      "Record allows any key",
      "String index type is safer"
    ],
    correct: 0,
    explanation: "Record<K, T> restricts keys to a union K; string index allows any string key."
  },
  {
    id: 110,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you define a discriminated union?",
    code: `type Shape = ???;`,
    options: [
      "{ kind: 'circle'; radius: number } | { kind: 'square'; size: number }",
      "{ circle: number; square: number }",
      "any",
      "unknown"
    ],
    correct: 0,
    explanation: "Discriminated unions use a common property to differentiate types in a union."
  },
  {
    id: 111,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is the difference between type assertion and type casting?",
    options: [
      "Type assertion only tells the compiler about type; no runtime effect",
      "Both same",
      "Type casting modifies value at runtime",
      "Type assertion modifies runtime type"
    ],
    correct: 0,
    explanation: "Type assertion does not change the value; it only informs the compiler."
  },
  {
    id: 112,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you create a type-safe event emitter?",
    code: `interface Events { login: string; logout: void; }`,
    options: [
      "Use generics with key-event mapping",
      "Use any",
      "Use unknown",
      "Use function type"
    ],
    correct: 0,
    explanation: "Generics can enforce correct event types for keys and payloads."
  },
  {
    id: 113,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you define a conditional mapped type?",
    code: `type ReadOnlyIfString<T> = { [K in keyof T]: ??? };`,
    options: [
      "T[K] extends string ? readonly T[K] : T[K]",
      "Partial<T>",
      "T[K] | undefined",
      "T[K]"
    ],
    correct: 0,
    explanation: "Conditional mapped types allow transforming properties based on their types."
  },
  {
    id: 114,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you infer types from function parameters in a generic function?",
    code: `function wrap<T>(value: T): ??? { return { value }; }`,
    options: [
      "{ value: T }",
      "T",
      "any",
      "unknown"
    ],
    correct: 0,
    explanation: "Generic functions allow the compiler to infer T from the argument."
  },
  {
    id: 115,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is the difference between interface merging and type intersections?",
    options: [
      "Interface merging combines multiple declarations; type intersections combine types into one",
      "Both same",
      "Type intersections allow merging multiple declarations",
      "Neither can merge"
    ],
    correct: 0,
    explanation: "Interface merging creates multiple declarations into one type; type intersections produce a single combined type."
  },
  {
    id: 116,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you prevent extending a class in TypeScript?",
    code: `class Base { ??? }`,
    options: [
      "Use 'final' (TS does not support directly, use workaround)",
      "Use 'private'",
      "Use 'readonly'",
      "Use 'abstract'"
    ],
    correct: 0,
    explanation: "TypeScript has no direct 'final', but marking the constructor private prevents extension."
  },
  {
    id: 117,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you enforce literal types in object properties?",
    code: `const obj = { kind: 'circle' } as ???;`,
    options: [
      "'as const'",
      "Readonly",
      "any",
      "unknown"
    ],
    correct: 0,
    explanation: "'as const' ensures object properties are literal types and immutable."
  },
  {
    id: 118,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is the difference between 'extends unknown' and no constraint in generics?",
    options: [
      "No constraint is same as extending unknown",
      "Both same",
      "Unknown restricts type",
      "No constraint allows any"
    ],
    correct: 0,
    explanation: "Generics with no constraint behave like 'extends unknown'."
  },
  {
    id: 119,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you declare a generic type with multiple constraints?",
    code: `function merge<T ??? ???, U ??? ???>(a: T, b: U) { return { ...a, ...b }; }`,
    options: [
      "T extends object, U extends object",
      "T, U extends any",
      "T & U",
      "T | U"
    ],
    correct: 0,
    explanation: "Multiple constraints restrict generics to specific types or interfaces."
  },
  {
    id: 120,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you extract the instance type of a class?",
    code: `class User { name: string; } type U = ???;`,
    options: [
      "InstanceType<typeof User>",
      "typeof User",
      "User",
      "any"
    ],
    correct: 0,
    explanation: "InstanceType extracts the instance type from a class constructor."
  },
  {
    id: 121,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you make a property key optional in a mapped type?",
    code: `type T<T> = { [K in keyof T]?: T[K] };`,
    options: [
      "Add '?' after property key",
      "Use Partial<T>",
      "Use Readonly<T>",
      "Use Pick<T>"
    ],
    correct: 0,
    explanation: "Adding '?' in mapped types marks properties as optional."
  },
  {
    id: 122,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you enforce a specific string literal union in a function parameter?",
    code: `function move(direction: ???) {}`,
    options: [
      "'up' | 'down' | 'left' | 'right'",
      "string",
      "any",
      "number"
    ],
    correct: 0,
    explanation: "Union of literal types restricts values to allowed strings."
  },
  {
    id: 123,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is the difference between keyof T and typeof T?",
    options: [
      "keyof extracts keys; typeof extracts type of variable",
      "Both same",
      "keyof extracts type",
      "typeof extracts keys"
    ],
    correct: 0,
    explanation: "keyof T produces a union of property names; typeof extracts the type of a value."
  },
  {
    id: 124,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you define a type-safe tuple with varying types?",
    code: `let tuple: ??? = [1, 'hello', true];`,
    options: [
      "[number, string, boolean]",
      "Array<any>",
      "any[]",
      "Tuple<number,string,boolean>"
    ],
    correct: 0,
    explanation: "Tuples define fixed-length arrays with specific types in each position."
  },
  {
    id: 125,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is the difference between type intersection and union?",
    options: [
      "Intersection combines properties; union allows either type",
      "Both same",
      "Union combines properties; intersection allows either type",
      "Neither allowed"
    ],
    correct: 0,
    explanation: "Intersection (&) combines types; union (|) allows either type."
  },
  {
    id: 126,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you enforce exact optional keys in an object type?",
    code: `type T = ???;`,
    options: [
      "{ a?: string; b?: number }",
      "Partial<T>",
      "Readonly<T>",
      "Pick<T>"
    ],
    correct: 0,
    explanation: "Explicit optional keys enforce exact optional properties."
  },
  {
    id: 127,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you declare a type-safe event map in TypeScript?",
    code: `interface Events { login: string; logout: void; }`,
    options: [
      "Use generic type with keyof mapping",
      "Use any",
      "Use unknown",
      "Use Record<string, any>"
    ],
    correct: 0,
    explanation: "Generic key-event mapping ensures type-safe event payloads."
  },
  {
    id: 128,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you declare a recursive type for nested objects?",
    code: `type Nested<T> = ???;`,
    options: [
      "T | { [key: string]: Nested<T> }",
      "T[]",
      "Array<T>",
      "any"
    ],
    correct: 0,
    explanation: "Recursive types allow defining deeply nested objects."
  },
  {
    id: 129,
    language: "TypeScript",
    difficulty: "Hard",
    question: "What is the purpose of conditional types with 'infer'?",
    code: `type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;`,
    options: [
      "Extract a type from another type",
      "Declare function",
      "Make optional",
      "Readonly type"
    ],
    correct: 0,
    explanation: "'infer' lets you extract types inside conditional type expressions."
  },
  {
    id: 130,
    language: "TypeScript",
    difficulty: "Hard",
    question: "How do you enforce a type-safe polymorphic function?",
    code: `function wrap<T extends object>(value: T): ??? { return { value }; }`,
    options: [
      "{ value: T }",
      "T",
      "any",
      "unknown"
    ],
    correct: 0,
    explanation: "Generic constraints ensure polymorphic functions are type-safe."
  }
];

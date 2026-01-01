import { cssQuestions } from "./question-banks/css"
import { htmlQuestions } from "./question-banks/html"
import { javascriptQuestions } from "./question-banks/javascritpt"
import { nodejsQuestions } from "./question-banks/nodejs"
import { pythonQuestions } from "./question-banks/python"
import { reactQuestions } from "./question-banks/react"
import { typescriptQuestions } from "./question-banks/typescript"

export interface Question {
  id: number
  language: string
  difficulty: "Easy" | "Medium" | "Hard"
  question: string
  code?: string
  options: string[]
  correct: number
  explanation: string
}

export const questionDatabase: Record<string, Question[]> = {
  javascript: javascriptQuestions,
  python: pythonQuestions,
  react: reactQuestions,
  typescript: typescriptQuestions,
  nodejs:nodejsQuestions,
  css: cssQuestions,
  java: [
    {
      id: 19,
      language: "Java",
      difficulty: "Easy",
      question: "What is the output?",
      code: `String str1 = "Hello";
String str2 = "Hello";
System.out.println(str1 == str2);`,
      options: ["true", "false", "Compilation error", "Runtime error"],
      correct: 0,
      explanation: "String literals are stored in the string pool, so both variables reference the same object."
    },
    {
      id: 20,
      language: "Java",
      difficulty: "Medium",
      question: "Which is correct about method overriding?",
      code: `class Parent {
    void method() { }
}
class Child extends Parent {
    // Override method
}`,
      options: ["Must use @Override", "Return type can be different", "Access modifier can be more restrictive", "Can throw more exceptions"],
      correct: 0,
      explanation: "@Override annotation is recommended for method overriding to catch errors at compile time."
    },
    {
      id: 21,
      language: "Java",
      difficulty: "Hard",
      question: "What happens with this code?",
      code: `List<String> list = Arrays.asList("a", "b", "c");
list.add("d");`,
      options: ["Adds 'd' successfully", "UnsupportedOperationException", "Compilation error", "Returns null"],
      correct: 1,
      explanation: "Arrays.asList() returns a fixed-size list that doesn't support add/remove operations."
    }
  ],

  vue: [
    {
      id: 22,
      language: "Vue.js",
      difficulty: "Easy",
      question: "Which directive is used for two-way data binding?",
      code: `<input ???="message" />`,
      options: ["v-bind", "v-model", "v-on", "v-if"],
      correct: 1,
      explanation: "v-model creates two-way data binding between form inputs and application state."
    },
    {
      id: 23,
      language: "Vue.js",
      difficulty: "Medium",
      question: "What is the correct way to emit an event?",
      code: `// In child component
setup(props, { emit }) {
  const handleClick = () => {
    // Emit 'update' event
  }
}`,
      options: ["emit('update')", "$emit('update')", "this.emit('update')", "emitEvent('update')"],
      correct: 0,
      explanation: "In Composition API, use the emit function from the setup context to emit events."
    },
    {
      id: 24,
      language: "Vue.js",
      difficulty: "Hard",
      question: "What's the difference between computed and watch?",
      code: `const count = ref(0)
const doubled = computed(() => count.value * 2)
watch(count, (newVal) => console.log(newVal))`,
      options: ["No difference", "Computed is cached, watch is not", "Watch is cached, computed is not", "Both are cached"],
      correct: 1,
      explanation: "Computed properties are cached and only re-evaluate when dependencies change. Watch executes side effects."
    }
  ],

  angular: [
    {
      id: 25,
      language: "Angular",
      difficulty: "Easy",
      question: "Which decorator is used for components?",
      code: `??? 
class MyComponent { }`,
      options: ["@Injectable", "@Component", "@Directive", "@Pipe"],
      correct: 1,
      explanation: "@Component decorator is used to define Angular components with metadata."
    },
    {
      id: 26,
      language: "Angular",
      difficulty: "Medium",
      question: "What is the purpose of OnInit?",
      code: `class MyComponent implements OnInit {
  ngOnInit() {
    // What happens here?
  }
}`,
      options: ["Component creation", "After view init", "Component initialization", "Component destruction"],
      correct: 2,
      explanation: "ngOnInit is called after component initialization and input properties are set."
    },
    {
      id: 27,
      language: "Angular",
      difficulty: "Hard",
      question: "What's the difference between ViewChild and ContentChild?",
      code: `@ViewChild('template') viewChild: ElementRef;
@ContentChild('content') contentChild: ElementRef;`,
      options: ["No difference", "ViewChild for template, ContentChild for projected content", "ViewChild for content, ContentChild for template", "Both are the same"],
      correct: 1,
      explanation: "ViewChild queries template elements, ContentChild queries projected content elements."
    }
  ],

  php: [
    {
      id: 28,
      language: "PHP",
      difficulty: "Easy",
      question: "What is the output?",
      code: `<?php
$x = "5";
$y = 5;
var_dump($x == $y);
?>`,
      options: ["bool(true)", "bool(false)", "int(1)", "string(5)"],
      correct: 0,
      explanation: "== performs type coercion, so string '5' equals integer 5."
    },
    {
      id: 29,
      language: "PHP",
      difficulty: "Medium",
      question: "What does this function do?",
      code: `function test($a = null) {
    return $a ?? 'default';
}`,
      options: ["Returns $a if not null, else 'default'", "Always returns 'default'", "Returns null", "Throws error"],
      correct: 0,
      explanation: "The null coalescing operator (??) returns the left operand if it's not null, otherwise the right operand."
    },
    {
      id: 30,
      language: "PHP",
      difficulty: "Hard",
      question: "What's the difference between include and require?",
      code: `include 'file.php';
require 'file.php';`,
      options: ["No difference", "include continues on error, require stops", "require continues on error, include stops", "Both stop on error"],
      correct: 1,
      explanation: "include produces a warning and continues execution if file not found. require produces a fatal error and stops."
    }
  ],

  go: [
    {
      id: 31,
      language: "Go",
      difficulty: "Easy",
      question: "How do you declare a variable?",
      code: `// Declare variable 'name' with value 'John'
??? name ??? "John"`,
      options: ["var name = \"John\"", "let name = \"John\"", "const name = \"John\"", "string name = \"John\""],
      correct: 0,
      explanation: "In Go, variables are declared using 'var' keyword or short declaration ':='."
    },
    {
      id: 32,
      language: "Go",
      difficulty: "Medium",
      question: "What is a goroutine?",
      code: `go func() {
    fmt.Println("Hello")
}()`,
      options: ["A function", "A lightweight thread", "A package", "A variable type"],
      correct: 1,
      explanation: "Goroutines are lightweight threads managed by the Go runtime for concurrent execution."
    },
    {
      id: 33,
      language: "Go",
      difficulty: "Hard",
      question: "What does this channel operation do?",
      code: `ch := make(chan int, 2)
ch <- 1
ch <- 2
ch <- 3 // What happens here?`,
      options: ["Succeeds", "Blocks", "Panics", "Returns error"],
      correct: 1,
      explanation: "The channel has buffer size 2. The third send operation blocks because the buffer is full."
    }
  ],

  rust: [
    {
      id: 34,
      language: "Rust",
      difficulty: "Easy",
      question: "What keyword is used for mutable variables?",
      code: `??? x = 5;
x = 10; // This should work`,
      options: ["var", "let", "mut", "let mut"],
      correct: 3,
      explanation: "In Rust, variables are immutable by default. Use 'let mut' to make them mutable."
    },
    {
      id: 35,
      language: "Rust",
      difficulty: "Medium",
      question: "What is ownership in Rust?",
      code: `let s1 = String::from("hello");
let s2 = s1;
println!("{}", s1); // What happens?`,
      options: ["Prints 'hello'", "Compilation error", "Runtime error", "Prints empty string"],
      correct: 1,
      explanation: "Ownership is moved from s1 to s2. Using s1 after the move causes a compilation error."
    },
    {
      id: 36,
      language: "Rust",
      difficulty: "Hard",
      question: "What does the ? operator do?",
      code: `fn read_file() -> Result<String, Error> {
    let content = fs::read_to_string("file.txt")?;
    Ok(content)
}`,
      options: ["Unwraps the value", "Propagates errors", "Creates Option", "Panics on error"],
      correct: 1,
      explanation: "The ? operator propagates errors up the call stack, returning early if an error occurs."
    }
  ],

  mongodb: [
    {
      id: 37,
      language: "MongoDB",
      difficulty: "Easy",
      question: "Which method is used to find documents?",
      code: `db.users.???({})`,
      options: ["get", "find", "select", "query"],
      correct: 1,
      explanation: "The find() method is used to query documents in MongoDB collections."
    },
    {
      id: 38,
      language: "MongoDB",
      difficulty: "Medium",
      question: "What does this aggregation do?",
      code: `db.orders.aggregate([
  { $match: { status: "completed" } },
  { $group: { _id: "$userId", total: { $sum: "$amount" } } }
])`,
      options: ["Counts orders", "Sums amounts by user", "Finds completed orders", "Updates orders"],
      correct: 1,
      explanation: "This aggregation matches completed orders and groups them by userId, summing the amounts."
    },
    {
      id: 39,
      language: "MongoDB",
      difficulty: "Hard",
      question: "What's the difference between $lookup and $populate?",
      code: `// MongoDB aggregation
{ $lookup: {
    from: "users",
    localField: "userId",
    foreignField: "_id",
    as: "user"
}}`,
      options: ["No difference", "$lookup is aggregation, $populate is Mongoose", "$populate is faster", "$lookup is deprecated"],
      correct: 1,
      explanation: "$lookup is MongoDB's native aggregation operator, while $populate is a Mongoose feature."
    }
  ],

  nextjs: [
    {
      id: 40,
      language: "Next.js",
      difficulty: "Easy",
      question: "Which function is used for static generation?",
      code: `export async function ???() {
  return {
    props: { data: 'hello' }
  }
}`,
      options: ["getServerSideProps", "getStaticProps", "getInitialProps", "getProps"],
      correct: 1,
      explanation: "getStaticProps is used for static site generation at build time."
    },
    {
      id: 41,
      language: "Next.js",
      difficulty: "Medium",
      question: "What's the difference between pages and app directory?",
      code: `// pages/index.js vs app/page.js`,
      options: ["No difference", "App directory uses React Server Components", "Pages is newer", "App is for API only"],
      correct: 1,
      explanation: "App directory (Next.js 13+) uses React Server Components and new routing conventions."
    },
    {
      id: 42,
      language: "Next.js",
      difficulty: "Hard",
      question: "When does this middleware run?",
      code: `export function middleware(request) {
  return NextResponse.redirect('/login')
}

export const config = {
  matcher: '/dashboard/:path*'
}`,
      options: ["On all requests", "Only on /dashboard routes", "Only on API routes", "Never runs"],
      correct: 1,
      explanation: "Middleware runs on requests matching the matcher pattern, in this case /dashboard and its subroutes."
    }
  ],

  reactnative: [
    {
      id: 43,
      language: "React Native",
      difficulty: "Easy",
      question: "Which component is used for text input?",
      code: `<??? 
  placeholder="Enter text"
  onChangeText={setText}
/>`,
      options: ["Input", "TextInput", "TextField", "EditText"],
      correct: 1,
      explanation: "TextInput is the React Native component for text input fields."
    },
    {
      id: 44,
      language: "React Native",
      difficulty: "Medium",
      question: "What's the difference between View and div?",
      code: `// React Native
<View style={styles.container}>
  <Text>Hello</Text>
</View>

// React Web
<div className="container">
  <p>Hello</p>
</div>`,
      options: ["No difference", "View is for mobile, div for web", "View has more features", "div is deprecated"],
      correct: 1,
      explanation: "View is React Native's equivalent to div, designed for mobile platforms."
    },
    {
      id: 45,
      language: "React Native",
      difficulty: "Hard",
      question: "What does this navigation do?",
      code: `navigation.navigate('Profile', {
  userId: 123,
  name: 'John'
})`,
      options: ["Replaces current screen", "Pushes new screen with params", "Goes back", "Resets navigation"],
      correct: 1,
      explanation: "navigate() pushes a new screen onto the stack with the provided parameters."
    }
  ],

  html: htmlQuestions,
  tailwindcss: [
    {
      id: 49,
      language: "Tailwind CSS",
      difficulty: "Easy",
      question: "Which class centers text?",
      code: `<div class="???">Centered Text</div>`,
      options: ["center", "text-center", "align-center", "text-middle"],
      correct: 1,
      explanation: "text-center is the Tailwind CSS utility class for centering text."
    },
    {
      id: 50,
      language: "Tailwind CSS",
      difficulty: "Medium",
      question: "What does this responsive design do?",
      code: `<div class="w-full md:w-1/2 lg:w-1/3">Content</div>`,
      options: ["Always full width", "Responsive width: full → half → third", "Fixed width", "Hidden on mobile"],
      correct: 1,
      explanation: "This creates responsive width: full width on mobile, half on medium screens, third on large screens."
    },
    {
      id: 51,
      language: "Tailwind CSS",
      difficulty: "Hard",
      question: "What's the difference between these spacing classes?",
      code: `<div class="p-4">Padding</div>
<div class="m-4">Margin</div>
<div class="space-y-4">Spaced children</div>`,
      options: ["All add padding", "p=padding, m=margin, space-y=vertical spacing between children", "No difference", "All are deprecated"],
      correct: 1,
      explanation: "p-4 adds padding, m-4 adds margin, space-y-4 adds vertical spacing between child elements."
    }
  ]
}
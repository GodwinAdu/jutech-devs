import { Question } from "../questions";

export const reactQuestions: Question[] = [
    {
        id: 1,
        language: "React",
        difficulty: "Easy",
        question: "Which hook is used to manage state in a functional component?",
        code: `function Counter() {
  ??? 
}`,
        options: ["useState", "useEffect", "useRef", "useContext"],
        correct: 0,
        explanation: "useState allows managing state in functional components."
    },
    {
        id: 2,
        language: "React",
        difficulty: "Easy",
        question: "Which hook is used for side effects?",
        options: ["useState", "useEffect", "useReducer", "useMemo"],
        correct: 1,
        explanation: "useEffect runs side effects like fetching data, subscriptions, or DOM manipulation."
    },
    {
        id: 3,
        language: "React",
        difficulty: "Medium",
        question: "What happens when state is updated using setState?",
        code: `const [count, setCount] = useState(0)
setCount(count + 1)`,
        options: [
            "State changes immediately",
            "Triggers re-render asynchronously",
            "Causes error",
            "Does not update state"
        ],
        correct: 1,
        explanation: "State updates in React are asynchronous and trigger a re-render."
    },
    {
        id: 4,
        language: "React",
        difficulty: "Medium",
        question: "What does useRef return?",
        code: `const ref = useRef()`,
        options: [
            "A mutable ref object",
            "A DOM element",
            "A function",
            "An immutable value"
        ],
        correct: 0,
        explanation: "useRef returns a mutable object with a current property."
    },
    {
        id: 5,
        language: "React",
        difficulty: "Medium",
        question: "How to prevent unnecessary re-renders?",
        options: [
            "useState carefully",
            "React.memo",
            "Avoid useEffect",
            "Don't use keys"
        ],
        correct: 1,
        explanation: "React.memo memoizes functional components to avoid re-renders when props don’t change."
    },
    {
        id: 6,
        language: "React",
        difficulty: "Hard",
        question: "What's the difference between useEffect and useLayoutEffect?",
        options: [
            "useEffect runs after paint, useLayoutEffect runs before paint",
            "Both run after render",
            "useLayoutEffect is slower",
            "useEffect blocks DOM updates"
        ],
        correct: 0,
        explanation: "useLayoutEffect runs synchronously after DOM mutations but before the browser paints."
    },
    {
        id: 7,
        language: "React",
        difficulty: "Hard",
        question: "What is Suspense used for?",
        code: `// Example
<Suspense fallback={<Loader />}>
  <SomeComponent />
</Suspense>`,
        options: [
            "Error handling",
            "Lazy loading components",
            "State management",
            "Routing"
        ],
        correct: 1,
        explanation: "Suspense allows lazy-loading components or data fetching with fallback UI."
    },
    {
        id: 8,
        language: "React",
        difficulty: "Medium",
        question: "Which hook is used to memoize expensive calculations?",
        options: ["useState", "useEffect", "useMemo", "useRef"],
        correct: 2,
        explanation: "useMemo memoizes the result of expensive calculations to avoid recalculation."
    },
    {
        id: 9,
        language: "React",
        difficulty: "Medium",
        question: "What's the difference between props and state?",
        options: [
            "Props are immutable, state is mutable",
            "Props can change, state cannot",
            "Both are immutable",
            "Both are mutable"
        ],
        correct: 0,
        explanation: "Props are passed from parent and are immutable; state is internal and mutable."
    },
    {
        id: 10,
        language: "React",
        difficulty: "Hard",
        question: "How does React batch state updates in event handlers?",
        options: [
            "Updates synchronously",
            "Updates asynchronously at end of event handler",
            "Updates immediately",
            "Does not batch updates"
        ],
        correct: 1,
        explanation: "React batches multiple state updates inside event handlers for performance."
    },
    {
        id: 11,
        language: "React",
        difficulty: "Hard",
        question: "What is an Error Boundary?",
        code: `class MyBoundary extends React.Component {
  ??? 
}`,
        options: [
            "Component that catches runtime errors in child components",
            "A hook for errors",
            "Global error handler",
            "Try-catch for render"
        ],
        correct: 0,
        explanation: "Error Boundaries catch errors in child components and render fallback UI."
    },
    {
        id: 12,
        language: "React",
        difficulty: "Medium",
        question: "What is the purpose of useCallback?",
        code: `const memoized = useCallback(() => doSomething(), [deps])`,
        options: [
            "Memoizes a component",
            "Memoizes a function",
            "Triggers re-render",
            "Replaces useEffect"
        ],
        correct: 1,
        explanation: "useCallback memoizes a function reference to avoid re-creating it each render."
    },
    {
        id: 13,
        language: "React",
        difficulty: "Hard",
        question: "What is the difference between controlled and uncontrolled components?",
        options: [
            "Controlled components have state managed by React; uncontrolled use DOM",
            "Controlled use DOM; uncontrolled use React state",
            "No difference",
            "Controlled components cannot have inputs"
        ],
        correct: 0,
        explanation: "Controlled components rely on React state; uncontrolled components rely on DOM state."
    },
    {
        id: 14,
        language: "React",
        difficulty: "Hard",
        question: "What is the purpose of React.lazy?",
        options: [
            "To create class components",
            "To lazy-load components",
            "To memoize components",
            "To optimize performance hooks"
        ],
        correct: 1,
        explanation: "React.lazy dynamically imports components for code-splitting."
    },
    {
        id: 15,
        language: "React",
        difficulty: "Medium",
        question: "What is the use of useImperativeHandle?",
        code: `useImperativeHandle(ref, () => ({ focus: () => input.focus() }))`,
        options: [
            "Expose custom ref methods to parent",
            "Control state",
            "Optimize performance",
            "Run side effects"
        ],
        correct: 0,
        explanation: "useImperativeHandle customizes the instance value exposed to parent refs."
    },
    {
        id: 16,
        language: "React",
        difficulty: "Hard",
        question: "What happens if a component returns null?",
        options: [
            "Renders nothing",
            "Throws error",
            "Renders empty div",
            "Renders undefined"
        ],
        correct: 0,
        explanation: "Returning null from a component renders nothing in the DOM."
    },
    {
        id: 17,
        language: "React",
        difficulty: "Hard",
        question: "What is the difference between useReducer and useState?",
        options: [
            "useReducer is for complex state logic, useState for simple",
            "useState is faster",
            "Both same",
            "useReducer is deprecated"
        ],
        correct: 0,
        explanation: "useReducer is preferred for complex state transitions or multiple state variables."
    },
    {
        id: 18,
        language: "React",
        difficulty: "Hard",
        question: "How does React handle keys in lists?",
        options: [
            "Keys help identify elements for reconciliation",
            "Keys are optional",
            "Keys prevent re-render",
            "Keys sort elements"
        ],
        correct: 0,
        explanation: "Keys help React identify elements when updating lists efficiently."
    },
    {
        id: 19,
        language: "React",
        difficulty: "Medium",
        question: "What is the purpose of useContext?",
        code: `const value = useContext(MyContext)`,
        options: [
            "Access context value in functional components",
            "Create context",
            "Manage state",
            "Trigger side effects"
        ],
        correct: 0,
        explanation: "useContext allows functional components to consume context values."
    },
    {
        id: 20,
        language: "React",
        difficulty: "Hard",
        question: "What is the difference between server-side rendering and client-side rendering in React?",
        options: [
            "SSR renders HTML on server, CSR on client",
            "CSR renders HTML on server",
            "SSR does not render HTML",
            "No difference"
        ],
        correct: 0,
        explanation: "SSR generates HTML on the server; CSR renders components in browser."
    },
    {
        id: 21,
        language: "React",
        difficulty: "Hard",
        question: "What is a Fragment in React?",
        code: `return <React.Fragment>...</React.Fragment>`,
        options: [
            "Allows grouping children without extra DOM node",
            "Creates new component",
            "Used for styling",
            "Error handling"
        ],
        correct: 0,
        explanation: "Fragments let you return multiple elements without adding extra DOM nodes."
    },
    {
        id: 22,
        language: "React",
        difficulty: "Medium",
        question: "What happens if you update state during render?",
        options: [
            "Infinite re-render loop",
            "State updates normally",
            "No effect",
            "Error only"
        ],
        correct: 0,
        explanation: "Updating state inside render causes infinite re-render loop."
    },
    {
        id: 23,
        language: "React",
        difficulty: "Hard",
        question: "How do you handle errors in functional components?",
        options: [
            "Use try-catch inside component",
            "Use Error Boundary",
            "Cannot handle",
            "Use state"
        ],
        correct: 1,
        explanation: "Error Boundaries catch errors in child components; hooks cannot be error boundaries."
    },
    {
        id: 24,
        language: "React",
        difficulty: "Hard",
        question: "What is the purpose of useTransition in React 18?",
        options: [
            "Handle state with transitions without blocking UI",
            "Transition between pages",
            "Animate components",
            "Batch state updates"
        ],
        correct: 0,
        explanation: "useTransition marks updates as non-urgent to keep UI responsive."
    },
    {
        id: 25,
        language: "React",
        difficulty: "Hard",
        question: "What is React Server Components?",
        options: [
            "Components rendered on server with zero client JS",
            "Same as SSR",
            "Deprecated feature",
            "Client-side only"
        ],
        correct: 0,
        explanation: "Server components render on server and send HTML to client without JS for improved performance."
    },
    {
        id: 26,
        language: "React",
        difficulty: "Hard",
        question: "What does useId do in React 18?",
        options: [
            "Generates unique ID consistent across server and client",
            "Sets HTML id",
            "Updates state",
            "Triggers re-render"
        ],
        correct: 0,
        explanation: "useId generates unique IDs to avoid hydration mismatches."
    },
    {
        id: 27,
        language: "React",
        difficulty: "Hard",
        question: "What is React.memo?",
        options: [
            "HOC for memoizing functional components",
            "Hook for state memoization",
            "Utility for arrays",
            "Deprecated API"
        ],
        correct: 0,
        explanation: "React.memo memoizes functional components to prevent unnecessary re-renders."
    },
    {
        id: 28,
        language: "React",
        difficulty: "Hard",
        question: "What's the difference between key and ref?",
        options: [
            "Key is for reconciliation, ref is for accessing DOM",
            "Both same",
            "Key is for DOM access, ref for reconciliation",
            "Ref replaces key"
        ],
        correct: 0,
        explanation: "Key helps React identify elements; ref accesses underlying DOM nodes."
    },
    {
        id: 29,
        language: "React",
        difficulty: "Hard",
        question: "What is a Profiler in React?",
        options: [
            "Tool to measure rendering performance",
            "Hook for state",
            "Error boundary",
            "Routing tool"
        ],
        correct: 0,
        explanation: "Profiler measures the cost of rendering components for optimization."
    },
    {
        id: 30,
        language: "React",
        difficulty: "Medium",
        question: "What is the difference between useMemo and useCallback?",
        options: [
            "useMemo memoizes values, useCallback memoizes functions",
            "Both same",
            "useCallback memoizes values, useMemo functions",
            "Both deprecated"
        ],
        correct: 0,
        explanation: "useMemo memoizes computed values; useCallback memoizes function references."
    },
    {
        id: 31,
        language: "React",
        difficulty: "Medium",
        question: "What is the default behavior of useEffect without dependencies?",
        options: [
            "Runs after every render",
            "Runs only once",
            "Runs before render",
            "Does not run"
        ],
        correct: 0,
        explanation: "Without a dependency array, useEffect runs after every render."
    },
    {
        id: 32,
        language: "React",
        difficulty: "Hard",
        question: "What happens if useEffect returns a function?",
        options: [
            "It is used as cleanup before next effect",
            "It triggers re-render",
            "It causes error",
            "No effect"
        ],
        correct: 0,
        explanation: "Returning a function from useEffect runs cleanup before the next effect or unmount."
    },
    {
        id: 33,
        language: "React",
        difficulty: "Hard",
        question: "What is the difference between useRef and createRef?",
        options: [
            "useRef persists across renders, createRef does not",
            "Both same",
            "createRef persists, useRef does not",
            "Both deprecated"
        ],
        correct: 0,
        explanation: "useRef returns a stable reference across renders; createRef creates a new ref each render."
    },
    {
        id: 34,
        language: "React",
        difficulty: "Medium",
        question: "Which hook allows managing multiple state values in one reducer?",
        options: ["useState", "useReducer", "useContext", "useMemo"],
        correct: 1,
        explanation: "useReducer is suitable for managing complex state logic in one reducer function."
    },
    {
        id: 35,
        language: "React",
        difficulty: "Medium",
        question: "Which hook is used to access previous state?",
        options: ["useState", "useRef", "usePrevious", "useEffect"],
        correct: 1,
        explanation: "useRef can store previous state across renders."
    },
    {
        id: 36,
        language: "React",
        difficulty: "Hard",
        question: "What is React.lazy used with?",
        options: ["useState", "Suspense", "useEffect", "useCallback"],
        correct: 1,
        explanation: "React.lazy must be wrapped in <Suspense> to show fallback UI while loading."
    },
    {
        id: 37,
        language: "React",
        difficulty: "Hard",
        question: "How do you avoid re-creating functions on each render?",
        options: ["useEffect", "useCallback", "useState", "useRef"],
        correct: 1,
        explanation: "useCallback memoizes function references to prevent re-creation."
    },
    {
        id: 38,
        language: "React",
        difficulty: "Hard",
        question: "What is the difference between strict mode and normal mode?",
        options: [
            "Strict mode highlights potential problems and runs effects twice in dev",
            "Both same",
            "Strict mode is faster",
            "Normal mode blocks effects"
        ],
        correct: 0,
        explanation: "StrictMode helps identify side effects and issues during development."
    },
    {
        id: 39,
        language: "React",
        difficulty: "Medium",
        question: "Which hook lets you subscribe to context inside a functional component?",
        options: ["useState", "useEffect", "useContext", "useReducer"],
        correct: 2,
        explanation: "useContext subscribes to context changes and returns the context value."
    },
    {
        id: 40,
        language: "React",
        difficulty: "Hard",
        question: "What is the difference between server components and client components?",
        options: [
            "Server components run on server, client components on browser",
            "Both run on server",
            "Client components render faster",
            "No difference"
        ],
        correct: 0,
        explanation: "Server components render on server without JS on client; client components run in browser."
    },
    {
        id: 41,
        language: "React",
        difficulty: "Medium",
        question: "Which hook prevents expensive re-renders of a value?",
        options: ["useState", "useMemo", "useEffect", "useReducer"],
        correct: 1,
        explanation: "useMemo memoizes the value to avoid recomputation on each render."
    },
    {
        id: 42,
        language: "React",
        difficulty: "Medium",
        question: "What is the default behavior of useEffect with empty dependency array?",
        options: [
            "Runs once after mount",
            "Runs every render",
            "Runs before render",
            "Does not run"
        ],
        correct: 0,
        explanation: "Empty dependency array ensures useEffect runs only after the first render."
    },
    {
        id: 43,
        language: "React",
        difficulty: "Hard",
        question: "What is the difference between React.StrictMode double rendering and normal rendering?",
        options: [
            "StrictMode runs effects twice in dev to detect bugs",
            "Both render once",
            "StrictMode skips effects",
            "Normal mode renders twice"
        ],
        correct: 0,
        explanation: "StrictMode in development runs some functions twice to detect side effects."
    },
    {
        id: 44,
        language: "React",
        difficulty: "Medium",
        question: "What is the purpose of useDebugValue?",
        options: [
            "Display custom label in React DevTools for custom hooks",
            "Trigger re-render",
            "Manage state",
            "Memoize values"
        ],
        correct: 0,
        explanation: "useDebugValue is used to label custom hook values in DevTools."
    },
    {
        id: 45,
        language: "React",
        difficulty: "Medium",
        question: "Which React 18 hook allows non-blocking updates?",
        options: ["useTransition", "useState", "useEffect", "useMemo"],
        correct: 0,
        explanation: "useTransition allows marking updates as non-urgent, keeping UI responsive."
    },
    {
        id: 46,
        language: "React",
        difficulty: "Hard",
        question: "What is the purpose of startTransition?",
        options: [
            "Wrap state updates as non-urgent to keep UI responsive",
            "Trigger animations",
            "Batch re-renders",
            "Replace useEffect"
        ],
        correct: 0,
        explanation: "startTransition allows you to mark updates as non-urgent to avoid blocking UI."
    },
    {
        id: 47,
        language: "React",
        difficulty: "Hard",
        question: "How do you lazy load routes in React?",
        options: [
            "React.lazy + Suspense + Route",
            "useState",
            "useEffect",
            "useMemo"
        ],
        correct: 0,
        explanation: "Routes can be lazy-loaded using React.lazy and wrapped in Suspense with a fallback."
    },
    {
        id: 48,
        language: "React",
        difficulty: "Hard",
        question: "What is hydration in React?",
        options: [
            "Attaching React event listeners to server-rendered HTML",
            "Rendering components",
            "Memoizing components",
            "SSR rendering"
        ],
        correct: 0,
        explanation: "Hydration attaches event listeners to existing server-rendered HTML for interactivity."
    },
    {
        id: 49,
        language: "React",
        difficulty: "Medium",
        question: "Which hook lets you keep mutable values between renders without triggering re-render?",
        options: ["useState", "useRef", "useMemo", "useCallback"],
        correct: 1,
        explanation: "useRef keeps mutable values across renders without causing re-renders."
    },
    {
        id: 50,
        language: "React",
        difficulty: "Medium",
        question: "How do you prevent prop drilling in React?",
        options: [
            "Use Context API",
            "Use useState only",
            "Use useEffect",
            "Wrap in memo"
        ],
        correct: 0,
        explanation: "Context API allows passing values deep into component tree without prop drilling."
    },
    {
        id: 51,
        language: "React",
        difficulty: "Hard",
        question: "What is React Concurrent Mode?",
        options: [
            "Feature for interruptible rendering",
            "Legacy mode",
            "SSR only",
            "Deprecated API"
        ],
        correct: 0,
        explanation: "Concurrent Mode allows React to interrupt rendering to keep UI responsive."
    },
    {
        id: 52,
        language: "React",
        difficulty: "Hard",
        question: "What is the difference between useTransition and startTransition?",
        options: [
            "useTransition returns pending state; startTransition wraps updates as non-urgent",
            "Both same",
            "useTransition triggers re-render; startTransition blocks UI",
            "Deprecated APIs"
        ],
        correct: 0,
        explanation: "useTransition returns a boolean indicating pending state; startTransition wraps state updates to mark them non-urgent."
    },
    {
        id: 53,
        language: "React",
        difficulty: "Hard",
        question: "What is selective hydration?",
        options: [
            "Hydrating only parts of server-rendered HTML as needed",
            "Hydrating all components at once",
            "Replacing DOM elements",
            "Lazy loading images"
        ],
        correct: 0,
        explanation: "Selective hydration improves performance by hydrating only interactive components."
    },
    {
        id: 54,
        language: "React",
        difficulty: "Hard",
        question: "What is the difference between useDeferredValue and useTransition?",
        options: [
            "useDeferredValue defers a value update; useTransition defers state update",
            "Both same",
            "useDeferredValue is deprecated",
            "No difference"
        ],
        correct: 0,
        explanation: "useDeferredValue delays updating a value to prevent blocking UI, useful in concurrent rendering."
    },
    {
        id: 55,
        language: "React",
        difficulty: "Medium",
        question: "What does useId hook solve?",
        options: [
            "Generates unique IDs for SSR hydration",
            "Manages state",
            "Triggers re-render",
            "Creates context"
        ],
        correct: 0,
        explanation: "useId generates unique IDs consistent between server and client to avoid hydration mismatches."
    },
    {
        id: 56,
        language: "React",
        difficulty: "Hard",
        question: "What is memoization in React?",
        options: [
            "Optimization to cache values or components to prevent unnecessary work",
            "State management",
            "Event handling",
            "Routing optimization"
        ],
        correct: 0,
        explanation: "Memoization caches expensive calculations or components to optimize rendering performance."
    },
    {
        id: 57,
        language: "React",
        difficulty: "Hard",
        question: "What is the purpose of React.lazy and Suspense?",
        options: [
            "To lazy-load components with fallback UI",
            "To manage state",
            "To batch updates",
            "To prevent re-render"
        ],
        correct: 0,
        explanation: "React.lazy dynamically imports components and Suspense shows fallback until loaded."
    },
    {
        id: 58,
        language: "React",
        difficulty: "Medium",
        question: "How does React batch state updates?",
        options: [
            "Combines multiple state updates in one render cycle",
            "Updates state immediately",
            "Updates state one by one",
            "Does not batch"
        ],
        correct: 0,
        explanation: "React batches state updates inside event handlers and lifecycle methods for performance."
    },
    {
        id: 59,
        language: "React",
        difficulty: "Hard",
        question: "What is a controlled component?",
        options: [
            "Component whose value is controlled by React state",
            "DOM-based component",
            "Lazy component",
            "Component without state"
        ],
        correct: 0,
        explanation: "Controlled components rely on React state for form element values."
    },
    {
        id: 60,
        language: "React",
        difficulty: "Hard",
        question: "What is an uncontrolled component?",
        options: [
            "Component whose value is managed by the DOM",
            "Component managed by React",
            "Lazy-loaded component",
            "Component without render"
        ],
        correct: 0,
        explanation: "Uncontrolled components rely on the DOM for their state."
    },
    {
        id: 61,
        language: "React",
        difficulty: "Medium",
        question: "How do you prevent re-rendering of child components?",
        options: [
            "React.memo and useCallback",
            "useEffect only",
            "useState only",
            "Lazy load"
        ],
        correct: 0,
        explanation: "React.memo prevents unnecessary re-renders; useCallback prevents new function references."
    },
    {
        id: 62,
        language: "React",
        difficulty: "Medium",
        question: "Which hook is used to access previous props or state?",
        options: ["useRef", "useEffect", "useMemo", "useState"],
        correct: 0,
        explanation: "useRef can store values that persist across renders, allowing access to previous state or props."
    },
    {
        id: 63,
        language: "React",
        difficulty: "Hard",
        question: "How do you implement code splitting in React?",
        options: [
            "React.lazy + Suspense",
            "useMemo",
            "useCallback",
            "useState"
        ],
        correct: 0,
        explanation: "Code splitting dynamically loads components using React.lazy with Suspense fallback."
    },
    {
        id: 64,
        language: "React",
        difficulty: "Medium",
        question: "What is the difference between useEffect cleanup and componentWillUnmount?",
        options: [
            "Both handle cleanup; useEffect works in functional components",
            "No difference",
            "componentWillUnmount is for hooks",
            "useEffect cleanup does not run"
        ],
        correct: 0,
        explanation: "useEffect cleanup function runs before unmounting, similar to componentWillUnmount in class components."
    },
    {
        id: 65,
        language: "React",
        difficulty: "Hard",
        question: "What are the benefits of React Server Components?",
        options: [
            "Zero JS on client, better performance, smaller bundle size",
            "Client-only rendering",
            "SSR only",
            "Deprecated API"
        ],
        correct: 0,
        explanation: "Server Components allow rendering on server without sending JS to client, improving performance."
    },
    {
        id: 66,
        language: "React",
        difficulty: "Hard",
        question: "What is hydration mismatch?",
        options: [
            "Mismatch between server-rendered HTML and client-side React",
            "State mismatch",
            "Re-render mismatch",
            "Key mismatch"
        ],
        correct: 0,
        explanation: "Hydration mismatch occurs when SSR HTML differs from client-rendered React components."
    },
    {
        id: 67,
        language: "React",
        difficulty: "Medium",
        question: "What does useDeferredValue hook do?",
        options: [
            "Defers updating a value to prevent blocking UI",
            "Triggers re-render",
            "Creates state",
            "Lazy-loads components"
        ],
        correct: 0,
        explanation: "useDeferredValue delays a value update to avoid blocking high-priority UI rendering."
    },
    {
        id: 68,
        language: "React",
        difficulty: "Hard",
        question: "What is the difference between useMemo and useDeferredValue?",
        options: [
            "useMemo memoizes computed value, useDeferredValue defers value update for concurrency",
            "Both same",
            "useDeferredValue memoizes value",
            "useMemo triggers re-render"
        ],
        correct: 0,
        explanation: "useMemo caches computation results; useDeferredValue defers a value to avoid blocking rendering."
    },
    {
        id: 69,
        language: "React",
        difficulty: "Hard",
        question: "What is the difference between controlled and uncontrolled forms?",
        options: [
            "Controlled forms use React state; uncontrolled forms rely on DOM",
            "Controlled uses DOM",
            "No difference",
            "Uncontrolled cannot have inputs"
        ],
        correct: 0,
        explanation: "Controlled forms are managed by React; uncontrolled forms rely on default DOM behavior."
    },
    {
        id: 70,
        language: "React",
        difficulty: "Hard",
        question: "Which hook helps in measuring render performance?",
        options: ["useEffect", "Profiler API", "useMemo", "useCallback"],
        correct: 1,
        explanation: "Profiler measures rendering cost and performance in React components."
    },
    {
        id: 71,
        language: "React",
        difficulty: "Medium",
        question: "Which hook allows subscribing to context in functional components?",
        options: ["useEffect", "useContext", "useState", "useReducer"],
        correct: 1,
        explanation: "useContext subscribes to React context and returns the current value."
    },
    {
        id: 72,
        language: "React",
        difficulty: "Hard",
        question: "What is the difference between client components and server components?",
        options: [
            "Server components render on server; client components run in browser",
            "Both same",
            "Server components run in browser",
            "Client components are faster"
        ],
        correct: 0,
        explanation: "Server components are rendered on server, sending only HTML; client components run in browser."
    },
    {
        id: 73,
        language: "React",
        difficulty: "Medium",
        question: "What is the benefit of React.memo?",
        options: [
            "Avoids unnecessary re-renders of functional components",
            "Triggers re-render",
            "Manages state",
            "Lazy loads components"
        ],
        correct: 0,
        explanation: "React.memo memoizes functional components to skip re-renders when props haven’t changed."
    },
    {
        id: 74,
        language: "React",
        difficulty: "Hard",
        question: "What is the difference between strict mode double rendering and normal rendering?",
        options: [
            "StrictMode runs functions twice in dev to detect bugs",
            "No difference",
            "StrictMode renders slower",
            "Normal mode renders twice"
        ],
        correct: 0,
        explanation: "StrictMode in dev renders certain functions twice to detect unexpected side effects."
    },
    {
        id: 75,
        language: "React",
        difficulty: "Hard",
        question: "Which hook is used to expose imperative methods from child to parent?",
        options: ["useRef", "useImperativeHandle", "useEffect", "useState"],
        correct: 1,
        explanation: "useImperativeHandle customizes instance values exposed via refs to parent components."
    },
    {
        id: 76,
        language: "React",
        difficulty: "Medium",
        question: "How do you avoid unnecessary recalculation of expensive values?",
        options: ["useMemo", "useEffect", "useState", "useCallback"],
        correct: 0,
        explanation: "useMemo caches the computed value and avoids recalculation unless dependencies change."
    },
    {
        id: 77,
        language: "React",
        difficulty: "Hard",
        question: "What is the difference between React.lazy and dynamic imports?",
        options: [
            "React.lazy wraps dynamic imports for code splitting",
            "Both same",
            "Dynamic import triggers lazy loading automatically",
            "React.lazy is deprecated"
        ],
        correct: 0,
        explanation: "React.lazy provides an easy way to lazy-load components using dynamic imports."
    },
    {
        id: 78,
        language: "React",
        difficulty: "Hard",
        question: "What is the difference between useReducer and Redux?",
        options: [
            "useReducer is local to component; Redux is global state management",
            "Both same",
            "Redux replaces useReducer",
            "useReducer is deprecated"
        ],
        correct: 0,
        explanation: "useReducer is for local component state; Redux manages global state across app."
    },
    {
        id: 79,
        language: "React",
        difficulty: "Hard",
        question: "What is the difference between React's key and id?",
        options: [
            "Key is for reconciliation; id is for DOM",
            "Both same",
            "Key is for DOM; id for reconciliation",
            "Key replaces id"
        ],
        correct: 0,
        explanation: "Key identifies elements for React reconciliation; id is an HTML attribute."
    },
    {
        id: 80,
        language: "React",
        difficulty: "Medium",
        question: "How do you memoize a callback function?",
        options: ["useCallback", "useMemo", "useRef", "useEffect"],
        correct: 0,
        explanation: "useCallback returns a memoized function reference to avoid re-creation on each render."
    },
    {
        id: 81,
        language: "React",
        difficulty: "Hard",
        question: "What is the difference between useEffect and useLayoutEffect?",
        options: [
            "useEffect runs after paint; useLayoutEffect runs before paint",
            "Both same",
            "useEffect blocks UI; useLayoutEffect does not",
            "useLayoutEffect deprecated"
        ],
        correct: 0,
        explanation: "useLayoutEffect runs synchronously after DOM mutations but before painting, preventing visual glitches."
    },
    {
        id: 82,
        language: "React",
        difficulty: "Hard",
        question: "What is the difference between React.Fragment and <> </>?",
        options: [
            "No difference; shorthand for fragment",
            "Fragment renders DOM node",
            "Shorthand cannot wrap multiple elements",
            "Fragment is deprecated"
        ],
        correct: 0,
        explanation: "<> </> is a shorthand for React.Fragment to wrap multiple children without extra DOM nodes."
    },
    {
        id: 83,
        language: "React",
        difficulty: "Medium",
        question: "What is the purpose of useImperativeHandle?",
        options: [
            "Expose specific methods to parent via ref",
            "Trigger re-render",
            "Manage state",
            "Memoize value"
        ],
        correct: 0,
        explanation: "useImperativeHandle customizes what is exposed when a parent accesses a child’s ref."
    },
    {
        id: 84,
        language: "React",
        difficulty: "Medium",
        question: "What is the difference between useEffect dependency array and no dependency array?",
        options: [
            "With array, runs only when dependencies change; without, runs after every render",
            "Both same",
            "No array runs once",
            "Array disables effect"
        ],
        correct: 0,
        explanation: "Dependency array controls when the effect runs: on mount, unmount, or when dependencies change."
    },
    {
        id: 85,
        language: "React",
        difficulty: "Hard",
        question: "What is the difference between SSR and CSR in React?",
        options: [
            "SSR renders HTML on server; CSR renders on client",
            "Both same",
            "CSR renders on server",
            "SSR is deprecated"
        ],
        correct: 0,
        explanation: "SSR sends pre-rendered HTML from server; CSR renders components in browser."
    },
    {
        id: 86,
        language: "React",
        difficulty: "Hard",
        question: "How do you prevent infinite re-renders when updating state inside useEffect?",
        options: [
            "Use dependency array correctly",
            "Do not use state",
            "Use useMemo",
            "Do not use useEffect"
        ],
        correct: 0,
        explanation: "Infinite re-renders occur if state update in useEffect triggers the effect repeatedly; dependencies must be controlled."
    },
    {
        id: 87,
        language: "React",
        difficulty: "Medium",
        question: "What is the difference between useMemo and React.memo?",
        options: [
            "useMemo memoizes values; React.memo memoizes components",
            "Both memoize components",
            "useMemo deprecated",
            "React.memo memoizes values"
        ],
        correct: 0,
        explanation: "useMemo memoizes computed values; React.memo memoizes functional components to avoid re-render."
    },
    {
        id: 88,
        language: "React",
        difficulty: "Medium",
        question: "Which hook is used to manage global state in React without Redux?",
        options: ["useContext + useReducer", "useState only", "useEffect", "useMemo"],
        correct: 0,
        explanation: "Combining useContext with useReducer allows managing global state in React without Redux."
    },
    {
        id: 89,
        language: "React",
        difficulty: "Hard",
        question: "What is the difference between React.StrictMode in development and production?",
        options: [
            "Double rendering only happens in development",
            "Both same",
            "StrictMode disabled in production",
            "StrictMode triggers extra side effects in production"
        ],
        correct: 0,
        explanation: "React.StrictMode intentionally double-invokes certain functions only in development for detecting issues."
    },
    {
        id: 90,
        language: "React",
        difficulty: "Hard",
        question: "What is Suspense for data fetching?",
        options: [
            "Allows declarative loading states for async data",
            "Only for code splitting",
            "Triggers re-render",
            "Deprecated API"
        ],
        correct: 0,
        explanation: "Suspense can be used with libraries to handle async data fetching with a fallback UI."
    },
    {
        id: 91,
        language: "React",
        difficulty: "Medium",
        question: "What is the purpose of the key prop in lists?",
        options: [
            "Helps React identify which items changed, added, or removed",
            "Generates IDs",
            "Triggers re-render",
            "Creates DOM element"
        ],
        correct: 0,
        explanation: "Key prop helps React optimize list rendering by tracking items across updates."
    },
    {
        id: 92,
        language: "React",
        difficulty: "Hard",
        question: "What is the difference between shallow and deep comparison in React.memo?",
        options: [
            "Shallow compares props by reference; deep would compare nested objects",
            "Both same",
            "Deep compares only first level",
            "Shallow is deprecated"
        ],
        correct: 0,
        explanation: "React.memo uses shallow comparison of props, so nested objects need custom comparison for deep equality."
    },
    {
        id: 93,
        language: "React",
        difficulty: "Hard",
        question: "What is suspense for images or media?",
        options: [
            "Defers rendering until media is loaded with fallback",
            "Triggers download",
            "Creates DOM nodes",
            "Lazy loads code"
        ],
        correct: 0,
        explanation: "Suspense can handle media loading with fallback UI until assets are ready."
    },
    {
        id: 94,
        language: "React",
        difficulty: "Medium",
        question: "Which hook lets you share stateful logic between components?",
        options: ["Custom hooks", "useEffect", "useReducer", "useMemo"],
        correct: 0,
        explanation: "Custom hooks allow sharing stateful logic across multiple components without HOCs."
    },
    {
        id: 95,
        language: "React",
        difficulty: "Hard",
        question: "What is the difference between React context and Redux?",
        options: [
            "Context is simpler and for smaller apps; Redux is full-featured global state management",
            "Both same",
            "Redux is simpler",
            "Context is deprecated"
        ],
        correct: 0,
        explanation: "React context is lightweight for passing values; Redux offers actions, reducers, middleware for complex global state."
    },
    {
        id: 96,
        language: "React",
        difficulty: "Medium",
        question: "What is the use of Profiler API in React?",
        options: [
            "Measure render timings and performance bottlenecks",
            "Triggers re-render",
            "Memoizes values",
            "Handles errors"
        ],
        correct: 0,
        explanation: "Profiler helps measure how often components render and the cost of rendering."
    },
    {
        id: 97,
        language: "React",
        difficulty: "Hard",
        question: "What is the difference between concurrent features and legacy rendering?",
        options: [
            "Concurrent features allow interruptible rendering and scheduling",
            "Both same",
            "Legacy is faster",
            "Concurrent is deprecated"
        ],
        correct: 0,
        explanation: "Concurrent rendering allows React to prioritize updates, making UI more responsive."
    },
    {
        id: 98,
        language: "React",
        difficulty: "Hard",
        question: "How do you avoid prop drilling in large React apps?",
        options: [
            "Use Context API or state management libraries",
            "Use useState only",
            "Use refs",
            "Use lazy loading"
        ],
        correct: 0,
        explanation: "Context API or libraries like Redux, Zustand help avoid passing props through many component layers."
    },
    {
        id: 99,
        language: "React",
        difficulty: "Hard",
        question: "What is the difference between eager and lazy initialization of state?",
        options: [
            "Lazy initialization computes state only on first render; eager computes immediately",
            "Both same",
            "Eager is lazy",
            "Lazy is deprecated"
        ],
        correct: 0,
        explanation: "Lazy state initialization with useState(() => expensiveComputation()) runs the function only once."
    },
    {
        id: 100,
        language: "React",
        difficulty: "Hard",
        question: "How do you handle errors in functional components?",
        options: [
            "Using Error Boundaries (via class component wrapper)",
            "useEffect",
            "useState",
            "useMemo"
        ],
        correct: 0,
        explanation: "Functional components cannot directly catch errors with try/catch; Error Boundaries wrap components to catch rendering errors."
    }, {
        id: 101,
        language: "React",
        difficulty: "Easy",
        question: "Which hook is used to manage state in a functional component?",
        code: `function Counter() {
  ??? 
}`,
        options: ["useState", "useEffect", "useRef", "useContext"],
        correct: 0,
        explanation: "useState allows managing state in functional components."
    },
    {
        id: 102,
        language: "React",
        difficulty: "Easy",
        question: "Which hook is used for side effects?",
        options: ["useState", "useEffect", "useReducer", "useMemo"],
        correct: 1,
        explanation: "useEffect runs side effects like fetching data, subscriptions, or DOM manipulation."
    },
    {
        id: 103,
        language: "React",
        difficulty: "Medium",
        question: "What happens when state is updated using setState?",
        code: `const [count, setCount] = useState(0)
setCount(count + 1)`,
        options: [
            "State changes immediately",
            "Triggers re-render asynchronously",
            "Causes error",
            "Does not update state"
        ],
        correct: 1,
        explanation: "State updates in React are asynchronous and trigger a re-render."
    },
    {
        id: 104,
        language: "React",
        difficulty: "Medium",
        question: "What does useRef return?",
        code: `const ref = useRef()`,
        options: [
            "A mutable ref object",
            "A DOM element",
            "A function",
            "An immutable value"
        ],
        correct: 0,
        explanation: "useRef returns a mutable object with a current property."
    },
    {
        id: 105,
        language: "React",
        difficulty: "Medium",
        question: "How to prevent unnecessary re-renders?",
        options: [
            "useState carefully",
            "React.memo",
            "Avoid useEffect",
            "Don't use keys"
        ],
        correct: 1,
        explanation: "React.memo memoizes functional components to avoid re-renders when props don’t change."
    },
    {
        id: 106,
        language: "React",
        difficulty: "Hard",
        question: "What happens with concurrent features in React 18?",
        options: [
            "Updates are always synchronous",
            "Updates can be interrupted and resumed",
            "State is frozen",
            "useEffect runs before render"
        ],
        correct: 1,
        explanation: "Concurrent mode allows React to interrupt rendering and continue later for better performance."
    },
    {
        id: 107,
        language: "React",
        difficulty: "Hard",
        question: "What's the difference between useEffect and useLayoutEffect?",
        options: [
            "useEffect runs after paint, useLayoutEffect runs before paint",
            "Both run after render",
            "useLayoutEffect is slower",
            "useEffect blocks DOM updates"
        ],
        correct: 0,
        explanation: "useLayoutEffect runs synchronously after DOM mutations but before the browser paints."
    },
    {
        id: 108,
        language: "React",
        difficulty: "Hard",
        question: "What is Suspense used for?",
        code: `// Example
<Suspense fallback={<Loader />}>
  <SomeComponent />
</Suspense>`,
        options: [
            "Error handling",
            "Lazy loading components",
            "State management",
            "Routing"
        ],
        correct: 1,
        explanation: "Suspense allows lazy-loading components or data fetching with fallback UI."
    },
    {
        id: 109,
        language: "React",
        difficulty: "Medium",
        question: "Which hook is used to memoize expensive calculations?",
        options: ["useState", "useEffect", "useMemo", "useRef"],
        correct: 2,
        explanation: "useMemo memoizes the result of expensive calculations to avoid recalculation."
    },
    {
        id: 110,
        language: "React",
        difficulty: "Medium",
        question: "What's the difference between props and state?",
        options: [
            "Props are immutable, state is mutable",
            "Props can change, state cannot",
            "Both are immutable",
            "Both are mutable"
        ],
        correct: 0,
        explanation: "Props are passed from parent and are immutable; state is internal and mutable."
    },
    {
        id: 111,
        language: "React",
        difficulty: "Hard",
        question: "How does React batch state updates in event handlers?",
        options: [
            "Updates synchronously",
            "Updates asynchronously at end of event handler",
            "Updates immediately",
            "Does not batch updates"
        ],
        correct: 1,
        explanation: "React batches multiple state updates inside event handlers for performance."
    },
    {
        id: 112,
        language: "React",
        difficulty: "Hard",
        question: "What is an Error Boundary?",
        code: `class MyBoundary extends React.Component {
  ??? 
}`,
        options: [
            "Component that catches runtime errors in child components",
            "A hook for errors",
            "Global error handler",
            "Try-catch for render"
        ],
        correct: 0,
        explanation: "Error Boundaries catch errors in child components and render fallback UI."
    },
    {
        id: 113,
        language: "React",
        difficulty: "Medium",
        question: "What is the purpose of useCallback?",
        code: `const memoized = useCallback(() => doSomething(), [deps])`,
        options: [
            "Memoizes a component",
            "Memoizes a function",
            "Triggers re-render",
            "Replaces useEffect"
        ],
        correct: 1,
        explanation: "useCallback memoizes a function reference to avoid re-creating it each render."
    },
    {
        id: 114,
        language: "React",
        difficulty: "Hard",
        question: "What is the difference between controlled and uncontrolled components?",
        options: [
            "Controlled components have state managed by React; uncontrolled use DOM",
            "Controlled use DOM; uncontrolled use React state",
            "No difference",
            "Controlled components cannot have inputs"
        ],
        correct: 0,
        explanation: "Controlled components rely on React state; uncontrolled components rely on DOM state."
    },
    {
        id: 115,
        language: "React",
        difficulty: "Hard",
        question: "What is the purpose of React.lazy?",
        options: [
            "To create class components",
            "To lazy-load components",
            "To memoize components",
            "To optimize performance hooks"
        ],
        correct: 1,
        explanation: "React.lazy dynamically imports components for code-splitting."
    },
    {
        id: 116,
        language: "React",
        difficulty: "Medium",
        question: "What is the use of useImperativeHandle?",
        code: `useImperativeHandle(ref, () => ({ focus: () => input.focus() }))`,
        options: [
            "Expose custom ref methods to parent",
            "Control state",
            "Optimize performance",
            "Run side effects"
        ],
        correct: 0,
        explanation: "useImperativeHandle customizes the instance value exposed to parent refs."
    },
    {
        id: 117,
        language: "React",
        difficulty: "Hard",
        question: "What happens if a component returns null?",
        options: [
            "Renders nothing",
            "Throws error",
            "Renders empty div",
            "Renders undefined"
        ],
        correct: 0,
        explanation: "Returning null from a component renders nothing in the DOM."
    },
    {
        id: 118,
        language: "React",
        difficulty: "Hard",
        question: "What is the difference between useReducer and useState?",
        options: [
            "useReducer is for complex state logic, useState for simple",
            "useState is faster",
            "Both same",
            "useReducer is deprecated"
        ],
        correct: 0,
        explanation: "useReducer is preferred for complex state transitions or multiple state variables."
    },
    {
        id: 119,
        language: "React",
        difficulty: "Hard",
        question: "How does React handle keys in lists?",
        options: [
            "Keys help identify elements for reconciliation",
            "Keys are optional",
            "Keys prevent re-render",
            "Keys sort elements"
        ],
        correct: 0,
        explanation: "Keys help React identify elements when updating lists efficiently."
    },
    {
        id: 120,
        language: "React",
        difficulty: "Medium",
        question: "What is the purpose of useContext?",
        code: `const value = useContext(MyContext)`,
        options: [
            "Access context value in functional components",
            "Create context",
            "Manage state",
            "Trigger side effects"
        ],
        correct: 0,
        explanation: "useContext allows functional components to consume context values."
    },
    {
        id: 121,
        language: "React",
        difficulty: "Hard",
        question: "What is the difference between server-side rendering and client-side rendering in React?",
        options: [
            "SSR renders HTML on server, CSR on client",
            "CSR renders HTML on server",
            "SSR does not render HTML",
            "No difference"
        ],
        correct: 0,
        explanation: "SSR generates HTML on the server; CSR renders components in browser."
    },
    {
        id: 122,
        language: "React",
        difficulty: "Hard",
        question: "What is a Fragment in React?",
        code: `return <React.Fragment>...</React.Fragment>`,
        options: [
            "Allows grouping children without extra DOM node",
            "Creates new component",
            "Used for styling",
            "Error handling"
        ],
        correct: 0,
        explanation: "Fragments let you return multiple elements without adding extra DOM nodes."
    },
    {
        id: 123,
        language: "React",
        difficulty: "Medium",
        question: "What happens if you update state during render?",
        options: [
            "Infinite re-render loop",
            "State updates normally",
            "No effect",
            "Error only"
        ],
        correct: 0,
        explanation: "Updating state inside render causes infinite re-render loop."
    },
    {
        id: 124,
        language: "React",
        difficulty: "Hard",
        question: "How do you handle errors in functional components?",
        options: [
            "Use try-catch inside component",
            "Use Error Boundary",
            "Cannot handle",
            "Use state"
        ],
        correct: 1,
        explanation: "Error Boundaries catch errors in child components; hooks cannot be error boundaries."
    },
    {
        id: 125,
        language: "React",
        difficulty: "Hard",
        question: "What is the purpose of useTransition in React 18?",
        options: [
            "Handle state with transitions without blocking UI",
            "Transition between pages",
            "Animate components",
            "Batch state updates"
        ],
        correct: 0,
        explanation: "useTransition marks updates as non-urgent to keep UI responsive."
    },
    {
        id: 126,
        language: "React",
        difficulty: "Hard",
        question: "What is React Server Components?",
        options: [
            "Components rendered on server with zero client JS",
            "Same as SSR",
            "Deprecated feature",
            "Client-side only"
        ],
        correct: 0,
        explanation: "Server components render on server and send HTML to client without JS for improved performance."
    },
    {
        id: 127,
        language: "React",
        difficulty: "Hard",
        question: "What does useId do in React 18?",
        options: [
            "Generates unique ID consistent across server and client",
            "Sets HTML id",
            "Updates state",
            "Triggers re-render"
        ],
        correct: 0,
        explanation: "useId generates unique IDs to avoid hydration mismatches."
    },
    {
        id: 128,
        language: "React",
        difficulty: "Hard",
        question: "What is React.memo?",
        options: [
            "HOC for memoizing functional components",
            "Hook for state memoization",
            "Utility for arrays",
            "Deprecated API"
        ],
        correct: 0,
        explanation: "React.memo memoizes functional components to prevent unnecessary re-renders."
    },
    {
        id: 129,
        language: "React",
        difficulty: "Hard",
        question: "What's the difference between key and ref?",
        options: [
            "Key is for reconciliation, ref is for accessing DOM",
            "Both same",
            "Key is for DOM access, ref for reconciliation",
            "Ref replaces key"
        ],
        correct: 0,
        explanation: "Key helps React identify elements; ref accesses underlying DOM nodes."
    },
    {
        id: 130,
        language: "React",
        difficulty: "Hard",
        question: "What is a Profiler in React?",
        options: [
            "Tool to measure rendering performance",
            "Hook for state",
            "Error boundary",
            "Routing tool"
        ],
        correct: 0,
        explanation: "Profiler measures the cost of rendering components for optimization."
    }
]

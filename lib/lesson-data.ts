export const lessons = {
  "html-intro": {
    title: "HTML Introduction",
    description: "Learn the basics of HTML and create your first webpage",
    duration: "15 minutes",
    difficulty: "Beginner",
    steps: [
      {
        title: "What is HTML?",
        content: `
          <h3>HTML (HyperText Markup Language)</h3>
          <p>HTML is the standard markup language for creating web pages.</p>
          <ul>
            <li>HTML elements are the building blocks of HTML pages</li>
            <li>HTML elements are represented by tags</li>
            <li>HTML tags label pieces of content</li>
          </ul>
        `,
        code: {
          html: `<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>This is my first HTML page.</p>
</body>
</html>`,
          css: "",
          js: ""
        }
      }
    ]
  },
  "html-elements": {
    title: "HTML Elements",
    description: "Understanding HTML elements and tags",
    duration: "20 minutes", 
    difficulty: "Beginner",
    steps: [
      {
        title: "HTML Elements",
        content: `
          <h3>HTML Elements</h3>
          <p>An HTML element is defined by a start tag, some content, and an end tag:</p>
          <code>&lt;tagname&gt;Content goes here...&lt;/tagname&gt;</code>
        `,
        code: {
          html: `<h1>This is a heading</h1>
<p>This is a paragraph.</p>
<a href="https://jutech.dev">This is a link</a>`,
          css: "",
          js: ""
        }
      }
    ]
  },
  "css-basics": {
    title: "CSS Basics",
    description: "Style your HTML with CSS",
    duration: "25 minutes",
    difficulty: "Beginner", 
    steps: [
      {
        title: "What is CSS?",
        content: `
          <h3>CSS (Cascading Style Sheets)</h3>
          <p>CSS describes how HTML elements are to be displayed.</p>
          <ul>
            <li>CSS saves a lot of work</li>
            <li>External stylesheets are stored in CSS files</li>
          </ul>
        `,
        code: {
          html: `<h1>Welcome to CSS</h1>
<p>This paragraph is styled with CSS.</p>`,
          css: `h1 {
    color: blue;
    text-align: center;
}

p {
    color: red;
    font-size: 18px;
}`,
          js: ""
        }
      }
    ]
  },
  "javascript-basics": {
    title: "JavaScript Basics",
    description: "Add interactivity with JavaScript",
    duration: "30 minutes",
    difficulty: "Intermediate",
    steps: [
      {
        title: "What is JavaScript?",
        content: `
          <h3>JavaScript</h3>
          <p>JavaScript is the programming language of the Web.</p>
          <ul>
            <li>JavaScript can change HTML content</li>
            <li>JavaScript can change HTML attributes</li>
            <li>JavaScript can change CSS styles</li>
          </ul>
        `,
        code: {
          html: `<h1 id="demo">JavaScript can change content</h1>
<button onclick="changeText()">Click Me!</button>`,
          css: `h1 {
    color: blue;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}`,
          js: `function changeText() {
    document.getElementById("demo").innerHTML = "Hello JavaScript!";
    document.getElementById("demo").style.color = "red";
}`
        }
      }
    ]
  },
  "quantum-query": {
    title: "Quantum Query SDK",
    description: "Learn our 10x faster React Query replacement",
    duration: "45 minutes",
    difficulty: "Advanced",
    steps: [
      {
        title: "Getting Started with Quantum Query",
        content: `
          <h3>Quantum Query SDK</h3>
          <p>Quantum Query is our revolutionary data fetching library that's 10x faster than React Query.</p>
          <ul>
            <li>AI-powered query optimization</li>
            <li>Quantum parallel processing</li>
            <li>100% React Query compatible</li>
          </ul>
        `,
        code: {
          html: `<div id="app">
    <h1>User Profile</h1>
    <div id="user-data">Loading...</div>
    <button onclick="fetchUser()">Fetch User</button>
</div>`,
          css: `#app {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
}

#user-data {
    background: #f5f5f5;
    padding: 15px;
    border-radius: 8px;
    margin: 20px 0;
}

button {
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    cursor: pointer;
}`,
          js: `// Quantum Query Example
import { QuantumQueryClient, useQuery } from 'quantum-query';

const client = new QuantumQueryClient({
  quantum: { enabled: true }
});

async function fetchUser() {
  const userData = await client.fetchQuery({
    queryKey: ['user', 1],
    queryFn: () => fetch('/api/user/1').then(res => res.json()),
    quantum: { parallel: true }
  });
  
  document.getElementById('user-data').innerHTML = 
    \`<h3>\${userData.name}</h3><p>\${userData.email}</p>\`;
}`
        }
      }
    ]
  }
}

export const courseStructure = {
  frontend: {
    title: "Frontend Development",
    modules: [
      {
        id: "html-css",
        title: "HTML & CSS Fundamentals", 
        lessons: ["html-intro", "html-elements", "css-basics"]
      },
      {
        id: "javascript",
        title: "JavaScript Essentials",
        lessons: ["javascript-basics"]
      },
      {
        id: "advanced",
        title: "Advanced Tools",
        lessons: ["quantum-query"]
      }
    ]
  }
}
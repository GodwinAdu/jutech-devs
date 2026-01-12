export const jsLessons = {
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
  }
}
export const cssLessons = {
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
  }
}
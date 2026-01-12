export const htmlLessons = {
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
  }
}
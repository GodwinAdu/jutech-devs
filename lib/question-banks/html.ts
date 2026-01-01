import { Question } from "../questions";

export const htmlQuestions: Question[] = [
  {
    id: 1,
    language: "HTML",
    difficulty: "Easy",
    question: "Which tag is used for the largest heading?",
    code: `<??? >Main Title</???>`,
    options: ["<h6>", "<h3>", "<h1>", "<header>"],
    correct: 2,
    explanation: "<h1> is the largest heading tag in HTML."
  },
  {
    id: 2,
    language: "HTML",
    difficulty: "Easy",
    question: "Which attribute provides alternative text for images?",
    code: `<img src="photo.jpg" alt="???">`,
    options: ["title", "alt", "caption", "src"],
    correct: 1,
    explanation: "The alt attribute provides alternative text for screen readers and if the image fails to load."
  },
  {
    id: 3,
    language: "HTML",
    difficulty: "Easy",
    question: "Which tag defines an unordered list?",
    code: `<???>
  <li>Item 1</li>
</???>`,
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    correct: 0,
    explanation: "<ul> defines an unordered (bulleted) list."
  },
  {
    id: 4,
    language: "HTML",
    difficulty: "Easy",
    question: "Which tag is used for a line break?",
    code: `This is line 1<???>This is line 2`,
    options: ["<break>", "<br>", "<hr>", "<lb>"],
    correct: 1,
    explanation: "<br> inserts a line break in text."
  },
  {
    id: 5,
    language: "HTML",
    difficulty: "Easy",
    question: "Which tag creates a hyperlink?",
    code: `<???>Click here</???>`,
    options: ["<a>", "<link>", "<href>", "<button>"],
    correct: 0,
    explanation: "<a> defines a hyperlink with href attribute."
  },
  {
    id: 6,
    language: "HTML",
    difficulty: "Easy",
    question: "Which tag defines a table row?",
    code: `<table>
  <???> 
    <td>Cell</td>
  </???>
</table>`,
    options: ["<tr>", "<td>", "<th>", "<row>"],
    correct: 0,
    explanation: "<tr> defines a table row inside a table."
  },
  {
    id: 7,
    language: "HTML",
    difficulty: "Easy",
    question: "Which tag defines a table cell?",
    code: `<table>
  <tr>
    <???>Cell</???>
  </tr>
</table>`,
    options: ["<td>", "<tr>", "<th>", "<table>"],
    correct: 0,
    explanation: "<td> defines a table cell inside a row."
  },
  {
    id: 8,
    language: "HTML",
    difficulty: "Easy",
    question: "Which tag defines a table header cell?",
    code: `<table>
  <tr>
    <???>Header</???>
  </tr>
</table>`,
    options: ["<th>", "<td>", "<tr>", "<thead>"],
    correct: 0,
    explanation: "<th> defines a header cell in a table row."
  },
  {
    id: 9,
    language: "HTML",
    difficulty: "Easy",
    question: "Which attribute opens a link in a new tab?",
    code: `<a href="https://example.com" ???>Example</a>`,
    options: ["target='_blank'", "rel='nofollow'", "href='_new'", "link='_blank'"],
    correct: 0,
    explanation: "target='_blank' opens the link in a new browser tab."
  },
  {
    id: 10,
    language: "HTML",
    difficulty: "Easy",
    question: "Which tag defines an ordered list?",
    code: `<???>
  <li>Item 1</li>
</???>`,
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    correct: 0,
    explanation: "<ol> defines an ordered (numbered) list."
  },
  {
    id: 11,
    language: "HTML",
    difficulty: "Medium",
    question: "Which input type creates a password field?",
    code: `<input type="???">`,
    options: ["text", "password", "email", "hidden"],
    correct: 1,
    explanation: "type='password' hides input text for secure entry."
  },
  {
    id: 12,
    language: "HTML",
    difficulty: "Medium",
    question: "Which attribute is used to group radio buttons?",
    code: `<input type='radio' name='???'>`,
    options: ["group", "name", "id", "value"],
    correct: 1,
    explanation: "All radio buttons with the same name attribute belong to the same group."
  },
  {
    id: 13,
    language: "HTML",
    difficulty: "Medium",
    question: "Which tag defines the document’s main heading for SEO?",
    code: `<???>Page Title</???>`,
    options: ["<header>", "<h1>", "<title>", "<main>"],
    correct: 1,
    explanation: "<h1> is the main heading and important for SEO."
  },
  {
    id: 14,
    language: "HTML",
    difficulty: "Medium",
    question: "Which attribute makes an input required?",
    code: `<input type='text' ???>`,
    options: ["required", "validate", "mandatory", "check"],
    correct: 0,
    explanation: "required attribute ensures that the input must be filled before submission."
  },
  {
    id: 15,
    language: "HTML",
    difficulty: "Medium",
    question: "Which tag defines a blockquote?",
    code: `<???>This is a quote</???>`,
    options: ["<quote>", "<blockquote>", "<q>", "<cite>"],
    correct: 1,
    explanation: "<blockquote> is used for long quotations or quoted blocks."
  },
  {
    id: 16,
    language: "HTML",
    difficulty: "Medium",
    question: "Which tag embeds a video in HTML5?",
    code: `<???> <source src='video.mp4' type='video/mp4'> </???>`,
    options: ["<video>", "<media>", "<iframe>", "<embed>"],
    correct: 0,
    explanation: "<video> tag is used to embed videos in HTML5."
  },
  {
    id: 17,
    language: "HTML",
    difficulty: "Medium",
    question: "Which tag embeds an audio file in HTML5?",
    code: `<???> <source src='audio.mp3' type='audio/mp3'> </???>`,
    options: ["<audio>", "<sound>", "<music>", "<media>"],
    correct: 0,
    explanation: "<audio> tag embeds audio files in HTML5."
  },
  {
    id: 18,
    language: "HTML",
    difficulty: "Medium",
    question: "Which attribute specifies an image map?",
    code: `<img src='map.jpg' ???='map1'>`,
    options: ["usemap", "ismap", "map", "refmap"],
    correct: 0,
    explanation: "usemap attribute links an image to a map element."
  },
  {
    id: 19,
    language: "HTML",
    difficulty: "Medium",
    question: "Which tag defines a tooltip for an element?",
    code: `<span ???='This is a tooltip'>Hover me</span>`,
    options: ["title", "alt", "tooltip", "desc"],
    correct: 0,
    explanation: "title attribute shows a tooltip when the user hovers over the element."
  },
  {
    id: 20,
    language: "HTML",
    difficulty: "Medium",
    question: "Which tag defines a navigation section?",
    code: `<???> <a href='#'>Home</a> <a href='#'>About</a> </???>`,
    options: ["<nav>", "<menu>", "<section>", "<header>"],
    correct: 0,
    explanation: "<nav> defines a block of navigation links."
  },
  {
    id: 21,
    language: "HTML",
    difficulty: "Medium",
    question: "Which attribute defines alternative media text for <video>?",
    code: `<video ???>Your browser does not support video</video>`,
    options: ["alt", "poster", "fallback", "description"],
    correct: 1,
    explanation: "poster attribute sets an image shown before video playback starts."
  },
  {
    id: 22,
    language: "HTML",
    difficulty: "Medium",
    question: "Which tag defines metadata about a document?",
    code: `<???> <meta charset='UTF-8'> </???>`,
    options: ["<head>", "<header>", "<meta>", "<html>"],
    correct: 0,
    explanation: "Metadata like <meta> tags go inside the <head> section."
  },
  {
    id: 23,
    language: "HTML",
    difficulty: "Medium",
    question: "Which attribute is used to provide a tooltip for <abbr>?",
    code: `<abbr ???='World Health Organization'>WHO</abbr>`,
    options: ["title", "alt", "tooltip", "data-tooltip"],
    correct: 0,
    explanation: "title attribute shows the expanded form of abbreviation as a tooltip."
  },
  {
    id: 24,
    language: "HTML",
    difficulty: "Medium",
    question: "Which attribute allows downloading a link file?",
    code: `<a href='file.pdf' ???>Download</a>`,
    options: ["download", "href", "target", "rel"],
    correct: 0,
    explanation: "download attribute prompts the browser to download the file instead of opening it."
  },
  {
    id: 25,
    language: "HTML",
    difficulty: "Medium",
    question: "Which tag defines a caption for a table?",
    code: `<table>
  <???>My Table</???>
</table>`,
    options: ["<caption>", "<title>", "<thead>", "<summary>"],
    correct: 0,
    explanation: "<caption> defines a title or description for a table."
  },
  {
    id: 26,
    language: "HTML",
    difficulty: "Medium",
    question: "Which attribute specifies multiple email addresses for an input?",
    code: `<input type='email' ???>`,
    options: ["multiple", "emails", "multi", "data-emails"],
    correct: 0,
    explanation: "multiple attribute allows entering more than one email separated by commas."
  },
  {
    id: 27,
    language: "HTML",
    difficulty: "Medium",
    question: "Which tag is used for inline code?",
    code: `<???>console.log('Hello');</???>`,
    options: ["<code>", "<pre>", "<samp>", "<kbd>"],
    correct: 0,
    explanation: "<code> represents inline code snippets."
  },
  {
    id: 28,
    language: "HTML",
    difficulty: "Medium",
    question: "Which tag preserves whitespace and formatting?",
    code: `<???>   Text   </???>`,
    options: ["<pre>", "<code>", "<samp>", "<kbd>"],
    correct: 0,
    explanation: "<pre> preserves spacing, tabs, and newlines in text."
  },
  {
    id: 29,
    language: "HTML",
    difficulty: "Medium",
    question: "Which tag defines a client-side script?",
    code: `<???>console.log('Hi');</???>`,
    options: ["<script>", "<js>", "<code>", "<source>"],
    correct: 0,
    explanation: "<script> is used to include JavaScript or other client-side scripts."
  },
  {
    id: 30,
    language: "HTML",
    difficulty: "Medium",
    question: "Which attribute defines the URL of an iframe?",
    code: `<iframe ???='https://example.com'></iframe>`,
    options: ["src", "href", "data-src", "link"],
    correct: 0,
    explanation: "src attribute specifies the URL of the iframe content."
  },
  {
    id: 31,
    language: "HTML",
    difficulty: "Medium",
    question: "Which tag defines an inline frame?",
    code: `<???> https://example.com </???>`,
    options: ["<iframe>", "<frame>", "<frameset>", "<embed>"],
    correct: 0,
    explanation: "<iframe> defines an inline frame to embed another document."
  },
  {
    id: 32,
    language: "HTML",
    difficulty: "Medium",
    question: "Which attribute sets default checked state for checkbox?",
    code: `<input type='checkbox' ???>`,
    options: ["checked", "default", "value", "selected"],
    correct: 0,
    explanation: "checked attribute makes the checkbox selected by default."
  },
  {
    id: 33,
    language: "HTML",
    difficulty: "Medium",
    question: "Which attribute defines the maximum length of text in input?",
    code: `<input type='text' ???='10'>`,
    options: ["maxlength", "max", "limit", "size"],
    correct: 0,
    explanation: "maxlength limits the number of characters a user can input."
  },
  {
    id: 34,
    language: "HTML",
    difficulty: "Medium",
    question: "Which tag defines a footer section?",
    code: `<???>Copyright © 2025</???>`,
    options: ["<footer>", "<section>", "<bottom>", "<aside>"],
    correct: 0,
    explanation: "<footer> defines the footer section of a page or section."
  },
  {
    id: 35,
    language: "HTML",
    difficulty: "Medium",
    question: "Which attribute provides alternative text for <video>?",
    code: `<video src='movie.mp4' ???>Fallback text</video>`,
    options: ["poster", "alt", "title", "description"],
    correct: 0,
    explanation: "poster attribute sets an image displayed before video playback starts."
  },
  {
    id: 36,
    language: "HTML",
    difficulty: "Medium",
    question: "Which tag defines a semantic section of a document?",
    code: `<???>Content</???>`,
    options: ["<section>", "<div>", "<span>", "<article>"],
    correct: 0,
    explanation: "<section> is a semantic container for thematically related content."
  },
  {
    id: 37,
    language: "HTML",
    difficulty: "Medium",
    question: "Which attribute is used for responsive images?",
    code: `<img src='image.jpg' ???='image-200.jpg 200w, image-400.jpg 400w'>`,
    options: ["srcset", "sizes", "responsive", "media"],
    correct: 0,
    explanation: "srcset provides multiple image sources for responsive design."
  },
  {
    id: 38,
    language: "HTML",
    difficulty: "Medium",
    question: "Which attribute is used to control autoplay for <video>?",
    code: `<video src='movie.mp4' ???>Fallback</video>`,
    options: ["autoplay", "play", "start", "loop"],
    correct: 0,
    explanation: "autoplay attribute makes video start playing automatically."
  },
  {
    id: 39,
    language: "HTML",
    difficulty: "Medium",
    question: "Which attribute provides a text alternative for <iframe>?",
    code: `<iframe src='page.html' ???='Alternative content'></iframe>`,
    options: ["title", "alt", "aria-label", "desc"],
    correct: 0,
    explanation: "title attribute gives descriptive text for accessibility."
  },
  {
    id: 40,
    language: "HTML",
    difficulty: "Medium",
    question: "Which tag defines a description list?",
    code: `<???> <dt>Term</dt> <dd>Definition</dd> </???>`,
    options: ["<dl>", "<ul>", "<ol>", "<list>"],
    correct: 0,
    explanation: "<dl> defines a description list containing <dt> terms and <dd> definitions."
  },
  {
    id: 41,
    language: "HTML",
    difficulty: "Medium",
    question: "Which attribute sets a favicon?",
    code: `<link ???='favicon.ico' rel='icon'>`,
    options: ["href", "src", "link", "icon"],
    correct: 0,
    explanation: "href points to the favicon file."
  },
  {
    id: 42,
    language: "HTML",
    difficulty: "Medium",
    question: "Which attribute specifies HTTP-equiv information in <meta>?",
    code: `<meta ???='Content-Type' content='text/html; charset=UTF-8'>`,
    options: ["http-equiv", "equiv", "http", "content-type"],
    correct: 0,
    explanation: "http-equiv provides HTTP header equivalent information."
  },
  {
    id: 43,
    language: "HTML",
    difficulty: "Medium",
    question: "Which tag is used for keyboard input?",
    code: `<???>Ctrl + C</???>`,
    options: ["<kbd>", "<code>", "<samp>", "<pre>"],
    correct: 0,
    explanation: "<kbd> represents user input from a keyboard."
  },
  {
    id: 44,
    language: "HTML",
    difficulty: "Medium",
    question: "Which attribute defines custom data attributes?",
    code: `<div ???='value'></div>`,
    options: ["data-custom", "custom", "data", "value"],
    correct: 0,
    explanation: "data-* attributes store custom data for JavaScript."
  },
  {
    id: 45,
    language: "HTML",
    difficulty: "Medium",
    question: "Which tag defines a highlighted term?",
    code: `<???>Important</???>`,
    options: ["<mark>", "<strong>", "<em>", "<highlight>"],
    correct: 0,
    explanation: "<mark> highlights text for reference or emphasis.",
  },
   {
    id: 46,
    language: "HTML",
    difficulty: "Medium",
    question: "Which tag defines a highlighted term?",
    code: `<???>Important</???>`,
    options: ["<mark>", "<strong>", "<em>", "<highlight>"],
    correct: 0,
    explanation: "<mark> highlights text for reference or emphasis."
  },
  {
    id: 47,
    language: "HTML",
    difficulty: "Medium",
    question: "Which tag represents sample output from a program?",
    code: `<???>Hello World</???>`,
    options: ["<samp>", "<code>", "<kbd>", "<pre>"],
    correct: 0,
    explanation: "<samp> represents sample output from a program or system."
  },
  {
    id: 48,
    language: "HTML",
    difficulty: "Medium",
    question: "Which attribute specifies the language of the document?",
    code: `<html ???='en'>`,
    options: ["lang", "type", "language", "xml:lang"],
    correct: 0,
    explanation: "lang attribute specifies the primary language of the document."
  },
  {
    id: 49,
    language: "HTML",
    difficulty: "Medium",
    question: "Which attribute specifies input placeholder text?",
    code: `<input type='text' ???='Enter name'>`,
    options: ["placeholder", "title", "label", "default"],
    correct: 0,
    explanation: "placeholder attribute displays temporary text in the input field."
  },
  {
    id: 50,
    language: "HTML",
    difficulty: "Medium",
    question: "Which attribute sets the width and height of an <iframe>?",
    code: `<iframe src='page.html' ???='600' ???='400'></iframe>`,
    options: ["width / height", "w / h", "size / size", "style / style"],
    correct: 0,
    explanation: "width and height attributes define the size of an iframe element."
  },
  {
    id: 51,
    language: "HTML",
    difficulty: "Medium",
    question: "Which element represents a self-contained composition in a document?",
    code: `<???>Content</???>`,
    options: ["<article>", "<section>", "<div>", "<aside>"],
    correct: 0,
    explanation: "<article> is used for self-contained content that can be independently distributed or reused."
  },
  {
    id: 52,
    language: "HTML",
    difficulty: "Medium",
    question: "Which attribute defines the relationship between a link and the current document?",
    code: `<a href='style.css' ???='stylesheet'>`,
    options: ["rel", "type", "href", "target"],
    correct: 0,
    explanation: "rel attribute specifies the relationship of the linked document to the current one."
  },
  {
    id: 53,
    language: "HTML",
    difficulty: "Medium",
    question: "Which element is used to define a caption for a <figure>?",
    code: `<figure>
  <img src='img.jpg' />
  <???>Caption here</???>
</figure>`,
    options: ["<figcaption>", "<caption>", "<div>", "<p>"],
    correct: 0,
    explanation: "<figcaption> provides a caption for the <figure> element."
  },
  {
    id: 54,
    language: "HTML",
    difficulty: "Medium",
    question: "Which attribute allows autoplaying of media?",
    code: `<video src='movie.mp4' ???></video>`,
    options: ["autoplay", "loop", "muted", "controls"],
    correct: 0,
    explanation: "autoplay starts playing the media automatically when the page loads."
  },
  {
    id: 55,
    language: "HTML",
    difficulty: "Medium",
    question: "Which element allows embedding external interactive content?",
    code: `<??? src='https://example.com'></???>`,
    options: ["<iframe>", "<embed>", "<object>", "<video>"],
    correct: 0,
    explanation: "<iframe> is used to embed another HTML page or interactive content."
  },
  {
    id: 56,
    language: "HTML",
    difficulty: "Medium",
    question: "Which input type allows selecting multiple files?",
    code: `<input type='file' ???>`,
    options: ["multiple", "files", "multi", "select"],
    correct: 0,
    explanation: "multiple attribute allows the user to select more than one file in a file input."
  },
  {
    id: 57,
    language: "HTML",
    difficulty: "Medium",
    question: "Which element is used for keyboard input?",
    code: `<???>Ctrl+C</???>`,
    options: ["<kbd>", "<code>", "<samp>", "<var>"],
    correct: 0,
    explanation: "<kbd> represents user input from the keyboard."
  },
  {
    id: 58,
    language: "HTML",
    difficulty: "Medium",
    question: "Which element is used to specify preformatted text?",
    code: `<???>  Line 1
  Line 2
</???>`,
    options: ["<pre>", "<code>", "<samp>", "<div>"],
    correct: 0,
    explanation: "<pre> preserves whitespace and line breaks in the content."
  },
  {
    id: 59,
    language: "HTML",
    difficulty: "Medium",
    question: "Which element is used for navigation links?",
    code: `<???>
  <a href='/home'>Home</a>
</???>`,
    options: ["<nav>", "<menu>", "<header>", "<section>"],
    correct: 0,
    explanation: "<nav> defines a set of navigation links."
  },
  {
    id: 60,
    language: "HTML",
    difficulty: "Medium",
    question: "Which attribute specifies placeholder text for a <textarea>?",
    code: `<textarea ???></textarea>`,
    options: ["placeholder", "value", "title", "label"],
    correct: 0,
    explanation: "placeholder shows temporary text inside a <textarea> before the user types."
  },
  {
    id: 61,
    language: "HTML",
    difficulty: "Medium",
    question: "Which attribute makes a form field required?",
    code: `<input type='text' ???>`,
    options: ["required", "mandatory", "validate", "pattern"],
    correct: 0,
    explanation: "required attribute ensures the field must be filled before submitting the form."
  },
  {
    id: 62,
    language: "HTML",
    difficulty: "Medium",
    question: "Which element is used to define a tooltip?",
    code: `<span ???='Tooltip text'>Hover me</span>`,
    options: ["title", "alt", "label", "data-tooltip"],
    correct: 0,
    explanation: "title attribute displays a tooltip when hovering over an element."
  },
  {
    id: 63,
    language: "HTML",
    difficulty: "Medium",
    question: "Which element allows grouping options inside a <select>?",
    code: `<select>
  <??? label='Fruits'>
    <option>Apple</option>
  </???>
</select>`,
    options: ["<optgroup>", "<group>", "<fieldset>", "<optiongroup>"],
    correct: 0,
    explanation: "<optgroup> groups related options within a select dropdown."
  },
  {
    id: 64,
    language: "HTML",
    difficulty: "Medium",
    question: "Which attribute specifies the target frame for a link?",
    code: `<a href='page.html' ???='_blank'>Open</a>`,
    options: ["target", "rel", "href", "name"],
    correct: 0,
    explanation: "target attribute defines where to open the linked document."
  },
  {
    id: 65,
    language: "HTML",
    difficulty: "Medium",
    question: "Which element is used for embedding audio content?",
    code: `<??? src='song.mp3' controls></???>`,
    options: ["<audio>", "<sound>", "<music>", "<media>"],
    correct: 0,
    explanation: "<audio> embeds audio content and supports controls, autoplay, and looping."
  },
  {
    id: 66,
    language: "HTML",
    difficulty: "Medium",
    question: "Which attribute specifies allowed image types for file input?",
    code: `<input type='file' ???='.jpg,.png,.gif'>`,
    options: ["accept", "types", "format", "extensions"],
    correct: 0,
    explanation: "accept attribute defines which file types are selectable in a file input."
  },
  {
    id: 67,
    language: "HTML",
    difficulty: "Medium",
    question: "Which element defines a caption for a <table>?",
    code: `<table>
  <???>User List</???>
</table>`,
    options: ["<caption>", "<title>", "<thead>", "<summary>"],
    correct: 0,
    explanation: "<caption> provides a title or description for the table."
  },
  {
    id: 68,
    language: "HTML",
    difficulty: "Medium",
    question: "Which element represents content that is tangentially related?",
    code: `<???>Sidebar</???>`,
    options: ["<aside>", "<section>", "<article>", "<div>"],
    correct: 0,
    explanation: "<aside> represents content related to the main content but separate from it."
  },
  {
    id: 69,
    language: "HTML",
    difficulty: "Medium",
    question: "Which element is used to embed SVG content?",
    code: `<??? width='100' height='100'>...</???>`,
    options: ["<svg>", "<canvas>", "<image>", "<vector>"],
    correct: 0,
    explanation: "<svg> allows embedding Scalable Vector Graphics directly in HTML."
  },
  {
    id: 70,
    language: "HTML",
    difficulty: "Medium",
    question: "Which attribute makes an <input> readonly?",
    code: `<input type='text' ???>`,
    options: ["readonly", "disabled", "fixed", "lock"],
    correct: 0,
    explanation: "readonly attribute prevents editing of the input value but allows selection."
  },
  {
    id: 71,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element is used for client-side templating in HTML5?",
    code: `<??? id='template'>...</???>`,
    options: ["<template>", "<script>", "<div>", "<section>"],
    correct: 0,
    explanation: "<template> defines HTML fragments that are not rendered until used via JavaScript."
  },
  {
    id: 72,
    language: "HTML",
    difficulty: "Hard",
    question: "Which attribute allows embedding a web component's shadow DOM?",
    code: `<custom-element ???></custom-element>`,
    options: ["shadowroot", "attachShadow", "shadow", "open"],
    correct: 1,
    explanation: "attachShadow({ mode: 'open' }) is used in JavaScript to attach a shadow DOM to an element."
  },
  {
    id: 73,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element is used for interactive graphics via scripting?",
    code: `<??? id='canvas'></???>`,
    options: ["<canvas>", "<svg>", "<figure>", "<section>"],
    correct: 0,
    explanation: "<canvas> provides a drawable region for graphics using JavaScript."
  },
  {
    id: 74,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element represents time or datetime content?",
    code: `<??? datetime='2025-12-31'>December 31, 2025</???>`,
    options: ["<time>", "<date>", "<datetime>", "<span>"],
    correct: 0,
    explanation: "<time> represents dates, times, or durations with machine-readable formatting."
  },
  {
    id: 75,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element defines a portal to another browsing context?",
    code: `<??? src='https://example.com'></???>`,
    options: ["<iframe>", "<portal>", "<embed>", "<object>"],
    correct: 1,
    explanation: "<portal> (experimental) allows embedding a live browsing context that can be activated later."
  },
  {
    id: 76,
    language: "HTML",
    difficulty: "Hard",
    question: "Which attribute is used to lazy-load images?",
    code: `<img src='image.jpg' ???>`,
    options: ["loading='lazy'", "defer", "async", "lazyload"],
    correct: 0,
    explanation: "loading='lazy' defers image loading until it is near the viewport."
  },
  {
    id: 77,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element is used for embedding an external web page with fallback content?",
    code: `<??? src='page.html'>Fallback</???>`,
    options: ["<object>", "<iframe>", "<embed>", "<div>"],
    correct: 0,
    explanation: "<object> can embed external content and provide fallback content if it fails to load."
  },
  {
    id: 78,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element is used for client-side storage access?",
    code: `<script>
  ???.setItem('key', 'value')
</script>`,
    options: ["localStorage", "sessionStorage", "cookie", "storage"],
    correct: 0,
    explanation: "localStorage provides persistent key-value storage on the client side."
  },
  {
    id: 79,
    language: "HTML",
    difficulty: "Hard",
    question: "Which attribute improves SEO by providing alternate text for links?",
    code: `<a href='page.html' ???='Alternate text'>Link</a>`,
    options: ["title", "alt", "aria-label", "name"],
    correct: 0,
    explanation: "title attribute gives additional info to search engines and assistive technologies."
  },
  {
    id: 80,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element is used to embed a video with multiple sources?",
    code: `<??? controls>
  <source src='video.mp4' type='video/mp4'>
  <source src='video.webm' type='video/webm'>
</???>`,
    options: ["<video>", "<media>", "<embed>", "<iframe>"],
    correct: 0,
    explanation: "<video> allows multiple sources for cross-browser compatibility."
  },
  {
    id: 81,
    language: "HTML",
    difficulty: "Hard",
    question: "Which attribute defines CORS behavior for <script> or <link>?",
    code: `<script src='script.js' ???></script>`,
    options: ["crossorigin", "integrity", "referrerpolicy", "type"],
    correct: 0,
    explanation: "crossorigin attribute controls CORS requests for external resources."
  },
  {
    id: 82,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element defines a caption for <figure> that is hidden for accessibility?",
    code: `<figure>
  <img src='img.jpg' />
  <??? class='sr-only'>Caption</???>
</figure>`,
    options: ["<figcaption>", "<caption>", "<span>", "<div>"],
    correct: 0,
    explanation: "<figcaption> can be visually hidden but remain accessible to screen readers."
  },
  {
    id: 83,
    language: "HTML",
    difficulty: "Hard",
    question: "Which attribute ensures input validation pattern?",
    code: `<input type='text' ???='[A-Za-z]{3,}'>`,
    options: ["pattern", "validate", "regex", "format"],
    correct: 0,
    explanation: "pattern attribute enforces a regex pattern on input values."
  },
  {
    id: 84,
    language: "HTML",
    difficulty: "Hard",
    question: "Which attribute enables asynchronous script loading?",
    code: `<script src='script.js' ???></script>`,
    options: ["async", "defer", "type", "load"],
    correct: 0,
    explanation: "async loads the script asynchronously without blocking the HTML parser."
  },
  {
    id: 85,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element allows embedding an interactive 3D model?",
    code: `<??? src='model.glb'></???>`,
    options: ["<model-viewer>", "<canvas>", "<embed>", "<object>"],
    correct: 0,
    explanation: "<model-viewer> is a web component for displaying 3D models in HTML."
  },
  {
    id: 86,
    language: "HTML",
    difficulty: "Hard",
    question: "Which attribute specifies a fallback font for <canvas> text?",
    code: `ctx.font = '30px ???'`,
    options: ["Arial, sans-serif", "Helvetica", "Times", "monospace"],
    correct: 0,
    explanation: "Specifying multiple fonts ensures fallback if the first is unavailable."
  },
  {
    id: 87,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element allows embedding metadata about a document?",
    code: `<??? name='description' content='HTML course'>`,
    options: ["<meta>", "<link>", "<title>", "<script>"],
    correct: 0,
    explanation: "<meta> stores metadata for the document such as description, keywords, or author."
  },
  {
    id: 88,
    language: "HTML",
    difficulty: "Hard",
    question: "Which attribute preloads audio or video for faster playback?",
    code: `<video src='video.mp4' ???>`,
    options: ["preload", "autoplay", "buffer", "load"],
    correct: 0,
    explanation: "preload specifies how the browser should load media before playback."
  },
  {
    id: 89,
    language: "HTML",
    difficulty: "Hard",
    question: "Which attribute provides alternate text for <area> in image maps?",
    code: `<area shape='rect' coords='0,0,100,100' ???='Description'>`,
    options: ["alt", "title", "aria-label", "desc"],
    correct: 0,
    explanation: "alt attribute provides text alternatives for clickable regions in image maps."
  },
  {
    id: 90,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element allows grouping interactive controls with a caption?",
    code: `<???>
  <legend>Personal Info</legend>
  <input type='text'>
</???>`,
    options: ["<fieldset>", "<form>", "<section>", "<div>"],
    correct: 0,
    explanation: "<fieldset> groups related controls and <legend> provides a caption."
  },
  {
    id: 91,
    language: "HTML",
    difficulty: "Hard",
    question: "Which attribute defines cross-origin integrity check for scripts?",
    code: `<script src='script.js' ???='sha384-abc'></script>`,
    options: ["integrity", "crossorigin", "referrerpolicy", "security"],
    correct: 0,
    explanation: "integrity ensures the loaded file matches a cryptographic hash for security."
  },
  {
    id: 92,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element allows editable content in the browser?",
    code: `<??? contenteditable='true'>Edit me</???>`,
    options: ["<div>", "<span>", "<p>", "<section>"],
    correct: 0,
    explanation: "contenteditable makes the element’s content editable by the user."
  },
  {
    id: 93,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element defines a details disclosure widget?",
    code: `<???>
  <summary>More info</summary>
  <p>Hidden content</p>
</???>`,
    options: ["<details>", "<summary>", "<dialog>", "<section>"],
    correct: 0,
    explanation: "<details> can hide or show content with a <summary> toggle."
  },
  {
    id: 94,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element provides a dialog box or popup?",
    code: `<???>Dialog content</???>`,
    options: ["<dialog>", "<modal>", "<popup>", "<section>"],
    correct: 0,
    explanation: "<dialog> creates a dialog box that can be opened or closed via JS."
  },
  {
    id: 95,
    language: "HTML",
    difficulty: "Hard",
    question: "Which attribute sets a form to submit via AJAX using fetch?",
    code: `<form ???>...</form>`,
    options: ["onsubmit", "action", "method", "novalidate"],
    correct: 0,
    explanation: "onsubmit with JS can intercept submission and use fetch for AJAX requests."
  },
  {
    id: 96,
    language: "HTML",
    difficulty: "Hard",
    question: "Which attribute specifies relationship for <link> prefetch?",
    code: `<link href='page.html' ???='prefetch'>`,
    options: ["rel", "type", "as", "crossorigin"],
    correct: 0,
    explanation: "rel='prefetch' allows browsers to prefetch resources for performance optimization."
  },
  {
    id: 97,
    language: "HTML",
    difficulty: "Hard",
    question: "Which attribute is used to define ARIA roles for accessibility?",
    code: `<div ???='button'>Click me</div>`,
    options: ["role", "aria-label", "aria-role", "accessibility"],
    correct: 0,
    explanation: "role defines ARIA roles to assist screen readers in understanding elements."
  },
  {
    id: 98,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element represents a landmark for main content?",
    code: `<???>Main content</???>`,
    options: ["<main>", "<section>", "<article>", "<div>"],
    correct: 0,
    explanation: "<main> represents the primary content of the document."
  },
  {
    id: 99,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element is used for embedding external HTML via JS module?",
    code: `<???>import MyComponent from './component.js'</???>`,
    options: ["<script type='module'>", "<script>", "<module>", "<import>"],
    correct: 0,
    explanation: "<script type='module'> allows ES module import/export in the browser."
  },
  {
    id: 100,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element defines a picture with multiple sources for responsive images?",
    code: `<???>
  <source srcset='small.jpg' media='(max-width: 600px)'>
  <img src='large.jpg'>
</???>`,
    options: ["<picture>", "<img>", "<figure>", "<source>"],
    correct: 0,
    explanation: "<picture> allows specifying multiple image sources for different screen sizes or resolutions."
  },
  {
    id: 101,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element allows defining a web component?",
    code: `<???>class MyElement extends HTMLElement {}</???>`,
    options: ["<script>", "<template>", "<custom-element>", "<component>"],
    correct: 0,
    explanation: "<script> is used with class extending HTMLElement to define a custom element."
  },
  {
    id: 102,
    language: "HTML",
    difficulty: "Hard",
    question: "Which method registers a custom element in the browser?",
    code: `???('my-element', MyElement)`,
    options: ["customElements.define", "document.register", "HTMLElement.register", "window.defineElement"],
    correct: 0,
    explanation: "customElements.define registers a new custom element with the browser."
  },
  {
    id: 103,
    language: "HTML",
    difficulty: "Hard",
    question: "Which attribute is used to improve accessibility by labeling elements?",
    code: `<div ???='Username'>John Doe</div>`,
    options: ["aria-label", "role", "alt", "title"],
    correct: 0,
    explanation: "aria-label provides an accessible name for assistive technologies."
  },
  {
    id: 104,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element is used to create a service worker for offline support?",
    code: `<script ???='service-worker.js'></script>`,
    options: ["navigator.serviceWorker.register", "script src", "link rel", "import"],
    correct: 0,
    explanation: "navigator.serviceWorker.register() registers a service worker for offline caching."
  },
  {
    id: 105,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element allows progressive image loading with <picture>?",
    code: `<???>
  <source srcset='small.jpg' media='(max-width: 600px)'>
  <img src='large.jpg'>
</???>`,
    options: ["<picture>", "<img>", "<source>", "<figure>"],
    correct: 0,
    explanation: "<picture> provides multiple image sources and responsive loading options."
  },
  {
    id: 106,
    language: "HTML",
    difficulty: "Hard",
    question: "Which attribute improves security by enforcing referrer policies?",
    code: `<a href='page.html' ???='no-referrer'>Link</a>`,
    options: ["referrerpolicy", "rel", "target", "integrity"],
    correct: 0,
    explanation: "referrerpolicy controls what referrer information is sent with requests."
  },
  {
    id: 107,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element allows embedding ARIA live regions for accessibility?",
    code: `<div ???='polite'></div>`,
    options: ["aria-live", "role", "aria-label", "live-region"],
    correct: 0,
    explanation: "aria-live provides updates to screen readers in real-time."
  },
  {
    id: 108,
    language: "HTML",
    difficulty: "Hard",
    question: "Which attribute allows HTML elements to be draggable?",
    code: `<div ???='true'>Drag me</div>`,
    options: ["draggable", "drag", "ondrag", "movable"],
    correct: 0,
    explanation: "draggable enables drag-and-drop functionality in HTML5."
  },
  {
    id: 109,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element is used to define a dialog with modal behavior?",
    code: `<???>Modal Content</???>`,
    options: ["<dialog>", "<modal>", "<section>", "<popup>"],
    correct: 0,
    explanation: "<dialog> can be shown modally using the showModal() method in JS."
  },
  {
    id: 110,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element allows declarative form validation messages?",
    code: `<input type='email' ???>`,
    options: ["required", "pattern", "title", "novalidate"],
    correct: 2,
    explanation: "title can be used to provide custom validation messages alongside pattern or required attributes."
  },
  {
    id: 111,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element allows creating custom dialogs without blocking the main thread?",
    code: `<???>Custom content</???>`,
    options: ["<dialog>", "<template>", "<div>", "<section>"],
    correct: 0,
    explanation: "<dialog> can be controlled programmatically without blocking page rendering."
  },
  {
    id: 112,
    language: "HTML",
    difficulty: "Hard",
    question: "Which attribute provides a hint for browser autofill in forms?",
    code: `<input type='text' ???='name'>`,
    options: ["autocomplete", "autofill", "placeholder", "type"],
    correct: 0,
    explanation: "autocomplete hints the browser what kind of data the input expects for autofill."
  },
  {
    id: 113,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element allows embedding interactive 3D models with <model-viewer>?",
    code: `<<???> src='model.glb'></???>`,
    options: ["model-viewer", "canvas", "svg", "iframe"],
    correct: 0,
    explanation: "<model-viewer> is a web component for displaying 3D models natively in HTML."
  },
  {
    id: 114,
    language: "HTML",
    difficulty: "Hard",
    question: "Which attribute sets the cross-origin policy for <img> or <script>?",
    code: `<img src='img.jpg' ???='anonymous'>`,
    options: ["crossorigin", "integrity", "referrerpolicy", "type"],
    correct: 0,
    explanation: "crossorigin enables proper CORS requests for media or scripts."
  },
  {
    id: 115,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element defines a summary for <details> that toggles visibility?",
    code: `<<???>>More info</???>`,
    options: ["summary", "legend", "caption", "title"],
    correct: 0,
    explanation: "<summary> is the toggle visible element for <details> interactive content."
  },
  {
    id: 116,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element defines a container for canvas drawing context?",
    code: `<<???> id='canvas'></???>`,
    options: ["canvas", "svg", "figure", "div"],
    correct: 0,
    explanation: "<canvas> is used for 2D or 3D graphics drawing via JS."
  },
  {
    id: 117,
    language: "HTML",
    difficulty: "Hard",
    question: "Which attribute specifies if a media element should preload?",
    code: `<audio src='song.mp3' ???>`,
    options: ["preload", "autoplay", "controls", "loop"],
    correct: 0,
    explanation: "preload hints the browser how to load media before playback."
  },
  {
    id: 118,
    language: "HTML",
    difficulty: "Hard",
    question: "Which attribute is used for deferred script loading?",
    code: `<script src='script.js' ???></script>`,
    options: ["defer", "async", "type", "loading"],
    correct: 0,
    explanation: "defer delays execution until after HTML parsing is complete."
  },
  {
    id: 119,
    language: "HTML",
    difficulty: "Hard",
    question: "Which attribute enables shadow DOM attachment to a web component?",
    code: `this.???({ mode: 'open' })`,
    options: ["attachShadow", "shadowRoot", "shadow", "openShadow"],
    correct: 0,
    explanation: "attachShadow attaches a shadow DOM to a custom element."
  },
  {
    id: 120,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element allows embedding external content with fallback?",
    code: `<<???> data='page.html'>Fallback</???>`,
    options: ["object", "iframe", "embed", "section"],
    correct: 0,
    explanation: "<object> embeds external content and provides fallback text if it fails to load."
  },
  {
    id: 121,
    language: "HTML",
    difficulty: "Hard",
    question: "Which attribute provides ARIA role descriptions for screen readers?",
    code: `<div ???='button'>Click me</div>`,
    options: ["role", "aria-label", "aria-role", "description"],
    correct: 0,
    explanation: "role defines the ARIA role of an element for accessibility."
  },
  {
    id: 122,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element defines a group of form controls with a caption?",
    code: `<<???>>
  <legend>Personal Info</legend>
  <input type='text'>
</???>`,
    options: ["fieldset", "form", "section", "div"],
    correct: 0,
    explanation: "<fieldset> groups related controls and <legend> gives a caption."
  },
  {
    id: 123,
    language: "HTML",
    difficulty: "Hard",
    question: "Which attribute allows specifying HTTP referrer policy for links?",
    code: `<a href='page.html' ???='no-referrer'>Link</a>`,
    options: ["referrerpolicy", "rel", "target", "type"],
    correct: 0,
    explanation: "referrerpolicy controls the amount of referrer info sent with requests."
  },
  {
    id: 124,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element allows embedding multimedia with multiple sources for cross-browser support?",
    code: `<<???> controls>
  <source src='video.mp4' type='video/mp4'>
  <source src='video.webm' type='video/webm'>
</???>`,
    options: ["video", "audio", "embed", "iframe"],
    correct: 0,
    explanation: "<video> supports multiple sources to ensure compatibility across browsers."
  },
  {
    id: 125,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element allows lazy loading of images natively?",
    code: `<img src='image.jpg' ???>`,
    options: ["loading='lazy'", "defer", "async", "lazyload"],
    correct: 0,
    explanation: "loading='lazy' delays loading images until near viewport, improving performance."
  },
  {
    id: 126,
    language: "HTML",
    difficulty: "Hard",
    question: "Which attribute provides cryptographic integrity check for external scripts?",
    code: `<script src='script.js' ???='sha384-abc'></script>`,
    options: ["integrity", "crossorigin", "referrerpolicy", "type"],
    correct: 0,
    explanation: "integrity ensures the file matches a cryptographic hash for security."
  },
  {
    id: 127,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element allows defining template content not rendered until used?",
    code: `<<???> id='template'>Content</???>`,
    options: ["template", "script", "div", "section"],
    correct: 0,
    explanation: "<template> defines reusable HTML fragments that remain inert until instantiated."
  },
  {
    id: 128,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element is used to embed an interactive map or SVG graphics?",
    code: `<<???> width='100' height='100'>...</???>`,
    options: ["svg", "canvas", "object", "embed"],
    correct: 0,
    explanation: "<svg> allows embedding scalable vector graphics in HTML."
  },
  {
    id: 129,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element allows client-side storage access for key-value pairs?",
    code: `<script>
  ???.setItem('key','value')
</script>`,
    options: ["localStorage", "sessionStorage", "cookie", "storage"],
    correct: 0,
    explanation: "localStorage provides persistent client-side key-value storage."
  },
  {
    id: 130,
    language: "HTML",
    difficulty: "Hard",
    question: "Which element represents the main landmark of a document for accessibility?",
    code: `<???>Main content</???>`,
    options: ["main", "section", "article", "div"],
    correct: 0,
    explanation: "<main> is the primary content landmark, helping assistive technologies navigate."
  }

];
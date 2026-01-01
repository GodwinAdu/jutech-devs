import { Question } from "../questions";

export const cssQuestions: Question[] = [
  // Easy 1-20
  {
    id: 1,
    language: "CSS",
    difficulty: "Easy",
    question: "Which property sets the text color?",
    code: `p { ???: red; }`,
    options: ["color", "background-color", "text-color", "font-color"],
    correct: 0,
    explanation: "The 'color' property sets the text color."
  },
  {
    id: 2,
    language: "CSS",
    difficulty: "Easy",
    question: "Which property centers text horizontally?",
    code: `div { ???: center; }`,
    options: ["text-align", "align-items", "justify-content", "margin"],
    correct: 0,
    explanation: "text-align: center centers inline text horizontally."
  },
  {
    id: 3,
    language: "CSS",
    difficulty: "Easy",
    question: "Which unit is relative to font-size?",
    options: ["em", "px", "pt", "%"],
    correct: 0,
    explanation: "em is relative to the font-size of the parent element."
  },
  {
    id: 4,
    language: "CSS",
    difficulty: "Easy",
    question: "How do you make text bold?",
    code: `p { ???: bold; }`,
    options: ["font-weight", "font-style", "text-decoration", "font-size"],
    correct: 0,
    explanation: "font-weight: bold makes the text bold."
  },
  {
    id: 5,
    language: "CSS",
    difficulty: "Easy",
    question: "Which property changes the background color?",
    code: `div { ???: blue; }`,
    options: ["background-color", "color", "border-color", "fill"],
    correct: 0,
    explanation: "background-color changes the background of an element."
  },
  {
    id: 6,
    language: "CSS",
    difficulty: "Easy",
    question: "Which property removes underlines from links?",
    code: `a { ???: none; }`,
    options: ["text-decoration", "font-style", "border", "color"],
    correct: 0,
    explanation: "text-decoration: none removes underlines from links."
  },
  {
    id: 7,
    language: "CSS",
    difficulty: "Easy",
    question: "Which property controls the element’s visibility without removing it from layout?",
    options: ["visibility", "display", "opacity", "position"],
    correct: 0,
    explanation: "visibility: hidden hides element visually but it still occupies space."
  },
  {
    id: 8,
    language: "CSS",
    difficulty: "Easy",
    question: "Which property sets the space inside an element?",
    code: `div { ???: 10px; }`,
    options: ["padding", "margin", "border", "gap"],
    correct: 0,
    explanation: "Padding sets the inner space between content and border."
  },
  {
    id: 9,
    language: "CSS",
    difficulty: "Easy",
    question: "Which property sets the space outside an element?",
    code: `div { ???: 10px; }`,
    options: ["margin", "padding", "border", "gap"],
    correct: 0,
    explanation: "Margin sets the outer space of an element."
  },
  {
    id: 10,
    language: "CSS",
    difficulty: "Easy",
    question: "Which property rounds corners of elements?",
    code: `div { ???: 10px; }`,
    options: ["border-radius", "border", "border-style", "outline"],
    correct: 0,
    explanation: "border-radius rounds the corners of an element."
  },
  {
    id: 11,
    language: "CSS",
    difficulty: "Easy",
    question: "Which property sets the border thickness?",
    code: `div { ???: 2px solid black; }`,
    options: ["border", "border-width", "border-style", "outline"],
    correct: 0,
    explanation: "border property can set width, style, and color of a border."
  },
  {
    id: 12,
    language: "CSS",
    difficulty: "Easy",
    question: "Which property changes font size?",
    code: `p { ???: 16px; }`,
    options: ["font-size", "font-style", "text-size", "line-height"],
    correct: 0,
    explanation: "font-size sets the size of the text."
  },
  {
    id: 13,
    language: "CSS",
    difficulty: "Easy",
    question: "Which property aligns flex items horizontally?",
    code: `div { display: flex; ???: center; }`,
    options: ["justify-content", "align-items", "text-align", "align-content"],
    correct: 0,
    explanation: "justify-content aligns flex items along the main axis (horizontal by default)."
  },
  {
    id: 14,
    language: "CSS",
    difficulty: "Easy",
    question: "Which property aligns flex items vertically?",
    code: `div { display: flex; ???: center; }`,
    options: ["align-items", "justify-content", "align-self", "vertical-align"],
    correct: 0,
    explanation: "align-items aligns items along the cross axis (vertical in a row flex container)."
  },
  {
    id: 15,
    language: "CSS",
    difficulty: "Easy",
    question: "Which property hides an element completely?",
    code: `div { ???: none; }`,
    options: ["display", "visibility", "opacity", "position"],
    correct: 0,
    explanation: "display: none removes the element from the layout."
  },
  {
    id: 16,
    language: "CSS",
    difficulty: "Easy",
    question: "Which property controls the space between flex items?",
    code: `div { display: flex; ???: 10px; }`,
    options: ["gap", "margin", "padding", "justify-content"],
    correct: 0,
    explanation: "gap sets spacing between flex or grid items."
  },
  {
    id: 17,
    language: "CSS",
    difficulty: "Easy",
    question: "Which pseudo-class styles a link when hovered?",
    code: `a:??? { color: red; }`,
    options: ["hover", "active", "focus", "visited"],
    correct: 0,
    explanation: ":hover applies styles when the mouse pointer is over an element."
  },
  {
    id: 18,
    language: "CSS",
    difficulty: "Easy",
    question: "Which pseudo-class styles a link that has been visited?",
    code: `a:??? { color: purple; }`,
    options: ["visited", "hover", "active", "focus"],
    correct: 0,
    explanation: ":visited styles links that have been visited."
  },
  {
    id: 19,
    language: "CSS",
    difficulty: "Easy",
    question: "Which property sets the opacity of an element?",
    code: `div { ???: 0.5; }`,
    options: ["opacity", "visibility", "display", "filter"],
    correct: 0,
    explanation: "opacity sets the transparency of an element."
  },
  {
    id: 20,
    language: "CSS",
    difficulty: "Easy",
    question: "Which property adds space between lines of text?",
    code: `p { ???: 1.5; }`,
    options: ["line-height", "letter-spacing", "word-spacing", "text-indent"],
    correct: 0,
    explanation: "line-height sets the vertical spacing between lines of text."
  },

  // Medium 21-70
  {
    id: 21,
    language: "CSS",
    difficulty: "Medium",
    question: "What is the specificity of '#header .nav ul li a:hover'?",
    options: ["0,1,2,3", "1,0,3,1", "0,0,1,4", "0,1,1,4"],
    correct: 0,
    explanation: "Specificity is calculated: 1 ID, 2 classes (:hover counts as class), 3 elements = 0,1,2,3"
  },
  {
    id: 22,
    language: "CSS",
    difficulty: "Medium",
    question: "Which property creates a stacking context?",
    code: `.element { position: relative; z-index: 1; opacity: 0.9; }`,
    options: ["position: relative", "z-index: 1", "opacity: 0.9", "All of the above"],
    correct: 2,
    explanation: "Opacity <1 creates a new stacking context; z-index alone does not."
  },
  {
    id: 23,
    language: "CSS",
    difficulty: "Medium",
    question: "Which property is used to create a grid container?",
    code: `div { ???: grid; }`,
    options: ["display", "grid-template", "grid-area", "grid-container"],
    correct: 0,
    explanation: "display: grid makes an element a grid container."
  },
  {
    id: 24,
    language: "CSS",
    difficulty: "Medium",
    question: "Which property sets column width in CSS grid?",
    code: `grid-template-columns: ???;`,
    options: ["100px 200px", "1fr 2fr", "repeat(3, 1fr)", "All of the above"],
    correct: 3,
    explanation: "grid-template-columns accepts px, fr, or repeat() to define column widths."
  },
  {
    id: 25,
    language: "CSS",
    difficulty: "Medium",
    question: "Which property allows text wrapping in a single line?",
    code: `p { ???: nowrap; }`,
    options: ["white-space", "word-break", "overflow", "text-overflow"],
    correct: 0,
    explanation: "white-space: nowrap prevents line breaks inside the text."
  },
  {
    id: 26,
    language: "CSS",
    difficulty: "Medium",
    question: "Which property adds smooth transition effects?",
    code: `div { ???: all 0.3s ease; }`,
    options: ["transition", "animation", "transform", "filter"],
    correct: 0,
    explanation: "transition adds smooth change effects when property values change."
  },
  {
    id: 27,
    language: "CSS",
    difficulty: "Medium",
    question: "Which property animates keyframes?",
    code: `div { ???: slide 2s infinite; }`,
    options: ["animation", "transition", "transform", "keyframes"],
    correct: 0,
    explanation: "animation applies CSS keyframe animations to elements."
  },
  {
    id: 28,
    language: "CSS",
    difficulty: "Medium",
    question: "Which property sets a fixed background image?",
    code: `body { background-??? : fixed; }`,
    options: ["attachment", "position", "repeat", "size"],
    correct: 0,
    explanation: "background-attachment: fixed makes the background fixed relative to viewport."
  },
  {
    id: 29,
    language: "CSS",
    difficulty: "Medium",
    question: "Which pseudo-element styles first line of text?",
    code: `p::??? { font-weight: bold; }`,
    options: ["first-line", "first-letter", "before", "after"],
    correct: 0,
    explanation: "::first-line applies styles to the first line of text."
  },
  {
    id: 30,
    language: "CSS",
    difficulty: "Medium",
    question: "Which property sets text shadow?",
    code: `p { ???: 2px 2px 5px gray; }`,
    options: ["text-shadow", "box-shadow", "shadow", "filter"],
    correct: 0,
    explanation: "text-shadow adds shadow effects to text content."
  },
  {
    id: 31,
    language: "CSS",
    difficulty: "Medium",
    question: "Which property sets the flex direction?",
    code: `div { display: flex; ???: column; }`,
    options: ["flex-direction", "flex-wrap", "justify-content", "align-items"],
    correct: 0,
    explanation: "flex-direction sets the direction of flex items (row, column, etc)."
  },
  {
    id: 32,
    language: "CSS",
    difficulty: "Medium",
    question: "Which property wraps flex items onto multiple lines?",
    code: `div { display: flex; ???: wrap; }`,
    options: ["flex-wrap", "flex-direction", "justify-content", "align-items"],
    correct: 0,
    explanation: "flex-wrap allows flex items to wrap onto multiple lines."
  },
  {
    id: 33,
    language: "CSS",
    difficulty: "Medium",
    question: "Which property aligns flex items along the cross axis?",
    code: `div { display: flex; ???: center; }`,
    options: ["align-items", "justify-content", "align-content", "align-self"],
    correct: 0,
    explanation: "align-items aligns flex items along the cross axis (perpendicular to main axis)."
  },
  {
    id: 34,
    language: "CSS",
    difficulty: "Medium",
    question: "Which property defines grid row height?",
    code: `div { display: grid; grid-template-rows: ???; }`,
    options: ["100px 200px", "1fr 2fr", "repeat(2, 1fr)", "All of the above"],
    correct: 3,
    explanation: "grid-template-rows accepts px, fr, or repeat() to define row heights."
  },
  {
    id: 35,
    language: "CSS",
    difficulty: "Medium",
    question: "Which property sets the order of flex items?",
    code: `div > div:first-child { ???: 2; }`,
    options: ["order", "flex", "z-index", "align-self"],
    correct: 0,
    explanation: "order defines the visual order of flex items."
  },
  {
    id: 36,
    language: "CSS",
    difficulty: "Medium",
    question: "Which property makes an element sticky?",
    code: `div { position: ???; top: 0; }`,
    options: ["sticky", "fixed", "absolute", "relative"],
    correct: 0,
    explanation: "position: sticky makes an element stick within its container when scrolling."
  },
  {
    id: 37,
    language: "CSS",
    difficulty: "Medium",
    question: "Which pseudo-class styles elements not matched by a selector?",
    code: `div:??? { color: red; }`,
    options: ["not()", "first-child", "nth-child", "last-child"],
    correct: 0,
    explanation: ":not() excludes elements from a selector."
  },
  {
    id: 38,
    language: "CSS",
    difficulty: "Medium",
    question: "Which property sets a CSS variable?",
    code: `:root { ???: #333; }`,
    options: ["--main-color", "main-color", "var", "color"],
    correct: 0,
    explanation: "CSS variables start with -- and are accessed using var(--main-color)."
  },
  {
    id: 39,
    language: "CSS",
    difficulty: "Medium",
    question: "Which property sets the background size to cover the container?",
    code: `div { background-size: ???; }`,
    options: ["cover", "contain", "auto", "100% 100%"],
    correct: 0,
    explanation: "cover scales the background image to cover the container."
  },
  {
    id: 40,
    language: "CSS",
    difficulty: "Medium",
    question: "Which property clips overflowing content?",
    code: `div { ???: hidden; }`,
    options: ["overflow", "clip", "visibility", "display"],
    correct: 0,
    explanation: "overflow: hidden clips content exceeding element boundaries."
  },
  {
    id: 41,
    language: "CSS",
    difficulty: "Medium",
    question: "Which property adds a shadow to an element?",
    code: `div { ???: 2px 2px 5px gray; }`,
    options: ["box-shadow", "text-shadow", "shadow", "filter-shadow"],
    correct: 0,
    explanation: "box-shadow applies shadow to the element's box."
  },
  {
    id: 42,
    language: "CSS",
    difficulty: "Medium",
    question: "Which property adds a shadow to text?",
    code: `p { ???: 2px 2px 5px gray; }`,
    options: ["text-shadow", "box-shadow", "shadow", "filter-shadow"],
    correct: 0,
    explanation: "text-shadow applies shadow to the text."
  },
  {
    id: 43,
    language: "CSS",
    difficulty: "Medium",
    question: "Which media query targets screen widths ≤ 600px?",
    code: `@media ??? { body { background: lightblue; } }`,
    options: ["(max-width: 600px)", "(min-width: 600px)", "(width: 600px)", "screen and (width < 600px)"],
    correct: 0,
    explanation: "max-width: 600px targets devices ≤ 600px."
  },
  {
    id: 44,
    language: "CSS",
    difficulty: "Medium",
    question: "Which property changes the cursor on hover?",
    code: `button:hover { ???: pointer; }`,
    options: ["cursor", "pointer", "hover-cursor", "mouse"],
    correct: 0,
    explanation: "cursor: pointer changes the cursor style."
  },
  {
    id: 45,
    language: "CSS",
    difficulty: "Medium",
    question: "Which property rotates an element 45 degrees?",
    code: `div { ???: rotate(45deg); }`,
    options: ["transform", "transition", "rotate", "animation"],
    correct: 0,
    explanation: "transform: rotate(45deg) rotates the element."
  },
  {
    id: 46,
    language: "CSS",
    difficulty: "Medium",
    question: "Which property scales an element 1.5 times?",
    code: `div { ???: scale(1.5); }`,
    options: ["transform", "zoom", "scale", "animation"],
    correct: 0,
    explanation: "transform: scale(1.5) enlarges the element by 1.5x."
  },
  {
    id: 47,
    language: "CSS",
    difficulty: "Medium",
    question: "Which property skews an element along the X-axis?",
    code: `div { ???: skewX(20deg); }`,
    options: ["transform", "rotate", "skew", "scale"],
    correct: 0,
    explanation: "transform: skewX() skews the element along X-axis."
  },
  {
    id: 48,
    language: "CSS",
    difficulty: "Medium",
    question: "Which property transitions background color smoothly over 0.5s?",
    code: `div { ???: background-color 0.5s ease; }`,
    options: ["transition", "animation", "transform", "filter"],
    correct: 0,
    explanation: "transition applies smooth change over time."
  },
  {
    id: 49,
    language: "CSS",
    difficulty: "Medium",
    question: "Which property rotates in 3D perspective?",
    code: `div { ???: rotateY(45deg); perspective: 500px; }`,
    options: ["transform", "perspective", "rotate", "animation"],
    correct: 0,
    explanation: "transform: rotateY() applies 3D rotation; perspective defines depth."
  },
  {
    id: 50,
    language: "CSS",
    difficulty: "Medium",
    question: "Which property blends background image with color?",
    code: `div { ???: multiply; }`,
    options: ["background-blend-mode", "mix-blend-mode", "blend", "filter-blend"],
    correct: 0,
    explanation: "background-blend-mode blends background layers with specified mode."
  },

  // Hard 51–100
  {
    id: 51,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property sets grid items to span multiple rows?",
    code: `div > div:first-child { ???: span 2; }`,
    options: ["grid-row", "grid-column", "grid-area", "grid-span"],
    correct: 0,
    explanation: "grid-row: span N makes an item occupy multiple rows."
  },
  {
    id: 52,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property sets grid items to span multiple columns?",
    code: `div > div:first-child { ???: span 3; }`,
    options: ["grid-column", "grid-row", "grid-area", "grid-span"],
    correct: 0,
    explanation: "grid-column: span N makes an item occupy multiple columns."
  },
  {
    id: 53,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property fixes an element to viewport on scroll?",
    code: `div { position: ???; top: 0; }`,
    options: ["fixed", "absolute", "sticky", "relative"],
    correct: 0,
    explanation: "position: fixed keeps the element in viewport during scroll."
  },
  {
    id: 54,
    language: "CSS",
    difficulty: "Hard",
    question: "Which pseudo-element inserts content before an element?",
    code: `p::??? { content: 'Hello'; }`,
    options: ["before", "after", "first-line", "first-letter"],
    correct: 0,
    explanation: "::before inserts content before the element's content."
  },
  {
    id: 55,
    language: "CSS",
    difficulty: "Hard",
    question: "Which pseudo-element inserts content after an element?",
    code: `p::??? { content: 'Hello'; }`,
    options: ["after", "before", "first-line", "first-letter"],
    correct: 0,
    explanation: "::after inserts content after the element's content."
  },
  {
    id: 56,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property controls z-axis stacking?",
    code: `div { ???: 10; }`,
    options: ["z-index", "order", "position", "stack"],
    correct: 0,
    explanation: "z-index controls stacking order of positioned elements."
  },
  {
    id: 57,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property clips an element into a shape?",
    code: `div { ???: circle(50% at 50% 50%); }`,
    options: ["clip-path", "mask", "shape", "overflow"],
    correct: 0,
    explanation: "clip-path clips an element into a defined shape."
  },
  {
    id: 58,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property applies perspective in 3D transforms?",
    code: `div { ???: 500px; transform: rotateY(45deg); }`,
    options: ["perspective", "transform", "perspective-origin", "z-index"],
    correct: 0,
    explanation: "perspective defines depth for 3D transforms."
  },
  {
    id: 59,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property defines keyframe animation name?",
    code: `div { ???: slide 2s infinite; }`,
    options: ["animation-name", "animation", "animation-duration", "animation-delay"],
    correct: 1,
    explanation: "animation shorthand sets name, duration, and iteration."
  },
  {
    id: 60,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property delays animation start?",
    code: `div { ???: 1s; animation-name: slide; }`,
    options: ["animation-delay", "animation-duration", "transition-delay", "transition-duration"],
    correct: 0,
    explanation: "animation-delay sets how long to wait before animation starts."
  },
  {
    id: 61,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property selects every 3rd child element?",
    code: `div > p:??? { color: red; }`,
    options: ["nth-child(3n)", "nth-of-type(3)", "nth-child(3)", "nth-of-type(3n+1)"],
    correct: 0,
    explanation: ":nth-child(3n) selects every 3rd child element."
  },
  {
    id: 62,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property applies multiple filters to an element?",
    code: `img { ???: blur(5px) brightness(0.8); }`,
    options: ["filter", "mix-blend-mode", "backdrop-filter", "blend"],
    correct: 0,
    explanation: "filter applies graphical effects like blur and brightness."
  },
  {
    id: 63,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property changes blending of elements?",
    code: `div { ???: multiply; }`,
    options: ["mix-blend-mode", "background-blend-mode", "blend-mode", "filter-blend"],
    correct: 0,
    explanation: "mix-blend-mode defines how an element blends with its background."
  },
  {
    id: 64,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property fixes an element inside a scrollable container?",
    code: `div { position: ???; top: 0; }`,
    options: ["sticky", "fixed", "absolute", "relative"],
    correct: 0,
    explanation: "position: sticky keeps the element in place relative to its container during scroll."
  },
  {
    id: 65,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property defines the origin of a 3D transform?",
    code: `div { ???: 50% 50%; transform: rotateY(45deg); }`,
    options: ["transform-origin", "perspective-origin", "origin", "transform-perspective"],
    correct: 0,
    explanation: "transform-origin sets the point around which transformations occur."
  },
  {
    id: 66,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property prevents resizing of an element?",
    code: `textarea { ???: none; }`,
    options: ["resize", "overflow", "flex", "user-resize"],
    correct: 0,
    explanation: "resize: none disables manual resizing by the user."
  },
  {
    id: 67,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property sets a custom scroll bar color in Webkit browsers?",
    code: `::-webkit-scrollbar-thumb { ???: red; }`,
    options: ["background-color", "scrollbar-color", "thumb-color", "color"],
    correct: 0,
    explanation: "background-color sets the color of the scrollbar thumb."
  },
  {
    id: 68,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property sets a container to create a new stacking context?",
    code: `div { ???: 1; }`,
    options: ["opacity", "z-index", "position", "transform"],
    correct: 0,
    explanation: "opacity < 1 creates a new stacking context, affecting z-index stacking of children."
  },
  {
    id: 69,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property masks an element using another element or shape?",
    code: `div { ???: url(mask.png); }`,
    options: ["mask", "clip-path", "filter", "background-clip"],
    correct: 0,
    explanation: "mask applies a mask layer to hide or reveal parts of an element."
  },
  {
    id: 70,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property animates an element smoothly over time?",
    code: `div { ???: all 0.5s ease; }`,
    options: ["transition", "animation", "transform", "filter"],
    correct: 0,
    explanation: "transition allows smooth property changes over time."
  },
  {
    id: 71,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property repeats keyframes indefinitely?",
    code: `div { animation: slide 2s ???; }`,
    options: ["infinite", "loop", "repeat", "forever"],
    correct: 0,
    explanation: "animation-iteration-count: infinite repeats animation indefinitely."
  },
  {
    id: 72,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property creates 3D perspective on a container?",
    code: `div { ???: 800px; }`,
    options: ["perspective", "transform", "transform-style", "perspective-origin"],
    correct: 0,
    explanation: "perspective defines the depth for child elements in 3D transforms."
  },
  {
    id: 73,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property changes the origin of perspective?",
    code: `div { ???: center center; perspective: 500px; }`,
    options: ["perspective-origin", "transform-origin", "origin", "transform-perspective"],
    correct: 0,
    explanation: "perspective-origin sets the vanishing point for 3D effects."
  },
  {
    id: 74,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property prevents elements from shrinking in flexbox?",
    code: `div { flex-shrink: ???; }`,
    options: ["0", "1", "auto", "none"],
    correct: 0,
    explanation: "flex-shrink: 0 prevents the element from shrinking when container space is limited."
  },
  {
    id: 75,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property sets the size of a CSS grid track using fraction unit?",
    code: `div { grid-template-columns: ???; }`,
    options: ["1fr 2fr 1fr", "100px 200px", "auto auto", "repeat(3, 1fr)"],
    correct: 3,
    explanation: "fr units distribute available space proportionally in grid layout."
  },
  {
    id: 76,
    language: "CSS",
    difficulty: "Hard",
    question: "Which pseudo-class selects elements when focused?",
    code: `input:??? { border-color: blue; }`,
    options: ["focus", "active", "hover", "checked"],
    correct: 0,
    explanation: ":focus applies styles when the element receives keyboard or pointer focus."
  },
  {
    id: 77,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property hides scrollbars but allows scrolling?",
    code: `div { ???: hidden; overflow-y: scroll; }`,
    options: ["scrollbar-width", "overflow", "mask", "clip"],
    correct: 0,
    explanation: "scrollbar-width: none hides the scrollbar in Firefox while still allowing scrolling."
  },
  {
    id: 78,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property creates a shadow on a pseudo-element?",
    code: `p::??? { text-shadow: 2px 2px 5px gray; }`,
    options: ["first-line", "before", "after", "first-letter"],
    correct: 2,
    explanation: "::after applies shadow to content added after the element."
  },
  {
    id: 79,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property keeps a flex item from growing?",
    code: `div { flex-grow: ???; }`,
    options: ["0", "1", "auto", "none"],
    correct: 0,
    explanation: "flex-grow: 0 prevents the item from growing beyond its base size."
  },
  {
    id: 80,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property applies animation using keyframes named 'fade'?",
    code: `div { ???: fade 2s ease-in-out; }`,
    options: ["animation", "transition", "transform", "filter"],
    correct: 0,
    explanation: "animation: fade 2s applies the keyframe animation 'fade' over 2 seconds."
  },
  {
    id: 81,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property positions the first line of text?",
    code: `p::??? { text-indent: 20px; }`,
    options: ["first-line", "first-letter", "before", "after"],
    correct: 0,
    explanation: "::first-line selects and styles only the first line of text in a block."
  },
  {
    id: 82,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property animates multiple properties at once?",
    code: `div { ???: all 1s ease; }`,
    options: ["transition", "animation", "transform", "filter"],
    correct: 0,
    explanation: "transition: all 1s applies smooth change to all animatable properties."
  },
  {
    id: 83,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property allows an element to expand based on content in flexbox?",
    code: `div { flex: ???; }`,
    options: ["1 1 auto", "0 0 auto", "auto", "none"],
    correct: 0,
    explanation: "flex: 1 1 auto allows item to grow and shrink based on container space."
  },
  {
    id: 84,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property hides content but keeps it accessible to screen readers?",
    code: `.sr-only { ???: absolute; width: 1px; height: 1px; overflow: hidden; }`,
    options: ["position", "display", "visibility", "clip"],
    correct: 0,
    explanation: "position: absolute with small width/height hides visually but keeps content accessible."
  },
  {
    id: 85,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property creates a smooth scrolling effect for anchor links?",
    code: `html { ???: smooth; }`,
    options: ["scroll-behavior", "scroll-snap-type", "scroll-padding", "overflow-scroll"],
    correct: 0,
    explanation: "scroll-behavior: smooth enables smooth scroll for anchor links."
  },
  {
    id: 86,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property applies perspective to child elements?",
    code: `div { ???: 1000px; }`,
    options: ["perspective", "transform", "transform-style", "z-index"],
    correct: 0,
    explanation: "perspective defines the depth for 3D transformed child elements."
  },
  {
    id: 87,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property animates gradients smoothly?",
    code: `div { ???: linear-gradient(red, blue) 5s infinite; }`,
    options: ["background", "background-image", "animation", "transition"],
    correct: 2,
    explanation: "Using keyframe animation, gradients can be animated smoothly."
  },
  {
    id: 88,
    language: "CSS",
    difficulty: "Hard",
    question: "Which pseudo-class selects odd elements?",
    code: `li:??? { background: #f0f0f0; }`,
    options: ["nth-child(odd)", "nth-of-type(odd)", "first-child", "last-child"],
    correct: 0,
    explanation: ":nth-child(odd) selects odd-numbered children."
  },
  {
    id: 89,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property prevents text from wrapping?",
    code: `p { ???: nowrap; }`,
    options: ["white-space", "overflow", "text-wrap", "word-break"],
    correct: 0,
    explanation: "white-space: nowrap prevents line breaks in text."
  },
  {
    id: 90,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property clips the content inside a polygon shape?",
    code: `div { ???: polygon(0 0, 100% 0, 100% 100%, 0 100%); }`,
    options: ["clip-path", "mask", "shape", "overflow"],
    correct: 0,
    explanation: "clip-path allows clipping content into any shape, including polygons."
  },
  {
    id: 91,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property creates a new stacking context?",
    code: `div { ???: 0.9; }`,
    options: ["opacity", "z-index", "position", "transform"],
    correct: 0,
    explanation: "opacity < 1 creates a new stacking context affecting child elements."
  },
  {
    id: 92,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property transforms text along a curve using SVG?",
    code: `<textPath href="#path">???</textPath>`,
    options: ["textPath", "text-align", "text-transform", "text-decoration"],
    correct: 0,
    explanation: "SVG <textPath> applies text along a path or curve."
  },
  {
    id: 93,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property ensures that child 3D elements are rendered in 3D?",
    code: `div { ???: preserve-3d; }`,
    options: ["transform-style", "perspective", "perspective-origin", "transform"],
    correct: 0,
    explanation: "transform-style: preserve-3d maintains the 3D positioning of child elements."
  },
  {
    id: 94,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property defines scroll snapping behavior?",
    code: `div { ???: y mandatory; }`,
    options: ["scroll-snap-type", "scroll-behavior", "overflow", "scroll-snap-align"],
    correct: 0,
    explanation: "scroll-snap-type sets how scroll snapping works."
  },
  {
    id: 95,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property sets an element to be a containing block for position: absolute children?",
    code: `div { ???: relative; }`,
    options: ["position", "display", "contain", "overflow"],
    correct: 0,
    explanation: "position: relative on a container makes it the reference for absolute-positioned children."
  },
  {
    id: 96,
    language: "CSS",
    difficulty: "Hard",
    question: "Which pseudo-class selects elements when a checkbox is checked?",
    code: `input:??? { border-color: green; }`,
    options: ["checked", "active", "focus", "hover"],
    correct: 0,
    explanation: ":checked applies styles to checked input elements."
  },
  {
    id: 97,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property sets the z-index of a flex item?",
    code: `div { ???: 10; }`,
    options: ["z-index", "order", "flex-order", "stack"],
    correct: 0,
    explanation: "z-index defines stacking order of positioned elements."
  },
  {
    id: 98,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property applies a 3D rotation around the X-axis?",
    code: `div { ???: rotateX(45deg); }`,
    options: ["transform", "transform-style", "perspective", "rotate"],
    correct: 0,
    explanation: "transform: rotateX() rotates element around X-axis in 3D space."
  },
  {
    id: 99,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property sets a fixed background during scroll?",
    code: `body { background-attachment: ???; }`,
    options: ["fixed", "scroll", "local", "absolute"],
    correct: 0,
    explanation: "background-attachment: fixed keeps the background fixed during scroll."
  },
  {
    id: 100,
    language: "CSS",
    difficulty: "Hard",
    question: "Which property hides overflowing content but allows scrolling with a mask?",
    code: `div { ???: auto; -webkit-mask-image: linear-gradient(black, transparent); }`,
    options: ["overflow", "clip-path", "mask", "scrollbar-width"],
    correct: 0,
    explanation: "overflow: auto enables scroll while the mask hides edges smoothly."
  }


];

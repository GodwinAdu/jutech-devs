import { htmlLessons } from './html-lessons'
import { cssLessons } from './css-lessons'
import { jsLessons } from './js-lessons'

export const allLessons = {
  ...htmlLessons,
  ...cssLessons,
  ...jsLessons
}

export const subjectLessons = {
  html: htmlLessons,
  css: cssLessons,
  javascript: jsLessons
}

export const courseStructure = {
  frontend: {
    title: "Frontend Development",
    modules: [
      {
        id: "html",
        title: "HTML Fundamentals",
        lessons: Object.keys(htmlLessons)
      },
      {
        id: "css", 
        title: "CSS Styling",
        lessons: Object.keys(cssLessons)
      },
      {
        id: "javascript",
        title: "JavaScript Essentials", 
        lessons: Object.keys(jsLessons)
      }
    ]
  }
}
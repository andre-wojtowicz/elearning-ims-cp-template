# Minimalistic IMS Content Package template for e-learning

This repository contains template files in order to prepare IMS Content Package 1.1 for e-learning purposes. Here you can prepare lesson modules as well as quizes. All content-based files are written HTML.

Whole zipped repository can be instantly imported as an IMS package in Moodle and OLAT.

## Features and libraries

 * Look & feel: [Bootstrap](http://getbootstrap.com),
 * Math notation: [MathJax](https://www.mathjax.org),
 * Table of contents auto-generation: [Auto ToC](http://magnetiq.com/exports/toc.htm),
 * Code syntax highlighting: [SyntaxHighlighter](http://alexgorbatchev.com/SyntaxHighlighter),
 * Quiz: single and multiple choice.
 
## Preview

 * [Lesson](https://andre-wojtowicz.github.io/elearning-ims-cp-template/materials/lesson.html).
 * [Quiz](https://andre-wojtowicz.github.io/elearning-ims-cp-template/materials/quiz.html).
 
## Brief how-to

 * `imsmanifest.xml` - defines tree of modules (lessons and quizes).
 * `materials/lesson.html` - header and footer have CSS and JS code to proper load the libraries; main part of body has content of the lesson.
 * `materials/quiz.html` - header and footer have CSS and JS code to proper load the libraries; main part of body has quiz questions; the beginning of body has list of correct answers.

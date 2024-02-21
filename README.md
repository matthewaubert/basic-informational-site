# Basic Informational Site

This project was built as part of <a href="https://www.theodinproject.com/lessons/nodejs-basic-informational-site">The Odin Project: NodeJS course</a> in order to practice the Node.js and back-end web development fundamentals I've learned.

## Understanding the Problem

Create a very basic informational site that contains 4 pages: index, about, contact-me, and 404. The content of the pages is not important.

## Plan

1. Make a project directory and create the following files inside it:
   - index.html
   - about.html
   - contact-me.html
   - 404.html

1. Create my Node.js server file `index.js` and add the code needed to serve the right page according to the url:
   - <a href="localhost:8080">localhost:8080</a> should take users to index.html
   - <a href="localhost:8080/about">localhost:8080/about</a> should take users to about.html
   - <a href="localhost:8080/contact-me">localhost:8080/contact-me</a> should take users to contact-me.html
   - 404.html should display anytime the user tries to go to a page not listed above

1. Host live demo on Replit

## Later Rewrite Using Express

Take a look at the Node site you created in our first project. Rewrite it using Express! You should be able to do this with just one app.js file and a few `app.get()`s.

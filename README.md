# CS 465 MEAN Full Stack

## Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

Express is a backend framework that allows us to create a server-side application using Node.js. Angular is a frontend framework that allows us to create single-page applications. These two frameworks work together in tandem to create a web application. A single page application is a web application that loads a single HTML page and dynamically updates the content without requiring a full page reload. This allows for less loading as we only need to load the JavaScript code once and then update the content as needed.

## Why did the backend use a NoSQL MongoDB database?

MongoDB stores data in a JSON-like format which makes transferring information between MongoDB and our JavaScript code more efficient and easier to manage. This allows for seamless integration between the backend and frontend, enabling efficient data retrieval and manipulation.

## How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

JSON is an acronym for JavaScript Object Notation. Where JavaScript is a programming language, JSON is a data format that is used to represent structured data, mainly that of JavaScript objects. We can use JSON to exchange data between the server and the web application.

## Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

One of the times I refactored code was when I was adding Handlebars reusable components to reduce redundant code for the headers and footers. Not only does this make it easier to read each of the files, but it allows me to have a central file I can update and have the headers and footers update across the entire application where they're used. I can also use these headers and footers for every new page I create that needs them, reducing the amount of code I need to write and maintain.

## Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

For each type of insert and retrieval, we must have an endpoint facilitating that task. These endpoints are the entry points for our API, and they allow us to interact with our database. We can use these endpoints to create, read, update, and delete data from our database. Security is also important in a full stack application, as we need to ensure that our data is protected from unauthorized access. We can use authentication and authorization to ensure that only authorized users can access our data.

## How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

I do believe I now have the experience to experiment and explore Angular, Express, and Handlebars. With these technologies I will have the experience required to work on full stack applications using these technologies, but also I believe the fundamentals will transfer over to other stacks as well. The more I learn about front-end and back-end development, the greater I feel about being able to create applications that will be useful in the real world.

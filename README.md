# Express-Route-Query-Assignment
Express Basics Assignment
Description

This project demonstrates the basic concepts of routing, route parameters, multiple route parameters, query parameters, and request-response handling using Node.js and Express.js.

Project Structure
express-basics-assignment/
│
├── server.js
├── package.json
└── README.md

Technologies Used
Node.js
Express.js
JavaScript
Steps to Run the Server
1. Open the project folder
cd express-basics-assignment
2. Install dependencies
npm install
3. Start the server
node server.js

The server will run at:

http://localhost:3000
Routes
Task 1: Basic Routes
Method	Route	Response
GET	/	Welcome to Home Page
GET	/about	This is About Page
GET	/contact	This is Contact Page
Task 2: Route Parameter

Route:

GET /user/:name

Example:

GET /user/john

Response:

Hello john

The :name is a dynamic route parameter.

Task 3: Multiple Route Parameters

Route:

GET /product/:id/:category

Example:

GET /product/101/electronics

Response:

Product ID: 101, Category: electronics
Task 4: Query Parameters

Route:

GET /search

Example:

GET /search?name=john&role=developer

Response:

Name: john, Role: developer

Query parameters are accessed using:

req.query.name
req.query.role
Task 5: Request-Response Information

A middleware is used to display the request method and URL in the terminal.

Example terminal output:

GET /
GET /about
GET /contact
GET /user/john
GET /product/101/electronics
GET /search?name=john&role=developer

The request information is displayed using:

console.log(req.method, req.url);
Sample Outputs
Home Page
Welcome to Home Page
About Page
This is About Page
Contact Page
This is Contact Page
User Route
Hello john
Product Route
Product ID: 101, Category: electronics
Search Route
Name: john, Role: developer
Conclusion

This assignment demonstrates how to create an Express server and use different types of routes, including basic routes, dynamic route parameters, multiple parameters, query parameters, and middleware for displaying request information.

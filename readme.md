# Tehoretical part
## Basic concepts of rest api

### Api
Code runing in the server that allows other aplications to use methods, access database by using different endpoints.

### Node
Server version of JS. 

### Express
Node package that allows the creation of applications and server management.

# Practical part
## How to set up postman and use endpoints

Ok... i used thunderclient instead of postman but its basically the same.

just write on the URL "localhost:3001/tasks/" that is the local ip adress and the port of the app.

### GET
the get works leaving the body empty. Example: "localhost:3001/tasks/"
the individual get works adding an id in the URL. Example: "localhost:3001/tasks/2"

### POST
the post works by adding an object in the body of the request.
Example:  "localhost:3001/tasks/"
body {
    { "id": 3, "title": "practice python", "status": 1}
}
 
### PUT
It works the same as the post metehod, but you also have to specify an id in the url:
Example: "localhost:3001/tasks/2"
Body {
     { "id": 2, "title": "new tasks updated", "status": 1}
}

### Delete
It works as the get with id just in this case it ereases it from the array.

Example: "localhost:3001/tasks/2"

const express = require("express");
const expressGQL = require("express-graphql");
const schema = require("./schema");
const cors = require("cors");

// create a server
const server = express();

server.use(cors());
// add end points
/* 
    get() --> read ,
    post() --> add,
    put() --> update,
    delete() --> delete 

    /
    /about
    /contact
    /products

    use() --> middleware for express 
*/

server.use(
  "/graphql",
  expressGQL({
    schema: schema,
    graphiql: true,
  })
);

// add port number
const PORT = 3002;
server.listen(PORT, function () {
  console.log("graph ql serve is running on port ", PORT);
});

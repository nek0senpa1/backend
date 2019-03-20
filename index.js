const express = require('express');
const cors = require('cors');
const helmet = require('helmet');



require('dotenv').config();

const server = express();

server.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
  });

const softserver = require('./api/softserver')

server.use(softserver);
//server.use(cors);


server.use(helmet());
server.use(cors());
server.use(express.json());

const port = process.env.PORT || 9000;
server.listen(port, () => {
  console.log(`Hello World Sphere. I'm Running on Port ${port}. Consumption is being standardized.`);
});


  

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');



require('dotenv').config();

const server = express();

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
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


  

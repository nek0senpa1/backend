const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

const port = process.env.PORT || 9000;
server.listen(port, () => {
  console.log(`Hello World Sphere. I'm Running on Port ${port}. Consumption is being standardized.`);
});

server.get('/', (req, res) => {
    res.send("For more enjoyment and greater efficiency, consumption is being standardized.");
  });
  

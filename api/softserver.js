const express = require('express');

const softserver = express();


const axios = require('axios');
const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');

const deebee = require('../database/deebeeConfig')

softserver.use(express.json())

//const { authenticate, jwtKey } = require('../auth/authenticate');


softserver.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
  
    addUser(user)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json({message: 'user already exists'});
      });
  });


async function addUser (user) {
    const tom = await deebee('users').insert(user);

    return (`New User: ${user.username} : Added :)`)
} 



softserver.post('/login', (req, rez) => {
    let usernamey = req.body.username;
    let passwordy = req.body.password;

    findEm({username: usernamey}).first()
    .then(user => {
        if(bcrypt.compareSync(passwordy, user.password)) {
            rez.status(201). json({
                message: `Welcome ${user.username} !`
            })
        } else {
            rez.status(401).json({message: `Invalid Information Entered`})
        }
    })
    .catch(errerz => {
        rez.status(500).json({message: 'something went really really wrong here...'})
    })
})


function findEm (peep) {
    return deebee('users').where(peep)
}




module.exports = softserver;















const router = require('express').Router();


const axios = require('axios');
const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');

const deebee = require('../database/deebeeConfig')

//const { authenticate, jwtKey } = require('../auth/authenticate');


router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
  
    Users.add(user)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });


async function addUser (user) {
    const tom = await deebee('users').insert(user);

    return findUser(user)
} 

function findUser (peep) {
    return deebee('users').select('id', 'username')
    .where({id: peep.id}).first();
}















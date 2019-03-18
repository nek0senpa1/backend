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

















function register(req, res) {
    
    const newb = req.body;
    console.log(newb.password);
    const hashtag = bcrypt.hashSync(newb.password, 12);
    newb.password = hashtag;
  
    addstuff(newb)
    .then(stuff => {
      if(stuff){
  
      res.status(200).json({message:"Newb assigned:", stuff})
      } else {
        res.send('Something went wrong...')
      }
  
    })
    .catch(errorz => {
      res.status(500).json({message: "username already registered..."});
    })
  
  
  }
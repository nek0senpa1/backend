const express = require('express');
const cors = require('cors');

const softserver = express();

const secrets = require('./secret');

const axios = require('axios');
const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');

const deebee = require('../database/deebeeConfig')

softserver.use(express.json());
//softserver.use(cors);

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

            const token = tolkien(user)

            rez.status(201). json({
                message: `Welcome ${user.username} !`,
                token,
                userwidget: user.username
                
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

function tolkien (person) {
    console.log('getting token here...')
    const payload = {
        subject: person.id,
        username: person.username,
        
    };
    const options = {
        expiresIn: '1d',
    }

    return jwt.sign(payload, secrets.jwtSecret, options);
}




softserver.get('/test', authenticate, (rec, rez) =>{
    usersRegis()
    .then(go => {
        rez.send(go)
    })
    .catch(err => {
        rez.send(err)
    })

})

function usersRegis () {
    return deebee('users')
}

function authenticate (req, res, next) {
    const token = req.get('Authorization');

    if (token) {
        jwt.verify(token, secrets.jwtSecret, (err, decoded) => {
            if (err) {return res.status(402).json(err)}
            else {
            req.decoded = decoded;
            console.log(req.decoded)
            next();
            }
        })
    } else {
        return ( res.status(403).json({
            error: "No Token Provided, must be in Authorization header on request",
        }))
    }
}



softserver.get('/messages', authenticate, (req, res) => {
    let bean = req.decoded;
    console.log('In messages area: ', bean)
    
    filteroo(bean)
    .then(stuff =>{
        res.status(202).send(stuff);
    })
    .catch(err => {
        rez.send(err)
    })
} )


function filteroo(peep) {
    return deebee('texts').select('message')
    .where({from: peep.subject})

}


module.exports = softserver;















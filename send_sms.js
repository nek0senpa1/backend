

require('dotenv').config();

const authToken = 'b212e9259ed1ae5e51ba9d79f9333fc2';
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in 12 parsecs?',
     from: '+12568587107',
     to: '+12564177015'
   })
  .then(message => console.log(message.sid));
'use strict';

let restify = require('restify');
let builder = require('botbuilder');
let server = restify.createServer();
let fetch = require("node-fetch");

server.listen(process.env.port || process.env.PORT || 3978, function () {
  console.log('%s listening to %s', server.name, server.url); 
});

// setup bot credentials
let connector = new builder.ChatConnector({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD
});

let bot = new builder.UniversalBot(connector);
let savedAddress;
server.post('/api/messages', connector.listen());

// root dialog
bot.dialog('/', function(session, args) {
  savedAddress = session.message.address;
  session.send('You sent a message!');
  
  // get what user wants to subscribe to
  // runSubscription takes three arguments: The string for the coin, the subscription price, and the session variable
});

function runSubscription(coin, alertPrice, session){
  // set subscription with the proper URL (with the user's choice of coin) at: https://min-api.cryptocompare.com/
  // let priceOrigin ; 

  let message = 'You have subscribed to ' + coin + ' price alerts! You will be notified if the price drops below ' + alertPrice + ' USD';
  session.send(message);

  // test subscription
  fetch(priceOrigin)
  .then(response => {
    response.json().then(json => {
      if (parseFloat(json['USD']) > 0){
        session.send("The current price of " + coin +  " is: %s USD", json['USD']);
        setTimeout(() => {
          checkPrice(coin, alertPrice, priceOrigin);
         }, 1000);
         // 1000 ms = 1 second
      }
    });
  })
  .catch(error => {
    console.log(error);
  });

}

// the actual loop being run
function checkPrice(coin, alertPrice, priceOrigin) {
  fetch(priceOrigin)
  .then(response => {
    response.json().then(json => {
    /** 
     
      if (  json['USD'] is a string for the current price ){
        var msg = new builder.Message().address(savedAddress);
        msg.text("PRICE DROP ALERT: The price of " + coin + " is currently: %s USD", json['USD']);
        msg.textLocale('en-US');
        bot.send(msg);
      }
      else {
        console.log('Price of ' + coin + ' has not yet dropped below ' + alertPrice + ' yet. Resting for one hour.');
        setTimeout(() => {
          checkPrice(coin, alertPrice, priceOrigin);
         }, 1000);
         // 1000 ms = 1 second
      }
    
      */
    });
  })
  .catch(error => {
    console.log(error);
  });
}
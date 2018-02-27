# Crypto-Price-Alert
Chatbot built with Microsoft Bot Framework to subscribe to crypto price alerts

## Prerequisites
- Download NodeJS LTS: https://nodejs.org/en/
- Download Microsoft Bot emulator: https://github.com/Microsoft/BotFramework-Emulator/releases
- Create a Microsoft account. **DO NOT USE YOUR BERKELEY EMAIL**: https://account.microsoft.com/account
- Set up a Microsoft account with Azure: https://distributr.io with the promo code `GOBEARS`
- Clone this directory with `git clone https://github.com/KaitoKid/Crypto-Price-Alert`
- While in the directory, run `npm install` to install all of the necessary packages

## Test Your Setup
1. Run `node app.js` and launch the emulator
2. Make sure to use this as your settings. Leave them blank. ![Image of emulator](https://i.imgur.com/HomInPn.png)
3. Type anything. It should response with a basic message.
4. **Once you've finished the project**, type `BTC 8000` to subscribe! The ticker and the price can be anything you want!

## Writing Code
The finished product is in `workingApp.js`. Instructions on how to fill in the gaps (basic knowledge of Javascript is needed) are provided!

## Deploy
- Creating your bot: https://docs.microsoft.com/en-us/bot-framework/bot-service-quickstart
- Deploy to a specific platform: https://docs.microsoft.com/en-us/bot-framework/bot-service-channel-connect-slack
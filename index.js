const Twit = require('twit')
const Twitter = new Twit(require('./config.js'))
let stream = Twitter.stream('user')
let sourceCode = 'https://github.com/acravenho/xdai-twitterbot'

stream.on('follow', followed)
stream.on('message', message)
stream.on('direct_message', direct_message)

// callback function to DM wallet info to new user when followed
function followed (data) {
  let name = data.source.name
  let screenName = data.source.screen_name
  let response = 'Thanks for following the xDAI Twitter Bot, ' + name + ' @' + screenName + '. Your wallet information has been sent. Source code located here: ' + sourceCode
  
  // Post Twitter Message
  Twitter.post('statuses/update', { status: response }, tweeted)

  // DM user 

  console.log('Followed by: ' + name + ' @' + screenName)
}

// callback function to DM wallet info to new user when messaged
function message (data) {
  let name = data.source.name
  let screenName = data.source.screen_name
  
  // DM user

  console.log('Messaged by: ' + name + ' @' + screenName)
}

// callbback function to DM wallet info to new user when direct messaged
function direct_message (data) {
  let name = data.source.name
  let screenName = data.source.screen_name
  
  // DM User

  console.log('Direct Messaged by: ' + name + ' @' + screenName)
}

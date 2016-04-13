const express = require('express');
const friendlyApp = express();
const evilApp = express();
const cookieParser = require('cookie-parser');

friendlyApp.use(cookieParser());

friendlyApp.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.set('Cache-Control', 'no-cache');
  res.set('Access-Control-Allow-Origin', '*');
  
  if (req.cookies.userId) {
    res.send('You are logged in and your user ID is ' + req.cookies.userId);
  }
  else {
    res.cookie('userId', Math.random(), { expires: new Date(Date.now() + 900000), httpOnly: true });
    res.send("You are not logged in, logging you in now by setting a cookie");
  }
});

friendlyApp.listen(3000, () => {
  console.log('Friendly app listening on port 3000!');
});

evilApp.use('/', express.static('static'));

evilApp.listen(3001, () => {
  console.log('Friendly app listening on port 3001!');
});
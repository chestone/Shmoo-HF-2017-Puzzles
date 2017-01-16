const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

const authToken = "krennicRulz";

app.use(express.static('public'));

module.exports = {
  start: function() {
   app.get('/', function (req, res) {
     res.end();
   });

   app.post('/tokens', function(req, res) {
     res.send(authToken);
   });

   app.post('/plans', function (req, res) {
     const plans = req.body.plans;
     const token = req.body.csrftoken;

     if (token === authToken && plans === "complete") {
       res.download(__dirname + '/public/img/deathstarplans.png');
     } else {
       res.send('Sorry, bad auth. Be gone rebel scum.');
     }
   });

   app.listen(3000);
  }
};

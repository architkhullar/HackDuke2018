'user strict';

var mongoose = require('mongoose'),
  jwt = require('jsonwebtoken'),
  handyman = mongoose.model('handyman'),
  workrequest = mongoose.model('workrequest'),
  HandymanHandlers = require('../controllers/HandymanController.js'),
  WorkRequestHandlers = require('../controllers/WorkRequestController.js');


exports.sms = function(req, res) {
  if (req.body.Body.toUpperCase().includes('REGISTER')){
  var data = req.body.Body;
  var split_data = data.split(" ");
  var newHandyman = new handyman();

  split_data.forEach(function(element){
    console.log(element);

  });

  newHandyman.from = req.body.From;
  newHandyman.Name = split_data[1];
  newHandyman.zip = split_data[2];
  newHandyman.region = split_data[3];

  console.log(newHandyman);



  HandymanHandlers.register_handyman(newHandyman, function(err,data){

    if (err) throw err;
      if (user) {
        console.log('handyman saved');
      }

  });
};

  };

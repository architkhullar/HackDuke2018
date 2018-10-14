'user strict';

var mongoose = require('mongoose'),
  jwt = require('jsonwebtoken'),
  handyman = mongoose.model('handyman'),
  workrequest = mongoose.model('workrequest'),
  HandymanHandlers = require('../controllers/HandymanController.js'),
  WorkRequestHandlers = require('../controllers/WorkRequestController.js');


exports.sms = function(req, res) {
  var input=req.body.Body.toUpperCase();
  if (input.includes('REGISTER')){
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
    if (data) {
        console.log('handyman saved');
      }

  });
}
//case for the workrequest
if(input.includes("WORK")){
  var data = req.body.Body;
  var split_data = data.split(" ");
  var newworkRequest= workrequest();
  newworkRequest.from = req.body.From;
  newworkRequest.Name = split_data[1];
  newworkRequest.zip = split_data[2];
  newworkRequest.region = split_data[3];
  newworkRequest.skill=split_data[4];
 var fromIndex= data.indexOf(split_data[4])+split_data[4].length;
 var toIndex= data.length;
 console.log(fromIndex);
 console.log(toIndex);
  newworkRequest.job=data.slice(fromIndex,toIndex);
  console.log(newworkRequest.job);
  WorkRequestHandlers.register_workrequest(newworkRequest,function(err,res) {
    if (err) throw err;
    if (data) {
      console.log('workrequest saved');
    }
  })

}

  };

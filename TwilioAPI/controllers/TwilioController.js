'user strict';

var mongoose = require('mongoose'),
  jwt = require('jsonwebtoken'),
  handyman = mongoose.model('handyman'),
  workrequest = mongoose.model('workrequest'),
  HandymanHandlers = require('../controllers/HandymanController.js'),
  WorkRequestHandlers = require('../controllers/WorkRequestController.js');
  const accountSid = 'ACa85c7b7f567b95194f8868555ebe16be';
  const authToken = 'e58077322dda5c40a269f6c043c89559';
  const client = require('twilio')(accountSid, authToken);

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
  return;
  });
}
//case for the workrequest
else if(input.includes("WORK")){

  var data = req.body.Body;
  var split_data = data.split(" ");
  var newworkRequest= workrequest();

  newworkRequest.from = req.body.From;
  newworkRequest.Name = split_data[1];
  newworkRequest.zip = split_data[2];
  newworkRequest.region = split_data[3];
  newworkRequest.skill=split_data[4];

 var fromIndex= data.indexOf(split_data[4])+split_data[4].length+1;
 var toIndex= data.length;

 console.log(fromIndex);
 console.log(toIndex);

  newworkRequest.job=data.slice(fromIndex,toIndex);
  console.log(newworkRequest.job);
  WorkRequestHandlers.register_workrequest(newworkRequest,function(err,response) {
    console.log(response);
    if (err) throw err;
    if (response != null && response != '' && response != []) {
      console.log(response);
      console.log('workrequest saved');
      var message="Hi! I have a job: "+ newworkRequest.job +" please contact me at: "+newworkRequest.from;

      response.forEach(function(item,index) {

        sendData(item,message);
      })
    }
    return;
  })

}

else if(input.includes("START")){
  var toPhoneNumber=req.body.From;
  var message="Welcome to EasyConnect please use the following format for registering to work broadcast: register <yourname> <zipcode> <area>. "
sendData(toPhoneNumber,message);
}

else

{
  var toPhoneNumber=req.body.From;
  var message="Incorrect format! please use the following format for registering to work broadcast: register <yourname> <zipcode> <area>. "
sendData(toPhoneNumber,message);
}

  };

function sendData(toNumber,message) {
  client.messages.create({
    body:"\n"+ message +"\n",
    from: '+18509192242',
    to: toNumber
  })
  .then(message => console.log(message.sid))
  .done();
}

'user strict';

const accountSid = 'ACa85c7b7f567b95194f8868555ebe16be';
const authToken = 'e58077322dda5c40a269f6c043c89559';
const client = require('twilio')(accountSid, authToken);
var mongoose = require('mongoose');
  // admin = mongoose.model('Admin');
  workrequest = mongoose.model('workrequest');
  handyman = mongoose.model('handyman');


  exports.register_workrequest = function(req, res) {
    var newworkrequest = new workrequest();
    newworkrequest = req;
    console.log(newworkrequest);
    newworkrequest.save(function(err, workrequest){
      if (err) {
          console.log(err);

      } else {

        console.log('work request saved');
        var getzip = newworkrequest.zip;
        console.log(getzip);

        handyman.find({
            zip: getzip
          },{
            from: 1,
            _id: 0
          }
          , function(err, data){
            if (err) console.log(err);
            if(data){
              var list = []

              for (var i = 0; i < data.length; i++) {
                var counter = data[i].from;
                list.push(counter);

              }
              console.log(list);
              var message="Hi! I have a job: "+ newworkrequest.job +" please contact me at: "+newworkrequest.from;

              list.forEach(function(item,index) {

                sendData(item,message);
                console.log("sent");
              })

            }
      });


        //return res.json({token: jwt.sign({ username: admin.username}, 'secretkey'), message: 'Authentication successful, Admin logged in', status: '200' });
         //return res(null, circulate(newworkrequest));



        }
    });

};


exports.register_workrequest_mobile = function(req, res) {
  var newworkrequest = new workrequest(req.body);
  //newR = req.body;
  console.log(newworkrequest);
  newworkrequest.save(function(err, survey) {
    if (err) {
      return res.status(400).send({
        message: err, status:'400'
      });
    } else {
      var getzip = newworkrequest.zip;
      console.log(getzip);

      handyman.find({
          zip: getzip
        },{
          from: 1,
          _id: 0
        }
        , function(err, data){
          if (err) console.log(err);
          if(data){
            var list = []

            for (var i = 0; i < data.length; i++) {
              var counter = data[i].from;
              list.push(counter);

            }
            console.log(list);
            var message="Hi! I have a job: "+ newworkrequest.job +" please contact me at: "+newworkrequest.from;

            list.forEach(function(item,index) {

              sendData(item,message);
              console.log("sent");
            })

          }
        });
      return res.json({message: 'survey submitted successfully', status:'200'});




      }
  });
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



// var circulate = function(newworkrequest){
//   var workrequest_search = new workrequest();
//   newworkrequest_search = newworkrequest;
//
//   console.log(newworkrequest);
//   var string = JSON.stringify(newworkrequest);
//   var objectValue = JSON.parse(string);
//   var getzip = objectValue['zip'];
//
//   handyman.find({
//       zip: getzip
//     },{
//       from: 1,
//       _id: 0
//     }
//     , function(err, data){
//       if (err) console.log(err);
//       if(data){
//         var list = []
//
//         for (var i = 0; i < data.length; i++) {
//           var counter = data[i].from;
//           list.push(counter);
//
//         }
//         console.log(list);
//         return list;
//       }
// });
// };

'user strict';

var mongoose = require('mongoose');
  // admin = mongoose.model('Admin');
  workrequest = mongoose.model('workrequest');
  handyman = mongoose.model('handyman');


  exports.register_workrequest = function(req, res) {
    var newworkrequest = new workrequest();
    newworkrequest = req;
    newworkrequest.save(function(err, workrequest){
      if (err) {
        //return res.status(400).send({
          //message: err, status:'400'
          console.log(err);

      } else {

        // return res.json({data:handyman, message: 'admin submitted successfully', status:'200'});
        // return res.json({message: 'Admin created successfully', status:'200'});
        console.log('work request saved');

        }
    });

};

// exports.circulate = function(req, res) {
//   var newHandyman = new workrequest();
//   newHandyman = req;
//   newHandyman.save(function(err, handyman){
//     if (err) {
//       //return res.status(400).send({
//         //message: err, status:'400'
//         console.log(err);
//
//     } else {
//
//       // return res.json({data:handyman, message: 'admin submitted successfully', status:'200'});
//       // return res.json({message: 'Admin created successfully', status:'200'});
//       console.log('saved');
//       }
//   });
//
// };

'user strict';

var mongoose = require('mongoose'),
  //jwt = require('jsonwebtoken'),
  handyman = mongoose.model('handyman');

  exports.register_handyman = function(req, res) {
    var newHandyman = new handyman();
    newHandyman = req;
    newHandyman.save(function(err, handyman){
      if (err) {
        //return res.status(400).send({
          //message: err, status:'400'
          console.log(err);

      } else {

        // return res.json({data:handyman, message: 'admin submitted successfully', status:'200'});
        // return res.json({message: 'Admin created successfully', status:'200'});
        console.log('saved');
        }
    });

};

// exports.patient_login = function(req, res) {
//   Patient.findOne({
//     username: req.body.username,
//     password: req.body.password
//   }, function(err, patient) {
//     if (err) throw err;
//     if (!patient) {
//       res.status(401).json({ message: 'Authentication failed. User not found.', status: '401' });
//     } else if (patient) {
//         return res.json({token: jwt.sign({ username: patient.username}, 'secretkey'), message: "user successfully logged in", status:'200'});
//     }
//   });
// };
//
// exports.all_patient_data = function(req, res) {
//   var newUsername = jwt.decode(req.headers.authorization);
//   console.log(newUsername);
//   var string = JSON.stringify(newUsername);
//   var objectValue = JSON.parse(string);
//   var getuser = objectValue['username'];
//
//   Admin.findOne({
//     username: getuser
//   }, function(err, user){
//     if (err) throw err;
//     if (!user) {
//       console.log('2');
//       res.status(401).json({ message: 'you do not have the admin priviliges', status: '401'});
//     } else if (user) {
//       mongoose.connection.collection("patients").find().toArray(function(err, data) {
//           res.send(data);
//         })
//       }
//     });
//       };

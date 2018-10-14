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
          console.log(err);

      } else {

        console.log('work request saved');
        circulate(newworkrequest)


        }
    });

};

var circulate = function(newworkrequest){
  var workrequest_search = new workrequest();
  newworkrequest_search = newworkrequest;

  console.log(newworkrequest);
  var string = JSON.stringify(newworkrequest);
  var objectValue = JSON.parse(string);
  var getzip = objectValue['zip'];

  handyman.findAll({
      zip: getzip
    }, function(err, data){
      if (err) console.log(err);
      if(data){
        console.log(data);
      }
});
};

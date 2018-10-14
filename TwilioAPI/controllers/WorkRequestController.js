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
        //console.log(newworkrequest);
        //var string = JSON.stringify(newworkrequest);
        //var objectValue = JSON.parse(string);
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
              return list;
            }
      });


        //return res.json({token: jwt.sign({ username: admin.username}, 'secretkey'), message: 'Authentication successful, Admin logged in', status: '200' });
         return res(null, circulate(newworkrequest));



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
        return list;
      }
});
};

'use strict';
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var workrequestSchema = new Schema({
  from: {
    type: String,
    default: 0
  },
  Name: {
    type: String,
    required: 'Kindly enter the name of the Handyman',
    default: 'jonh Doe'
  },
  zip: {
    type: String,
    required: 'Kindly enter the zip code on your availability region',
    default: '28262'
  },
  region:{
    type: String,
    required: 'Kindly enter the area name',
    default: 'university area'
  },
    skill:{
    type: String,
    required: 'Kindly enter the any special skills required, if any',
    default: ''
  },
  job:{
    type: String,
    required: 'Kindly enter the job description',
    default: 'move fridge to second floor'
  }

});



mongoose.model('workrequest', workrequestSchema);

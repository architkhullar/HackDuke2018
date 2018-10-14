'use strict';
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var HandymanSchema = new Schema({
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
    default: 'UNCC'
  }
});

mongoose.model('handyman', HandymanSchema);

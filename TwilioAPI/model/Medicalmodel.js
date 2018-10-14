'use strict';
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MedicalSchema = new Schema({
  from: {
    type: String,
    default: 0
  },
  count: {
    type: Number,
    required: 'Kindly enter the count of the Medical',
    default: 0
  },
  available_symptoms: {
    type: [String],
    default: ["Headache", "Dizziness", "Nausea","Fatigue","Sadness"]
  },
  step: {
    type: Number,
    required: 'Kindly enter the step of the Medical',
  },
  message: {
    type: String,
    required: 'Kindly enter the weight of the Medical'
  },
  response: {
    type: String,
  },
  symptoms: {
    type: String,
    default:" "
  }
});


mongoose.model('inclass03', MedicalSchema);

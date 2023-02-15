const { Schema, model } = require('mongoose');

const Brand = new Schema({
  id: {type: Number, unique: true, required: true},
  name: {type: String, required: true},
  image: {type: String, required: true}
})

module.exports = model('Brand', Brand);
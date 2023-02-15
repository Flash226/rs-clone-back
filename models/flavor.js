const { Schema, model } = require('mongoose');

const Flavor = new Schema({
  brand: {type: String, required: true},
  name: {type: String, unique: true, required: true},
  description: {type: String, required: true},
  image: {type: String, required: true},
  strength: {type: String, required: true},
  flavor: [{type: String, required: true}],
  id: {type: Number, unique: true, required: true}
})

module.exports = model('Flavor', Flavor);
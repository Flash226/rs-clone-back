const { Schema, model } = require('mongoose');

const FlavorPreference = new Schema({
  userId: {type: String, unique: true, required: true},
  flavors: [{type: String, required: true}],
  strange: {type: String, required: true}
})

module.exports = model('FlavorPreference', FlavorPreference);
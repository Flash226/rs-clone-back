const { Schema, model } = require('mongoose');

const SearchPhrase = new Schema({
  phrase: {type: String, unique: true, required: true},
  count: {type: Number, required: true},
})

module.exports = model('SearchPhrase', SearchPhrase);
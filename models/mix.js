const { Schema, model } = require('mongoose');

class NumberMap extends Map {}

const Mix = new Schema({
  name: {type: String, unique: true, required: true},
  description: {type: String, required: true},
  compositionById: { type: NumberMap, of: Number },
  compositionByPercentage: {type: NumberMap, of: Number},
  image: {type: String, required: true},
  id: {type: Number, unique: true, required: true},
  idUser: {type: String, required: true}
})

module.exports = model('Mix', Mix);

const { Schema, model } = require('mongoose');

const notAuthProfile = new Schema({
  userId: {type: String, unique: true, required: true},
  rating: [
    {
      id: { type: Number, unique: false },
      rate: { type: Number, unique: false }
    },
],
})

module.exports = model('notAuthProfile', notAuthProfile);
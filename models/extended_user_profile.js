const { Schema, model } = require('mongoose');

const extendedProfile = new Schema({
  userId: {type: String, unique: true, required: true},
  name: {type: String, unique: true, required: true},
  instagramAccount: {type: String, required: false},
  avatar: {type: String, required: false},
  favorite: [{type: Number, required: false}],
  myMix: [{type: Number, required: false}],
  rating: [
    {
      id: { type: Number, unique: false },
      rate: { type: Number, unique: false }
    },
],
})

module.exports = model('extendedProfile', extendedProfile);
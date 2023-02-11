const mongoose = require('mongoose');

module.exports = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb+srv://Flash226:Ysl8PIle1SMoQopn@cluster0.y34raqh.mongodb.net/?retryWrites=true&w=majority');
  } catch (e) {
    console.log(`Error: ${e}`);
  }
};

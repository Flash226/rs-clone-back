const db = require('../../data/database');


let randomMix = 999;

const changeRandomMix = () => {
  const allMixes = db.mixes;
  const min = 1;
  const max = db.mixes.length;
  const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  randomMix = db.mixes[randomNum];
}

changeRandomMix();

setInterval(() => {
  changeRandomMix();
}, 20 * 60 * 1000);


module.exports = {
  getRandomMix: () => randomMix,
};
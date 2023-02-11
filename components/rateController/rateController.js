const extendedProfile = require('../../models/extended_user_profile');
const User = require('../../models/user');
const { json } = require('express');
const { getRateFunction } = require('../getRateFunction/getRateFunction');

class RateController {
  async getRate(req, res) {
    try {
      const id = Number(req.params.id.slice(1));
      const vote = [];
      const rateArr = await extendedProfile.find({"rating.id": id});

      if (rateArr.length === 0) return res.json({"rate": 0, "vote": 0});
      rateArr.map((el) => {
        for (let i = 0; i < el.rating.length; i += 1) {
          if (el.rating[i].id === id) {
            vote.push(el.rating[i].rate);
          }
        }
      });

      const rate = (vote.reduce(function(sum, elem) {
        return sum + elem;
      }, 0)) / vote.length.toFixed(1);

      return res.json({"rate": rate, "vote": vote.length});
    } catch (e) {
      console.log(e);
      res.status(400).json({message: `Rate error`});
    }
  };

  async setRate(req, res) {
    try {
      const { userId, id, rate } = req.body;
      const userProfile = await extendedProfile.findOne({userId: userId});
      const idMix = [];
      for (let i = 0; i < userProfile.rating.length; i +=1) {
        idMix.push(userProfile.rating[i].id);
      }
      if (idMix.indexOf(id) === -1) {
        userProfile.rating.push({ id: id, rate: rate });
      } else {
        userProfile.rating[idMix.indexOf(id)].rate = rate;
      }
      await userProfile.save();

      return res.status(200).json(await getRateFunction(id)); 

    } catch (e) {
      console.log(e);
      res.status(400).json({message: `Rate error`});
    }
  }
}

module.exports = new RateController();

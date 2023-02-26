const extendedProfile = require('../../models/extended_user_profile');
const notAuthProfile = require('../../models/not_auth_user_profile')
const Mix = require('../../models/mix');
const { json } = require('express');
const { getRateFunction } = require('../getRateFunction/getRateFunction');

class RateController {
  async getRate(req, res) {
    try {
      const id = Number(req.params.id.slice(1));
      const rate = await getRateFunction(id);
      return res.json(rate);
    } catch (e) {
      console.log(e);
      res.status(400).json({message: `Rate error`});
    }
  };

  async setRate(req, res) {
    try {
      const { userId, id, rate } = req.body;
      let userProfile;
      if (userId.length > 12) {
        userProfile = await extendedProfile.findOne({userId: userId});
      } else {
        userProfile = await notAuthProfile.findOne({userId: userId});
      }
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

  async getFavorite(req, res) {
    try {
      const id = String(req.params.id.slice(1));
      const userProfile = await extendedProfile.findOne({userId: id});
      const favorite = userProfile.favorite;
      return res.json(favorite);
    } catch (e) {
      console.log(e);
      res.status(400).json({message: `Get favorite error`});
    }
  };

  async setFavorite(req, res) {
    try {
      const { userId, id } = req.body;
      const userProfile = await extendedProfile.findOne({userId: userId});
      if (userProfile.favorite.indexOf(id) === -1) {
        userProfile.favorite.push(id);
      } else {
        userProfile.favorite.splice(userProfile.favorite.indexOf(id), 1);
      }
      await userProfile.save();
      return res.status(200).json(userProfile.favorite); 
    } catch (e) {
      console.log(e);
      res.status(400).json({message: `Set favorite error`});
    }
  };

  async getFavoriteFlavor(req, res) {
    try {
      const id = String(req.params.id.slice(1));
      const userProfile = await extendedProfile.findOne({userId: id});
      const favoriteFlavors = userProfile.favoriteFlavors;
      return res.json(favoriteFlavors);
    } catch (e) {
      console.log(e);
      res.status(400).json({message: `Get favorite flavors error`});
    }
  };

  async setFavoriteFlavor(req, res) {
    try {
      const { userId, id } = req.body;
      const userProfile = await extendedProfile.findOne({userId: userId});
      if (userProfile.favoriteFlavors.indexOf(id) === -1) {
        userProfile.favoriteFlavors.push(id);
      } else {
        userProfile.favoriteFlavors.splice(userProfile.favoriteFlavors.indexOf(id), 1);
      }
      await userProfile.save();
      return res.status(200).json(userProfile.favoriteFlavors); 
    } catch (e) {
      console.log(e);
      res.status(400).json({message: `Set favorite flavors error`});
    }
  };

  async getMyMix(req, res) {
    try {
      const id = String(req.params.id.slice(1));
      const userProfile = await extendedProfile.findOne({userId: id});
      const myMix = userProfile.myMix;
      return res.json(myMix);
    } catch (e) {
      console.log(e);
      res.status(400).json({message: `Get my mix error`});
    }
  };

  async setMyMix(req, res) {
    try {
      const newMix = req.body;
      const userId = newMix.idUser;
      const allMixUsers = await Mix.find();
      const newIdMix = 36 + allMixUsers.length;
      newMix.id = newIdMix;
      const userProfile = await extendedProfile.findOne({userId: userId});
      userProfile.myMix.push(newMix.id);
      const mix = new Mix(newMix);
      await userProfile.save();
      await mix.save();
      return res.status(200).json(userProfile.myMix); 
    } catch (e) {
      console.log(e);
      res.status(400).json({message: `Set new user mix error`});
    }
  };

  async getAllMixUsers(req, res) {
    try {
      const allMixUsers = await Mix.find();
      const allMix = [];
      for (let mix of allMixUsers) {
        const userId = mix.idUser;
        const userProfile = await extendedProfile.findOne({ userId: userId });
        const mixWithUserProfile = {
          ...mix.toObject(),
          userName: userProfile.name,
          instagramAccount: userProfile.instagramAccount,
          avatar: userProfile.avatar
        };
        mixWithUserProfile.compositionById = Object.fromEntries(mix.compositionById);
        mixWithUserProfile.compositionByPercentage = Object.fromEntries(mix.compositionByPercentage);
        allMix.push(mixWithUserProfile);
    }
      return res.json(allMix);
    } catch (e) {
      console.log(e);
      res.status(400).json({message: `Get all mix users error`});
    }
  };

}

module.exports = new RateController();

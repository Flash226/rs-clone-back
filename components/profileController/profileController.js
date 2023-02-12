const extendedProfile = require('../../models/extended_user_profile');
const notAuthProfile = require('../../models/not_auth_user_profile')
const User = require('../../models/user');
const { json } = require('express');

class ProfileController {
  async getProfile(req, res) {
    try {
      const { id } = req.body;
      if (id.length > 12) {
        const userProfile = await extendedProfile.findOne({userId: id});
        if (!userProfile) {
          const user = await User.findOne({_id: id});
          let userName = user.username.substring(0, (user.username.indexOf('@')));
          userName = userName[0].toUpperCase() + userName.substring(1).toLowerCase();
          const userProfile = new extendedProfile({
            userId: id,
            name: userName,
            instagramAccount: '',
            avatar: '',
            favorite: [],
            myMix: [],
            rating: [],
          });
        await userProfile.save();
        return res.json(userProfile);
          } else return res.status(200).json(userProfile);
      } else {
        const userProfile = await notAuthProfile.findOne({userId: id});
        if (!userProfile) {
          const userProfile = new notAuthProfile({
            userId: id,
            rating: [],
          });
        await userProfile.save();
        return res.json(userProfile);
          } else return res.status(200).json(userProfile);
      }
    } catch (e) {
      console.log(e);
      res.status(400).json({message: `Profile error`});
    }
  }

  async setProfile(req, res) {
    try {
      const { data } = req.body;
      const result = await extendedProfile.updateOne({_id: data._id}, data);
      if (result.modifiedCount === 1) return res.json({message: `Profile edited`});
    } catch (e) {
      console.log(e);
      res.status(400).json({message: `Profile edit error`});
    };
  };
};

module.exports = new ProfileController();

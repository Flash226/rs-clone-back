const Brand = require('../../models/brand');
const Flavor = require('../../models/flavor');
const SearchPhrase = require('../../models/search_phrase');
const extendedProfile = require('../../models/extended_user_profile');
const notAuthProfile = require('../../models/not_auth_user_profile');
const FlavorPreference = require('../../models/flavor_preference');
const db = require('../../data/database');

const { json } = require('express');

class ApiController {

  async setBrand(req, res) {
    try {
      const { name, imageName } = req.body;
      let newId = 6;
      if (await Brand.count() !== 0) {
        const lastBrand = await Brand.find().limit(1).sort({$natural:-1});
        if (lastBrand !== undefined) {
          newId = await lastBrand[0].id + 1;
        }
      }
      const newBrand = new Brand({
        id: newId,
        name: name,
        image: imageName,
      });
      await newBrand.save();
      return res.status(200).json(newBrand);
    } catch (e) {
      console.log(e);
      res.status(400).json({message: `Brand created error`});
    };
  };


  async getBrands(req, res) {
    try {
      const brandsOld = db.brands;
      let brandsNew = [];
      if (await Brand.count() !== 0) {
       brandsNew = await Brand.find();
      }
      const brandsAll = [...brandsOld, ...brandsNew];
      return res.status(200).json(brandsAll);
    } catch (e) {
      console.log(e);
      res.status(400).json({message: `Get all brands error`});
    }
  };

  async setFlavor(req, res) {
    try {
      const data = req.body;
      let newId = 51;
      if (await Flavor.count() !== 0) {
        const lastFlavor = await Flavor.find().limit(1).sort({$natural:-1});
        if (lastFlavor !== undefined) {
          newId = await lastFlavor[0].id + 1;
        }
      }
      data.id = newId;
      const newFlavor = new Flavor(data);
      await newFlavor.save();
      return res.status(200).json(newFlavor);
    } catch (e) {
      console.log(e);
      res.status(400).json({message: `Flavor created error`});
    };
  };

  async getFlavors(req, res) {
    try {
      const flavorsOld = db.flavors;
      let flavorsNew = [];
      if (await Flavor.count() !== 0) {
       flavorsNew = await Flavor.find();
      }
      const flavorsAll = [...flavorsOld, ...flavorsNew];
      return res.status(200).json(flavorsAll);
    } catch (e) {
      console.log(e);
      res.status(400).json({message: `Get all flavors error`});
    }
  };

  async getFlavor(req, res) {
    try {
      const id = Number(req.params.id.slice(1));
      let indexElement = -1;
      let flavor;
      if (id < 51) {
        indexElement = db.flavors.findIndex((el) => el.id === id);
        flavor = db.flavors[indexElement];
      } else {
        let flavorsNew = [];
        if (await Flavor.count() !== 0) {
          flavorsNew = await Flavor.find();
        }
        indexElement = flavorsNew.findIndex((el) => el.id === id);
        flavor = flavorsNew[indexElement];
      }
      if (indexElement === -1) {
        res.status(404).send('404 Not found');
      } else {
        res.status(200).json(flavor);
   }
    } catch (e) {
      console.log(e);
      res.status(400).json({message: `Get flavor error`});
    }
  };


  async searchAccessor(req, res) {
    try {
      const phrase = String(req.params.phrase.slice(1));
      if (phrase !== 'undefined') {
        if (await SearchPhrase.count() !== 0) {
          let phraseObj = await SearchPhrase.findOne({phrase: phrase});
          if (phraseObj) {
            phraseObj.count += 1;
          } else {
            phraseObj = new SearchPhrase({phrase: phrase, count: 1})
          }
          await phraseObj.save();
        } else {
          const phraseObj = new SearchPhrase({phrase: phrase, count: 1})
          await phraseObj.save();
        }
        res.status(200).json({message: `Search phrase count added`});
      } else {
        const allPhrase = await SearchPhrase.find();
        allPhrase.sort(function(a, b) { 
          return b.count - a.count;
        });
        const topPhrase = allPhrase.slice(0, 10)
        let phrases = [];
        topPhrase.forEach((el) => {
          phrases.push(el.phrase);
        })
        res.status(200).json(phrases);
      }
    } catch (e) {
      console.log(e);
      res.status(400).json({message: `Search phrase error`});
    }
  }

  async flavorPreferenceAccessor(req, res) {
    try {
      const { userId, flavors, strange, brands } = req.body;
      let flavorPreferenceUser = await FlavorPreference.findOne({userId: userId});
      if (flavors !== undefined) {
        if (await FlavorPreference.count() !== 0) {
          if (flavorPreferenceUser) {
            flavorPreferenceUser.flavors = flavors;
            flavorPreferenceUser.strange = strange;
            flavorPreferenceUser.brands = brands;
          } else {
            flavorPreferenceUser = new FlavorPreference({
              userId: userId,
              flavors: flavors,
              strange: strange,
              brands: brands,
            })
          }
          await flavorPreferenceUser.save();
          res.status(200).json(flavorPreferenceUser);
        } else {
          const flavorPreference = new FlavorPreference({
            userId: userId,
            flavors: flavors,
            strange: strange,
            brands: brands,
          });
          await flavorPreference.save();
          res.status(200).json(flavorPreference);
        }
      } else {
        res.status(200).json({flavors: flavorPreferenceUser.flavors, strange: flavorPreferenceUser.strange, brands: flavorPreferenceUser.brands});
      }
    } catch (e) {
      console.log(e);
      res.status(400).json({message: `Flavor preference error`});
    }
  }

  async getTop10(req, res) {
    try {
      const allUserProfile = await extendedProfile.find();
      const allNonAuthProfile = await notAuthProfile.find();
      const voteUser = allUserProfile.map((el) => el.rating);
      const voteNonAuth = allNonAuthProfile.map((el) => el.rating);
      const arr = [...voteUser, ...voteNonAuth];

      const idCounts = arr.flat().reduce((counts, item) => {
        const { id } = item;
        counts[id] = counts[id] ? counts[id] + 1 : 1;
        return counts;
      }, {});
      const sortedArr = Object.keys(idCounts).sort((a, b) => idCounts[b] - idCounts[a]);
      const sortedIds = sortedArr.map(id => parseInt(id, 10)).slice(0, 10);
      const arrMixes = [];
      for (let i = 0; i < sortedIds.length; i += 1) {
        arrMixes.push(db.mixes[sortedIds[i] - 1]);
      }
      console.log(arrMixes)
      return res.status(200).json(arrMixes);
    } catch (e) {
      console.log(e);
      res.status(400).json({message: `Get top 10 error`});
    }
  };

  async getAllRate(req, res) {
    try {
      const allUserProfile = await extendedProfile.find();
      const allNonAuthProfile = await notAuthProfile.find();
      const voteUser = allUserProfile.map((el) => el.rating);
      const voteNonAuth = allNonAuthProfile.map((el) => el.rating);
      const arr = [...voteUser, ...voteNonAuth];
      const result = Object.values(arr.flat()
        .reduce((acc, { id, rate }) => {
          if (!acc[id]) {
            acc[id] = { id, rate: 0, votes: 0 };
          }
          acc[id].rate += rate;
          acc[id].votes += 1;
          return acc;
        }, {}))
        .map(({ id, rate, votes }) => ({
          id,
          rate: (rate / votes).toFixed(1),
          votes,
        }));

      res.status(200).json(result);
    } catch (e) {
      console.log(e);
      res.status(400).json({message: `Get all rate error`});
    }
  };

};


module.exports = new ApiController();

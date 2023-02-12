const extendedProfile = require('../../models/extended_user_profile');
const notAuthProfile = require('../../models/not_auth_user_profile')
module.exports.getRateFunction = async function(id) {
  const vote = [];
  const rateArr = await extendedProfile.find({"rating.id": id});
  const rateArrNotAuth = await notAuthProfile.find({"rating.id": id});
  if (rateArr.length === 0 && rateArrNotAuth.length === 0) return { rate: 0, vote: 0 };
  rateArr.map((el) => {
    for (let i = 0; i < el.rating.length; i += 1) {
      if (el.rating[i].id === id) {
        vote.push(el.rating[i].rate);
      };
    };
  });

  rateArrNotAuth.map((el) => {
    for (let i = 0; i < el.rating.length; i += 1) {
      if (el.rating[i].id === id) {
        vote.push(el.rating[i].rate);
      };
    };
  });

  const rate = (vote.reduce(function(sum, elem) {
    return sum + elem;
  }, 0)) / vote.length;
  return {rate: rate.toFixed(1), vote: vote.length};
}

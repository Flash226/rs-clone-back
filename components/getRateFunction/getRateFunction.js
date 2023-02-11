const extendedProfile = require('../../models/extended_user_profile');

module.exports.getRateFunction = async function(id) {
  const vote = [];
  const rateArr = await extendedProfile.find({"rating.id": id});

  if (rateArr.length === 0) return { rate: 0, vote: 0 };
  rateArr.map((el) => {
    for (let i = 0; i < el.rating.length; i += 1) {
      if (el.rating[i].id === id) {
        vote.push(el.rating[i].rate);
      };
    };
  });

  const rate = (vote.reduce(function(sum, elem) {
    return sum + elem;
  }, 0)) / vote.length.toFixed(1);
  return {rate: rate, vote: vote.length};
}

const cityModal = require('../../../model/city');

module.exports = {
  allCity: async (parent, args, { LOGGED_IN }) => {
    if (!LOGGED_IN) throw new Error('Unauthorised User');

    const cities = await cityModal.find({});
    return cities;
  },
};

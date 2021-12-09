const userModal = require('../../../model/user');
const validatorService = require('../../../Services/validator');
const hashService = require('../../../Services/hashService');

module.exports = {
  updateProfile: async (parent, { userDetails }, { LOGGED_IN, user }) => {
    if (!LOGGED_IN) throw new Error('Unauthorized');

    await userModal.updateOne({ _id: user._id }, userDetails);

    return { message: 'Profile updated' };
  },
};

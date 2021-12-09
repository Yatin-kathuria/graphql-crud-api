const userModal = require('../../../model/user');
const hashService = require('../../../Services/hashService');

module.exports = {
  updateProfile: async (parent, { userDetails }, { LOGGED_IN, user }) => {
    if (!LOGGED_IN) throw new Error('Unauthorized');

    await userModal.updateOne({ _id: user._id }, userDetails);

    return { message: 'Profile updated' };
  },
  changePassword: async (
    parent,
    { oldPassword, newPassword },
    { LOGGED_IN, user }
  ) => {
    if (!LOGGED_IN) throw new Error('Unauthorized');

    if (oldPassword === newPassword) {
      throw new Error("Old password and New Password can't be same.");
    }

    const savedUser = await userModal.findById({ _id: user._id });
    const isPasswordMatch = await hashService.decryptPassword(
      oldPassword,
      savedUser.password
    );

    if (!isPasswordMatch) {
      throw new Error('Old Password is incorrect');
    }

    const hashPassword = await hashService.encryptPassword(newPassword);
    savedUser.password = hashPassword;
    await savedUser.save();

    return { message: 'Password Updated successfully' };
  },
};

const UserDtos = require("../../../dtos/user");
const userModal = require("../../../model/user");
const validator = require("../../../Services/validator");
const hashService = require("../../../Services/hashService");

module.exports = {
  singleUser: async (parent, { id }, { LOGGED_IN }) => {
    if (!LOGGED_IN) throw new Error("Unauthorised User");
    const user = await userModal.findOne({ _id: id }).exec();
    console.log(user);
    if (!user) throw new Error("Invalid user id provided");

    return { user };
  },
};

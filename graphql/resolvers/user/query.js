const UserDtos = require("../../../dtos/user");
const userModal = require("../../../model/user");
const validator = require("../../../Services/validator");
const hashService = require("../../../Services/hashService");

module.exports = {
  //   token: (parent, args, { LOGGED_IN, user }) => {
  //     if (!LOGGED_IN) throw new Error("Unauthorised User");
  //     const token = hashService.createToken({
  //       _id: user._id,
  //       role: user.role,
  //     });
  //     return { token };
  //   },
};

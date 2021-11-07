const UserDtos = require("../../../dtos/user");
const userModal = require("../../../model/user");
const validatorService = require("../../../Services/validator");
const hashService = require("../../../Services/hashService");

module.exports = {
  createUser: async (parent, { input }, { LOGGED_IN, ADMIN }) => {
    if (!LOGGED_IN || !ADMIN) throw new Error("Unauthorized");

    const { email, password } = input;
    if (!validatorService.validateEmail(email)) {
      throw new Error("Invalid Email");
    }
    const user = await userModal.findOne({ email }).exec();
    if (user) {
      throw new Error("Email is registered with some other account");
    }

    const hashPassword = await hashService.encryptPassword(password);
    const savedUser = await userModal.create({
      ...input,
      password: hashPassword,
    });

    return { message: "User is succefully registered.", user: savedUser };
  },

  deleteUser: async (parent, { id }, { LOGGED_IN, ADMIN }) => {
    if (!LOGGED_IN || !ADMIN) throw new Error("Unauthorized");
    await userModal.deleteOne({ _id: id }).exec();
    return { message: "User is succefully deleted." };
  },

  updateUser: async (parent, { id, userDetails }, { LOGGED_IN, ADMIN }) => {
    if (!LOGGED_IN || !ADMIN) throw new Error("Unauthorized");
    await userModal.updateOne({ _id: id }, userDetails);
    return { message: "User updated" };
  },
};

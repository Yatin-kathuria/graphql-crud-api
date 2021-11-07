const UserDtos = require("../../../dtos/user");
const userModal = require("../../../model/user");
const validatorService = require("../../../Services/validator");
const hashService = require("../../../Services/hashService");

module.exports = {
  createUser: async (parent, { input }) => {
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

    console.log(savedUser);
    return { message: "User is succefully registered.", user: savedUser };
  },
};

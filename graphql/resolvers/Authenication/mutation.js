const UserDtos = require("../../../dtos/user");
const userModal = require("../../../model/user");
const validator = require("../../../Services/validator");
const hashService = require("../../../Services/hashService");

module.exports = {
  register: async (parent, { name, email, password, role }) => {
    if (!validator.validateEmail(email)) throw new Error("Invalid Email");

    const user = await userModal.findOne({ email }).exec();
    if (user) throw new Error("Email is registered with some other account");

    const hashPassword = await hashService.encryptPassword(password);
    await userModal.create({ name, email, password: hashPassword, role });

    return { message: "User is succefully registered." };
  },
};

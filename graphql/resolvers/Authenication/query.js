const UserDtos = require("../../../dtos/user");
const userModal = require("../../../model/user");
const validator = require("../../../Services/validator");
const hashService = require("../../../Services/hashService");

module.exports = {
  login: async (parent, { email, password }) => {
    if (!validator.validateEmail(email)) throw new Error("Invalid Email");
    const user = await userModal.findOne({ email });
    if (!user) {
      throw new Error(
        "User is not exist with this Email. Please register yourself first"
      );
    }

    const isPasswordMatch = await hashService.decryptPassword(
      password,
      user.password
    );
    if (!isPasswordMatch) throw new Error("Email or Password is incorrect");

    const token = hashService.createToken({ _id: user._id, role: user.role });
    // console.log({ email, password });
    //   const user = await userModal.findOne({ email }).exec();
    //   if (user) throw new Error("Email is registered with some other account");

    //   const hashPassword = await hashService.encryptPassword(password);
    //   await userModal.create({ name, email, password: hashPassword, role });
    // console.log(user);
    return { message: "Succesfully login", token, user };
  },
};

const UserDtos = require("../../../dtos/user");
const userModal = require("../../../model/user");
const validator = require("../../../Services/validator");
const hashService = require("../../../Services/hashService");

module.exports = {
  register: async (parent, { input }) => {
    const { name, email, password, role } = input;
    if (!validator.validateEmail(email)) throw new Error("Invalid Email");

    const user = await userModal.findOne({ email }).exec();
    if (user) throw new Error("Email is registered with some other account");

    const hashPassword = await hashService.encryptPassword(password);
    await userModal.create({ name, email, password: hashPassword, role });

    return { message: "User is succefully registered." };
  },

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
    return { message: "Succesfully login", token, user };
  },

  verify: async (parent, { id }) => {
    const user = await userModal.findById({ _id: id }).exec();
    if (!user) throw new Error("Invalid user ID");

    user.verified = true;
    await user.save();

    return { message: "User verified succefully" };
  },

  forgetPassword: async (parent, { email }) => {
    if (!validator.validateEmail(email)) throw new Error("Invalid Email");

    const savedUser = await userModal.findOne({ email });
    if (!savedUser) throw new Error("User not exist with this email ID");

    const resetToken = hashService.generateForgetPasswordToken({ email });

    return {
      resetToken,
      message:
        "send this token to us during reset the password in Id field within 10 minutes.",
    };
  },

  reset: async (parent, { resetToken, password }) => {
    const { email } = hashService.verifyForgetPasswordToken(resetToken);
    const savedUser = await userModal.findOne({ email });
    const isPasswordMatch = await hashService.decryptPassword(
      password,
      savedUser.password
    );

    if (isPasswordMatch)
      throw new Error("Old and New Password must be different.");

    const hashPassword = await hashService.encryptPassword(password);
    savedUser.password = hashPassword;
    await savedUser.save();

    return { message: "Password Updated successfully" };
  },
};

const userModal = require("../model/user");
const hashService = require("../Services/hashService");

const context = async ({ req }) => {
  const authorization = req.headers.authorization;
  if (!authorization) return { LOGGED_IN: false };

  const token = authorization.split(" ")[1];
  const verified = hashService.verifyToken(token);
  if (!verified) return { LOGGED_IN: false };

  const user = await userModal.findById(verified._id);
  return {
    LOGGED_IN: true,
    user,
    ADMIN: user.role === "admin" ? true : false,
  };
};

module.exports = context;

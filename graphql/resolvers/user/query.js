const userModal = require('../../../model/user');

module.exports = {
  singleUser: async (parent, { id }, { LOGGED_IN }) => {
    if (!LOGGED_IN) throw new Error('Unauthorised User');
    const user = await userModal.findOne({ _id: id }).exec();
    console.log(user);
    if (!user) throw new Error('Invalid user id provided');

    return { user };
  },
  users: async (parent, { page, limit, sort, order }, { LOGGED_IN }) => {
    if (!LOGGED_IN) throw new Error('Unauthorised User');

    page = page || 1;
    limitPerPage = limit || 5;
    sort = sort || 'name';
    order = order || -1;

    const users = await userModal
      .find({})
      .skip((page - 1) * limitPerPage)
      .limit(limitPerPage)
      .sort({ [sort]: order });

    return users;
  },
};

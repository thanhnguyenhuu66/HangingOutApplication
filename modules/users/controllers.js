const { User } = require('../../models');

module.exports = {
  getUsers: async (req, res) => {
    try {
      const users = await User
        .find()
        .select('_id title')
        .select('name')
        .lean();

      res.json({
        status: 200,
        massage: 'Success',
        payload: users,
      });
    } catch (err) {
      res.json({
        status: 500,
        message: 'ERROR',
        payload: err,
      });
    }
  },

  getUser: async (req, res) => {
    try {
      const { id } = req.params;

      const user = await User
        .findOne({ _id: id })
        .lean();

      if (!user) {
        res.json({
          status: 404,
          message: 'Not found',
          payload: null,
        });

        return;
      }

      res.json({
        status: 200,
        message: 'Success',
        payload: user,
      });
    } catch (err) {
      res.json({
        status: 500,
        message: 'ERROR',
        payload: err,
      });
    }
  },

  signupUser: async (req, res) => {
    const {
      name, password, email,
      addresses, phoneNumber,
      birthday, relationshipStatus,
    } = req.body;

    console.log('> Req.body', req.body);

    let user = new User({
      name,
      password,
      email,
      addresses,
      phoneNumber,
      birthday,
      relationshipStatus,
    });

    user = await user.save();

    res.json({
      status: 200,
      message: 'created new user',
      payload: user,
    });
  },
};

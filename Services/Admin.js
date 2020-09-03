const Admin = require('../Models/Admin');

exports.createAdmin = async (req) => {
  return await Admin.create({
    user: req.user,
    role: req.body.role,
  });
};

exports.getOne = async (id, byUser, popOptions) => {
  let params;

  if (byUser === true) {
    params = { user: id };
  } else {
    params = { _id: id };
  }
  let query = Admin.findOne(params);
  if (popOptions) query = query.populate(popOptions);
  return await query;
};

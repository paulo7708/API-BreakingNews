const User = require("../models/User");

const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findByService = (id) => User.findById(id);

module.exports = {
  createService,
  findAllService,
  findByService,
};

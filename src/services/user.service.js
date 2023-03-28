import User from "../models/User.js";

const createService = (body) => User.create(body);
/*create metodo do moongose */

const findAllService = () => User.find();
/*find metodo do moongose */

const findByIdService = (id) => User.findById(id);
/*findById metodo do moongose */

const updateService = (
  id,
  name,
  username,
  email,
  password,
  avatar,
  background
) =>
  User.findOneAndUpdate(
    { _id: id },
    { name, username, email, password, avatar, background }
  );

const userService = { createService, findAllService, findByIdService, updateService }

export default userService;

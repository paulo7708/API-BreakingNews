import userService from "../services/user.service.js";

const create = async (req, res) => {
  try {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name || !username || !email || !password || !avatar || !background) {
      res.status(400).send({ message: "Submit all fields for registration!" });
    }

    const user = await userService.createService(req.body);
    /* cadastra o user */

    if (!user) {
      return res.status(400).send({ message: "Error creating User" });
    }

    res.status(201).send({
      message: "User created successfully",
      user: {
        id: user._id,
        name,
        email,
        avatar,
        background,
      },
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findAll = async (req, res) => {
  try {
    const users = await userService.findAllService();

    if (users.lenght === 0) {
      return res.status(400).send({ message: "Não há usuarios cadastrados" });
    }
    res.send(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findById = async (req, res) => {
  try {
    /* if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Invalid Id" });
  } */
    /* alt + shift + a comment */
    const user = req.user;

    /* if (!user) {
    return res.status(400).send({ message: "user not found" });
  } */

    res.send(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const update = async (req, res) => {
  try {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name && !username && !email && !password && !avatar && !background) {
      res
        .status(400)
        .send({ message: "Submit at least one field for update!" });
    }

    const { id, user } = req;

    /* if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Invalid Id" });
  } */

    /* const user = await userService.findByIdService(id); */

    /* if (!user) {
    return res.status(400).send({ message: "user not found" });
  } */

    await userService.updateService(
      id,
      name,
      username,
      email,
      password,
      avatar,
      background
    );

    res.send({ message: "User successfully updated!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default { create, findAll, findById, update };

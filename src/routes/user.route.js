const route = require("express").Router(); //Router criar rotas
const userControler = require("../controllers/user.controller");

const { validId, validUser } = require("../middlewares/global.middlewares")

route.post("/", userControler.create);

route.get("/", userControler.findAll);

route.get("/:id", validId, validUser, userControler.findById);

route.patch("/:id", validId, validUser, userControler.update);

module.exports = route;

const route = require("express").Router(); //Router criar rotas
const userControler = require("../controllers/user.controller");

route.post("/", userControler.create);

module.exports = route;

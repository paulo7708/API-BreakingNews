const route = require("express").Router(); //Router criar rotas
const userControler = require("../controllers/user.controller");

route.get("/teste", userControler.soma);

module.exports = route;

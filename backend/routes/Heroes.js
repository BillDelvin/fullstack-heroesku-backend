const express = require("express");
const routes = express.Router();
const heroes = require("../controllers/Heroes");

routes.post("/post", heroes.create);
routes.get("/get", heroes.getAllData);
routes.get("/get/:heroesId", heroes.getAllData);
routes.put("/put/:heroesId", heroes.updateDataById);
routes.delete("/delete/:heroesId", heroes.deletDataById);

module.exports = routes;

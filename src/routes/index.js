const {Router} = require("express");
const helloRouter = Router();
const {jeff} = require("../controllers")

helloRouter.get("/jeff", jeff);

module.exports - helloRouter;
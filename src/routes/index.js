const {Router} = require("express");
const helloRouter = Router();
const {
    addFilm,
    findFilms,
    updateFilm,
    deleteFilm,
    addUser,
    findUser
} = require("../controllers")
const {testMiddle, hashPassword, decryptPassword} = require("../middleWare")

helloRouter.get("/film", findFilms);
helloRouter.post("/film", testMiddle, addFilm);
// helloRouter.put("/steve", updateSteve);
helloRouter.patch("/film/", updateFilm);
helloRouter.delete("/film/:name", deleteFilm);
helloRouter.post("/user", hashPassword, addUser);
helloRouter.post("/user/login", decryptPassword, findUser)

// const {
//     getFilm
// } = require("../controllers")

// helloRouter.get("/films", getFilm)


module.exports = helloRouter;
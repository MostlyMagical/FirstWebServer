const {Router} = require("express");
const helloRouter = Router();
const {
    addFilm,
    findFilms,
    updateFilm,
    deleteFilm,
} = require("../controllers")

helloRouter.get("/steve", findFilms);
helloRouter.post("/steve", addFilm);
// helloRouter.put("/steve", updateSteve);
helloRouter.patch("/steve/:name", updateFilm);
helloRouter.delete("/steve/:name", deleteFilm);

// const {
//     getFilm
// } = require("../controllers")

// helloRouter.get("/films", getFilm)


module.exports = helloRouter;
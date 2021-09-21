const Film = require("../models")

exports.helloWorld = (req, res) => {
    res.send("Garfield Says Hello World!")
}

// exports.getFilm = (req, res) => {
//     res.send("getFilm route hit")
// }

exports.addFilm = async (req, res) => {
    try{
        const film = new Film(req.body)
        await film.save()
        res.status(200).send({film: film, message: "successfully added film"})
    } catch (error) {
        res.status(500).send({err: error})
    }
};

exports.findFilms = async (req, res) => {
    try{
        const list = await Film.find({})
        res.status(200).send({allFilms: list})
    } catch(error) {
        res.status(500).send({err: error})
    }
}

exports.updateFilm = async (req, res) => {
    try{
        const update = await Film.updateOne({watched: req.params.name})
        res.status(200).send({film: update, watched: req.params.watched, message: "successfully updated film"})
    } catch(error) {
        res.status(500).send({err: error})
    }
} 

exports.deleteFilm = async (req, res) => {
    console.log(req.params, "This is the params")
    try{
        const destroy = await Film.findOneAndDelete({name: req.params.name})
        res.status(200).send({Film:destroy, name: req.params.name, message: "successfully deleted film"})
    } catch (error) {
        res.status(500).send({err: error})
    }
}
const {Film, User} = require("../models")

exports.helloWorld = (req, res) => {
    res.send("Garfield Says Hello World!")
}

// exports.getFilm = (req, res) => {
//     res.send("getFilm route hit")
// }

exports.addFilm = async (req, res) => {
    try{
        console.log(req.user)
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
        await Film.updateOne(
            {name: req.body.filter},
            {$Set: {watched: req.body.update}}
        )
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

exports.addUser = async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.findUser = async (req, res) => {
    try {
        res.status(200).send(req.user)
    } catch (error) {
        res.status(502).send(error)
    }
}
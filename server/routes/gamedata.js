const express = require("express");
const expressJwt = require("express-jwt");
const triviaUrl = `https://qriusity.com/v1/questions?page=${Math.floor(Math.random() * 17904)}&limit=1`
const axios = require("axios");
const config = require("../config");

const gameModel = require("../models/gamedata.js")

const authorize = expressJwt({ secret: config.secret })

const gameRoute = express.Router();

gameRoute.use(authorize);

gameRoute.route("/initialize")
    .post((req, res) => {
        let gameReady = new gameModel(req.body);
        // gameReady.playerIDs = req.user._id;
        gameReady.save((err, game) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(201).send({ message: "SUCCESSFUL GAME CREATION", game })
            }
        })
    })

gameRoute.route("/")
    .get((req, res)=>{
        gameModel.find(req.query, (err, games)=>{
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(201).send({message: "SUCCESSFUL GET REQUEST", games})
            }
        })
    })    

gameRoute.route("/join/:id")
    .put((req, res) => {
        gameModel.findByIdAndUpdate(req.params.id, {$push: {playerIDs: req.user._id}}, { new: true }, (err, game) => {
            if (err) {
                res.status(500).send(err)
            } else if (game === null) {
                res.status(404).send({message: "GAME NOT FOUND"})
            } else {
                res.status(200).send({message: "JOINED GAME", game})
            }
        })
    })

// gameRoute.route("/startTrivia")
//     .get(`https://qriusity.com/v1/questions?page=${Math.floor(Math.random() * 17904)}&limit=1`)
//         .then

// const getAll = function () {
//     axios.get(`https://qriusity.com/v1/questions?page=${Math.floor(Math.random() * 17904)}&limit=1`)
//         .then((response) => {
//             gameModel.currentQuestion = response.data
//         })
//         .catch(function (err) {
//             console.error(err);
//         });
// }

module.exports = gameRoute;






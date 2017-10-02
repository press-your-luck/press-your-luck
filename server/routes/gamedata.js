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
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send({message: "SUCCESSFUL GAME CREATION"})
        }
    })

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






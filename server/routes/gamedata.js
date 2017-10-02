const express = require("express");
const expressJwt = require("express-jwt");
const triviaUrl = `https://qriusity.com/v1/questions?page=${Math.floor(Math.random() * 17904)}&limit=1`
const axios = require("axios");

const gameModel = require("../models/gamedata.js")

const authorize = expressJwt({secret: config.secret})

const gameRoute = express.Router();

gameRoute.use(authorize);

gameRoute.route("/trivia")
    .get((req, res) => {
        gameModel.

    })




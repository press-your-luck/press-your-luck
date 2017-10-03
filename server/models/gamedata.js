const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    playerReady: [{
        type: Boolean,
        default: [false, false, false],
        required: true
    }],
    questionCount: {
        type: Number,
        default: 0
    },
    spins: [{
        type: Number,
        default: 0
    }],
    choice : [{
        type: Number,
        default: 1
    }],
    money: [{
        type: Number,
        default: 0
    }],
    currentQuestion: {
        type: Object
    },
    playerIDs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }]
})

module.exports = mongoose.model("game", gameSchema);
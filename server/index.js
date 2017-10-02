const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const morgon = require("morgan");
const config = require("./config");

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(urlencoded({extended = false}));

mongoose.connect(config.db, () => {
    console.log("CONNECTED ON " + config.db);
    app.listen(PORT, () => {
        console.log("CONNECTED ON PORT " + PORT);
    });
});
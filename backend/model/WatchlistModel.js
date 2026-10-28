const {model} = require("mongoose");
const mongoose = require("mongoose");

const WatchlistSchema = new mongoose.Schema({
    name: String,
    price: Number,
    percent: String,
    isDown: Boolean,
})

const WatchlistModel = new model("watchlist", WatchlistSchema);

module.exports = {WatchlistModel};
const {WatchlistModel} = require("../model/WatchlistModel");

module.exports.getAllWatchlists = async (req, res) => {
    let allWatchlists = await WatchlistModel.find({});
    res.json(allWatchlists);
}
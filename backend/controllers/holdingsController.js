const {HoldingsModel} = require("../model/HoldingsModel");

module.exports.getAllHoldings = async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
}
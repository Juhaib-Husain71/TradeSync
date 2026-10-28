const {PositionsModel} = require("../model/PositionsModel");

module.exports.getAllPositions = async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
}

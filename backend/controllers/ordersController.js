const {OrdersModel} = require("../model/OrdersModel");

module.exports.getAllOrders = async (req, res) => {
    let allOrders = await OrdersModel.find({});
    res.json(allOrders);
}

module.exports.createOrder = async (req, res) => {
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });

    newOrder.save();
    // console.log("order confirmed!");

    res.status(200).json({ message: "Order created successfully", success: true });

}
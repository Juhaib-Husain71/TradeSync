const joi = require("joi");

module.exports.signupSchema = joi.object({
    username: joi.string().min(3).max(30).required(),
    email: joi.string().email().required(),
    password: joi.string().min(4).required(),
});

module.exports.orderSchema = joi.object({
    name: joi.string().required(),
    qty: joi.number().min(1).required(),
    price: joi.number().min(1).required(),
    mode: joi.string().valid("BUY", "SELL").required(),
});
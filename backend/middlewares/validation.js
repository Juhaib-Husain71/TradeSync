const ExpressError = require("../util/ExpressError");
const {signupSchema, orderSchema} = require("../schema");

module.exports.validateSignup = (req, res, next) => {
    const {error} = signupSchema.validate(req.body);

    if(error){
        return next(new ExpressError(400, error.details[0].message));
    }

    next();
}

module.exports.validateOrder = (req, res, next) => {
    const {error} = orderSchema.validate(req.body);

    if(error){
        return next(new ExpressError(400, error.details[0].message));
    }

    next();
}
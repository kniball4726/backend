const {validationResults} = require("express-validator");

const validateResults = (req, res, next)=>{
    try {
        validationResults(req).throw()
        return next()
    } catch (error) {
        res.status(403)
        res.send({errors: error.array()})
    }
}

module.exports = validateResults;

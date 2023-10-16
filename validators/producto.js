const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator')

const validatorAgregarProducto = [
    check('codigo')
    .exists()
    .notEmpty(),
    check('producto')
    .exists()
    .notEmpty(),
    (req, res, next) => validateResults(req, res, next)
];

module.exports = {
    validatorAgregarProducto
}
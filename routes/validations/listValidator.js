const { body, validationResult } = require('express-validator');

const listValidator = {
    createListValidation: [
      body('name', 'Název seznamu je povinný a musí být øetìzec.').notEmpty().isString(),
    ],

    updateListValidation: [
      body('name', 'Název seznamu musí být øetìzec.').optional().isString(),
    ],

    addItemValidation: [
      body('items.*.name', 'Název položky je povinný a musí být øetìzec.').notEmpty().isString(),
      body('items.*.quantity', 'Množství musí být èíslo.').notEmpty().isInt(),
    ],

    editMembersValidation: [
      body('members', 'Èlenové musí být pole.').isArray(),
      body('members.*', 'Každý èlen musí mít platné ID.').isMongoId(),
    ],

    changeItemStatusValidation: [
      body('isResolved', 'Stav isResolved musí být boolean.').isBoolean(),
    ],

    validate: (req, res, next) => {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }

        const extractedErrors = [];
        errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));
        return res.status(422).json({
            errors: extractedErrors
        });
    }
};

module.exports = listValidator;
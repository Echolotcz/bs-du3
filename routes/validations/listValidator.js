const { body, validationResult } = require('express-validator');

const listValidator = {
    createListValidation: [
      body('name', 'N�zev seznamu je povinn� a mus� b�t �et�zec.').notEmpty().isString(),
    ],

    updateListValidation: [
      body('name', 'N�zev seznamu mus� b�t �et�zec.').optional().isString(),
    ],

    addItemValidation: [
      body('items.*.name', 'N�zev polo�ky je povinn� a mus� b�t �et�zec.').notEmpty().isString(),
      body('items.*.quantity', 'Mno�stv� mus� b�t ��slo.').notEmpty().isInt(),
    ],

    editMembersValidation: [
      body('members', '�lenov� mus� b�t pole.').isArray(),
      body('members.*', 'Ka�d� �len mus� m�t platn� ID.').isMongoId(),
    ],

    changeItemStatusValidation: [
      body('isResolved', 'Stav isResolved mus� b�t boolean.').isBoolean(),
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
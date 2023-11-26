const express = require('express');
const router = express.Router();
const passport = require('passport');
const {isAuthenticated, isMember, isOwner} = require('../middleware/authenticator.js');
const listController = require('../controllers/listController');
const listValidator = require('./validations/listValidator');

//oproti �loze 1 jsou zam�n�ny POSTy a PUTy tak jak dle m�ho n�zoru maj� b�t. V �loze 1 jsem to m�l obr�cen�.

router.get('/list', isAuthenticated, listController.getAllLists);

router.get('/list/:listId', isMember, listController.getListById);
router.post('/list/new', isAuthenticated, listValidator.createListValidation, listValidator.validate, listController.createNewList);
router.put('/list/edit/:listId', isOwner, listValidator.updateListValidation, listValidator.validate, listController.editList);
router.put('/list/archive/:listId', isOwner, listController.archiveList);

router.post('/list/:listId/additem', isMember, listValidator.addItemValidation, listValidator.validate, listController.addItemToList);
router.delete('/list/:listId/removeitem/:itemId', isMember, listController.removeItemFromList);
router.put('/list/:listId/editmembers', isOwner, listValidator.editMembersValidation, listValidator.validate, listController.editListMembers);
router.put('/list/:listId/item/:itemId/changestatus', isMember, listValidator.changeItemStatusValidation, listValidator.validate, listController.changeItemStatus);

module.exports = router;
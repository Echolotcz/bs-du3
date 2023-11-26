const List = require('../models/list');

async function isMember(req, res, next) {
    const list = await getList(req.params.listId, res);
    if (!list) return;
    if (
        req.isAuthenticated()
        && (list.members.includes(req.user.id) || list.ownerId == req.user.id))
    {
        return next();
    } else {
        res.status(403).send('Pøístup odepøen');
    }
}

async function isOwner(req, res, next) {
    const list = await getList(req.params.listId, res);

    if (!list) return;
    if (req.isAuthenticated() && list.ownerId == req.user.id) {
        return next();
    } else {
        res.status(403).send('Pøístup odepøen');
    }
}

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.redirect('/');
}

async function getList(listId, res) {
    try {
        const list = await List.findById(listId);
        if (!list) {
            res.status(404).send('List not found');
            return null;
        }
        return list;
    } catch (error) {
        res.status(500).send('Internal server error');
        return null;
    }
}
    
module.exports = { isAuthenticated, isMember, isOwner };

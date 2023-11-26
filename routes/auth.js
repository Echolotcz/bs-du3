const express = require('express');
const router = express.Router();
const passport = require('passport');

function postAuthRedirect(req, res) {
    res.redirect('/list');
}

function mockAuthMiddleware(req, res, next) {
    return passport.authenticate('mockStrategy')(req, res, next);
}

function mockAuthCallbackMiddleware(req, res, next) {
    return next();
}

router.get('/login', mockAuthMiddleware, postAuthRedirect);

router.get('/login/callback', mockAuthCallbackMiddleware, postAuthRedirect);
module.exports = router;
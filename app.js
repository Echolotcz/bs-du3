const express = require('express');
const session = require('express-session');
const listRoutes = require('./routes/list.js');
const authRoutes = require('./routes/auth.js');
const passport = require('passport');
require('./middleware/passport.js')(passport);

const app = express();

app.use(express.json());

app.use(session({
    secret: 'tajný_klíč',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    next();
});

app.get('/', (req, res) => {
    res.send('Homepage, Use /login to login');
});

app.use(listRoutes);
app.use(authRoutes);

module.exports = app;
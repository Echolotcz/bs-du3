const passportCustom = require('passport-custom');
const CustomStrategy = passportCustom.Strategy;


module.exports = function (passport) {
     passport.use('mockStrategy', new CustomStrategy(
        async (req, done) => {
            try {
                let user =  { id: '1', email: 'some@user.cz', name: "Franta Omáèka"};

                done(null, user);
            } catch (error) {
                done(error, null);
            }
        }
    ));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        const user =  { id: '1', email: 'some@user.cz', name: "Franta Omáèka"};
        done(null, user);;
    });
};
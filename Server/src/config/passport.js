const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../db/models');


const initalizePassport = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());
  app.use((req, res, next) => {
    return next();
  })

  passport.use(new LocalStrategy((username, password, done) => {
    db.users
    .findOne({
      where: {
        username,
        password
      },

    })
    .then((user) => {
      if(!user) {
        return done(null, false);
      }
      return done(null, user);
    })
    .catch(err => done(err));
  }));

  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => done(null, user));
};

module.exports = initalizePassport;
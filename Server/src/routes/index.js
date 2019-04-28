const auth = require('./controllers/auth');
const test = require('./controllers/test');

const initializeRoutes = (app) => {

  // Routes
  app.get('/', (req,res) => res.send('NodeJs Server'));
  app.post('/register', auth.register);
  app.post('/login', auth.login);
  app.use('/logout', auth.logout);

  // Authorization test route
  app.use('/test1', test.auth);
  app.use('/test2', test.unauth);

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    next('404');
  });
};

module.exports = initializeRoutes;
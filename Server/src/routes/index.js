const createError = require('http-errors');
const register =require('./controllers/register');

const initializeRoutes = (app) => {

  // Routes
  app.use(register);

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    next(createError(404));
  });

  //error handler
  app.use((err, req, res) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500).send();
  });
};

module.exports = initializeRoutes;
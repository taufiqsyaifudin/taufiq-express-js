const express       = require('express');
const path          = require('path');
const app           = express();

const appRouting    = require('./routers/app-route');

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use('/assets',express.static(path.join(__dirname, 'assets')));

app.use('/', appRouting);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`app running in ${process.env.NODE_ENV} on ${PORT}`)
);

module.exports = app;
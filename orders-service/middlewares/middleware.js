const bodyParser = require('body-parser');
const cors = require('cors');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const path = require('path');
const logger = require('../logging/logger');


// setup global middleware here
module.exports = (app) => {
  app.use(cors());
  app.use(favicon(path.join(__dirname, '../../src/favicon.ico')));
  app.use(require('morgan')({ "stream": logger.stream }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
};

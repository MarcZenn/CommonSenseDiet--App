/*----------------------------------------------------------------------------
         Express development server with Browser-Sync load capabilities.

                            - using ES5 syntax -

 ----------------------------------------------------------------------------
                      SERVE ASSETS LOCALLY W/ Browser-Sync

  Run the command below in your terminal to hotload and serve assets via gulp and Browser-Sync

  $ npm start

--------------------------------------------------------------------------- */

var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var port = process.env.PORT || 8081;
var cors = require('cors');
var path = require('path');
var publicRoutes = require('./http/routes/web.js');

// require database data modeling via mongoose
var mongoose = require('mongoose');

// Express Session allows us to use Cookies to keep track of
// a user across multiple pages. We also need to be able to load
// those cookies using the cookie parser
var session = require('express-session');
var cookieParser = require('cookie-parser');

// Flash allows us to store quick one-time-use messages
// between views that are removed once they are used.
// Useful for error messages.
var flash = require('connect-flash');

// Use Express and set it up
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
// Parse requests to JSON
app.use(bodyParser.json({type: '*/*', limit: '50mb'}));
// set Jade as the view engine
app.set('view engine', 'jade');
// tell server where to find our views
app.set('views', __dirname + '/.././src/app/views');
// make sure bower components are installed.
app.use('/underscore', express.static(path.resolve('.././node_modules/underscore')));
// tell our server where to find static assets depending on the environment.
process.env.NODE_ENV == 'production' ? app.use(express.static(path.join(__dirname + '/../..'))) : app.use(express.static(path.join(__dirname + '/.././dist')));
// enable cors
app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "allowedHeaders": ["Origin, X-Requested-With, Content-Type, Accept, Authorization"],
  "preflightContinue": false
}));

// Pull in our public routes
app.use('/api', publicRoutes);

// Listen
app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", port, port);
  }
});
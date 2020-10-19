const express = require('express');
const parseBody = require('body-parser');
const methodReWrite = require('method-override');
const timeout = require('connect-timeout');
const login = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();

app.use("/static", express.static("public"));
app.use(timeout(4000));
app.use(stopOnTimedout);

function stopOnTimedout(req, res, next) {
    if (!req.timedout) next();
}

//Sets up morgan for logging
// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

// setup the logger (writes to the file)
app.use(login('combined', { stream: accessLogStream }));

//This sets up body-parser
// parse application/x-www-form-urlencoded 
app.use(parseBody.urlencoded({ extended: false }));
app.use(stopOnTimedout);

// override with POST having ?_method=DELETE
app.use(methodReWrite('_method'));
app.use(stopOnTimedout);

//sets up express-handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Setting up the routes
const routes = require('./controllers/burgersControllers.js');

app.use('/', routes);
app.use('/update', routes);
app.use('/create', routes);
app.use(stopOnTimedout);

var port = process.env.PORT || 8080;
app.listen(port, () => console.log("Listening on port %s", port));
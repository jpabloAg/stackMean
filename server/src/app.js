const express = require('express');
const morgan = require('morgan');

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// Routes
app.use(require('./routes/naturalPerson.routes'));
app.use(require('./routes/company.routes'));
app.use(require('./routes/savingsAccount.routes'));
app.use(require('./routes/currentAccount.routes'));
app.use(require('./routes/branchOffice.routes'));
app.use(require('./routes/operation.routes'));
module.exports = app;
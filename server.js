const express = require('express');
const apiRoute = require('./routes/apiRoute.js');
const indexRoute = require('./routes/indexRoute.js');

const PORT = process.env.port || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded request data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoute);
app.use('/', indexRoute);

app.listen(PORT, () =>
    console.log(`App listening on port ${PORT}`)
); 
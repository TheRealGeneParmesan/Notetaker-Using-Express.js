const fb = require('express').Router();
const { v4: uuidv4 } = require('uuid');

fb.get('/api/notes', (req, res) =>
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const util = require('util');
const readFromFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

// Should read the db.json file and return saved notes as json
router.get('/notes', (req, res) =>
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

// Receive a new note and save the request body and add it to the json file. 
router.post('/notes', (req, res) => {
    // Destructuring assignment for the items in req.body from the index.js file
    const { title, text } = req.body;

    // If all the required properties are present
    if (title && text) {
        // Variable for the object we will save
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };

        readFromFile('./db/db.json').then((data) => {
            console.log(data)
            let parsedInfo = JSON.parse(data)
            console.log(parsedInfo)
        })

        const response = {
            status: 'success',
            body: newNote,
        };

        res.json(response);
    } else {
        res.json('Error in posting note');
    }
});

module.exports = router;
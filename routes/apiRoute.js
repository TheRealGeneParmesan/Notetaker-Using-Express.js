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

// Receives a new note and save the request body and add it to the json file. 
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

        // Reads the db.json file and then parses the user data into the parsedNotes array. We then push the new note oject into the array. 

        readFromFile('./db/db.json').then((data) => {
            let parsedNotes = JSON.parse(data)
            console.log(parsedNotes)
            parsedNotes.push(newNote);
            console.log(newNote);

            // Writes the updated parsedNotes array to the db.json file. 

            writeFile('./db/db.json', JSON.stringify(parsedNotes)).then((results) => {
                const response = {
                    status: 'success',
                    body: newNote,
                };
                res.json(response);
            });
        });
    } else {
        res.json('Error in posting note');
    }
});


module.exports = router;
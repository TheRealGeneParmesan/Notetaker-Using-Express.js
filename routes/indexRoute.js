const path = require('path');
const router = require('express').Router();
// const notesRouter = require('../server')



// /notes sends us to the notes.html file. 
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// * matches any URL that hasn't been defined and sends us to the home page 
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
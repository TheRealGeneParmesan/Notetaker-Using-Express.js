const path = require('path');
// const notesRouter = require('../server')

// * matches any URL that hasn't been defined and sends us to the home page 
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// /notes sends us to the notes.html file. 
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

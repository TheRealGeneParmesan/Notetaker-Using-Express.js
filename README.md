## Jeremy's Note Taker Extravaganza 
    
   An application called Note Taker that allows a user to write and save notes using Express.js. 
   https://express-js-notetaker.herokuapp.com/

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

You must install the Express and UUID packages.


## Usage

- For this project I created HTML routes using the .GET method to return the notes.html file and the index.html file. 
- I created GET routes for api/notes that read the db.json file and return the saved notes to db.json. 
- POST /api/notes receives a new note to save on the request body and adds it to the db.json file, and then returns that new note to the client. 
- When the user clicks the save button after adding a title to their note and text to their body, they are able to click the save button in the top right corner and it will save it.
- Lastly, I added a DELETE method, which receives a query parameter that contains the id of a note to delete. The notes are then rewritten to the db.json file.
- In order to delete the note, the user just has to click the delete button next to the note. 

![image](https://user-images.githubusercontent.com/119083185/224119217-16e0624f-2f91-47b1-b130-6cd73314084f.png)

## Tests

The functionality of saving and deleting notes was tested locally and via web application. 

## Questions

If you have additional questions you can contact me at Geneparmigiano@gmail.com. Also if you want to check out a cool github page you can find me here: https://github.com/TheRealGeneParmesan.

## License

![MIT](https://img.shields.io/badge/license-MIT-brightgreen)

This project is licensed under the MIT license.

const fs = require('fs');

var originalNote = {
    title: 'some title', 
    body: 'some body'
}

let notesOriginalString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', notesOriginalString);

let notesString = fs.readFileSync('notes.json');
notes = JSON.parse(notesString);

console.log(typeof notes);
console.log(notes.title);



console.log('starting notes');
const fs = require('fs');

let fetchNotes = () => {
     try{
        let existingNotes = fs.readFileSync('notes-json.json');
        return JSON.parse(existingNotes);
    }
    catch(e){
        return []
    }
}

let saveNotes = (notes) => {
    fs.writeFileSync('notes-json.json', JSON.stringify(notes))
}

let addNote = (title, body) => {
    notes = fetchNotes();
    let note = {
        title, 
        body
    }

    let duplicates = notes.filter(note => note.title === title);
    if(duplicates.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
}


let getAll = () => {
    console.log('return all notes')
}


let getNote = (title) =>{
    let notes = fetchNotes();
    let filteredNotes = notes.filter(note => note.title === title);
    return filteredNotes[0];
}

let removeNote = (title) =>{
    let notes = fetchNotes();
    let filteredNotes = notes.filter(note => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
}


let logNote = (note) =>{
    console.log('--');
    console.log(`Note title: ${note.title}`);
    console.log(`Note body: ${note.body}`);
}

module.exports = {
    addNote, 
    getAll, 
    getNote, 
    removeNote, 
    logNote
}



const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

let bodyOptions = { description: 'body of the note',  demand: true, alias : 'b'}; 
let titleOptions = { description: 'Title of the note', demand: true, alias: 't'};

const argv = yargs
                .command('add', 'add a note', { title: titleOptions,  body: bodyOptions})
                .command('list', 'list all notes')
                .command('read', 'reads single note', { title: titleOptions })
                .command('remove', 'removes single note', { title: titleOptions })
                .help()
                .argv;
const command = argv._[0]; //process.argv[2];

if (command === 'list') {         // get all
    let allNotes = notes.getAll();
    console.log(`Returned ${allNotes.length} note(s)`);
    allNotes.forEach((note) => notes.logNote(note));
} 
else if (command === 'add') {   //add note
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('added note successfully');
        notes.logNote(note);
    }
    else {
        console.log('note was not added');
    }
}
else if (command === 'read') {    //read note
    let note = notes.getNote(argv.title);
    if (note) {
        console.log('note found');
        notes.logNote(note);

    }
    else {
        console.log('note is not there');
    }
} 
else if (command === 'remove') { //remove
    let notesRemoved = notes.removeNote(argv.title);
    let message = notesRemoved ? 'Note was removed' : 'Note wasn\'t removed';
    console.log(message);
} else {
    console.log('command unrecognized');
}


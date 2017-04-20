console.log('starting app.');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
const command = argv._[0]; //process.argv[2];


console.log(`command: ${command}`);
if (command === 'list') {         // get all
    notes.getAll();
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
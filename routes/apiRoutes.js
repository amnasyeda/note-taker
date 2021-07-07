const path = require('path');
const notesFile = require('../db/db.json');
const router = require('express').Router();
const fs = require('fs');

router.get('/api/notes', (req, res) => {
    const notes = JSON.parse(
      fs.readFileSync(path.join(__dirname, '../db/db.json'))
     );
    res.json(notes);
  });

  router.post('/api/notes', (req, res) => {
    const notes = JSON.parse(
      fs.readFileSync(path.join(__dirname, '../db/db.json'))
    );
    const newNote = req.body;
  
    // To create a new note 
    newNote.id = notesFile.length.toString();
    notes.push(newNote);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify(notes)
    );
    res.send('A new note has been created!');
  });

    // To delete a note
  router.delete('/api/notes/:id', (req, res) => {
    console.log(req.params.id);

    return fs.readFile(
        path.join(__dirname, '../db/db.json'),
        'utf8',
        (err, data) => {
          console.log('content of file', data);
          if (err) throw err;
          const allNotes = JSON.parse(data);
          const delNote = allNotes.filter(
            (rmvNote) => rmvNote.id !== req.params.id
          );
          console.log('Note has been deleted!', delNote);
    
          fs.writeFileSync(
            path.join(__dirname, '../db/db.json'),
            JSON.stringify(delNote)
          );
          res.json(delNote);
        }
      );
    });

  module.exports = router;
  
const path = require('path');
const db = require('../db/db.json');
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
          console.log('inside the read', data);
          if (err) throw err;
          const createNotes = JSON.parse(data);
          const deleteNote = createNotes.filter(
            (dltNote) => dltNote.id !== req.params.id
          );
          console.log('********', deleteNote);
    
          fs.writeFileSync(
            path.join(__dirname, '../db/db.json'),
            JSON.stringify(deleteNote)
          );
          res.json(deleteNote);
        }
      );
    });

  module.exports = router;
  
const path = require('path');
const router = require('express').Router();
const notesRoutes = require('./noteRoutes');
const { 
    saveNote
 } = require('../../public/assets/js/index')
const { notes } = require('../../db/db');

router.use(notesRoutes);

router.get('/notes', (req, res) => {
    let results = notes;
    if (results) {
        res.json(results);
    } else {
        res.send(404);
    }
  });

router.post('/notes', (req, res) => {
    const notes = saveNote(notes);
    if (notes) {
        res.json(notes);
    } else {
        res.send(404);
    }
  });

module.exports = router;
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001; 
const path = require('path');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', apiRoutes);
app.use('/', htmlRoutes);
app.listen(3001, () => {
  console.log(`API server now on port 3001!`);
}); 
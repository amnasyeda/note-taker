const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const path = require("path");

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/routes/apiRoutes');
app.use('/routes/htmlRoutes');
app.listen(PORT, function () {
    console.log(`API server now on port ${PORT}!`);
  });
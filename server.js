const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express(); 

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {  console.log(`API server now on port ${PORT}!`);});

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 8000;

require('./config/mongoose.config'); 

app.use(cors(), express.json(), express.urlencoded({extended : true}));

const AllMyauthorRoutes = require('./routes/author.routes');
AllMyauthorRoutes(app); 

app.listen(port, () => console.log(`Listening on port: ${port}`) );
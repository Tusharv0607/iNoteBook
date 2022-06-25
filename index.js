const connect = require('./db');
const express = require('express');
const cors = require('cors');
require("dotenv").config();
<<<<<<< HEAD
connect(); 
=======
connect();
>>>>>>> f13f3cc3d4994f90742c2ec42b61de4a4769cf35

const app = express();
const port = 80;

app.use(cors());
app.use(express.json());

app.get('/', function (req, res) {
 res.send("Hello World")
});
<<<<<<< HEAD
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(process.env.PORT || port, () => {
  console.log(`iNotebook listening on port`)
});
=======

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(process.env.PORT || 80, () => {
  console.log(`iNotebook listening on port)
});
>>>>>>> f13f3cc3d4994f90742c2ec42b61de4a4769cf35

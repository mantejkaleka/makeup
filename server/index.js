const mongoose = require('mongoose');
const dotenv = require('dotenv')
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
dotenv.config();


console.log('connected to mongodb');
mongoose.connect('mongodb://localhost/makeup',{ useNewUrlParser: true })
.then(() => console.log('connected to MongoDB...'))
.catch(err => console.error('could not connect to MongoDB...', err));

app.use(bodyParser.json());
app.use(cors({ origin: true, cedentials: true }));
// app.use('/api/collection', collection);

const port= process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`))

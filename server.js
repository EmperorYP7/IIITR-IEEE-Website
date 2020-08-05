require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = 4000;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to MongoDB!'));

app.use(fileUpload());
app.use(express.json());
app.use(cors());

const adminRouter = require('./routes/Admin');
app.use('/admin', adminRouter);

const apiRouter = require('./routes/data/EventData');
app.use('/api/eventdata', apiRouter);

app.listen(port, () => {
    console.log(`Server started on port : ${port}`)
});

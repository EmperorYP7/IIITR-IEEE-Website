require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = 5000 || process.env.PORT;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to MongoDB!'));

app.use(fileUpload());
app.use(express.json());
app.use(cors());

const adminRouter = require('./routes/Admin');
app.use('/admin', adminRouter);

const eventRouter = require('./routes/data/EventRoute');
app.use('/api/eventdata', eventRouter);

const memberRouter = require('./routes/data/MemberRoute');
app.use('/api/memberdata', memberRouter);

app.listen(port, () => {
    console.log(`Server started on port : ${port}`)
});

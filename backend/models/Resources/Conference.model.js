const mongoose = require('mongoose');

const conferenceSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        trim: true
    },
    link: {
        type: String,
        trim: true
    }
    
});
  
module.exports = new mongoose.model('Conference', conferenceSchema);

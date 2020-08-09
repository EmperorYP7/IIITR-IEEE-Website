const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        trim: true
    },
    designation: {
        required: false,
        type: String,
        trim: true
    },
    shortDescription: {
        required: true,
        type: String,
        trim: true
    },
    linkedinLink: {
        required: true,
        type: String,
        trim: true
    },
    githubLink: {
        required: true,
        type: String,
        trim: true
    },
    facebookLink: {
        required: true,
        type: String,
        trim: true
    },
    emailid: {
        required: true,
        type: String,
        trim: true
    }
});
  
module.exports = new mongoose.model('Member', memberSchema);

const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        trim: true
    },
    order: {
        type: Number,
        required: true,
        default: 0
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
    },
    imgPath: {
        type: String,
        required: true,
        trim: true
    },
    imgName: {
        required: true,
        type: String,
        trim: true
    }
});
  
module.exports = new mongoose.model('Member', memberSchema);

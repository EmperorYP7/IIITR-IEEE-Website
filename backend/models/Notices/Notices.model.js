const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        required: true
    },
    shortDescription: {
        required: true,
        type: String,
        trim: true
    },
    pdfPath: {
        type: String,
        required: true,
        trim: true
    },
    pdfName: {
        type: String,
        required: true,
        trim: true
    }
});
  
module.exports = new mongoose.model('Notice', noticeSchema);

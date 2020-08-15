const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
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
    shortDescription: {
        required: true,
        type: String,
        trim: true
    },
    pdfPath: {
        type: String,
        required: true,
        trim: true
    }
});
  
module.exports = new mongoose.model('Resource', resourceSchema);

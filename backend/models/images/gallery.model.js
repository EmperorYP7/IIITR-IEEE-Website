const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    album: {
        type: String,
        required: true,
        trim: true
    },
    imgPath: {
        type: String,
        required: true,
        trim: true
    }
});
  
module.exports = new mongoose.model('Gallery', gallerySchema);

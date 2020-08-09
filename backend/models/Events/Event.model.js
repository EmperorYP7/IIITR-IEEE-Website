const mongoose = require('mongoose');
const slugify = require('slugify');

const eventSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String,
        trim: true
    },
    description: {
        required: false,
        type: String,
        trim: true
    },
    shortDescription: {
        required: true,
        type: String,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    eventDate: {
        type: Date,
        required: true
    },
    location : {
        type: String,
        required: true,
        trim: true
    },
    gcalender : {
        type: String,
        trim: true
    },
    gmaps : {
        type: String,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    }
});

eventSchema.pre('validate', function (next) {
    if (this.title) {
        this.slug = slugify(this.title, { lower: true, strict: true })
    }
    next();
})
  
module.exports = new mongoose.model('Event', eventSchema);

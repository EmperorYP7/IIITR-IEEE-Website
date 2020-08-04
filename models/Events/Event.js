const mongoose = require('mongoose');
const slugify = require('slugify');

const eventSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        required: false,
        type: String
    },
    shortDescription: {
        required: true,
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    eventDate: {
        type: Date,
        required: true
    },
    gCalenderlink: {
        type: String,
        required: false
    },
    location : {
        type: String,
        required: true
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

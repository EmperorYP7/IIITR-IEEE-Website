const mongoose = require('mongoose');
// const slugify = require('slugify');

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
    // slug: {
    //     type: String,
    //     required: true,
    //     unique: true
    // }
});

// eventSchema.pre('validate', function (next) {
//     if (this.title) {
//         this.slug = slugify(this.title, { lower: true, strict: true })
//     }
//     next();
// })
  
module.exports = new mongoose.model('Member', memberSchema);

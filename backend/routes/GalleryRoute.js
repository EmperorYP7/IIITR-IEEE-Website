const express = require('express');
const router = express.Router();
const Gallery = require('../models/images/gallery.model');

router.get('/', async (req, res) => {
    const images = await Gallery.find().sort({ album: 1 });
    res.json(images);
});


router.delete('/:id', async (req, res) => {
    await Gallery.findByIdAndDelete(req.params.id)
                .then(response => res.json("Success"))
                .catch(err => res.json(err));
});


router.post('/', async (req, res) =>{
    const newGallery = new Gallery();
    newGallery.album = req.body.album;
    newGallery.imgPath = req.body.imgPath;
    newGallery.imgName = req.body.imgName;
    newGallery.save()
        .then(() => res.json('Image added!'))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;
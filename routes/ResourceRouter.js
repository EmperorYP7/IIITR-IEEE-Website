const express = require('express');
const router = express.Router();
const Resource = require('../models/Resources/Resource.model');

router.get('/', async (req, res) => {
    const resources = await Resource.find().sort({ createdAt: 'desc' });
    res.json(resources);
});


router.delete('/:id', async (req, res) => {
    await Resource.findByIdAndDelete(req.params.id)
                .then(response => res.json("Success"))
                .catch(err => res.json(err));
});

router.post('/', async (req, res) =>{
    const newResource = new Resource();

    newResource.name = req.body.name;
    newResource.order = req.body.order;
    newResource.shortDescription = req.body.shortDescription;
    newResource.pdfPath = req.body.pdfPath;
    newResource.pdfName = req.body.pdfName;

    newResource.save()
        .then(() => res.json('Resource added!'))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;

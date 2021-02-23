const express = require('express');
const router = express.Router();
const Notice = require('../models/Notices/Notices.model');

router.get('/', async (req, res) => {
    const notices = await Notice.find().sort({ createdAt: 'desc' });
    res.json(notices);
});


router.delete('/:id', async (req, res) => {
    await Notice.findByIdAndDelete(req.params.id)
                .then(response => res.json("Success"))
                .catch(err => res.json(err));
});

router.post('/', async (req, res) =>{
    const newNotice = new Notice();

    newNotice.name = req.body.name;
    newNotice.shortDescription = req.body.shortDescription;
    newNotice.pdfPath = req.body.pdfPath;
    newNotice.pdfName = req.body.pdfName;

    newNotice.save()
        .then(() => res.json('Notice added!'))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;

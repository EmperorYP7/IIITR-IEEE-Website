const express = require('express');
const router = express.Router();
const Conference = require('../models/Resources/Conference.model');

router.get('/', async (req, res) => {
    const conference = await Conference.find().sort({ createdAt: 'desc' });
    res.json(conference);
});


router.delete('/:id', async (req, res) => {
    await Conference.findByIdAndDelete(req.params.id)
                .then(response => res.json("Success"))
                .catch(err => res.json(err));
});

router.post('/', async (req, res) =>{
    const newConference = new Conference();

    newConference.name = req.body.name;
    newConference.link = req.body.link;

    newConference.save()
        .then(() => res.json('Conference added!'))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;

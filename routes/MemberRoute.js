const express = require('express');
const router = express.Router();
const Member = require('../models/Members/Member.model');

router.get('/', async (req, res) => {
    const members = await Member.find().sort({ order: 1 });
    res.json(members);
});


router.delete('/:id', async (req, res) => {
    await Member.findByIdAndDelete(req.params.id)
                .then(response => res.json("Success"))
                .catch(err => res.json(err));
});


router.post('/', async (req, res) =>{
    const newMember = new Member();

    newMember.name = req.body.name;
    newMember.order = req.body.order;
    newMember.designation = req.body.designation;
    newMember.shortDescription = req.body.shortDescription;
    newMember.linkedinLink = req.body.linkedinLink;
    newMember.githubLink = req.body.githubLink;
    newMember.emailid = req.body.emailid;
    newMember.facebookLink = req.body.facebookLink;
    newMember.imgPath = req.body.imgPath;
    newMember.imgName = req.body.imgName;

    newMember.save()
        .then(() => res.json('Member added!'))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;
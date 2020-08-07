const express = require('express');
const router = express.Router();
const Member = require('../../models/Members/Member.model');

router.get('/', async (req, res) => {
    const members = await Member.find();
    res.json(members);
});

// router.get('/new', (req, res) => {
//     const member = new Member();
//     res.json(member);
// });

router.delete('/:id', async (req, res) => {
    await Member.findByIdAndDelete(req.params.id)
                .then(response => res.json("Success"))
                .catch(err => res.json(err));
});

// router.put('/:slug', async (req, res, next) => {
//     req.event = await Member.findOne({ slug: req.params.slug });
//     next();
// }, eventCreate());

// router.get('/:slug', async (req, res) => {
//     const event = await Event.findOne({ slug: req.params.slug })
//                             .then(response => { res.json(response) })
//                             .catch(error => { res.json("Error")});
// });

router.post('/', async (req, res) =>{
    const newMember = new Member();

    newMember.name = req.body.name;
    newMember.designation = req.body.designation;
    newMember.shortDescription = req.body.shortDescription;

    newMember.save()
        .then(() => res.json('Member added!'))
        .catch((err => res.status(400).json('Error: '+ err)));
});

// function eventCreate()
// {
//     return async (req, res) => {
//         let event = req.event;
//         event.title = req.body.title;
//         event.description = req.body.description;
//         event.shortDescription = req.body.shortDescription;
//         event.eventDate = Date.parse(req.body.eventDate);
//         event.location = req.body.location;
//         await event.save()
//             .then(() =>  res.json(event))
//             .catch(err => {
//                     console.log(err);
//                     res.json(err);
//                 });
//     };
// }

module.exports = router;
const express = require('express');
const router = express.Router();
const Event = require('../../models/Events/Event.model');

router.get('/', async (req, res) => {
    const events = await Event.find().sort({ createdAt: 'desc' });
    res.json(events);
});

router.get('/new', (req, res) => {
    const event = new Event();
    res.json(event);
});

router.delete('/:id', async (req, res) => {
    await Event.findByIdAndDelete(req.params.id);
    res.send({ msg: 'Successful!'});
});

router.put('/:slug', async (req, res, next) => {
    req.event = await Event.findOne({ slug: req.params.slug });
    next();
}, eventCreate());

router.post('/', async (req, res) =>{
    const title = req.body.title;
    const description = req.body.description;
    const shortDescription = req.body.shortDescription;
    const eventDate = Date.parse(req.body.eventDate);
    const location = req.body.location;

    const newEvent = new Event({
        title,
        description,
        shortDescription,
        eventDate,
        location
    })

    newEvent.save()
        .then(() => res.json('Event added!'))
        .catch((err => res.status(400).json('Error: '+ err)));
});

function eventCreate()
{
    return async (req, res) => {
        let event = req.event;
        event.title = req.body.title;
        event.description = req.body.description;
        event.shortDescription = req.body.shortDescription;
        event.eventDate = Date.parse(req.body.eventDate);
        event.location = req.body.location;
        try {
            event = await event.save();
            res.send({slug: event.slug});
        } catch(err) {
            console.log(err);
            res.send({ error: err });
        }
    };
}

module.exports = router;

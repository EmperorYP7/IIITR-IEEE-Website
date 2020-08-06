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
    await Event.findByIdAndDelete(req.params.id)
                .then(response => res.json("Success"))
                .catch(err => res.json(err));
});

router.put('/:slug', async (req, res, next) => {
    req.event = await Event.findOne({ slug: req.params.slug });
    next();
}, eventCreate());

router.get('/:slug', async (req, res) => {
    const event = await Event.findOne({ slug: req.params.slug })
                            .then(response => { res.json(response) })
                            .catch(error => { res.json("Error")});
});

router.post('/', async (req, res) =>{
    const newEvent = new Event();

    newEvent.title = req.body.title;
    newEvent.description = req.body.description;
    newEvent.shortDescription = req.body.shortDescription;
    newEvent.eventDate = Date.parse(req.body.eventDate);
    newEvent.location = req.body.location;

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
        await event.save()
            .then(() =>  res.json(event))
            .catch(err => {
                    console.log(err);
                    res.json(err);
                });
    };
}

module.exports = router;

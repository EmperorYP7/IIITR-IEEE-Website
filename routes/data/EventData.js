const express = require('express');
const router = express.Router();
const Event = require('../../models/Events/Event');

router.get('/', (req, res) => {
    
})

router.get('/new', (req, res) => {
    res.send({ event: new Event() });
});

router.delete('/:id', async (req, res) => {
    await Event.findByIdAndDelete(req.params.id);
    res.redirect({ msg: 'Successful!'});
});

router.put('/:slug', async (req, res, next) => {
    req.event = await Event.findOne({ slug: req.params.slug });
    next();
}, eventCreate());

router.put('/', async (req, res, next) =>{
    req.event = new Event();
    next();
}, eventCreate());

function eventCreate()
{
    return async (req, res) => {
        let event = req.event;
        event.title = req.body.title;
        event.description = req.body.description;
        event.shortDescription = req.body.shortDescription;
        event.eventDate = req.body.eventDate;
        event.gCalenderlink = req.body.gCalenderlink;
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

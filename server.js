/**
 * A very simple web server for the Front-end code challenge.
 */

const express  = require('express');
const fixtures = require('./fixtures');


const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = 'public';

const app = express();
// set public directory for assets like css and js files.
app.use(express.static(PUBLIC_DIR));

app.listen(PORT, function() {
    console.log(`${Date.now()} - Server running at port ${PORT}`);
});


/**
 * Returns list of events.
 */
app.get('/events', function(req, res, next) {
    var pageSize = 3;
    var currentPage = req.query.page || 1;

    var allEvents = Object.assign([], fixtures.events);
    events = allEvents.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    events = events.map(function(event) {
        var mappedEvent = Object.assign({}, event);
        delete mappedEvent.sessions;
        delete mappedEvent.description;
        return mappedEvent;
    });

    return res.json({
        events: events,
        total: allEvents.length,
    });
});

/**
 * Returns detailed information for an event.
 */
app.get('/events/:id', function(req, res, next) {
    var eventId = req.params.id;
    var event = fixtures.events.find(function(event) {
        return event.id == eventId;
    });

    if (!event) {
        return res.json({ error: 'notFound' });
    }

    return res.json({
        event: event,
    });
});

// app.get('*' ,function(req, res, next) {
//     res.render('index');
// });

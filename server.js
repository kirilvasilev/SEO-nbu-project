/**
 * A very simple web server for the Front-end code challenge.
 */

const express  = require('express');
const { events } = require('./fixtures');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = 'public';

const app = express();
// set public directory for assets like css and js files.
app.use(express.static(PUBLIC_DIR));

app.listen(PORT, () => {
    console.log(`${Date.now()} - Server running at port ${PORT}`);
});


/**
 * Returns list of events.
 */
app.get('/events', (req, res, next) => {
    var pageSize = 3;
    var currentPage = req.query.page || 1;
    console.log(`${req.headers['x-forwarded-for']} ${req.ip} ${req.method} ${req.url}`);
    try {
        pagedEvents = events.slice((currentPage - 1) * pageSize, currentPage * pageSize);

        pagedEvents = pagedEvents.map(function(event) {
            var mappedEvent = Object.assign({}, event);
            delete mappedEvent.sessions;
            delete mappedEvent.description;
            return mappedEvent;
        });

    return res.json({
        events: pagedEvents,
        total: events.length,
    });
    }
    catch (err) {
        console.error(err);
    }
});

/**
 * Returns detailed information for an event.
 */
app.get('/events/:id', (req, res, next) => {
    console.log(`${req.host} ${req.method} ${req.url}`);
    try{
        var eventId = req.params.id;
        var event = events.find((event) => event.id == eventId);

        if (!event) {
            return res.json({ error: 'notFound' });
        }

        return res.json({
            event: event,
        });
    }
    catch (err) {
        console.error(err);
    }
});

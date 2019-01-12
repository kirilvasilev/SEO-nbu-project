/**
 * A very simple web server for the Front-end code challenge.
 */

const http = require('http');
const express  = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fixtures = require('./fixtures');

var IP = 'localhost';
var PORT = 3000;
var PUBLIC_DIR = 'build';

var app = express();

app.set('view engine', 'ejs');
app.set('views', `${__dirname}`);
app.use(cors()); // enabling all cors requests.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set public directory for assets like css and js files.
app.use(express.static(PUBLIC_DIR));

app.listen(PORT, IP, function() {
    console.log(Date.now() + ' - Server running at http://' + IP + ':' + PORT);
});

app.get(['/', '/dashboard'], function(req, res, next) {
    res.render('index');
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

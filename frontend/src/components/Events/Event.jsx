import React from 'react';
import PropTypes from 'prop-types';
import { clickCatch, formatDate } from '../../utils/utils';
import './Event.css'
import { Redirect } from 'react-router-dom'
import history from '../../history';

export class Event extends React.Component {

     constructor(props) {
        super(props);
        this.state = {dialog: document.querySelector('dialog')};
    }

    render() {
        const event = this.props.event;
        const dataId = `event-gallery__event-${event.id}`;
        const date = formatDate(event.event_start)
        const venue = event.venue;

        // It would be nice to display a message like "Currently there are no upcoming events"
        if(!event) return null;

        return (
            <div className="mdl-cell event-gallery__event" data-js={dataId} onClick={() => {
                    this.props.fetchMoreEventInfo(event.id);
                    history.push(`/events/${event.id}`)
                }}>
                <img
                    src={event.image_url}
                    alt={event.title}
                    className="event-gallery__img"
                />
                <h4>{event.title}</h4>
                {
                    venue && venue.region &&
                    <p>{date}, {venue && venue.city}, {venue && venue.region}</p>
                }
            </div>
        );
    }
}

Event.propTypes = {
    event: PropTypes.object.isRequired,
    fetchMoreEventInfo: PropTypes.func.isRequired
}

export default Event;
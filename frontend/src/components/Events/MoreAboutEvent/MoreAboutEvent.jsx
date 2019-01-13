import React from 'react';
import PropTypes from 'prop-types';
import { EventDetails } from './EventDetails/EventDetails';
import { EventSessions } from './EventSessions/EventSessions';

import history from '../../../history';

import './MoreAboutEvent.css';

export class MoreAboutEvent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchMoreEventInfo(window.location.href.split('/')[5])
    }

    render() {
        const event = this.props.event;

        // we should inform the user that we have no more event details
        if(!event) return null;

        return (
            <div className="more_about_event__container">
                <div className="more_about_event__header">
                    <img
                        src={event.image_url}
                        alt={event.title}
                        className="more_about_event__img"
                    />
                    <button
                        className="load-more-btn"
                        data-js="load-more-btn"
                        onClick={() => history.push('/')}
                        title={"Back To All Events"}
                    >Back To All Events</button>
                </div>
                <h4 className="more_about_event__title">{event.title}</h4>
                <div className="more_about_event__content">
                    <EventDetails event={event}/>
                    <div className="more_about_event__event-description">
                        <h4 className="event-description__title">Description</h4>
                        <p>{event.description}</p>
                    </div>
                    {
                        event.sessions && event.sessions.length ?
                        <EventSessions event={event}/> : null
                    }
                </div>
            </div>
        );
    }
}

MoreAboutEvent.propTypes = {
    event: PropTypes.object.isRequired
}

export default MoreAboutEvent;


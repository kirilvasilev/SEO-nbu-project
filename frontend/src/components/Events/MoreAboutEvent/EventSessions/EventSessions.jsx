import React from 'react';
import PropTypes from 'prop-types';
import { formatHours } from '../../../../utils/utils';
import './EventSessions.css';

export class EventSessions extends React.Component {

    render() {
        const event = this.props.event
        return (
            <div className="dialog__event-session">
                <p className="event-session__title">Sessions({event.sessions.length})</p>
                {
                    event.sessions.map(session => 
                        <p key={session.id} className="event-session__sub-session">
                            <span className="sub-session__title">{session.title} </span>
                            <span className="sub-session__time">{formatHours(session.event_start)} - {formatHours(session.event_end)}</span>
                        </p>
                    )
                }
            </div>
        );
    }
}

EventSessions.propTypes = {
    event: PropTypes.object.isRequired
}

export default EventSessions;


import React from 'react';
import PropTypes from 'prop-types';
import { formatHours, formatDateYear } from '../../../../utils/utils';
import MapContainer  from '../../../../containers/MapContainer';
import './EventDetails.css';

export class EventDetails extends React.Component {

    render() {
        const event = this.props.event
        const venue = event.venue;

        if(!event) return null;

        return (
            <div className="dialog__event-details">
                <div className="event-details__text">
                    <div className="event-details__title">Event Details</div>
                    {
                        event && event.event_start &&
                        <div className="event-details__time-and-date">Time & Date
                            <p className="event-details__date">{formatDateYear(event.event_start)}</p>
                            {
                                event.event_end && event.event_start &&
                                <p className="event-details__time">{formatHours(event.event_start)} - {formatHours(event.event_end)}</p>
                            }
                        </div>
                    }
                    {
                        venue &&
                        <div className="event-details__location">Location
                            <p className="event-details__address">{venue && venue.address}</p>
                            <p className="event-details__city-region-postalCode">{venue && venue.city}, {venue && venue.region}{venue && venue.postalCode}</p>
                        </div>
                    }
                </div>
                <MapContainer venue={venue}/>
            </div>
        );
    }
}

EventDetails.propTypes = {
    event: PropTypes.object.isRequired
}

export default EventDetails;


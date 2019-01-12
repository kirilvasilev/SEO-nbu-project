import React from 'react';
import PropTypes from 'prop-types';
import EventContainer from '../../../containers/EventContainer';
import './EventGallery.css';
// import MoreAboutEventContainer from '../../../containers/MoreAboutEventContainer';

export class EventGallery extends React.Component {

    componentWillMount() {
        // loading the first page of the events
        this.props.fetchEvents(1);
    }

    render() {
        return (
            <div className="content-grid mdl-grid app__event-gallery">
                {/* <MoreAboutEventContainer/> */}
                {this.props.events.events.map(event => <EventContainer key={event.id} event={event}/>)}
            </div>
        );
    }
}

EventGallery.propTypes = {
    fetchEvents: PropTypes.func.isRequired
}

export default EventGallery;
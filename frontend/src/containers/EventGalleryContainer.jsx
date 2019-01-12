import { connect } from 'react-redux';
import { dispatch, bindActionCreators } from 'redux';
import { fetchEvents } from '../state/events';
import { EventGallery } from '../components/Events/EventGallery/EventGallery';

const mapStateToProps = (state) => ({
   events: state.events
})

const mapDispatchToProps = 
(dispatch) => bindActionCreators({
    fetchEvents
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EventGallery);
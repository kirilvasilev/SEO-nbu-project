import { connect } from 'react-redux';
import Map from '../components/Events/MoreAboutEvent/Map/Map';

const mapStateToProps = (state) => ({
   venue: state.events.event.venue
})

export default connect(mapStateToProps)(Map);
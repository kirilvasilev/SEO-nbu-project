import { connect } from 'react-redux';
import { dispatch, bindActionCreators } from 'redux';
import { fetchMoreEventInfo } from '../state/events';
import { Event } from '../components/Events/Event';

const mapDispatchToProps =
(dispatch) => bindActionCreators({
    fetchMoreEventInfo
}, dispatch);

export default connect(null, mapDispatchToProps)(Event);
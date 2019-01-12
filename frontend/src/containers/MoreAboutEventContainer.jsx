import { connect } from 'react-redux';
import { dispatch, bindActionCreators } from 'redux';
import { fetchMoreEventInfo } from '../state/events';
import { MoreAboutEvent } from '../components/Events/MoreAboutEvent/MoreAboutEvent';

const mapStateToProps = (state) => ({
   event: state.events.event
})

const mapDispatchToProps =
(dispatch) => bindActionCreators({
    fetchMoreEventInfo
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MoreAboutEvent);
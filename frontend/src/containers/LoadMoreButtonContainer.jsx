import { connect } from 'react-redux';
import { dispatch, bindActionCreators } from 'redux';
import { fetchEvents } from '../state/events';
import { LoadMoreButton } from '../components/Footer/LoadMoreButton';

const mapStateToProps = (state) => ({
   total: state.events.total
})

const mapDispatchToProps = 
(dispatch) => bindActionCreators({
    fetchEvents
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoadMoreButton);
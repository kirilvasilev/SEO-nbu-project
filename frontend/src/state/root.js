import { combineReducers } from 'redux';
import EventReducer  from './events';

export default combineReducers({
    events: EventReducer
});
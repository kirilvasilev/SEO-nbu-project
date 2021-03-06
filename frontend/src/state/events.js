import axios from 'axios';
import uniqBy from 'lodash/uniqBy';

// I choose the redux duck approach, more info here: https://github.com/erikras/ducks-modular-redux

// Constants
export const FETCH_EVENTS = 'FETCH_EVENTS';
export const FETCH_MORE_EVENT_INFORMTAION = 'FETCH_MORE_EVENT_INFORMTAION';

// State
const initialState = {
    event: {},
    events: [],
    total: 0
}
const APP_ADDRESS = 'https://nbu-events-app.herokuapp.com'

//Actions
export const fetchEvents = pageNumber => async dispatch => {
    try {
        const rsp = await axios.get(`${APP_ADDRESS}/events?page=${pageNumber}`);
        dispatch({
            type: FETCH_EVENTS,
            payload: rsp.data
        });
    } catch(error) {
        console.error(error);
    }
}

export const fetchMoreEventInfo = id => async dispatch => {
     console.log(`Fetching ${APP_ADDRESS}/events/${id} from Axios!`)
    try {
        const rsp = await axios.get(`${APP_ADDRESS}/events/${id}`)
        dispatch({
            type: FETCH_MORE_EVENT_INFORMTAION,
            payload: rsp.data.event
        });
    } catch(error) {
        console.error(error);
    }
}

// Reducer
export default function(state = initialState, action={type, payload}) {
    switch(action.type) {
        case FETCH_EVENTS:
            return {
                ...state,
                events: uniqBy([...state.events, ...action.payload.events], event => event.id),
                total: action.payload.total

            };
        case FETCH_MORE_EVENT_INFORMTAION:
            return {
                ...state,
                event: action.payload
            };
        default:
            return state;
    }
}
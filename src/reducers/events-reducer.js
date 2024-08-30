import { FETCH_ALL_EVENTS } from "../actions/sep-action-types";

const InitialState = {
    events: []
}

function eventsReducer(state = InitialState, action) {
    switch (action.type) {
        case FETCH_ALL_EVENTS:
            state = {
                ...state,
                events: action.payload
            }
            break;
        default:
            break;
    }
    return state;
}
export default eventsReducer;
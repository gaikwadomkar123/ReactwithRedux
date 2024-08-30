import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { logger } from "redux-logger";

import eventsReducer from "../reducers/events-reducer";

const store = configureStore({
    reducer: {
        eventsReducer
    },
    middleware: [
        thunk,
        logger
    ]
});
export default store;
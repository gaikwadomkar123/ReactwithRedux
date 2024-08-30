import axios from "axios";

import { FETCH_ALL_EVENTS } from "./sep-action-types";

axios.interceptors.request.use((request) => {
    request.baseURL = 'http://localhost:9090/api';
    request.headers = {
        "Content-Type": "application/json",
        "x-synechron-token": sessionStorage.getItem("token")
    }
    return request;
});
export const getAllEvents = () => async (dispatch) => {
    try {
        const events = (await axios.get(`/events`)).data;
        dispatch({
            type: FETCH_ALL_EVENTS,
            payload: events
        })
    } catch (error) {
        throw new Error(error);
    }
}
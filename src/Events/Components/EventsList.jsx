import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAllEvents } from "../../actions/events-actions";


const EventsList = () => {
    const dispatch = useDispatch();
    const [selectedEventId, setSelectedEventId] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        try {
            const token = sessionStorage.getItem("token");
            if (!token) {
                navigate(`/login?returnUrl=/events`);
            } else {
                dispatch(getAllEvents());
            }

        } catch (error) {
            console.log(error);
        }
    }, []);
    const { events } = useSelector(state => ({
        events: state.eventsReducer.events
    }));
    const onEventSelection = (eventId) => {
        setSelectedEventId(eventId);
    }
    const title = "Welcome To Synechron's Future Events List!";
    const subTitle = "Published by Synechron Hr Team! India!";
    if (events.length > 0) {
        return <div>
            <h1 className="text-4xl">{title}</h1>
            <hr />
            <h6 className="text-xl">{subTitle}</h6>
            <table className="w-full table-auto border-separate border-spacing-2 border border-slate-400">
                <thead>
                    <tr>
                        <th className="border border-slate-300">Event Code</th>
                        <th className="border border-slate-300">Event Name</th>
                        <th className="border border-slate-300">Start Date</th>
                        <th className="border border-slate-300">Fees</th>
                        <th className="border border-slate-300">Show Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        events.map((event) => <tr key={event.eventId}>
                            <td className="border border-slate-300"><span>{event.eventCode}</span></td>
                            <td className="border border-slate-300"><span>{event.eventName}</span></td>
                            <td className="border border-slate-300"><span>{event.startDate.toString()}</span></td>
                            <td className="border border-slate-300"><span>{event.fees}</span></td>
                            <td className="border border-slate-300">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={() => onEventSelection(event.eventId)} >Show Details</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    } else {
        return (
            <h4>We are fetching the Events List for you!</h4>
        )
    }
}

export default EventsList
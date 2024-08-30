import axios from "axios";
axios.interceptors.request.use((request)=>{
    request.baseURL='http://localhost:9090/api';
    request.headers={
        "Content-Type":"application/json",
        "x-synechron-token":sessionStorage.getItem("token")
    }
    return request;
});
class EventsService {
    #eventsServiceUrl = "/events";
    async getAllEvents() {
        try {
            const events = (await axios.get(`${this.#eventsServiceUrl}`)).data;
            return events;
        } catch (error) {
            throw new Error(error);
        }

    }
    async getEventDetails(eventId) {
        try {
            const event = (await axios.get(`${this.#eventsServiceUrl}/${eventId}`, {
                headers: {
                    "Content-Type": "application/json"
                }
            })).data;
            return event;
        } catch (error) {
            throw new Error(error);
        }
    }
    async insertNewEvent(event){
        const confirmation = (await axios.post(`${this.#eventsServiceUrl}`, event)).data;
        return confirmation;
    }
}
/*class EventsService {
    #eventsData = [
        {
            "eventId": 1001,
            "eventCode": 'SEMJQ3',
            "eventName": 'Seminar on jQuery 3.x',
            "description": 'Seminar will discuss all the new features of jQuery 3.x',
            "startDate": new Date(),
            "endDate": new Date(),
            "fees": 800,
            "seatsFilled": 70,
            "logo": 'images/jq3.png'
        },
        {
            eventId: 1002,
            eventCode: 'SEMNG1',
            eventName: 'Seminar on Angular JS 1.5.x',
            description: 'Seminar will discuss all the new features of Angular JS 1.5.x',
            startDate: new Date(),
            endDate: new Date(),
            fees: 600,
            seatsFilled: 50,
            logo: 'images/ng1.png'
        },
        {
            eventId: 1003,
            eventCode: 'SEMNG2',
            eventName: 'Seminar on Angular 2.x',
            description: 'Seminar will discuss all the new features of Angular 2.x',
            startDate: new Date(),
            endDate: new Date(),
            fees: 1000,
            seatsFilled: 80,
            logo: 'images/ng2.png'
        },
        {
            eventId: 1004,
            eventCode: 'SEMNG4',
            eventName: 'Seminar on Angular 4.x',
            description: 'Seminar will discuss all the new features of Angular 4.x',
            startDate: new Date(),
            endDate: new Date(),
            fees: 1000,
            seatsFilled: 76,
            logo: 'images/ng2.png'
        },
        {
            eventId: 1005,
            eventCode: 'SEMBS3',
            eventName: 'Seminar on Bootstrap 3.x',
            description: 'Seminar will discuss all the new features of Bootstrap 3.x',
            startDate: new Date(),
            endDate: new Date(),
            fees: 500,
            seatsFilled: 34,
            logo: 'images/bs3.png'
        }
    ];
    getAllEvents() {
        return this.#eventsData;
    }
    getEventDetails(eventId) {
        return this.#eventsData.find(event => event.eventId === eventId);
    }
}
*/
export default new EventsService();
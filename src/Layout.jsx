import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Menubar from "./Navigation/Components/Menubar";
import SepHome from "./Home/Components/SepHome";
import EmployeesList from "./Employees/Components/Container/EmployeesList";
import EmployeeDetails from "./Employees/Components/Presentation/EmployeeDetails";
//import EventsList from "./Events/Components/EventsList";
import RegisterNewEvent from "./Events/Components/RegisterNewEvent";
import Login from "./Security/Components/Login";
const EventsList = lazy(() => import('./Events/Components/EventsList'));

const Layout = () => {
    return (
        <div>
            <Menubar />
            <Suspense fallback={<h1>Loading... Please Wait...</h1>}>
                <Routes>
                    <Route path="/" element={<SepHome />} />
                    <Route path="/home" element={<SepHome />} />
                    <Route path="/employees" element={<EmployeesList />} />
                    <Route path="/employees/:id" element={<EmployeeDetails />} />
                    <Route path="/events" element={<EventsList />} />
                    <Route path="/events/new" element={<RegisterNewEvent />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default Layout
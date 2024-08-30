import { NavLink } from "react-router-dom";
const Menubar = () => {
    return (
        <nav className="relative container mx-auto p-6">
            <div className="flex items-center justify-between">
                <div className="pt-2">
                    <NavLink to={"/"}>
                        <img src="../images/synechron_logo.png" alt="" className="h-20" />
                    </NavLink>
                </div>
                <div className="hidden space-x-6 md:flex">
                    <NavLink to={"/home"} className="hover:text-yellow-500">Home</NavLink>
                    <NavLink to={"/employees"} className="hover:text-yellow-500">Employees</NavLink>
                    <NavLink to={"/events"} className="hover:text-yellow-500">Events</NavLink>
                    <NavLink to={"/events/new"} className="hover:text-yellow-500">Register Event</NavLink>
                    <NavLink to={"/login"} className="hover:text-yellow-500">Sign In</NavLink>
                    <a href="#" className="hover:text-yellow-500">Sign Up</a>
                </div>
                <a href="#"
                    className="hidden p-3 px-6 pt-2 text-black bg-yellow-300 rounded-full baseline hover:bg-yellow-200 md:block">Contact
                    Us</a>
                <button id="menu-btn" className="block hamburger focus:outline-none">
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>
            </div>
        </nav>
    )
}

export default Menubar;
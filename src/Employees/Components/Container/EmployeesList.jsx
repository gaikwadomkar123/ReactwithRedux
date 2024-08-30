import { Component } from "react";
import { NavLink } from "react-router-dom";
//import EmployeeDetails from "../Presentation/EmployeeDetails";

import employeesServiceObject from "../../Services/employees-service";

const InitialState = {
    employees: [],
    selectedEmployeeId: 0
}

export default class EmployeesList extends Component {
    constructor() {
        super();
        this.state = InitialState;
        //this.onEmployeeSelection = this.onEmployeeSelection.bind(this);
    }
    #title = "Welcome To Synechron's Employees List!";
    #subTitle = "Core development members of Synechron! India!";
    async componentDidMount() {
        try {
            this.setState({
                employees: await employeesServiceObject.getAllEmployees()
            })
        } catch (error) {
            console.log(error);
        }
    }
    // onEmployeeSelection = (employeeId) => {
    //     this.setState({
    //         selectedEmployeeId: employeeId
    //     })
    // }
    // onEmployeeSelection(employeeId) {
    //     console.log(employeeId);
    // }
    //In JavaScript = <button onClick="onEmployeeSelection()">
    //<button onClick={()=>this.onEmployeeSelection()}>
    render() {
        if (this.state.employees.length > 0) {
            return (
                <div className="text-center">
                    <h1 className="text-4xl">{this.#title}</h1>
                    <hr />
                    <h6 className="text-xl">{this.#subTitle}</h6>
                    <table className="w-full table-auto border-separate border-spacing-2 border border-slate-400">
                        <thead>
                            <tr>
                                <th className="border border-slate-300">Employee Name</th>
                                <th className="border border-slate-300">City</th>
                                <th className="border border-slate-300">Email</th>
                                <th className="border border-slate-300">Contact #</th>
                                <th className="border border-slate-300">Show Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map((employee) => <tr key={employee.employeeId}>
                                    <td className="border border-slate-300"><span>{employee.employeeName}</span></td>
                                    <td className="border border-slate-300"><span>{employee.city}</span></td>
                                    <td className="border border-slate-300"><span>{employee.email}</span></td>
                                    <td className="border border-slate-300"><span>{employee.phone}</span></td>
                                    <td className="border border-slate-300">
                                        <NavLink className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" to={'/employees/' + employee.employeeId}>Show Details</NavLink>
                                        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={() => this.onEmployeeSelection(employee.employeeId)} data-modal-toggle="popup-modal">Show Details</button> */}
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                    {/* {
                        this.state.selectedEmployeeId > 0 ?
                            <EmployeeDetails employeeId={this.state.selectedEmployeeId} /> : ''
                    } */}
                </div>
            )
        } else {
            return (
                <h4>We are fetching the Employees List for you!</h4>
            )
        }
    }
}

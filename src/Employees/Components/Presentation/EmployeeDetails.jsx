import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import employeesServiceObject from "../../Services/employees-service";

const EmployeeDetails = () => {
    const [employee, setEmployee] = useState(null);
    const urlParameters = useParams();
    useEffect(() => {
        //componentDidMount() and componentDidUpdate()
        (async ()=>{
            setEmployee(await employeesServiceObject.getEmployeeDetails(urlParameters.id));
        })();
        return () => {
            //componentWillUnMount() - Cleanup logic
        }
    }, [urlParameters.id])

    if (employee !== null) {
        return (
            <div>
                <h1 className="text-4xl">Details Of - {employee.employeeName}</h1>
                <table className="w-full table-auto border-separate border-spacing-2 border border-slate-400">
                    <tbody>
                        <tr>
                            <th className="border border-slate-300">Employee Id</th>
                            <td className="border border-slate-300"><span>{employee.employeeId}</span></td>
                        </tr>
                        <tr>
                            <th className="border border-slate-300">Employee Name</th>
                            <td className="border border-slate-300"><span>{employee.employeeName}</span></td>
                        </tr>
                        <tr>
                            <th className="border border-slate-300">Employee's Joining Date</th>
                            <td className="border border-slate-300"><span>{employee.joiningDate.toString()}</span></td>
                        </tr>
                        <tr>
                            <th className="border border-slate-300">Employee's Profile Pic</th>
                            <td className="border border-slate-300">
                                <img src={'../'+employee.avatar} alt={employee.employeeName} title={employee.employeeName}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
    return (
        <div>
            <h4 className="text-red-500 text-xl">Loading...</h4>
        </div>
    )
}

export default EmployeeDetails
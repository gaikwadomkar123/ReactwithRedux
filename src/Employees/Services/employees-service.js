import axios from "axios";

class EmployeesService {
    #employeesServiceUrl = "http://localhost:9090/api/employees";
    async getAllEmployees() {
        try {
            const employees = (await axios.get(`${this.#employeesServiceUrl}`, {
                headers: {
                    "Content-Type": "application/json"
                }
            })).data;
            return employees;
        } catch (error) {
            throw new Error(error);
        }
    }
    async getEmployeeDetails(employeeId) {
        try {
            const employee = (await axios.get(`${this.#employeesServiceUrl}/${employeeId}`, {
                headers: {
                    "Content-Type": "application/json"
                }
            })).data;
            return employee;
        } catch (error) {
            throw new Error(error);
        }
    }

}
//     #employeesData = [
//         {
//             employeeId: 2370,
//             employeeName: "Pravinkumar R. D.",
//             address: "Suncity, A8/404",
//             city: "Pune",
//             zipcode: 411051,
//             phone: "+91 23892893",
//             email: "pravin.r.d@synechron.com",
//             skillSets: "Microsoft/JavaScript",
//             country: "India",
//             joiningDate: new Date(),
//             avatar: "images/noimage.png"
//         },
//         {
//             employeeId: 2372,
//             employeeName: "Manish Kaushik",
//             address: "Mooncity, Z8/404",
//             city: "Raipur",
//             zipcode: 459899,
//             phone: "+91 9039039090",
//             email: "manish.kaushik@synechron.com",
//             skillSets: "DBA",
//             country: "India",
//             joiningDate: new Date(),
//             avatar: "images/noimage.png"
//         },
//         {
//             employeeId: 2374,
//             employeeName: "Alisha C.",
//             address: "Mooncity, B8/404",
//             city: "Mumbai",
//             zipcode: 510512,
//             phone: "+91 30003000",
//             email: "alisha.c@synechron.com",
//             skillSets: "Java",
//             country: "India",
//             joiningDate: new Date(),
//             avatar: "images/noimage.png"
//         }
//     ];
//     getAllEmployees() {
//         return this.#employeesData;
//     }
//     getEmployeeDetails(employeeId) {
//         return this.#employeesData.find(employee => employee.employeeId === employeeId);
//     }
// }

export default new EmployeesService();
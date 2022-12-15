import axios from "axios";

const EMPLOYEE_API_SAVE_URL = "http://localhost:8080/emp/v1/save/employees";
const EMPLOYEE_API_GET_URL = "http://localhost:8080/emp/v1/employees";
const EMPLOYEE_API_DELETE_URL = "http://localhost:8080/emp/v1/remove/";
const EMPLOYEE_API_EDIT_URL = "http://localhost:8080/emp/v1/edit/";
const EMPLOYEE_API_UPDATE_URL = "http://localhost:8080/emp/v1/update/";

class EmployeeService {
  saveEmployee(employee) {
    return axios.post(EMPLOYEE_API_SAVE_URL, employee);
  }

  getEmployees() {
    return axios.get(EMPLOYEE_API_GET_URL);
  }

  deleteEmployee(id) {
    return axios.delete(EMPLOYEE_API_DELETE_URL + id);
  }

  editEmployee(id) {
    return axios.get(EMPLOYEE_API_EDIT_URL + id);
  }

  updateEmployee(employee, id) {
    return axios.put(EMPLOYEE_API_UPDATE_URL + id, employee);
  }
}

export default new EmployeeService();

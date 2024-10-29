import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../lib/store/hooks';
import { addEmployee, removeEmployee } from '../../lib/store/features/employees/employeeSlice';
import Navbar from '../components/Navbar';

const Employees = () => {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [location, setLocation] = useState('');
  const dispatch = useAppDispatch();
  const employees = useAppSelector(state => state.employees.employees);

  const handleAddEmployee = () => {
    if (name && salary && location) {
      const newEmployee = {
        id: Date.now(), 
        name,
        salary: parseFloat(salary),
        location,
      };
      dispatch(addEmployee(newEmployee));
      setName('');
      setSalary('');
      setLocation('');
    }
  };

  const handleRemoveEmployee = (id: number) => {
    dispatch(removeEmployee(id));
  };

  return (
    <div>
        <Navbar/>
      <h1>Employee Details</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleAddEmployee}>Add Employee</button>

      <h2>Employee List</h2>
      {employees.length === 0 ? (
        <p>No employees added.</p>
      ) : (
        <ul>
          {employees.map(employee => (
            <li key={employee.id}>
              {employee.name} - ${employee.salary} - {employee.location}
              <button onClick={() => handleRemoveEmployee(employee.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Employees;

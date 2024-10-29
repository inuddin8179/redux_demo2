import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Employee {
  id: number;
  name: string;
  salary: number;
  location: string;
}

interface EmployeeState {
  employees: Employee[];
}

const initialState: EmployeeState = {
  employees: [],
};

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees.push(action.payload);
    },
    removeEmployee: (state, action: PayloadAction<number>) => {
      state.employees = state.employees.filter(employee => employee.id !== action.payload);
    },
  },
});

export const { addEmployee, removeEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;

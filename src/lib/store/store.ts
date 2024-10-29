import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './features/employees/employeeSlice';
import cartReducer from './features/cart/cartSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      employees: employeeReducer,
      cart: cartReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

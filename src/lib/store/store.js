import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

export const createStore=()=>{
    return configureStore({
        reducer: {
          auth: authReducer,  // Add the auth slice to the store
        },
      });
}


export default createStore;

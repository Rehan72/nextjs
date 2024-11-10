'use client';
import { setToken } from '@/lib/store/authSlice';
import store, {createStore, Store} from '../lib/store/store';
import React, { ReactNode, useRef} from 'react';
import { Provider } from 'react-redux';

const StoreProvider = ({children}) =>{
    const storeRef = useRef()
    if (!storeRef.current) {
      // Create the store instance the first time this renders
      storeRef.current = createStore()
      storeRef.current.dispatch(setToken())
    }
  
    return <Provider store={storeRef.current}>{children}</Provider>;
}

export default StoreProvider
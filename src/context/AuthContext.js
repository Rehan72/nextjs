'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, clearToken } from '@/lib/store/authSlice';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  console.log(token);
  

  const router = useRouter();

  useEffect(() => {
    if (token) {
      localStorage.setItem('Token', token);
    } else {
      localStorage.removeItem('Token');
    }
  }, [token]);

  const login = ({ email, password }) => {
    // login logic here
    dispatch(setToken(email)); // Save token to redux
   
    router.push('/location'); // Redirect after login
  };

  const logout = () => {
    dispatch(clearToken()); // Clear token from redux
    router.push('/login'); // Redirect after logout
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

'use client';

import { useRef } from 'react';
import { loginSchema } from '@/components/schemas/loginSchema';
import { useAuth } from '@/context/AuthContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/context/ToastContext';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import {login} from '@/context/AuthContext'
function Login() {
    const { login } = useAuth();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { showToast } = useToast();


  
  const loginHandler = (e) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const result = loginSchema.safeParse({ email, password });

    if (!result.success) {
      const newErrors = result.error.formErrors.fieldErrors;
      if (newErrors.email) {
        showToast({ message: newErrors.email[0], type: 'error' });
      }
      if (newErrors.password) {
        showToast({ message: newErrors.password[0], type: 'error' });
      }
      return;
    }
    const token = 'sample-auth-token'; // Replace with actual login logic
    login({ email, password }); // Store the token using the login function from AuthContext
    // Handle successful login
    console.log({ email, password });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-full sm:max-w-md p-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>Please enter your credentials</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={loginHandler} className="space-y-4">
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                ref={emailRef}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                ref={passwordRef}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex justify-center">
              <Button type="submit" className="w-full bg-black text-white py-2 rounded-md hover:bg-red-500">
                Login
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="text-center">
          <Link href="/signup" className="text-blue-500 hover:text-blue-700">
            Don't have an account? Sign up
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;

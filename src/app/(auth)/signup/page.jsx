'use client';
import { useState } from 'react';
import { useRef } from 'react';
import { toast } from 'react-toastify';  // Import the toast function
import { signupSchema } from '@/components/schemas/signupSchema';  // Import the schema
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from '@/context/ToastContext';
import Link from "next/link";
import { useRouter } from 'next/navigation'

function Signup() {
  const router = useRouter()
  const { showToast } = useToast();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signUpHandler = (e) => {
    e.preventDefault();

    // Get values from refs
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    // Validate the form data using the imported signupSchema
    const result = signupSchema.safeParse({ name, email, password });

    // If validation fails, show error messages via toast
    if (!result.success) {
      const newErrors = result.error.formErrors.fieldErrors;

      // Display errors as toasts
      if (newErrors.name) {
        toast.error(newErrors.name[0]);
        showToast({ message: newErrors.name[0], type: 'error' });
      }
      if (newErrors.email) {
        showToast({ message: newErrors.email[0], type: 'error' });
      }
      if (newErrors.password) {
        showToast({ message: newErrors.password[0], type: 'error' });
      }
      return;
    }
    router.push('login')
    // If validation passes, log the form data
    console.log({ name, email, password });
    // Proceed with further actions like submitting the data to the API
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className='w-full sm:max-w-md p-8'>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
          <CardDescription>Please fill all fields</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={signUpHandler} className="space-y-4">
            <div>
              <Input
                placeholder="Name"
                type="text"
                name="name"
                ref={nameRef} 
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>

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

            <Button type="submit" className="w-full bg-black text-white py-2 rounded-md hover:bg-red-500">Sign Up</Button>
          </form>
        </CardContent>
        <CardFooter className="text-center">
          <Link href="/login" className="text-blue-500 hover:text-blue-700">Have an account? Login</Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Signup;

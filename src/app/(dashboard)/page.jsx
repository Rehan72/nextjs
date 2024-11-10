'use client';

import { useState } from 'react';

export default function Dashboard() {
  const [message, setMessage] = useState('Hello, Dashboard!');
  return <h1>{message}</h1>;
}

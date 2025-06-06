'use client'
import React, { useEffect, useState } from 'react';
import { App } from './components/App';

export default function Home() {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {isClient && (<App />)}
    </main>
  );
}

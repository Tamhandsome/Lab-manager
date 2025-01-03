'use client';

import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const FormLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const notify = () => toast('Wow so easy!');

  // eslint-disable-next-line
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      // eslint-disable-next-line
      const res: any = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        notify();
        return;
      }

      router.lab('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg">
        <h1 className="text-xl font-bold my-4">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
          <button className="bg-primary text-white font-bold cursor-pointer px-6 py-2">Login</button>
        </form>
      </div>
    </div>
  );
};

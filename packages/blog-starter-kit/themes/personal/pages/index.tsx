import React from 'react';
import Link from 'next/link';
import Header from '../components/header';
import { useRouter } from 'next/router';

const Home: React.FC = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.push('/');
  }, []);

  return (
    <div>
      <Header />
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Welcome to the home page!</h1>
      <p className="prose prose-neutral dark:prose-invert">This is the main landing page.</p>
    </div>
  );
}

export default Home;

import React from 'react';
import Link from 'next/link';
import Header from '../components/header';
import { useRouter } from 'next/router';

const Home: React.FC = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.push('/');
  }, [router]);

  return (
    <div>
      <Header />
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Hi! I&rsquo;m Sabrina</h1>
      <p className="prose prose-neutral dark:prose-invert">I&rsquo;m a human who loves math, science, solving problems, and writing code.</p>
    </div>
  );
}

export default Home;
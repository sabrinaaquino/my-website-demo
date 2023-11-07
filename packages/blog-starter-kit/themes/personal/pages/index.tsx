import React from 'react';
import Header from '../components/header';
import axios from 'axios';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="relative">
      <div className="flex items-center justify-center ">
      <Header />
      <img src="/avatar.png" alt="Sabrina" className="w-32 ml-20 transform rotate-180" />
      </div>
        <div className="px-4 mt-16">
          <h1 className="font-semibold text-2xl mb-8 tracking-tighter">hi, I&apos;m Sabrina 👋</h1>
          <p className="prose prose-neutral dark:prose-invert">I&apos;m a human who loves math, science, solving problems, and writing code. I currently work as a Developer Advocate and am getting an MBA in Software Engineering.</p>
          <div className="mt-8 text-gray-500">
            <Link href="https://twitter.com/sabrinaesaquino" target="_blank" className="mr-4">📌 follow me</Link>
            <Link href="/newsletter">📌 get email updates</Link>
          </div>
      </div> 
      </div>
    </div>
  );
}

export default Home;

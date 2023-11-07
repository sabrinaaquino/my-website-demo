import React from 'react';
import Header from '../components/header';
import axios from 'axios';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="relative">
      <img src="/avatar.png" alt="Sabrina" className="absolute top-0 right-0  mr-[-20px] w-32 transform rotate-180" />
        <Header />
        <div className="px-4 mt-24">
          <h1 className="font-semibold text-2xl mb-8 tracking-tighter">hi, I&rsquo;m Sabrina 👋</h1>
          <p className="prose prose-neutral dark:prose-invert">I&rsquo;m a human who loves math, science, solving problems, and writing code. I currently work as a Developer Advocate and am getting an MBA in Software Engineering.</p>
          <div className="mt-8">
            <a href="https://twitter.com/sabrinaesaquino" className="mr-4">📌 follow me</a>
            <a href="/newsletter">📌 subscribe to my newsletter</a>
          </div>
      </div> 
      </div>
    </div>
  );
}

export default Home;

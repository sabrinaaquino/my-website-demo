import React from 'react';
import Header from '../components/header';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="relative">
      <div className="flex items-center justify-center ">
      <Header />
      <img src="/avatar.png" alt="Sabrina" className="w-32 ml-20 transform rotate-180" />
      </div>
      <div className="px-4 mt-30">
        <p className="prose prose-neutral dark:prose-invert mt-14">I swear I will eventually rate the movies I watch here. For the best ones, I&apos;ll also add comments and short reviews.</p>
      </div>
      </div>
    </div>
  );
}

export default Home;

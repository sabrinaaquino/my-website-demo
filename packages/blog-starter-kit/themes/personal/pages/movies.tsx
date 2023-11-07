import React from 'react';
import Header from '../components/header';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="relative">
      <img src="/avatar.png" alt="Sabrina" className="absolute top-0 right-0  mr-[-20px] w-32 transform rotate-180" />
      <Header />
      <div className="px-4 mt-40">
        <p className="prose prose-neutral dark:prose-invert mt-14">I swear I will eventually rate the movies I watch here. For the best ones, I'll also add comments and short reviews.</p>
      </div>
      </div>
    </div>
  );
}

export default Home;

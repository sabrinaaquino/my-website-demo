import React from 'react';
import Header from '../components/header';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center ">
      <Header />
      <div className="px-4 mt-8">
        <p className="prose prose-neutral dark:prose-invert mt-14">I will eventually (I swear it will happen) rate the books I read here. For the best ones, I'll also add comments and short reviews.</p>
      </div>
    </div>
  );
}

export default Home;

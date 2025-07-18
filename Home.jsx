import React from 'react';
import Sanctiuni from './Sanctiuni';
import Regulament from './Regulament';

const Home = () => {
  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold text-yellow-400 mb-6 text-center">Cloud Romania</h1>
      <Sanctiuni />
      <div className="my-10" />
      <Regulament />
    </div>
  );
};

export default Home;

import React, { Suspense } from "react";
import Background from '/images/backdrop.jpg';
import Header from '../components/Header';

const Puppies: React.FC = () => {
  return (
    <div className="bg-fixed bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${Background})` }}>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <h1>PUPPIES</h1>
        </main>
      </Suspense>
    </div>
  );
};

export default Puppies;
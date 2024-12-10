import React, { Suspense } from "react";
import Nav from '../components/Navbar';
import AboutUs from '../components/AboutUs';
import Background from '/images/backdrop.jpg';

const Home: React.FC = () => {
  return (
    <div className="bg-fixed bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${Background})` }}>
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        <main className="container mx-auto pt-20">
          <AboutUs />
          {/* Add more components here */}
        </main>
      </Suspense>
    </div>
  );
};

export default Home;

import React from "react";
import Nav from '../src/components/Navbar';

const App: React.FC = () => {
  return (
    <div className="bg-fixed bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('../images/backdrop.jpg')" }}>
      <Nav />
    </div>
  );
};

export default App;

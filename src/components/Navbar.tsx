// The navbar where we will give the user options to join the waitlist, send me an email directly within the site using a form, and a login button that will be used to log in to the site.

import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="backdrop-blur-md bg-slate-900/95 p-6 grid grid-cols-3 items-center shadow-lg border-b border-slate-800">
      <div>
        <button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
          Join Waitlist
        </button>
      </div>
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-3xl font-extrabold text-center tracking-wider">
        AprilsLilPugs
      </h1>
      <div className="flex justify-end space-x-4">
        <button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
          Contact Me
        </button>
        <button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
import React, { useState, useEffect } from "react";
import { getAuth, signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import LoginComponent from '../components/logincomponent';
import '../styles/navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(".Navbar")) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="Navbar">
      <div className="Navbar-container">
        <button className="hamburger-menu" onClick={toggleMenu} aria-label="Menu">
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        </button>
        <ul className={`Navbar-links ${isOpen ? "Navbar-links-mobile-open" : ""}`}>
          <li>
            <Link to="/about" className="Navbar-link" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/puppies" className="Navbar-link" onClick={() => setIsOpen(false)}>
              Puppies
            </Link>
          </li>
          <li>
            <Link to="/family" className="Navbar-link" onClick={() => setIsOpen(false)}>
              My Family
            </Link>
          </li>
          <li>
            <Link to="/media" className="Navbar-link" onClick={() => setIsOpen(false)}>
              Media
            </Link>
          </li>
        </ul>
        <div className="Navbar-right">
          {isAuthenticated ? (
            <button 
              onClick={handleLogout}
              className="auth-button"
            >
              Logout
            </button>
          ) : (
            <>
              <button 
                onClick={() => setShowLoginModal(true)}
                className="auth-button"
              >
                Login
              </button>
              <LoginComponent 
                isOpen={showLoginModal}
                onClose={() => setShowLoginModal(false)}
              />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

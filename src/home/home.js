// HomePage.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn, isLoggingOut } from '../Actions/index';
import './home.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    setTimeout(() => {
      dispatch(isLoggingOut());
      // store.subscribe(() => console.log(store.getState()));
      navigate('/');
    }, 2000);
  };
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">My Website</div>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Profile</a>
          </li>
          <li>
            <button className="logout" onClick={handleLogout}>
              <img
                src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/logout-512.png"
                height="25px"
                width="25px"
              />
            </button>
          </li>
        </ul>
      </nav>
      <div className="content">
        <h1>Welcome to My Website</h1>
        <p>This is a sample home page with a navigation bar.</p>
      </div>
    </div>
  );
};

export default HomePage;

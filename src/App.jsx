// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Blogs from './pages/Blogs'
// import Navbar from './components/Navbar'; // Shared Navbar component
import Footer from './components/Footer/Footer';
import Home from './pages/Home'; // Home page component
import AboutUs from './pages/AboutUs';// About page component
import ContactUs from './pages/ContactUs'; // Contact page component
import Services from './pages/Services';
import IndvBlogs from './pages/IndvBlogs';
const App = () => {
  return (
    <div>
      {/* Include Navbar at the top of every page */}
      <Header/>

      {/* Define routes to load different page components */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/IndBlogs" element={<IndvBlogs />} />
        {/* Add more routes as needed */}
      </Routes>

      {/* Include Footer at the bottom of every page */}
      <Footer />
    </div>
  );
};

export default App;

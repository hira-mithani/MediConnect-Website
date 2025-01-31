import React from 'react';
import Link from 'next/link';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MediConnect</div>
      <ul className="nav-links">
        <li><Link href="/home">Home</Link></li>
        <li><Link href="/find-doctors">Find Doctors</Link></li>
        <li><Link href="/about-us">About Us</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <div className="auth-buttons">
        <Link href="/login"><button className="login">Login</button></Link>
        <Link href="/signup"><button className="sign-up">Sign Up</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div>
          <h5>Cutipets</h5>
          <p className="mb-0">123 Paw Street, Petville, Maharashtra 413516</p>
          <p>Email: contact@cutipets.com | Phone: +91-9876543210</p>
        </div>

        <div className="my-3 my-md-0">
          <a href="https://facebook.com" className="text-light me-3"><FaFacebook size={20} /></a>
          <a href="https://instagram.com" className="text-light me-3"><FaInstagram size={20} /></a>
          <a href="https://twitter.com" className="text-light me-3"><FaTwitter size={20} /></a>
          <a href="https://linkedin.com" className="text-light"><FaLinkedin size={20} /></a>
        </div>
      </div>
      <div className="text-center mt-3">
        &copy; {new Date().getFullYear()} Cutipets. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

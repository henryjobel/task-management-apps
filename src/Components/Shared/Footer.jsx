import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 text-center text-white bg-gray-800">
      <p>Follow us on social media:</p>
      <div className="flex justify-center mt-2">
        {/* Add relevant social media icons with links */}
        <a href="#" className="mx-2 text-white hover:text-gray-300">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="mx-2 text-white hover:text-gray-300">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
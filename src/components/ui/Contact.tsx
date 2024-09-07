import React from "react";

const Contact = () => {
  return (
    <footer id="contact" className="bg-slate-950 border-t-2 border-white text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h1 className="text-xl font-semibold mb-4">Core IT</h1>
            <p className="text-sm">
              Ayo Join Sekarang!
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul>
              <li>
                <a href="#home" className="text-sm text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#structure" className="text-sm text-gray-400 hover:text-white">
                  Structure
                </a>
              </li>
              <li>
                <a href="#news" className="text-sm text-gray-400 hover:text-white">
                  News
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <ul>
              <li>
                <a href="https://www.instagram.com/core.it.global?igsh=MTUwOTVqYmQ4ejh1dA==" className="text-sm text-gray-400 hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Github
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Discord
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Support</h2>
            <ul>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-8">
          <p>© 2024 Core IT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;

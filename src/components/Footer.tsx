
import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-custom-lightPurple font-heading font-bold text-2xl">
              Saketh<span className="text-white">.dev</span>
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              Web developer specializing in responsive websites and web applications using MERN stack.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/sakethmothe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-custom-lightPurple transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/SakethMothe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-custom-lightPurple transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:saketh2005mothe@gmail.com" 
                className="text-gray-400 hover:text-custom-lightPurple transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="bg-custom-purple hover:bg-custom-darkPurple text-white p-3 rounded-full transition-colors flex items-center justify-center"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Saketh Mothe. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-custom-lightPurple transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-custom-lightPurple transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-custom-lightPurple transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-custom-lightPurple transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

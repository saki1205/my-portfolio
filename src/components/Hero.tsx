
import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-16 hero-pattern relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-20">
          <div className="lg:w-1/2 mb-12 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900">
              <span className="block">Hi, I'm</span>
              <span className="text-custom-purple">Saketh Mothe</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-700 mb-6">
              <span className="relative">
                Web Developer
                <svg className="absolute -bottom-2 w-full" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,5 Q50,9 100,5 T200,5" fill="none" stroke="#7c4dff" strokeWidth="2" />
                </svg>
              </span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              B.Tech student at Keshav Memorial Institute of Technology with expertise in the MERN stack and passion for creating beautiful, functional web applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="bg-custom-purple hover:bg-custom-darkPurple text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center"
              >
                View My Work <ArrowRight size={18} className="ml-2" />
              </a>
              <a 
                href="#contact" 
                className="bg-transparent border-2 border-custom-purple text-custom-purple hover:bg-custom-purple hover:text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Contact Me
              </a>
            </div>
            <div className="flex space-x-5 mt-8">
              <a 
                href="https://github.com/sakethmothe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-custom-purple transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/SakethMothe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-custom-purple transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:saketh2005mothe@gmail.com" 
                className="text-gray-600 hover:text-custom-purple transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end animate-slide-in-right">
            <div className="rounded-full w-72 h-72 md:w-96 md:h-96 border-8 border-white shadow-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-b from-custom-purple/20 to-transparent"></div>
              <img 
                src="https://media-hosting.imagekit.io/19118f06f3714154/ppl.jpg?Expires=1839567337&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=dVtS~jCvPhm~GFHMoiWjFjp425657i7TB~ViAe6EGN6954f9~~z8i7F6vBFPa2REjwe8vyHOVraxA5PzumDM36GM3e~fc~xHhqxns0-exQrt1hAdlXzwJbGufwFx8xZ57Bb2k14BL6wlBBDJWQYRTcl7mQuzdkyqMtLdtz3f5WV0Rh1SBBF9XeOJCdRYg1pyt~FOM0FG84CzLJBOKZ4RLLKOcOtFicDbLYDq5GPgRMywHLJ8i7q197r-cEjrDPOMC92CK8EmuLTL8-ZnNglB7HgqlqZP6mYVb8gbxuygtJiohpJRpEuJUGLa2by7qUn3ellz3NaDdDCO2LJGrIseQQ__" 
                alt="Saketh Mothe" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-peach to-transparent"></div>
    </section>
  );
};

export default Hero;

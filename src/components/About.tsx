
import React from 'react';
import { Code, BookOpen, Laptop, FileSearch } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-peach relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-custom-purple mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="glass-card p-8 animate-fade-in">
            <p className="text-lg text-gray-700 mb-6">
              A B.Tech student at Keshav Memorial Institute of Technology with strong proficiency in Python, C, C++, and Java. Experienced in full-stack web development using the MERN stack (MongoDB, Express.js, React.js, Node.js) along with frontend technologies like HTML, CSS, JavaScript, Bootstrap, and jQuery.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Familiar with backend frameworks such as Django and Express.js. Skilled in Data Structures, Algorithms, and Object-Oriented Programming.
            </p>
            <p className="text-lg text-gray-700">
              Actively seeking opportunities to apply my skills in a challenging and collaborative development environment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-card p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mb-4 text-custom-purple shadow-md">
                <Code size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Web Development</h3>
              <p className="text-gray-600">
                Building responsive websites and web applications using modern frameworks and technologies.
              </p>
            </div>
            
            <div className="glass-card p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mb-4 text-custom-purple shadow-md">
                <BookOpen size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Education</h3>
              <p className="text-gray-600">
                B.Tech in Information Technology with strong foundation in computer science concepts.
              </p>
            </div>
            
            <div className="glass-card p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mb-4 text-custom-purple shadow-md">
                <Laptop size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Programming</h3>
              <p className="text-gray-600">
                Proficient in multiple languages including Python, C++, Java, and JavaScript.
              </p>
            </div>
            
            <div className="glass-card p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mb-4 text-custom-purple shadow-md">
                <FileSearch size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Problem Solving</h3>
              <p className="text-gray-600">
                Strong analytical skills with experience in data structures and algorithms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

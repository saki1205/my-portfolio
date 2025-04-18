
import React from 'react';
import { Github, ExternalLink, Youtube, Shield, Terminal } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  date: string;
  technologies: string[];
  icon: React.ReactNode;
  link?: string;
  github?: string;
}

const projects: ProjectProps[] = [
  {
    title: 'YouTube Transcriptor Summarizer',
    description: 'Developed a tool to convert YouTube transcriptions into a formal language format with grammatically correct text. Used Python and Flask for text parsing and grammar correction.',
    date: 'Nov 2023',
    technologies: ['Python', 'Flask', 'NLP', 'Deep Learning'],
    icon: <Youtube className="text-custom-purple" size={24} />,
    github: 'https://github.com/sakethmothe/youtube-summarizer'
  },
  {
    title: 'Fake Currency Detection System',
    description: 'Counterfeit currency poses significant threats to financial systems. Built automated solutions to efficiently and accurately identify fake currency to safeguard financial transactions.',
    date: 'June - Oct 2024',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'ML'],
    icon: <Shield className="text-custom-purple" size={24} />,
    github: 'https://github.com/sakethmothe/fake-currency-detector'
  },
  {
    title: 'ATM Simulation Machine',
    description: 'Developed a tool to simulate ATM transactions and operations using object-oriented programming concepts in C++.',
    date: 'Aug 2023',
    technologies: ['C++', 'OOP'],
    icon: <Terminal className="text-custom-purple" size={24} />,
    github: 'https://github.com/sakethmothe/atm-simulation'
  },
  {
    title: 'WiFi Controlled Car Using ESP 8266',
    description: 'IoT-Enabled Control system with wireless communication to remotely operate a car using ESP 8266 microcontroller and DC motors with a web interface.',
    date: 'Aug 2023',
    technologies: ['ESP8266', 'Arduino IDE', 'IoT', 'DC Motors'],
    icon: <Terminal className="text-custom-purple" size={24} />,
    github: 'https://github.com/sakethmothe/wifi-controlled-car'
  }
];

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <div className="project-card p-6 h-full flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className="bg-white rounded-full p-3 shadow-md">
          {project.icon}
        </div>
        <span className="text-sm text-gray-500">{project.date}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4 mt-auto">
        {project.github && (
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 hover:text-custom-purple transition-colors flex items-center"
          >
            <Github size={18} className="mr-1" /> Code
          </a>
        )}
        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 hover:text-custom-purple transition-colors flex items-center"
          >
            <ExternalLink size={18} className="mr-1" /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-custom-purple mx-auto rounded"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/sakethmothe" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center bg-custom-purple hover:bg-custom-darkPurple text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            <Github size={20} className="mr-2" /> View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

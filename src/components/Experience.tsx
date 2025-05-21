import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface ExperienceProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

const experienceData: ExperienceProps[] = [
  {
    title: 'Full Stack Developer',
    company: 'WiseMango',
    location: 'Remote',
    period: 'April 2025 - May 2025',
    description: 'Contributed to building modern web interfaces and improving user experience.',
    responsibilities: [
      'Designed and implemented responsive user interfaces using React and Tailwind CSS.',
      'Collaborated with the design team to translate wireframes into functional components.',
      'Optimized application performance and loading times through code refactoring and best practices.'
    ],
    technologies: [
      'React',
      'Tailwind CSS',
      'JavaScript',
      'UI/UX',
      'Git'
    ]
  }
];

const ExperienceCard = ({ experience }: { experience: ExperienceProps }) => {
  return (
    <div className="glass-card p-6 transition-all duration-300 hover:shadow-lg animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center text-custom-purple shadow-md flex-shrink-0">
          <Briefcase size={28} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
          <p className="text-custom-purple font-medium">{experience.company}</p>
          <div className="flex items-center gap-2 text-gray-600 mt-1 mb-3">
            <Calendar size={16} />
            <span>{experience.period}</span>
            <span className="mx-2">•</span>
            <span>{experience.location}</span>
          </div>
          
          <p className="text-gray-700 mb-4">{experience.description}</p>
          
          <div className="mb-4">
            <h4 className="font-bold text-gray-800 mb-2">Key Responsibilities:</h4>
            <ul className="space-y-2">
              {experience.responsibilities.map((item, index) => (
                <li key={index} className="text-gray-700 flex items-start">
                  <span className="inline-block w-2 h-2 bg-custom-purple rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, index) => (
                <span key={index} className="bg-white px-3 py-1 rounded-full text-sm text-custom-purple border border-custom-purple">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <section 
      id="experience" 
      className="py-24 bg-lavender relative"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-transition ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Professional Experience</h2>
          <div className="w-20 h-1 bg-custom-purple mx-auto rounded animate-fade-in-up delay-100"></div>
        </div>

        <div className="space-y-8">
          {experienceData.map((experience, index) => (
            <div key={index} className={`animate-fade-in-up delay-${(index + 2) * 100}`}>
              <ExperienceCard experience={experience} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
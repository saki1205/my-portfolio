
import React from 'react';

interface SkillProps {
  name: string;
  level: number;
  category: 'Languages' | 'Web Technologies' | 'Databases' | 'Tools';
}

const skillsData: SkillProps[] = [
  { name: 'JavaScript', level: 90, category: 'Languages' },
  { name: 'Python', level: 85, category: 'Languages' },
  { name: 'C++', level: 80, category: 'Languages' },
  { name: 'Java', level: 75, category: 'Languages' },
  { name: 'React.js', level: 90, category: 'Web Technologies' },
  { name: 'Node.js', level: 85, category: 'Web Technologies' },
  { name: 'Express.js', level: 85, category: 'Web Technologies' },
  { name: 'HTML/CSS', level: 95, category: 'Web Technologies' },
  { name: 'Bootstrap', level: 85, category: 'Web Technologies' },
  { name: 'Next.js', level: 75, category: 'Web Technologies' },
  { name: 'Django', level: 70, category: 'Web Technologies' },
  { name: 'MongoDB', level: 85, category: 'Databases' },
  { name: 'MySQL', level: 80, category: 'Databases' },
  { name: 'Git/GitHub', level: 90, category: 'Tools' },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-sm font-medium text-custom-purple">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-custom-purple h-2.5 rounded-full" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillCard = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="skill-card bg-white rounded-lg p-4 shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium text-gray-800">{name}</h3>
        <span className="text-xs font-semibold bg-custom-purple/10 text-custom-purple px-2 py-1 rounded-full">
          {level}%
        </span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-1.5">
        <div 
          className="purple-gradient h-1.5 rounded-full" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  // Group skills by category
  const categories = ['Languages', 'Web Technologies', 'Databases', 'Tools'] as const;
  const groupedSkills = categories.reduce((acc, category) => {
    acc[category] = skillsData.filter(skill => skill.category === category);
    return acc;
  }, {} as Record<typeof categories[number], SkillProps[]>);

  return (
    <section id="skills" className="py-24 bg-mint relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-custom-purple mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Main Skills</h3>
            {[...groupedSkills['Languages'], ...groupedSkills['Web Technologies']].slice(0, 6).map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>

          <div className="space-y-8">
            {categories.map((category, idx) => (
              <div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{category}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {groupedSkills[category].map((skill, index) => (
                    <SkillCard key={index} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

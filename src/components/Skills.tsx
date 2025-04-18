
import React from 'react';

interface SkillProps {
  name: string;
  category: 'Languages' | 'Web Technologies' | 'Databases' | 'Tools';
}

const skillsData: SkillProps[] = [
  { name: 'JavaScript', category: 'Languages' },
  { name: 'Python', category: 'Languages' },
  { name: 'C++', category: 'Languages' },
  { name: 'Java', category: 'Languages' },
  { name: 'React.js', category: 'Web Technologies' },
  { name: 'Node.js', category: 'Web Technologies' },
  { name: 'Express.js', category: 'Web Technologies' },
  { name: 'HTML/CSS', category: 'Web Technologies' },
  { name: 'Bootstrap', category: 'Web Technologies' },
  { name: 'Next.js', category: 'Web Technologies' },
  { name: 'Django', category: 'Web Technologies' },
  { name: 'MongoDB', category: 'Databases' },
  { name: 'MySQL', category: 'Databases' },
  { name: 'Git/GitHub', category: 'Tools' },
];

const SkillCard = ({ name }: { name: string }) => {
  return (
    <div className="skill-card bg-white rounded-lg p-4 shadow-md">
      <h3 className="font-medium text-gray-800">{name}</h3>
    </div>
  );
};

const Skills = () => {
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
            <div className="grid grid-cols-2 gap-4">
              {[...groupedSkills['Languages'], ...groupedSkills['Web Technologies']].slice(0, 6).map((skill, index) => (
                <SkillCard key={index} name={skill.name} />
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {categories.map((category, idx) => (
              <div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{category}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {groupedSkills[category].map((skill, index) => (
                    <SkillCard key={index} name={skill.name} />
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

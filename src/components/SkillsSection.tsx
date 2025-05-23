import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, CloudCog, Code, Cpu, Database, FileCog, Globe, Layers, Server } from 'lucide-react';

interface Skill {
  name: string;
  proficiency: number;
  icon: React.ReactNode;
  category: string;
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', proficiency: 90, icon: <Code />, category: 'Frontend' },
  { name: 'JavaScript', proficiency: 85, icon: <Code />, category: 'Frontend' },
  { name: 'TypeScript', proficiency: 80, icon: <Code />, category: 'Frontend' },
  { name: 'HTML/CSS', proficiency: 90, icon: <Globe />, category: 'Frontend' },
  { name: 'Tailwind CSS & MUI', proficiency: 85, icon: <Globe />, category: 'Frontend' },
  
  // Backend
  { name: 'Node.js', proficiency: 80, icon: <Server />, category: 'Backend' },
  { name: 'Express', proficiency: 75, icon: <Server />, category: 'Backend' },
  { name: 'MongoDB', proficiency: 75, icon: <Database />, category: 'Backend' },
  { name: 'SQL', proficiency: 70, icon: <Database />, category: 'Backend' },
  
  // Microsoft Power Platform
  { name: 'Power Apps', proficiency: 95, icon: <BrainCircuit />, category: 'Microsoft Power Platform' },
  { name: 'Power Automate', proficiency: 90, icon: <BrainCircuit />, category: 'Microsoft Power Platform' },
  { name: 'Power BI', proficiency: 85, icon: <BrainCircuit />, category: 'Microsoft Power Platform' },
  
  // // DevOps
  // { name: 'Git', proficiency: 85, icon: <FileCog />, category: 'DevOps' },
  // { name: 'Docker', proficiency: 70, icon: <CloudCog />, category: 'DevOps' },
  // { name: 'CI/CD', proficiency: 65, icon: <Layers />, category: 'DevOps' },
  
  // CMS
  { name: 'WordPress', proficiency: 80, icon: <Cpu />, category: 'CMS' },

];

// Group skills by category
const groupedSkills: Record<string, Skill[]> = skills.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<string, Skill[]>);

const SkillsSection = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center text-black dark:text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        
        <div className="space-y-16">
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
            <div key={category}>
              <motion.h3 
                className="text-2xl font-semibold text-green-700 dark:text-green-500 mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
              >
                {category}
              </motion.h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categorySkills.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-700 dark:text-green-500 mr-3">
                          {skill.icon}
                        </div>
                        <h4 className="text-lg font-medium text-black dark:text-white">{skill.name}</h4>
                      </div>
                      
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-green-700 dark:bg-green-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                      <div className="text-right mt-1 text-sm text-gray-600 dark:text-gray-400">
                        {skill.proficiency}%
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

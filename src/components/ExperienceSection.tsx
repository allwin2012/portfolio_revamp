import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    title: "Software Developer",
    company: "Ignitho Technologies",
    location: "Chennai, India",
    period: "Aug 2023 - Present",
    description: [
      "Developed and maintained responsive web applications using React.js and MUI components",
      "Implemented backend functionality using Node.js and Express",
      "Collaborated with cross-functional teams to design and implement new features",
      "Participated in code reviews and provided constructive feedback to other developers"
    ]
  },
  {
    title: "Assistant Software Developer",
    company: "Resemble System Inc",
    location: "Bangalore, India",
    period: "Jan 2022 - May 2023",
    description: [
      "Created custom business applications using Microsoft Power Platform",
      "Automated business processes using Power Automate and SharePoint workflows",
      "Designed responsive interfaces with Power Apps and Canvas Apps",
      "Collaborated with clients to gather requirements and implement solutions"
    ]
  },
  {
    title: "Software Engineering Intern",
    company: "Shiash",
    location: "Chennai, India",
    period: "May 2021 - Dec 2021",
    description: [
      "Assisted in developing front-end components using HTML, CSS,JavaScript and python",
      "Participated in daily stand-up meetings and sprint planning",
      "Conducted testing and debugging of web applications",
      "Learned industry best practices and development workflows"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center text-black dark:text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-green-700 dark:bg-green-500 transform md:translate-x-[-50%]" />
          
          {/* Experience items */}
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className={`mb-12 md:mb-24 flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
  <div className="w-5 h-5 rounded-full bg-green-700 dark:bg-green-500 border-4 border-white dark:border-gray-800" />
</div>
              
              {/* Content box */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} pl-8 md:pl-0`}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-green-700 dark:text-green-500 mb-2">
                    {exp.title}
                  </h3>
                  
                  <div className="flex items-center mb-4">
                    <Briefcase size={16} className="text-gray-600 dark:text-gray-400 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {exp.company}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap mb-4">
                    <div className="flex items-center mr-4 mb-2">
                      <MapPin size={16} className="text-gray-600 dark:text-gray-400 mr-2" />
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        {exp.location}
                      </span>
                    </div>
                    <div className="flex items-center mb-2">
                      <Calendar size={16} className="text-gray-600 dark:text-gray-400 mr-2" />
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="list-disc pl-5 space-y-2">
                    {exp.description.map((point, i) => (
                      <li key={i} className="text-gray-700 dark:text-gray-300">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

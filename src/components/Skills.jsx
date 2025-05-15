
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'Tailwind CSS', level: 85 },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 80 },
    { name: 'Express', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'Firebase', level: 75 },
    { name: 'SQL', level: 65 },
    { name: 'REST API', level: 85 },
  ];

  const tools = [
    { name: 'Git', icon: '🔄' },
    { name: 'VS Code', icon: '📝' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Webpack', icon: '📦' },
    { name: 'Postman', icon: '📮' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'NPM', icon: '📦' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Skills</span></h2>
          <div className="w-20 h-1 gradient-bg mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Here are my skills and technologies I've been working with recently
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Frontend Development</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full gradient-bg"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Backend Development</h3>
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full gradient-bg"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Tools & Technologies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center shadow-md skill-icon"
              >
                <div className="text-3xl mb-2">{tool.icon}</div>
                <p className="font-medium">{tool.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

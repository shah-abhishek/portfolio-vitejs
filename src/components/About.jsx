
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Mail, Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const personalInfo = [
    { icon: <Calendar size={18} />, label: 'Birthday', value: '1st Jan 1995' },
    { icon: <Mail size={18} />, label: 'Email', value: 'abhishek@example.com' },
    { icon: <MapPin size={18} />, label: 'Location', value: 'Mumbai, India' },
  ];

  const experiences = [
    {
      title: 'Senior Web Developer',
      company: 'Tech Solutions Inc.',
      period: '2020 - Present',
      description: 'Leading web development projects and mentoring junior developers.'
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Creations',
      period: '2018 - 2020',
      description: 'Developed responsive and interactive web applications using React.'
    },
  ];

  const education = [
    {
      degree: 'Master of Computer Applications',
      institution: 'Mumbai University',
      period: '2016 - 2018',
    },
    {
      degree: 'Bachelor of Computer Science',
      institution: 'Delhi University',
      period: '2013 - 2016',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-20 h-1 gradient-bg mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Here you will find more information about me, what I do, and my current skills in terms of programming and technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Get to know me!</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I'm a <strong>Full Stack Web Developer</strong> building the Front-end and Back-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
              </p>
              <p>
                I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community.
              </p>
              <p>
                I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {personalInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="p-2 rounded-full gradient-bg text-white">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button className="gradient-bg">
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
            </div>
          </motion.div>

          <div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-10"
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Briefcase className="mr-2" /> Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full gradient-bg"></div>
                    <h4 className="text-lg font-semibold">{exp.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{exp.company} | {exp.period}</p>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">{exp.description}</p>
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
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <GraduationCap className="mr-2" /> Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full gradient-bg"></div>
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{edu.institution} | {edu.period}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

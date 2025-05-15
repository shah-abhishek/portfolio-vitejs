
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A full-featured e-commerce platform with payment integration and admin dashboard.',
      image: 'ecommerce-project',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveLink: 'https://ecommerce-project.com',
      githubLink: 'https://github.com/abhishek/ecommerce',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity app to manage tasks, projects and track progress with team collaboration features.',
      image: 'task-management-app',
      category: 'app',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      liveLink: 'https://task-app.com',
      githubLink: 'https://github.com/abhishek/task-app',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A modern portfolio website with smooth animations and responsive design.',
      image: 'portfolio-website',
      category: 'web',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
      liveLink: 'https://portfolio.com',
      githubLink: 'https://github.com/abhishek/portfolio',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A weather application that shows current and forecasted weather data with beautiful visualizations.',
      image: 'weather-app',
      category: 'app',
      technologies: ['JavaScript', 'Chart.js', 'Weather API'],
      liveLink: 'https://weather-app.com',
      githubLink: 'https://github.com/abhishek/weather-app',
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'A content management system for creating and managing blog posts with user authentication.',
      image: 'blog-platform',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB'],
      liveLink: 'https://blog-platform.com',
      githubLink: 'https://github.com/abhishek/blog-platform',
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'An application to track workouts, nutrition, and fitness progress with data visualization.',
      image: 'fitness-tracker',
      category: 'app',
      technologies: ['React Native', 'Firebase', 'D3.js'],
      liveLink: 'https://fitness-tracker.com',
      githubLink: 'https://github.com/abhishek/fitness-tracker',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Web', value: 'web' },
    { name: 'App', value: 'app' },
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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Projects</span></h2>
          <div className="w-20 h-1 gradient-bg mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Here are some of my recent projects. I've worked on a variety of projects, from web applications to mobile apps.
          </p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="flex space-x-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeFilter === filter.value 
                    ? 'gradient-bg text-white' 
                    : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg project-card"
            >
              <div className="h-48 overflow-hidden">
                <img  
                  className="w-full h-full object-cover"
                  alt={`${project.title} project screenshot`}
                 src="https://images.unsplash.com/photo-1642888621621-ff7d83f3fdcf" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <ExternalLink size={14} className="mr-1" /> Live
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <Github size={14} className="mr-1" /> Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="outline" className="group">
            <a href="https://github.com/abhishek" target="_blank" rel="noopener noreferrer" className="flex items-center">
              View More Projects
              <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

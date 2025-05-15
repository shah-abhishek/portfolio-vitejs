
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, GitCommit as GitHub, Linkedin, Twitter } from 'lucide-react';
import TypewriterComponent from 'typewriter-effect';

const Hero = () => {
  const socialLinks = [
    { icon: <GitHub size={20} />, href: 'https://github.com/abhishek', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/abhishek', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com/abhishek', label: 'Twitter' },
  ];

  return (
    <section id="home" className="pt-20 hero-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-gradient">Abhishek</span>
            </h1>
            <div className="text-xl md:text-2xl font-medium mb-6 h-12">
              <TypewriterComponent
                options={{
                  strings: [
                    'Full Stack Developer',
                    'UI/UX Designer',
                    'Web Developer',
                    'React Specialist'
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              I design and develop services for customers of all sizes, 
              specializing in creating stylish, modern websites, web services and online stores.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="gradient-bg">
                <a href="#contact">Hire Me</a>
              </Button>
              <Button variant="outline">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            
            <div className="flex items-center mt-8 space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-gray-300 hover:border-primary hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-30"></div>
              <div className="relative floating">
                <img  
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white dark:border-gray-800"
                  alt="Abhishek profile photo"
                 src="https://images.unsplash.com/photo-1509966756634-9c23dd6e6815" />
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="text-gray-400 hover:text-primary transition-colors" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

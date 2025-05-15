
import React from 'react';
import { motion } from 'framer-motion';
import { GitCommit as GitHub, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <GitHub size={18} />, href: 'https://github.com/abhishek', label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/abhishek', label: 'LinkedIn' },
    { icon: <Twitter size={18} />, href: 'https://twitter.com/abhishek', label: 'Twitter' },
  ];

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          <div>
            <motion.a 
              href="#home"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-gradient mb-4 inline-block"
            >
              Abhishek
            </motion.a>
            <p className="text-gray-400 mb-4">
              A passionate Full Stack Web Developer building websites and applications that lead to the success of the overall product.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <p className="text-lg font-semibold mb-4">Quick Links</p>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <p className="text-lg font-semibold mb-4">Contact Info</p>
            <ul className="space-y-2 text-gray-400">
              <li>Mumbai, India</li>
              <li>abhishek@example.com</li>
              <li>+91 9876543210</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            <span>© {currentYear} Abhishek. All Rights Reserved.</span>
            <span className="mx-1">Made with</span>
            <Heart size={14} className="text-red-500 mx-1" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

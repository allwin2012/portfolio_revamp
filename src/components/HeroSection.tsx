import { motion } from 'framer-motion';
import { ArrowDown, FileText, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-black pt-16 relative overflow-hidden">
      {/* Animated background */}
      <BackgroundAnimation />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black dark:text-white">
              Hi, I'm{' '}
              <TypeAnimation
                sequence={[
                  'Allwin A',
                  1000,
                  'a Developer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-green-700 dark:text-green-500"
              />
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300">
              Assistant Software Developer | Full-Stack | Power Platform | Automation
            </h2>
          </motion.div>
          
          <motion.p
            className="mt-6 max-w-2xl text-gray-600 dark:text-gray-400 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Passionate about creating elegant solutions through code. Specializing in web development
            and building applications that make a difference.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-green-700 dark:bg-green-500 text-white rounded-lg font-medium transition-all duration-300 hover:bg-green-800 dark:hover:bg-green-600 hover:scale-105 shadow-md"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={20} />
              Download Resume
            </motion.a>
            
            <motion.a
              href="https://github.com/allwin2012"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg font-medium transition-all duration-300 hover:bg-gray-900 dark:hover:bg-gray-800 hover:scale-105 shadow-md"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              GitHub
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/allwin-a-739286194/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#0077B5] text-white rounded-lg font-medium transition-all duration-300 hover:bg-[#006699] hover:scale-105 shadow-md"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} />
              LinkedIn
            </motion.a>
          </motion.div>
          
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="cursor-pointer"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex flex-col items-center"
              >
                <span className="text-gray-600 dark:text-gray-400 mb-2">Scroll Down</span>
                <ArrowDown className="text-green-700 dark:text-green-500" size={24} />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Background animation component
const BackgroundAnimation = () => {
  return (
    <>
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-green-100 dark:to-green-900/20 opacity-50 dark:opacity-30" />
      </div>

      {/* Animated particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-green-700/10 dark:bg-green-500/10"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [Math.random() * 100, Math.random() * -100],
            x: [Math.random() * 100, Math.random() * -100],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

export default HeroSection;

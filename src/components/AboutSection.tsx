import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-black dark:text-white mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto">
          {/* Avatar/Illustration */}
          <motion.div
            className="w-56 h-56 md:w-64 md:h-64 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-full h-full bg-gradient-to-br from-green-600 to-green-400 dark:from-green-500 dark:to-green-300 rounded-full flex items-center justify-center">
              {/* <User size={80} className="text-white" /> */}
              <img
              style={{ borderRadius: '130px' }}
                src="public\img\Serious Gaze in Denim and Headphones.png"
                alt="Allwin A"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-white dark:border-black animate-pulse" style={{ animationDuration: '3s' }} />
          </motion.div>

          {/* Bio Content */}
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-green-700 dark:text-green-500 mb-4">
              Software Developer
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Results-driven Software Developer with 2+ years of experience in developing, implementing, and maintaining
              software applications. Passionate about creating elegant solutions through code, with expertise in full-stack
              development, Power Platform, and automation technologies.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              My journey in technology began with a curiosity about how things work, which evolved into a passion for
              building applications that solve real-world problems. I specialize in creating responsive web applications
              and automating business processes to improve efficiency.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <h4 className="font-semibold text-black dark:text-white mb-2">Location</h4>
                <p className="text-gray-600 dark:text-gray-400">chennai, India</p>
              </div>
              <div>
                <h4 className="font-semibold text-black dark:text-white mb-2">Email</h4>
                <p className="text-gray-600 dark:text-gray-400">allwinraj2012@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-black dark:text-white mb-2">Degree</h4>
                <p className="text-gray-600 dark:text-gray-400">Master in Computer Science</p>
              </div>
              <div>
                <h4 className="font-semibold text-black dark:text-white mb-2">Languages</h4>
                <p className="text-gray-600 dark:text-gray-400">English, Tamil</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

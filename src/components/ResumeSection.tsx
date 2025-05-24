import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Download, FileText, School } from 'lucide-react';

const ResumeSection = () => {
  const [loading, setLoading] = useState(false);
  
  const handleDownload = () => {
    setLoading(true);
    // Simulating download delay
    setTimeout(() => {
      setLoading(false);
      // Replace with your actual resume PDF URL
      window.open('/resume.pdf', '_blank');
    }, 1000);
  };

  return (
    <section id="resume" className="min-h-screen flex items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center text-black dark:text-white mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Resume
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto">
          {/* Resume Preview */}
          <motion.div 
            className="w-full md:w-3/5 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-green-700 dark:text-green-500">
                Resume Preview
              </h3>
              <motion.button
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 bg-green-700 dark:bg-green-500 text-white rounded-lg transition-all duration-300 hover:bg-green-800 dark:hover:bg-green-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={loading}
              >
                {loading ? 'Loading...' : (
                  <>
                    <Download size={18} />
                    Download
                  </>
                )}
              </motion.button>
            </div>
            
            {/* Resume PDF Viewer (placeholder) */}
            {/* <div className="aspect-[8.5/11] bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden flex items-center justify-center">
              <FileText size={80} className="text-gray-400 dark:text-gray-500" />
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Click download to view the full resume
              </p>
            </div> */}
            <div className="aspect-[8.5/11] bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
  <iframe
    src="src\resume_repo\React_resume (7).pdf"
    title="Resume Preview"
    className="w-full h-full"
  />
</div>

          </motion.div>
          
          {/* Education & Certifications */}
          <motion.div 
            className="w-full md:w-2/5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Education */}
            <div className="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-700 dark:text-blue-500 mr-3">
                  <School size={24} />
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  Education
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-2 border-blue-500 pl-4 py-1">
                  <h4 className="text-lg font-medium text-black dark:text-white">Master's in Computer Science</h4>
                  <p className="text-gray-600 dark:text-gray-400">St.Josepsh's collage Trichy</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">2017 - 2021</p>
                </div>
                <div className="border-l-2 border-blue-500 pl-4 py-1">
                  <h4 className="text-lg font-medium text-black dark:text-white">Higher Secondary Education</h4>
                  <p className="text-gray-600 dark:text-gray-400">LFHSS Kumbakonam</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">2015 - 2017</p>
                </div>
              </div>
            </div>
            
            {/* Certifications */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-700 dark:text-purple-500 mr-3">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  Certifications
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-2 border-purple-500 pl-4 py-1">
                  <h4 className="text-lg font-medium text-black dark:text-white">
                    Microsoft Certified: Power Platform App Maker Associate (PL-100)
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Issued: September 2022</p>
                </div>
                <div className="border-l-2 border-purple-500 pl-4 py-1">
                  <h4 className="text-lg font-medium text-black dark:text-white">
                    React.js Advanced Concepts
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">Udemy</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Issued: May 2023</p>
                </div>
                <div className="border-l-2 border-purple-500 pl-4 py-1">
                  <h4 className="text-lg font-medium text-black dark:text-white">
                    Full-Stack Web Development
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">Udemy</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Issued: January 2022</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;

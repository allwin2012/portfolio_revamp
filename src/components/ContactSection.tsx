import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }

    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSubmitStatus({
      submitted: true,
      success: false,
      message: 'Sending your message...'
    });

    try {
      await emailjs.send(
        'service_em9513v', // Replace with your actual service ID
        'template_rqtgwkf', // Replace with your actual template ID
        {
          name: formState.name,
          email: formState.email,
          message: formState.message
        },
        'YO984Pe5BZJt0xOra' // Replace with your actual public key
      );

      setSubmitStatus({
        submitted: true,
        success: true,
        message: 'Thank you! Your message has been sent successfully.'
      });

      setFormState({
        name: '',
        email: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitStatus({
          submitted: false,
          success: false,
          message: ''
        });
      }, 5000);
    } catch (error) {
      setSubmitStatus({
        submitted: true,
        success: false,
        message: 'Oops! Something went wrong. Please try again later.'
      });

      setTimeout(() => {
        setSubmitStatus({
          submitted: false,
          success: false,
          message: ''
        });
      }, 5000);
    }
  };


  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-black dark:text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            className="w-full md:w-2/5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-green-700 dark:text-green-500 mb-6">
                Get in Touch
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-700 dark:text-green-500 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Email</h4>
                    <p className="text-black dark:text-white">allwinraj2012@gmail.com</p>

                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-700 dark:text-green-500 mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Phone</h4>
                    <p className="text-black dark:text-white">+91 8825619017</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-700 dark:text-green-500 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Location</h4>
                    <p className="text-black dark:text-white">Thiruvanmiyur, Chennai</p>
                  </div>
                </div>
              </div>

              <div className="flex mt-8 space-x-4">
                <motion.a
                  href="https://github.com/allwin2012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-green-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/allwin-a-739286194/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#0077B5] flex items-center justify-center text-white hover:bg-green-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/allwin_.a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-br flex items-center justify-center text-white hover:bg-green-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zM15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <circle cx="17" cy="7" r="1" fill="currentColor" />
                  </svg>
                </motion.a>

              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="w-full md:w-3/5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-green-700 dark:text-green-500 mb-6">
                Send a Message
              </h3>

              {submitStatus.submitted && submitStatus.success ? (
                <motion.div
                  className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 p-4 rounded-lg mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {submitStatus.message}
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <motion.div whileFocus={{ scale: 1.01 }}>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.name
                            ? 'border-red-500 dark:border-red-400'
                            : 'border-gray-300 dark:border-gray-600'
                          } bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all`}
                        placeholder="Your name"
                      />
                    </motion.div>
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <motion.div whileFocus={{ scale: 1.01 }}>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.email
                            ? 'border-red-500 dark:border-red-400'
                            : 'border-gray-300 dark:border-gray-600'
                          } bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all`}
                        placeholder="your.email@example.com"
                      />
                    </motion.div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <motion.div whileFocus={{ scale: 1.01 }}>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.message
                            ? 'border-red-500 dark:border-red-400'
                            : 'border-gray-300 dark:border-gray-600'
                          } bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all`}
                        placeholder="Your message"
                      />
                    </motion.div>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.message}</p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-700 dark:bg-green-500 text-white rounded-lg font-medium transition-all duration-300 hover:bg-green-800 dark:hover:bg-green-600"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={submitStatus.submitted}
                  >
                    {submitStatus.submitted ? 'Sending...' : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { motion } from 'framer-motion';
import { Brain, Phone, MessageSquare, Workflow, BarChart3, ChevronRight } from 'lucide-react';

function Home() {
  return (
    <div className="pt-16 bg-dark-900">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-radial from-neon-blue/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              Transform Your Business with AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Empower your SMB with cutting-edge AI solutions that drive growth and efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-glass-light text-neon-blue px-8 py-4 rounded-lg font-semibold hover:bg-glass-dark transition-all duration-200 border border-neon-blue neon-border">
                Get Started
              </button>
              <button className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold hover:bg-glass-light transition-all duration-200 border border-white/20">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SMB Market Statistics */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">SMB Market Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: '73%', description: 'of SMBs plan to adopt AI by 2025' },
              { number: '45%', description: 'increase in productivity with AI automation' },
              { number: '2.5x', description: 'faster growth rate for AI-enabled SMBs' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-card p-8 text-center"
              >
                <div className="text-4xl font-bold text-neon-blue mb-4">{stat.number}</div>
                <p className="text-gray-300">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Phone,
                title: 'AI Call System',
                description: 'Automated call handling with natural language processing',
              },
              {
                icon: MessageSquare,
                title: 'Custom AI Agents',
                description: 'Personalized chatbots that understand your business',
              },
              {
                icon: Workflow,
                title: 'Workflow Automation',
                description: 'Streamline operations with intelligent process automation',
              },
              {
                icon: BarChart3,
                title: 'Predictive Analysis',
                description: 'Data-driven insights for informed decision making',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-card p-6 hover:bg-glass-dark transition-all duration-200"
              >
                <service.icon className="h-12 w-12 text-neon-blue mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <button className="text-neon-blue font-semibold flex items-center hover:text-neon-purple transition-colors duration-200">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Understanding your needs' },
              { step: '02', title: 'Analysis', description: 'Identifying opportunities' },
              { step: '03', title: 'Implementation', description: 'Deploying solutions' },
              { step: '04', title: 'Optimization', description: 'Continuous improvement' },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-card p-6 relative"
              >
                <div className="text-4xl font-bold text-neon-blue/20 absolute top-4 right-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Clients Served' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '1M+', label: 'AI Interactions' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-neon-blue mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-dark-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            What Our Clients Say
          </h2>
          <motion.div
            animate={{ x: [-1000, 1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="flex gap-8"
          >
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO, TechStart',
                content:
                  'Sension AI transformed our customer service operations. The AI agents are incredibly efficient and our customers love the instant support.',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
              },
              {
                name: 'Michael Chen',
                role: 'Operations Director, GlobalTrade',
                content:
                  'The workflow automation solutions have reduced our processing time by 60%. A game-changer for our business.',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
              },
              {
                name: 'Emily Rodriguez',
                role: 'CTO, DataFlow',
                content:
                  'Their predictive analysis tools have given us invaluable insights into our business trends. Highly recommended!',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
              },
              {
                name: 'David Park',
                role: 'Founder, InnovateTech',
                content:
                  'The AI call system has revolutionized how we handle customer support. Our satisfaction rates have never been higher.',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
              },
              {
                name: 'Lisa Thompson',
                role: 'COO, FutureScale',
                content:
                  'Exceptional service and cutting-edge AI solutions. The team at Sension AI truly understands business needs.',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="glass-card min-w-[400px]"
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  delay: index * 2,
                  ease: 'easeInOut',
                }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-neon-blue"
                    />
                    <div className="ml-4">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-neon-blue text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex text-neon-blue mb-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>
                  <p className="text-gray-300">{testimonial.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            Questions & Answers
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'How quickly can AI solutions be implemented?',
                a: 'Implementation typically takes 2-4 weeks, depending on the complexity of your needs.',
              },
              {
                q: 'What kind of support do you provide?',
                a: '24/7 technical support, regular updates, and dedicated account management.',
              },
              {
                q: 'How do you ensure data security?',
                a: 'We employ enterprise-grade encryption and comply with all major security standards.',
              },
              {
                q: 'Can AI solutions be customized for my business?',
                a: 'Yes, all our solutions are tailored to meet your specific business requirements.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-card p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-300">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Let's Talk</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-dark-900 border border-glass-light rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-blue transition-colors duration-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-dark-900 border border-glass-light rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-blue transition-colors duration-200"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-dark-900 border border-glass-light rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-blue transition-colors duration-200"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-dark-900 border border-glass-light rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-blue transition-colors duration-200"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-glass-light text-neon-blue px-6 py-3 rounded-lg font-semibold hover:bg-glass-dark transition-all duration-200 border border-neon-blue neon-border"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
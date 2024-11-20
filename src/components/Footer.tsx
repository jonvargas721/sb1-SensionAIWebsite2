import { Brain, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark-800 border-t border-glass-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-neon-blue" />
              <span className="ml-2 text-xl font-bold text-white">Sension AI</span>
            </div>
            <p className="text-gray-400">
              Transforming businesses through intelligent automation solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Team', 'Blog'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-neon-blue transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'AI Call System',
                'Custom AI Agents',
                'Workflow Automation',
                'Predictive Analysis',
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>1234 AI Street</li>
              <li>Silicon Valley, CA 94025</li>
              <li>contact@sensionai.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-glass-light text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sension AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
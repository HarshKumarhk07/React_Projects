import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-secondary-dark to-secondary-900 pt-12 pb-8 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Emergency Contact */}
          <div className="transform transition-all duration-300 hover:translate-y-[-5px]">
            <h3 className="text-xl font-bold text-white mb-5 border-b-2 border-accent pb-2 inline-block">Emergency Contacts</h3>
            <ul className="space-y-3">
              <li className="flex items-center group">
                <span className="text-accent mr-3 bg-accent-900/30 p-2 rounded-full group-hover:bg-accent-800/50 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">National Emergency: <a href="tel:112" className="text-accent hover:text-accent-300 font-medium">112</a></span>
              </li>
              <li className="flex items-center group">
                <span className="text-accent mr-3 bg-accent-900/30 p-2 rounded-full group-hover:bg-accent-800/50 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Disaster Helpline: <a href="tel:1078" className="text-accent hover:text-accent-300 font-medium">1078</a></span>
              </li>
              <li className="flex items-center group">
                <span className="text-accent mr-3 bg-accent-900/30 p-2 rounded-full group-hover:bg-accent-800/50 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </span>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Email: <a href="mailto:help@disasteraware.gov" className="text-accent hover:text-accent-300 font-medium">help@disasteraware.gov</a></span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="transform transition-all duration-300 hover:translate-y-[-5px]">
            <h3 className="text-xl font-bold text-white mb-5 border-b-2 border-primary pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/report" className="text-gray-300 hover:text-white flex items-center group">
                  <span className="text-primary mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Report Missing Person</span>
                </Link>
              </li>
              <li>
                <Link to="/persons" className="text-gray-300 hover:text-white flex items-center group">
                  <span className="text-primary mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">View Missing Persons</span>
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-white flex items-center group">
                  <span className="text-primary mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">News & Advisories</span>
                </Link>
              </li>
              <li>
                <Link to="/location" className="text-gray-300 hover:text-white flex items-center group">
                  <span className="text-primary mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Location Information</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Government Links */}
          <div className="transform transition-all duration-300 hover:translate-y-[-5px]">
            <h3 className="text-xl font-bold text-white mb-5 border-b-2 border-secondary pb-2 inline-block">Government Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white flex items-center group">
                  <span className="text-secondary mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">National Disaster Management</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white flex items-center group">
                  <span className="text-secondary mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Weather Department</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white flex items-center group">
                  <span className="text-secondary mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Health Services</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white flex items-center group">
                  <span className="text-secondary mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Relief & Rehabilitation</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent font-bold">DisasterAware Portal</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
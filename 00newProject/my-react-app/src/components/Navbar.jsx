import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-md border-b border-slate-200' : 'bg-white/90 border-b border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <span className="text-xl font-bold text-slate-800">
                <span className="text-primary-600">Disaster</span> Management
              </span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            <NavLink to="/" isActive={isActive('/')}>Dashboard</NavLink>
            <NavLink to="/report" isActive={isActive('/report')}>Report Missing</NavLink>
            <NavLink to="/persons" isActive={isActive('/persons')}>View Persons</NavLink>
            <NavLink to="/news" isActive={isActive('/news')}>News</NavLink>
            <NavLink to="/location" isActive={isActive('/location')}>Location Info</NavLink>
            <NavLink to="/login" isActive={isActive('/login')} className="ml-2 bg-primary-600 hover:bg-primary-700 text-white">Login / Signup</NavLink>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-400"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6 nav-icon`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6 nav-icon`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-md border-b border-slate-200`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MobileNavLink to="/" isActive={isActive('/')}>Dashboard</MobileNavLink>
          <MobileNavLink to="/report" isActive={isActive('/report')}>Report Missing</MobileNavLink>
          <MobileNavLink to="/persons" isActive={isActive('/persons')}>View Persons</MobileNavLink>
          <MobileNavLink to="/news" isActive={isActive('/news')}>News</MobileNavLink>
          <MobileNavLink to="/location" isActive={isActive('/location')}>Location Info</MobileNavLink>
          <MobileNavLink to="/login" isActive={isActive('/login')} className="bg-primary-600 text-white">Login / Signup</MobileNavLink>
        </div>
      </div>
    </nav>
  );
};

// Desktop NavLink component
const NavLink = ({ to, children, isActive, className = '' }) => (
  <Link
    to={to}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
      isActive
        ? 'text-primary-700 bg-primary-50 border-b-2 border-primary-400'
        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
    } ${className}`}
  >
    {children}
  </Link>
);

// Mobile NavLink component
const MobileNavLink = ({ to, children, isActive, className = '' }) => (
  <Link
    to={to}
    className={`block px-3 py-2 rounded-md text-base font-medium ${
      isActive
        ? 'bg-primary-50 text-primary-700 border-l-4 border-primary-400'
        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
    } ${className}`}
  >
    {children}
  </Link>
);

export default Navbar;
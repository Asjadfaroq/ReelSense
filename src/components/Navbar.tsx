import { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import AuthContext from '../authContext/authcontext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const auth = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the current route is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Keep navbar actions in sync with login/logout
  useEffect(() => {
    const update = () => setIsLoggedIn(!!localStorage.getItem('token'));
    update();
    window.addEventListener('storage', update);
    return () => window.removeEventListener('storage', update);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav
      className={twMerge(
        'fixed top-0 left-0 w-full z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md shadow-lg py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center group">
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                ReelSense
              </span>
              <span className="ml-1 text-sm font-semibold bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent">
                AI
              </span>
            </Link>

            {/* Session action moved next to logo */}
            <div className="hidden md:flex items-center">
              {isLoggedIn ? (
                <button
                  type="button"
                  onClick={() => auth?.logout()}
                  className="flex items-center space-x-2 bg-gradient-to-r from-orange-400 to-amber-300 hover:from-orange-300 hover:to-yellow-200 text-slate-950 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
                >
                  <User size={16} />
                  <span>Logout</span>
                </button>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center space-x-2 bg-gradient-to-r from-orange-400 to-amber-300 hover:from-orange-300 hover:to-yellow-200 text-slate-950 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
                >
                  <User size={16} />
                  <span>Login</span>
                </Link>
              )}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={clsx(
                      'text-sm font-medium transition-colors duration-200 relative py-1',
                      isActive(link.path)
                        ? 'text-white'
                        : 'text-slate-300 hover:text-white'
                    )}
                  >
                    {link.name}
                    {isActive(link.path) && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-amber-300 rounded-full"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* User Actions */}
            <div className="flex items-center space-x-4 pl-6 border-l border-slate-700">
              <button className="text-slate-300 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-slate-300 hover:text-white p-2 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={toggleMobileMenu}
                  className={clsx(
                    'block px-3 py-3 rounded-md text-base font-medium transition-colors',
                    isActive(link.path)
                      ? 'bg-white/10 text-white'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-slate-800 grid grid-cols-2 gap-4">
                <Link
                  to="/movies"
                  onClick={toggleMobileMenu}
                  className="text-center py-2 text-slate-300 hover:text-white bg-white/5 rounded-lg"
                >
                  Movies
                </Link>
                <Link
                  to="/tv-shows"
                  onClick={toggleMobileMenu}
                  className="text-center py-2 text-slate-300 hover:text-white bg-white/5 rounded-lg"
                >
                  TV Shows
                </Link>
              </div>
              <div className="pt-4">
                {isLoggedIn ? (
                  <button
                    type="button"
                    onClick={() => {
                      toggleMobileMenu();
                      auth?.logout();
                    }}
                    className="flex items-center justify-center w-full space-x-2 bg-gradient-to-r from-orange-400 to-amber-300 text-slate-950 px-4 py-3 rounded-xl font-medium shadow-lg"
                  >
                    <User size={18} />
                    <span>Logout</span>
                  </button>
                ) : (
                  <Link
                    to="/login"
                    onClick={toggleMobileMenu}
                    className="flex items-center justify-center w-full space-x-2 bg-gradient-to-r from-orange-400 to-amber-300 text-slate-950 px-4 py-3 rounded-xl font-medium shadow-lg"
                  >
                    <User size={18} />
                    <span>Login</span>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;


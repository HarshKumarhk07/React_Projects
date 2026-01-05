import { useState } from 'react';

const Login = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    // Name validation (only for signup)
    if (activeTab === 'signup' && !formData.name) {
      newErrors.name = 'Name is required';
    }
    
    // Phone validation (only for signup)
    if (activeTab === 'signup' && !formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (activeTab === 'signup' && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form after success
        setTimeout(() => {
          setSubmitSuccess(false);
          setFormData({
            email: '',
            password: '',
            name: '',
            phone: ''
          });
        }, 3000);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-gradient-to-br from-secondary-900/50 to-secondary-800/50">
      <div className="max-w-md w-full space-y-8 bg-gradient-to-b from-secondary-800 to-secondary-900 p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-secondary-700">
        <div>
          <h2 className="text-center text-3xl font-extrabold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {activeTab === 'login' ? 'Sign in to your account' : 'Create a new account'}
          </h2>
        </div>
        
        {/* Tab Switcher */}
        <div className="flex border-b border-gray-700 mb-6">
          <button
            className={`flex-1 py-3 text-center transition-all duration-300 ${
              activeTab === 'login'
                ? 'border-b-2 border-accent text-accent'
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={`flex-1 py-2 text-center ${
              activeTab === 'signup'
                ? 'border-b-2 border-accent text-accent'
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab('signup')}
          >
            Signup
          </button>
        </div>
        
        {/* Success Message */}
        {submitSuccess && (
          <div className="bg-green-500/20 text-green-400 p-4 rounded-md text-center">
            {activeTab === 'login' ? 'Login successful!' : 'Account created successfully!'}
          </div>
        )}
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-3 bg-secondary-900/50 border ${
                  errors.email ? 'border-red-500' : 'border-gray-600'
                } rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent focus:border-accent text-white transition-all duration-300`}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-danger">{errors.email}</p>
              )}
            </div>
            
            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete={activeTab === 'login' ? 'current-password' : 'new-password'}
                value={formData.password}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-3 bg-secondary-900/50 border ${
                  errors.password ? 'border-red-500' : 'border-gray-600'
                } rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent focus:border-accent text-white transition-all duration-300`}
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-danger">{errors.password}</p>
              )}
            </div>
            
            {/* Signup Fields */}
            {activeTab === 'signup' && (
              <>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-1 block w-full px-3 py-3 bg-secondary-900/50 border ${
                      errors.name ? 'border-red-500' : 'border-gray-600'
                    } rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent focus:border-accent text-white transition-all duration-300`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-danger">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`mt-1 block w-full px-3 py-3 bg-secondary-900/50 border ${
                      errors.phone ? 'border-red-500' : 'border-gray-600'
                    } rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent focus:border-accent text-white transition-all duration-300`}
                    placeholder="1234567890"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-danger">{errors.phone}</p>
                  )}
                </div>
              </>
            )}
          </div>
          
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 shadow-lg transform transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : activeTab === 'login' ? (
                'Sign in'
              ) : (
                'Create account'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
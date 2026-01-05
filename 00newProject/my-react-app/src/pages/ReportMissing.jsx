import { useState } from 'react';

const ReportMissing = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    address: '',
    contactNumber: '',
    email: '',
    photo: null
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
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
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        photo: file
      });
      
      if (errors.photo) {
        setErrors({
          ...errors,
          photo: ''
        });
      }
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.age) newErrors.age = 'Age is required';
    else if (isNaN(formData.age) || parseInt(formData.age) <= 0) newErrors.age = 'Please enter a valid age';
    
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.address) newErrors.address = 'Address is required';
    
    if (!formData.contactNumber) newErrors.contactNumber = 'Contact number is required';
    else if (!/^\d{10}$/.test(formData.contactNumber)) newErrors.contactNumber = 'Please enter a valid 10-digit number';
    
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    
    if (!formData.photo) newErrors.photo = 'Please upload a photo';
    
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
        setShowSuccessModal(true);
      }, 1500);
    }
  };
  
  const closeModal = () => {
    setShowSuccessModal(false);
    // Reset form
    setFormData({
      fullName: '',
      age: '',
      gender: '',
      address: '',
      contactNumber: '',
      email: '',
      photo: null
    });
  };
  
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-white">Report Missing Person</h1>
        <p className="mt-2 text-gray-400">
          Please provide accurate information to help locate the missing person.
        </p>
      </div>
      
      <div className="bg-secondary-light rounded-lg shadow-lg p-6 md:p-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-secondary border ${
                  errors.fullName ? 'border-red-500' : 'border-gray-600'
                } rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-accent`}
                placeholder="Enter full name"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
              )}
            </div>
            
            {/* Age */}
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-300 mb-1">
                Age *
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-secondary border ${
                  errors.age ? 'border-red-500' : 'border-gray-600'
                } rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-accent`}
                placeholder="Enter age"
              />
              {errors.age && (
                <p className="mt-1 text-sm text-red-500">{errors.age}</p>
              )}
            </div>
            
            {/* Gender */}
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-300 mb-1">
                Gender *
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-secondary border ${
                  errors.gender ? 'border-red-500' : 'border-gray-600'
                } rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-accent`}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <p className="mt-1 text-sm text-red-500">{errors.gender}</p>
              )}
            </div>
            
            {/* Contact Number */}
            <div>
              <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-300 mb-1">
                Contact Number *
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-secondary border ${
                  errors.contactNumber ? 'border-red-500' : 'border-gray-600'
                } rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-accent`}
                placeholder="Enter 10-digit number"
              />
              {errors.contactNumber && (
                <p className="mt-1 text-sm text-red-500">{errors.contactNumber}</p>
              )}
            </div>
            
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-secondary border ${
                  errors.email ? 'border-red-500' : 'border-gray-600'
                } rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-accent`}
                placeholder="Enter email address"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            
            {/* Photo Upload */}
            <div>
              <label htmlFor="photo" className="block text-sm font-medium text-gray-300 mb-1">
                Upload Photo *
              </label>
              <div className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed ${
                errors.photo ? 'border-red-500' : 'border-gray-600'
              } rounded-md`}>
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-400">
                    <label
                      htmlFor="photo-upload"
                      className="relative cursor-pointer bg-secondary rounded-md font-medium text-accent hover:text-accent-light focus-within:outline-none"
                    >
                      <span>Upload a file</span>
                      <input
                        id="photo-upload"
                        name="photo-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-400">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
              {errors.photo && (
                <p className="mt-1 text-sm text-red-500">{errors.photo}</p>
              )}
              {formData.photo && (
                <p className="mt-2 text-sm text-green-400">
                  File selected: {formData.photo.name}
                </p>
              )}
            </div>
          </div>
          
          {/* Address */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-1">
              Address *
            </label>
            <textarea
              id="address"
              name="address"
              rows={3}
              value={formData.address}
              onChange={handleChange}
              className={`w-full px-4 py-2 bg-secondary border ${
                errors.address ? 'border-red-500' : 'border-gray-600'
              } rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-accent`}
              placeholder="Enter full address"
            />
            {errors.address && (
              <p className="mt-1 text-sm text-red-500">{errors.address}</p>
            )}
          </div>
          
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Submit Report'
              )}
            </button>
          </div>
        </form>
      </div>
      
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-secondary-light p-8 rounded-lg shadow-xl max-w-md w-full">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-500/20 mb-6">
                <svg className="h-10 w-10 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-white mb-2">Report Submitted Successfully</h3>
              <p className="text-gray-400 mb-6">
                Your missing person report has been submitted. Authorities will be notified and will contact you soon.
              </p>
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportMissing;
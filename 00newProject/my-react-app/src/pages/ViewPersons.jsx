import { useState } from 'react';

// Mock data for missing persons
const MOCK_PERSONS = [
  {
    id: 1,
    name: 'John Doe',
    age: 35,
    gender: 'Male',
    location: 'New Delhi, India',
    status: 'Missing',
    lastSeen: '2023-10-15',
    photo: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 28,
    gender: 'Female',
    location: 'Mumbai, Maharashtra',
    status: 'Found',
    lastSeen: '2023-10-10',
    photo: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    id: 3,
    name: 'Raj Kumar',
    age: 42,
    gender: 'Male',
    location: 'Chennai, Tamil Nadu',
    status: 'Missing',
    lastSeen: '2023-10-12',
    photo: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
  {
    id: 4,
    name: 'Priya Sharma',
    age: 19,
    gender: 'Female',
    location: 'Kolkata, West Bengal',
    status: 'Missing',
    lastSeen: '2023-10-14',
    photo: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    id: 5,
    name: 'Amit Patel',
    age: 32,
    gender: 'Male',
    location: 'Ahmedabad, Gujarat',
    status: 'Found',
    lastSeen: '2023-10-08',
    photo: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    id: 6,
    name: 'Sunita Verma',
    age: 25,
    gender: 'Female',
    location: 'Jaipur, Rajasthan',
    status: 'Missing',
    lastSeen: '2023-10-13',
    photo: 'https://randomuser.me/api/portraits/women/6.jpg'
  },
  {
    id: 7,
    name: 'Vikram Singh',
    age: 45,
    gender: 'Male',
    location: 'Lucknow, Uttar Pradesh',
    status: 'Found',
    lastSeen: '2023-10-09',
    photo: 'https://randomuser.me/api/portraits/men/7.jpg'
  },
  {
    id: 8,
    name: 'Meera Reddy',
    age: 22,
    gender: 'Female',
    location: 'Hyderabad, Telangana',
    status: 'Missing',
    lastSeen: '2023-10-11',
    photo: 'https://randomuser.me/api/portraits/women/8.jpg'
  }
];

const ViewPersons = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    status: 'all',
    gender: 'all',
    ageGroup: 'all'
  });
  const [currentPage, setCurrentPage] = useState(1);
  const personsPerPage = 6;

  // Filter persons based on search and filters
  const filteredPersons = MOCK_PERSONS.filter(person => {
    // Search term filter
    const matchesSearch = person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          person.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Status filter
    const matchesStatus = filters.status === 'all' || person.status === filters.status;
    
    // Gender filter
    const matchesGender = filters.gender === 'all' || person.gender === filters.gender;
    
    // Age group filter
    let matchesAgeGroup = true;
    if (filters.ageGroup !== 'all') {
      if (filters.ageGroup === 'under18' && person.age >= 18) matchesAgeGroup = false;
      if (filters.ageGroup === '18-30' && (person.age < 18 || person.age > 30)) matchesAgeGroup = false;
      if (filters.ageGroup === '31-50' && (person.age < 31 || person.age > 50)) matchesAgeGroup = false;
      if (filters.ageGroup === 'over50' && person.age <= 50) matchesAgeGroup = false;
    }
    
    return matchesSearch && matchesStatus && matchesGender && matchesAgeGroup;
  });
  
  // Pagination logic
  const indexOfLastPerson = currentPage * personsPerPage;
  const indexOfFirstPerson = indexOfLastPerson - personsPerPage;
  const currentPersons = filteredPersons.slice(indexOfFirstPerson, indexOfLastPerson);
  const totalPages = Math.ceil(filteredPersons.length / personsPerPage);
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
    setCurrentPage(1); // Reset to first page when filters change
  };
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when search changes
  };
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-white">Missing & Found Persons</h1>
        <p className="mt-2 text-gray-400">
          Search for missing persons or view those who have been found.
        </p>
      </div>
      
      {/* Search and Filters */}
      <div className="bg-secondary-light rounded-lg shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="md:col-span-4">
            <label htmlFor="search" className="block text-sm font-medium text-gray-300 mb-1">
              Search by name or location
            </label>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 bg-secondary border border-gray-600 rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Enter name or location"
            />
          </div>
          
          {/* Status Filter */}
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-300 mb-1">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              className="w-full px-4 py-2 bg-secondary border border-gray-600 rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="all">All</option>
              <option value="Missing">Missing</option>
              <option value="Found">Found</option>
            </select>
          </div>
          
          {/* Gender Filter */}
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-300 mb-1">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={filters.gender}
              onChange={handleFilterChange}
              className="w-full px-4 py-2 bg-secondary border border-gray-600 rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="all">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          {/* Age Group Filter */}
          <div>
            <label htmlFor="ageGroup" className="block text-sm font-medium text-gray-300 mb-1">
              Age Group
            </label>
            <select
              id="ageGroup"
              name="ageGroup"
              value={filters.ageGroup}
              onChange={handleFilterChange}
              className="w-full px-4 py-2 bg-secondary border border-gray-600 rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="all">All Ages</option>
              <option value="under18">Under 18</option>
              <option value="18-30">18-30</option>
              <option value="31-50">31-50</option>
              <option value="over50">Over 50</option>
            </select>
          </div>
          
          {/* Results Count */}
          <div className="flex items-end">
            <p className="text-sm text-gray-400">
              Showing <span className="font-medium text-white">{filteredPersons.length}</span> results
            </p>
          </div>
        </div>
      </div>
      
      {/* Person Cards Grid */}
      {currentPersons.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPersons.map((person) => (
            <div key={person.id} className="bg-gradient-to-b from-secondary-800 to-secondary-900 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden border border-secondary-700 hover:shadow-[0_8px_30px_rgba(14,165,233,0.15)] hover:-translate-y-1 transition-all duration-300">
              <div className="relative">
                <img 
                  src={person.photo} 
                  alt={person.name} 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300x400?text=No+Image';
                  }}
                />
                <div 
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-bold shadow-lg ${
                    person.status === 'Missing' 
                      ? 'bg-gradient-to-r from-danger-600 to-danger-500 text-white' 
                      : 'bg-gradient-to-r from-success-600 to-success-500 text-white'
                  }`}
                >
                  {person.status}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-3">{person.name}</h3>
                <div className="space-y-3 text-gray-300">
                  <p className="flex items-center">
                    <span className="font-medium mr-2 text-primary-300">Age:</span> {person.age}
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium mr-2 text-primary-300">Gender:</span> {person.gender}
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium mr-2 text-primary-300">Location:</span> {person.location}
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium mr-2 text-primary-300">Last Seen:</span> {person.lastSeen}
                  </p>
                </div>
                
                <div className="mt-6">
                  <button 
                    className="w-full px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium rounded-lg hover:from-primary-500 hover:to-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent shadow-lg transform transition-all duration-300 hover:scale-[1.02]"
                  >
                    Contact Authorities
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <svg className="mx-auto h-16 w-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-white">No results found</h3>
          <p className="mt-1 text-gray-400">Try adjusting your search or filter criteria.</p>
        </div>
      )}
      
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10">
          <nav className="flex items-center">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded-md mr-2 ${
                currentPage === 1
                  ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  : 'bg-secondary text-white hover:bg-secondary-light'
              }`}
            >
              Previous
            </button>
            
            <div className="flex space-x-1">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-3 py-1 rounded-md ${
                    currentPage === index + 1
                      ? 'bg-primary text-white'
                      : 'bg-secondary text-white hover:bg-secondary-light'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded-md ml-2 ${
                currentPage === totalPages
                  ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  : 'bg-secondary text-white hover:bg-secondary-light'
              }`}
            >
              Next
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default ViewPersons;
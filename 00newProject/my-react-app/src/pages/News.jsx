import { useState } from 'react';

// Mock data for news and advisories
const MOCK_NEWS = [
  {
    id: 1,
    title: 'Flood Warning: Coastal Areas on High Alert',
    category: 'Warning',
    date: '2023-10-15',
    description: 'Heavy rainfall expected in coastal regions. Residents advised to move to higher ground and follow evacuation procedures if necessary.',
    source: 'National Disaster Management Authority',
    image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5'
  },
  {
    id: 2,
    title: 'Relief Packages Distributed in Affected Areas',
    category: 'Relief',
    date: '2023-10-14',
    description: 'Government has started distributing relief packages including food, water, and medical supplies to affected communities.',
    source: 'Ministry of Home Affairs',
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6'
  },
  {
    id: 3,
    title: 'Emergency Shelters Open in Northern Districts',
    category: 'Advisory',
    date: '2023-10-13',
    description: 'Multiple emergency shelters have been established in northern districts. Citizens can locate the nearest shelter through the disaster portal.',
    source: 'State Emergency Services',
    image: 'https://images.unsplash.com/photo-1603033156166-2ae22eb2b7e2'
  },
  {
    id: 4,
    title: 'Health Advisory: Preventing Water-Borne Diseases',
    category: 'Health',
    date: '2023-10-12',
    description: 'Health officials issue guidelines to prevent water-borne diseases in flood-affected areas. Boil water before consumption and maintain hygiene.',
    source: 'Ministry of Health',
    image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144'
  },
  {
    id: 5,
    title: 'Rescue Operations Ongoing in Eastern Region',
    category: 'Operations',
    date: '2023-10-11',
    description: 'Military and disaster response teams continue rescue operations in eastern region. Over 500 people evacuated in the last 24 hours.',
    source: 'Defense Ministry',
    image: 'https://images.unsplash.com/photo-1498354178607-a79df2916198'
  },
  {
    id: 6,
    title: 'Power Restoration Efforts Underway',
    category: 'Infrastructure',
    date: '2023-10-10',
    description: 'Electricity department working to restore power in affected areas. Expected to be fully restored within 72 hours.',
    source: 'Ministry of Power',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e'
  },
  {
    id: 7,
    title: 'Schools to Remain Closed Until Further Notice',
    category: 'Advisory',
    date: '2023-10-09',
    description: 'All educational institutions in affected districts will remain closed. Online classes to continue where possible.',
    source: 'Ministry of Education',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b'
  },
  {
    id: 8,
    title: 'Earthquake Safety Guidelines Released',
    category: 'Safety',
    date: '2023-10-08',
    description: 'Updated earthquake safety guidelines released. Citizens advised to familiarize themselves with safety protocols and emergency exits.',
    source: 'Geological Survey Department',
    image: 'https://images.unsplash.com/photo-1584738766473-61c083514bf4'
  }
];

const News = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Get unique categories from news data
  const categories = ['All', ...new Set(MOCK_NEWS.map(item => item.category))];
  
  // Filter news based on category and search term
  const filteredNews = MOCK_NEWS.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-white">News & Advisories</h1>
        <p className="mt-2 text-gray-400">
          Stay updated with the latest disaster news, government advisories, and safety guidelines.
        </p>
      </div>
      
      {/* Search and Filter */}
      <div className="bg-secondary-light rounded-lg shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Search */}
          <div className="w-full md:w-1/2">
            <label htmlFor="search" className="block text-sm font-medium text-gray-300 mb-1">
              Search news and advisories
            </label>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 bg-secondary border border-gray-600 rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Search by title or content"
            />
          </div>
          
          {/* Category Filter */}
          <div className="w-full md:w-1/2">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Filter by category
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    activeCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-secondary text-gray-300 hover:bg-secondary-light'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* News Grid */}
      {filteredNews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((item) => (
            <div key={item.id} className="bg-gradient-to-b from-secondary-800 to-secondary-900 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden border border-secondary-700 hover:shadow-[0_8px_30px_rgba(14,165,233,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <div className="relative h-48">
                <img 
                  src={`${item.image}?auto=format&fit=crop&w=600&h=300`} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/600x300?text=News+Image';
                  }}
                />
                <div 
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold shadow-lg ${
                    item.category === 'Warning' ? 'bg-gradient-to-r from-danger-600 to-danger-500 text-white' :
                    item.category === 'Advisory' ? 'bg-gradient-to-r from-warning-600 to-warning-500 text-black' :
                    item.category === 'Relief' ? 'bg-gradient-to-r from-success-600 to-success-500 text-white' :
                    'bg-gradient-to-r from-accent-600 to-accent-500 text-white'
                  }`}
                >
                  {item.category}
                </div>
              </div>
              
              <div className="p-6 flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary-300">{item.date}</span>
                  <span className="text-xs text-gray-500">{item.source}</span>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-3">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
              </div>
              
              <div className="p-6 pt-0">
                <button 
                  className="w-full px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium rounded-lg hover:from-primary-500 hover:to-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent shadow-lg transform transition-all duration-300 hover:scale-[1.02]"
                >
                  Read Full Advisory
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <svg className="mx-auto h-16 w-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-white">No results found</h3>
          <p className="mt-1 text-gray-400">Try adjusting your search or filter criteria.</p>
        </div>
      )}
      
      {/* Safety Guidelines Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-white mb-6">Safety Guidelines</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Flood Safety */}
          <div className="bg-secondary-light rounded-lg shadow-lg p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-500/20 p-3 rounded-full">
                <svg className="h-6 w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">Flood Safety</h3>
                <ul className="mt-2 text-gray-300 space-y-2">
                  <li>• Move to higher ground immediately if flooding occurs</li>
                  <li>• Do not walk, swim, or drive through flood waters</li>
                  <li>• Stay off bridges over fast-moving water</li>
                  <li>• Evacuate if told to do so by authorities</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Earthquake Safety */}
          <div className="bg-secondary-light rounded-lg shadow-lg p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-yellow-500/20 p-3 rounded-full">
                <svg className="h-6 w-6 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">Earthquake Safety</h3>
                <ul className="mt-2 text-gray-300 space-y-2">
                  <li>• Drop, Cover, and Hold On during shaking</li>
                  <li>• Stay away from windows and exterior walls</li>
                  <li>• If outdoors, move to a clear area away from buildings</li>
                  <li>• After shaking stops, check for injuries and damage</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Fire Safety */}
          <div className="bg-secondary-light rounded-lg shadow-lg p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-red-500/20 p-3 rounded-full">
                <svg className="h-6 w-6 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">Fire Safety</h3>
                <ul className="mt-2 text-gray-300 space-y-2">
                  <li>• Create and practice a fire escape plan</li>
                  <li>• Install smoke alarms on every level of your home</li>
                  <li>• If trapped, close doors and cover vents to keep smoke out</li>
                  <li>• Crawl low under smoke to your exit</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Cyclone Safety */}
          <div className="bg-secondary-light rounded-lg shadow-lg p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-green-500/20 p-3 rounded-full">
                <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">Cyclone Safety</h3>
                <ul className="mt-2 text-gray-300 space-y-2">
                  <li>• Stay informed about weather conditions</li>
                  <li>• Secure your home and remove outdoor items</li>
                  <li>• Have emergency supplies ready</li>
                  <li>• Follow evacuation orders from local authorities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
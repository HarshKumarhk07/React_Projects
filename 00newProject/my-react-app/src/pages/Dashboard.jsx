import { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [selectedLocation, setSelectedLocation] = useState('All Regions');

  
  // Mock data - would come from API in real implementation
  const stats = {
    missingPersons: 248,
    foundPersons: 156,
    deathCount: 32
  };
  
  const newsItems = [
    {
      id: 1,
      title: 'Flash floods reported in coastal regions',
      date: '2 hours ago',
      type: 'alert'
    },
    {
      id: 2,
      title: 'Emergency shelters open in northern districts',
      date: '5 hours ago',
      type: 'update'
    },
    {
      id: 3,
      title: 'Weather department issues cyclone warning',
      date: '1 day ago',
      type: 'warning'
    },
    {
      id: 4,
      title: 'Relief supplies being distributed in affected areas',
      date: '1 day ago',
      type: 'update'
    }
  ];
  
  const locations = ['All Regions', 'North Region', 'South Region', 'East Region', 'West Region', 'Central Region'];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200/70">
      {/* Hero Section */}
      <section className="py-10 px-4">
        <div className="max-w-screen-2xl w-full mx-auto">
          <div className="bg-white rounded-2xl shadow-soft p-8 md:p-10 border border-slate-200">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
                  Government Dashboard
                </h1>
                <p className="text-slate-600 mt-2 max-w-2xl">
                  Monitor and manage disaster events across the country efficiently
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <Link to="/report" className="btn btn-primary">
                  + Add Disaster
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Location Selector */}
      <section className="py-6 px-4">
        <div className="max-w-screen-2xl w-full mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-800 mb-4 md:mb-0">
              Disaster Information by Location
            </h2>
            <div className="w-full md:w-auto">
              <select 
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full md:w-64 px-4 py-2 bg-white border border-slate-300 rounded-md text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-300"
              >
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>
      
      {/* Statistics Section */}
      <section className="py-12 px-4">
        <div className="max-w-screen-2xl w-full mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Current Situation: {selectedLocation}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Missing Persons Stat */}
            <div className="card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-sm">Total Missing</p>
                  <h3 className="text-3xl font-bold text-slate-800">{stats.missingPersons}</h3>
                </div>
                <div className="bg-red-500/10 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
              </div>
              <div className="mt-4">
                <Link to="/persons" className="text-primary-700 text-sm hover:underline">View details →</Link>
              </div>
            </div>
            
            {/* Found Persons Stat */}
            <div className="card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-sm">Found Persons</p>
                  <h3 className="text-3xl font-bold text-slate-800">{stats.foundPersons}</h3>
                </div>
                <div className="bg-green-500/10 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="mt-4">
                <Link to="/persons" className="text-primary-700 text-sm hover:underline">View details →</Link>
              </div>
            </div>
            
            {/* Death Count Stat */}
            <div className="card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-sm">Death Count</p>
                  <h3 className="text-3xl font-bold text-slate-800">{stats.deathCount}</h3>
                </div>
                <div className="bg-slate-400/10 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="mt-4">
                <Link to="/news" className="text-primary-700 text-sm hover:underline">More information →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* News Feed Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Active Disasters</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {newsItems.map(item => (
              <div key={item.id} className="card p-4 flex flex-col gap-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-primary-700">{item.title}</h3>
                  <span className={`px-3 py-1 text-xs rounded-full ${
                    item.type === 'alert' ? 'bg-red-100 text-red-600' : 
                    item.type === 'warning' ? 'bg-amber-100 text-amber-700' : 
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {item.type.toUpperCase()}
                  </span>
                </div>
                <p className="text-sm text-slate-500">{item.date}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/news" className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors">
              View All Updates
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;


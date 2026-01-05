import { useState } from 'react';

// Mock data for locations and disaster information
const LOCATIONS = [
  { id: 1, name: 'New Delhi', state: 'Delhi' },
  { id: 2, name: 'Mumbai', state: 'Maharashtra' },
  { id: 3, name: 'Chennai', state: 'Tamil Nadu' }
];

const DISASTER_INFO = {
  'New Delhi': {
    weather: { condition: 'Clear', temperature: '32°C' },
    activeDisasters: [{ type: 'Heat Wave', severity: 'Moderate' }],
    shelters: [{ name: 'Community Center A', address: '123 Main St', capacity: 200, occupancy: 50 }]
  },
  'Mumbai': {
    weather: { condition: 'Heavy Rain', temperature: '27°C' },
    activeDisasters: [{ type: 'Flooding', severity: 'Severe' }],
    shelters: [{ name: 'Municipal Hall A', address: '123 Marine Dr', capacity: 250, occupancy: 200 }]
  },
  'Chennai': {
    weather: { condition: 'Partly Cloudy', temperature: '30°C' },
    activeDisasters: [{ type: 'Cyclone Warning', severity: 'High' }],
    shelters: [{ name: 'Convention Center A', address: '123 Beach Rd', capacity: 400, occupancy: 250 }]
  }
};

const LocationInfo = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [locationData, setLocationData] = useState(null);
  
  const handleLocationChange = (e) => {
    const location = e.target.value;
    setSelectedLocation(location);
    setLocationData(location ? DISASTER_INFO[location] : null);
  };
  
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-white">Location-based Disaster Information</h1>
        <p className="mt-2 text-gray-400">
          Select a location to view current weather conditions, active disasters, and available shelters.
        </p>
      </div>
      
      {/* Location Selector */}
      <div className="bg-secondary-light rounded-lg shadow-lg p-6 mb-8">
        <label htmlFor="location" className="block text-lg font-medium text-white mb-3">
          Select Location
        </label>
        <select
          id="location"
          value={selectedLocation}
          onChange={handleLocationChange}
          className="w-full md:w-1/2 px-4 py-3 bg-secondary border border-gray-600 rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-accent text-lg"
        >
          <option value="">-- Select a location --</option>
          {LOCATIONS.map((location) => (
            <option key={location.id} value={location.name}>
              {location.name}, {location.state}
            </option>
          ))}
        </select>
      </div>
      
      {locationData ? (
        <div className="space-y-8">
          {/* Weather Information */}
          <div className="bg-secondary-light rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-accent p-6">
              <h2 className="text-2xl font-bold text-white">Current Weather Conditions</h2>
            </div>
            <div className="p-6">
              <div className="flex items-center">
                <div className="ml-4">
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-2">Condition:</span>
                    <span className="text-white font-medium">{locationData.weather.condition}</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <span className="text-gray-400 mr-2">Temperature:</span>
                    <span className="text-white font-medium">{locationData.weather.temperature}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Active Disasters */}
          <div className="bg-secondary-light rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-danger to-danger/70 p-6">
              <h2 className="text-2xl font-bold text-white">Active Disasters</h2>
            </div>
            <div className="p-6">
              {locationData.activeDisasters.length > 0 ? (
                <div className="space-y-4">
                  {locationData.activeDisasters.map((disaster, index) => (
                    <div key={index} className="bg-secondary rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <h3 className="text-xl font-medium text-white">{disaster.type}</h3>
                      </div>
                      <div>
                        <span className="text-gray-400 text-sm">Severity</span>
                        <p className="text-white">{disaster.severity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <h3 className="mt-2 text-xl font-medium text-white">No Active Disasters</h3>
                  <p className="mt-1 text-gray-400">This location is currently safe from disasters.</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Shelters */}
          <div className="bg-secondary-light rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-success to-success/70 p-6">
              <h2 className="text-2xl font-bold text-white">Safe Shelters & Evacuation Centers</h2>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-secondary text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 bg-secondary text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Address</th>
                      <th className="px-6 py-3 bg-secondary text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Capacity</th>
                    </tr>
                  </thead>
                  <tbody className="bg-secondary divide-y divide-gray-700">
                    {locationData.shelters.map((shelter, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{shelter.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{shelter.address}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{shelter.occupancy}/{shelter.capacity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* Map Placeholder */}
          <div className="bg-secondary-light rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-accent to-accent/70 p-6">
              <h2 className="text-2xl font-bold text-white">Evacuation Routes</h2>
            </div>
            <div className="p-6">
              <div className="bg-gray-700 rounded-lg h-60 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-medium text-white">Map Placeholder</h3>
                  <p className="mt-1 text-gray-400">Interactive evacuation map will be available soon.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-secondary-light rounded-lg shadow-lg p-12 text-center">
          <h3 className="mt-4 text-xl font-medium text-white">Select a Location</h3>
          <p className="mt-2 text-gray-400">
            Choose a location from the dropdown above to view disaster information.
          </p>
        </div>
      )}
    </div>
  );
};

export default LocationInfo;
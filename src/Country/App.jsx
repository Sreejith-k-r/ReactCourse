import React, { useState, useEffect } from 'react';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [loadingStates, setLoadingStates] = useState(false);

  // Directly embed API key (replace 'YOUR_API_KEY' with your actual key)
  const API_KEY = 'X-CSCAPI-KEY';

  const requestOptions = {
    method: 'GET',
    headers: {
      'X-CSCAPI-KEY': API_KEY
    },
    redirect: 'follow'
  };

  // Fetch countries on component mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://api.countrystatecity.in/v1/countries", requestOptions);
        const result = await response.json();
        setCountries(result);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    fetchCountries();
  }, []);

  // Fetch states when a country is selected
  useEffect(() => {
    if (selectedCountry) {
      setLoadingStates(true);
      const fetchStates = async () => {
        try {
          const response = await fetch(
            `https://api.countrystatecity.in/v1/countries/${selectedCountry}/states`,
            requestOptions
          );
          const result = await response.json();
          setStates(result);
        } catch (error) {
          console.error('Error fetching states:', error);
        } finally {
          setLoadingStates(false);
        }
      };
      fetchStates();
    }
  }, [selectedCountry]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Country & State Selector</h1>

      {/* Country Dropdown */}
      <div>
        <label htmlFor="country">Select Country:</label>
        <select
          id="country"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="">-- Select a Country --</option>
          {countries.map(country => (
            <option key={country.iso2} value={country.iso2}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      {/* State Dropdown */}
      <div style={{ marginTop: '20px' }}>
        <label htmlFor="state">Select State:</label>
        <select id="state" disabled={!selectedCountry || loadingStates}>
          <option value="">
            {loadingStates ? 'Loading states...' : '-- Select a State --'}
          </option>
          {states.map(state => (
            <option key={state.iso2} value={state.iso2}>
              {state.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default App;
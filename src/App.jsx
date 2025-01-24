import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const Api_key = "45c781eb2836a5008acc2364371b0824";
  const Base_Url = "https://api.themoviedb.org/3/movie";
  const images_url = "https://image.tmdb.org/t/p/original";

  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch movies based on the current page
  async function fetchPopularMovie(page = 1) {
    setLoading(true);
    setError(null);
    try {
      const params = {
        api_key: Api_key,
        page: page,
      };
      const response = await axios.get(`${Base_Url}/popular`, { params });
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      setError('Error fetching movies');
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  }

  // UseEffect with dependency to avoid infinite loops
  useEffect(() => {
    fetchPopularMovie(currentPage);
  }, [currentPage]);

  // Handle navigation
  function handleNext() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function handlePrev() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div>
      <h1>Upcoming Movies</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {movies.map((item) => (
          <div key={item.id} style={{ textAlign: 'center' }}>
            <p>{item.original_title}</p>
            <img
              src={`${images_url}${item.poster_path}`}
              alt={item.original_title}
              height="300"
              width="200"
            />
          </div>
        ))}
      </div>
      <div style={{ margin: '20px 0', textAlign: 'center' }}>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </button>
        <span style={{ margin: '0 10px' }}>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default App;









// import React, { useState } from 'react'

// const App = () => {


//   const [value, setValue] = useState("");
//   function HandleClick(e) {
//     e.preventDefault();
//     console.log(value);
    

//   return (
//     <div>App</div>
//   )
// }

// export default App






// import React from 'react'

// const App = () => {
//   return React.createElement(
//     "section",(className:"App"),React
//   )
// }

// export default App
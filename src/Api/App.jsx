import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchImages = () => {
    fetch(
      `https://pixabay.com/api/?key=46536254-d2ef223e3dc48eadb242f6482&q=${search}&image_type=photo&page=${page}&per_page=10`
    )
      .then((res) => res.json())
      .then((d) => {
        setData(d.hits);
        setTotalPages(Math.ceil(d.totalHits / 25)); // Calculate total pages
      });
  };

  useEffect(() => {
    fetchImages();
  }, [search, page]);

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="app">
      <nav className="navbar" style={{
          backgroundImage: "url('https://cdn.pixabay.com/photo/2017/06/06/20/35/auto-2378367_640.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <div className="logo" style={{ fontSize: "50px", fontWeight: "bold", marginTop:"-300px", marginLeft:"100px" }}>
          Pixabay
        </div>
        <div style={{ textAlign: "center", flex: 1 }}>
          <p style={{ fontSize: "40px", fontWeight:"bolder", marginBottom: "10px", lineHeight: "1.5" }}>
            Stunning royalty-free images & royalty-free stock
          </p>
          <div className="search-container" style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "grey",
              borderRadius: "20px",
              padding: "5px 10px",
              maxWidth: "400px",
              margin: "0 auto",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              width: '400px',
            }}>
            <span style={{ color: "white", marginRight: "10px" }}>🔍</span>
            <input
              type="text"
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              placeholder="Search here"
              style={{
                border: "none",
                outline: "none",
                padding: "12px 10px",
                borderRadius: "20px",
                flex: 1,
                backgroundColor: "white",
                color:"black",
              }}
            />
          </div>
        </div>
      </nav>

      <div style={{ fontSize:"20px", fontWeight: 'bolder', marginTop:"50px", marginLeft:"80px" }}>
        Over 5.2 million+ high quality stock images, videos and music shared by our talented community.
      </div>
      <div className="pix" style={{ padding: "20px" }}>
        {data.map((item, index) => (
          <div className="image-container" key={index}>
            <img
              src={item.largeImageURL}
              alt=""
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div id='btn1' style={{ textAlign: 'center', margin: '20px' }}>
        <button
          onClick={handlePrev}
          disabled={page === 1}
          style={{ margin: '0 10px', padding: '10px 20px', cursor: page === 1 ? 'not-allowed' : 'pointer' }}
        >
          Prev
        </button>
        <span> {page} </span>
        <button
          onClick={handleNext}
          disabled={page === totalPages}
          style={{ margin: '0 10px', padding: '10px 20px', cursor: page === totalPages ? 'not-allowed' : 'pointer' }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=46536254-d2ef223e3dc48eadb242f6482&q=${search}&image_type=photo`
    )
      .then((res) => res.json())
      .then((d) => setData(d.hits));
  }, [search]);

  return (
    <div className="app">
      {/* Navbar Section */}
      <nav
        className="navbar"
        style={{
          backgroundImage: "url('https://cdn.pixabay.com/photo/2017/06/06/20/35/auto-2378367_640.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div
          className="logo"
          style={{
            fontSize: "50px",
            fontWeight: "bold",
            marginTop:"-300px",
            marginLeft:"100px",
          }}
        >
          Pixabay
        </div>

        {/* Center Content */}
        <div
          style={{
            textAlign: "center",
            flex: 1,
          }}
        >
          {/* Paragraph */}
          <p
            style={{
              fontSize: "40px",
              fontWeight:"bolder",
              marginBottom: "10px",
              lineHeight: "1.5",
            }}
          >
            Stunning royalty-free images & royalty-free stock
          </p>

          {/* Search Input */}
          <div
            className="search-container"
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "grey",
              borderRadius: "20px",
              padding: "5px 10px",
              maxWidth: "400px",
              margin: "0 auto",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              width: '400px',
            }}
          >
            <span style={{ color: "white", marginRight: "10px" }}>🔍</span>
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search here"
              style={{
                border: "none",
                outline: "none",
                padding: "12px 10px",
                borderRadius: "20px",
                flex: 1,
                backgroundColor: "grey",
                color:"white",
              }}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="actions" style={{ display: "flex", gap: "20px" , marginTop:"-300px", marginRight:"60px"}}>
          <button
            style={{
              padding: "8px 20px",
              borderRadius: "50px",
              border: "none",
              backgroundColor: "gray",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Join
          </button>
          <button
            style={{
              padding: "15px 25px",
              borderRadius: "50px",
              border: "none",
              backgroundColor: "#28A745",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Upload
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{fontSize:"20px", fontWeight: 'bolder', marginTop:"50px", marginLeft:"80px"}}>Over 5.2 million+ high quality stock images, videos and music shared by our talented community.</div>
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
    </div>
  );
};

export default App;
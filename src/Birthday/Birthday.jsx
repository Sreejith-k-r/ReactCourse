import React, { useState } from "react";
import './Birthday.scss'
const Birthday = () => {
  const [data, setData] = useState([
    {
      name: "Shilpa",
      age: 21,
      image: "https://cdn.pixabay.com/photo/2016/11/21/12/35/woman-1845100_640.jpg", 
    },
    {
      name: "Shree",
      age: 22,
      image: "https://cdn.pixabay.com/photo/2017/06/06/16/48/woman-2377742_640.jpg", 
    },
    {
      name: "Praji",
      age: 22,
      image: "https://cdn.pixabay.com/photo/2020/10/28/14/01/man-5693573_1280.jpg", 
    },
    {
      name: "Kavi",
      age: 21,
      image: "https://cdn.pixabay.com/photo/2020/09/25/16/50/portrait-5601950_640.jpg",
    },
    {
      name: "Rino",
      age: 23,
      image: "https://cdn.pixabay.com/photo/2022/06/21/08/57/male-7275449_640.jpg",
    },
    {
      name: "Arun",
      age: 21,
      image: "https://cdn.pixabay.com/photo/2018/08/27/00/07/toy-3633751_640.jpg", 
    },
    {
      name: "Sree",
      age: 22,
      image: "./img/sree.jpg", 
    },
  ]);

  return (
    <div className="Birthday">
    <div className="cards">
      <h1 id="title" >{data.length} Birthdays Today</h1>
      {data.map((item, index) => (
        <div className="box" key={index} style={{ display: "flex", marginBottom: "10px" }}>
          <img
            src={item.image}
            alt={item.name}
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
      
          <div className="detail" style={{ marginLeft: "10px" }}>
            <h2>{item.name}</h2>
            <p>Age: {item.age}</p>
          </div>
          </div>
      ))}
      <button onClick={() => setData([])}>Clear All</button>
    </div>
    </div>
  );
};

export default Birthday;

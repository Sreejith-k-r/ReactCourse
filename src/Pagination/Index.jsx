import React, { useState } from 'react';
import Data from './Data.json';

const Index = () => {
  const recordsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const TotalPages = Math.ceil(Data.length / recordsPerPage);

  const getCurrentRecords = () => {
    const firstIndex = (currentPage - 1) * recordsPerPage;
    const lastIndex = firstIndex + recordsPerPage;
    return Data.slice(firstIndex, lastIndex);
  };

  const handleNext = () => {
    if (currentPage < TotalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      <div>
        {getCurrentRecords().map((record, index) => (
          <div key={index} className="record">
            {record.name}
          </div>
        ))}
      </div>
        <button disabled={currentPage === 1} onClick={handlePrev}>
          Prev
        </button>
        <span>
          {currentPage} 
        </span>
        <button disabled={currentPage === TotalPages} onClick={handleNext}>
          Next
        </button>
        </>
  );
};

export default Index;

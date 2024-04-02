import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/test/api/images?userID=zmmSNFNbvt')
      .then(response => {
        setImages(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
    {images.map((image, index) => (
      <div key={index}>
        <img src={`data:${image.contentType};base64,${image.data}`} alt={`leaf ${index}`} />
      </div>
    ))}
  </div>
  );
}

export default App;

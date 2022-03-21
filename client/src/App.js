import './App.css';
import Search from './Search';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [APIData, setAPIData] = useState([])
  useEffect(() => {
    axios.get(`https://reqres.in/api/users?page=2`)
        .then((response) => {
            setAPIData(response.data.data);
        })
}, [])

  return (
    <div className="App">
      <Search APIData={APIData} setAPIData={setAPIData}/>
    </div>
  );
}

export default App;
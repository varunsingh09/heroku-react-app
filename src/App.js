import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const [data, setData] = useState("");

  useEffect(() => {
    fetchMovies();
  }, [])

  const fetchMovies = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    const response = await fetch(url)
    const data = await response.json();
    console.log('response', data)

  }
  console.log('data', data)
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default App;

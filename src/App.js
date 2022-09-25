import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
import HostPage from './HostPage'


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

{/* <Route path="/" component={Home} /> */}

function App() {
  return (

    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/search" element={<SearchPage/>} />
          <Route exact path="/host" element={<HostPage/>} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

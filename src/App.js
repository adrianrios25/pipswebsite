import React, { Component } from 'react';
import './App.css';
import 'react-slideshow-image/dist/styles.css'
import Home from './components/Pages/Home'
import CV from './components/Pages/CV'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cv" element={<CV />} />
        </Routes>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;

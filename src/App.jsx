import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Carousel } from './components/Carousel';
import { slides } from "./data/carouselData.json";
import './App.css';
import Video from './components/Video';

function App() {
  return (
    <div>
      <Header />
      <div className="carousel-container">
        <Carousel data={slides} />
        <div className="carousel-right">
          <Carousel data={slides} />
        </div>
        <div className="video-container">
          <Video />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

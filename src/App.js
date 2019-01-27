import React, { Component } from 'react';
import Slider from './components/Carousel'
import "./assets/css/main.css";
import "./assets/css/carousel.css";


const SETTING = {
  responsive: [
    {
      breakPoint: 360,
      slidesCount: 1,
    },
    {
      breakPoint: 480,
      slidesCount: 2,
    },
    {
      breakPoint: 640,
      slidesCount: 3,
    },
    {
      breakPoint: 760,
      slidesCount: 4,
    }
  ],
  slideMargin: 10,
}
class App extends Component {

  render() {
    return (
      <div>
        <h1>Carousel</h1>

        <Slider setting={SETTING} images={[]} />

      </div>
    );
  }
}

export default App;

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

        <Slider setting={SETTING} images={[
            "https://c1.staticflickr.com/6/5714/22935650664_25d95ac9b2_n.jpg",
            "https://c1.staticflickr.com/6/5627/23473233535_d0c2cc9360_b.jpg",
            "https://c1.staticflickr.com/9/8692/16548662374_fc0f020f31_h.jpg",
            "https://c1.staticflickr.com/5/4102/5011370054_31e8d387ee.jpg",
            "https://c1.staticflickr.com/5/4710/39639230661_1ce200820d_n.jpg"
        ]} />

      </div>
    );
  }
}

export default App;

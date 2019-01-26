import React, { Component } from 'react';
import Slider from './components/Carousel'
import "./assets/css/carousel.css";


const SETTING = {
  imagesCountPerSlide: 2,
  slideWidth: 300,
}
class App extends Component {

  render() {
    return (
      <div>
        <h1>Carousel</h1>

        <Slider setting={SETTING} images={[
            "https://c1.staticflickr.com/6/5160/5842762981_b225d9a308_b.jpg",
            "https://c1.staticflickr.com/9/8459/29491986160_d7435d55d5_c.jpg",
            "https://c1.staticflickr.com/8/7426/16298657569_b606bae4fe_b.jpg",
            "https://c1.staticflickr.com/5/4102/5011370054_31e8d387ee.jpg",
            "https://c1.staticflickr.com/1/742/23097463112_ed9b34cc88_c.jpg"
        ]} />

      </div>
    );
  }
}

export default App;

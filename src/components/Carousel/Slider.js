import React, { Component } from 'react';
import Image from "./Image";



export default class Slider extends Component {
    state = {
        images: [],
        imagesCount: 0,
        currentIndex: 0,
        translateValue: 0,
        swipStart: 0,
        swipEnd: 0,
        imagesCountPerSlide: 1, 
        slideWidth: 300
    }

    componentDidMount = () => {
        const { setting:  {imagesCountPerSlide, slideWidth}, images} = this.props; 
        this.setState({
            images,
            imagesCount: images.length,
            imagesCountPerSlide,
            slideWidth
        });
    }

    _swipStart = (e) => {
        const obj = e.changedTouches[0];
        //console.log(obj);
        const { pageX } = obj;
        this.setState({swipStart: pageX});
    }

    _swipEnd = (e) => {
        const { pageX }  = e.changedTouches[0];
        const { swipStart } = this.state;
        if(pageX - swipStart < 0){
            this._next();
        }else {
            this._prev();
        }
    }


    _next = () => {
        const w = document.querySelector('.carousel-image').clientWidth;
        let { imagesCount, currentIndex, translateValue } = this.state; 

        if(currentIndex + 1 === imagesCount){
            // do nothing
        }else {
            currentIndex++;
            translateValue = translateValue - w - 10;
        }
        this.setState({
            currentIndex,
            translateValue,
          });
    }

    _prev = () => {
        const w = document.querySelector('.carousel-image').clientWidth;
        let { currentIndex, translateValue } = this.state; 
        if(currentIndex === 0){
            currentIndex = 0;
            translateValue = 0;
        }else {
            currentIndex--;
            translateValue = translateValue + w + 10;
        }
        this.setState({
            currentIndex,
            translateValue,
          });
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.swipStart !== nextState.swipStart){
            return false;
        }
        return true;
    }
    

    render(){
        return(
            <div className="carousel-slider">
                <div className="carousel-container"
                     style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.30s'
                      }} 
                      onTouchStart={this._swipStart.bind(this)}
                      onTouchEnd={this._swipEnd.bind(this)}
                      >

                    { this.state.images.map( (url, i) => <Image src={url} id={`carousel-image-${i}`} 
                        className="carousel-image"  key={i} />)}
                </div>
                <button onClick={this._prev.bind(this)}> Prev </button>
                 <button onClick={this._next.bind(this)}> Next </button>
            </div>
        );
    }
}
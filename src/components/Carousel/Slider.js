import React, { Component } from 'react';
import Slide from './Slide';
import Image from "./Image";
import {NextBtn, PrevBtn, NextArrow, PrevArrow } from './NavBtn';



export default class Slider extends Component {

    constructor(props){
        super(props);
        this.state = {
            images: [],
            imagesCount: 0,
            currentIndex: 0,
            translateValue: 0,
            swipStart: 0,
            swipEnd: 0,
            imagesCountPerSlide: 1, 
            slideWidth: 300,
            slideMargin: 10,
        }

        this._resize = this._resize.bind(this);
    }

    componentDidMount = () => {
        window.addEventListener('resize', this._resize);
        this._resize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._resize);
    }
    /**
     resize event hanler,
     set the count of slide that will be displayed in one view,
     using the setting passed by props.
     the default value is one slide per view.
    */
    _resize = () => {
        const { setting:  {imagesCountPerSlide, responsive, slideMargin}, images} = this.props; 
        const slideWidth = window.innerWidth;

        let slidesCount = imagesCountPerSlide || 1;

        if(responsive.length > 0){
            const responsiveSorted = responsive.sort(
                (a,b) => (a.breakPoint > b.breakPoint) ? 1 : ((b.breakPoint < a.breakPoint) ? -1 : 0));
            
            const responsiveFiltered = responsiveSorted.filter(item => item.breakPoint >= slideWidth);
            
            const responsiveItem = responsiveFiltered.length === 0 ? responsiveSorted[responsiveSorted.length - 1] : responsiveFiltered[0];
    
            slidesCount = responsiveItem.slidesCount;
        }
               
        this.setState({
            images,
            imagesCount: images.length,
            slideWidth,
            imagesCountPerSlide: slidesCount,
            slideMargin,
        });
    }

    _swipStart = (e) => {
        const obj = e.changedTouches[0];
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
        let { imagesCount, currentIndex, translateValue, imagesCountPerSlide, slideWidth } = this.state; 
        console.log(currentIndex)
        console.log(imagesCount - (currentIndex ))
        if(imagesCount - currentIndex  < imagesCountPerSlide){
            currentIndex = imagesCountPerSlide - (imagesCountPerSlide - (imagesCount%imagesCountPerSlide));
        }else {
            currentIndex += imagesCountPerSlide;
            //console.log(currentIndex,imagesCountPerSlide - (imagesCountPerSlide - (imagesCount%imagesCountPerSlide)))
            //currentIndex += imagesCountPerSlide - (imagesCountPerSlide - (imagesCount%imagesCountPerSlide));
            ////translateValue = translateValue - slideWidth;
           //+ (slideWidth/imagesCountPerSlide) * (imagesCountPerSlide - (imagesCount%imagesCountPerSlide))
        }
        console.log(currentIndex)
        this.setState({
            currentIndex,
            // translateValue,
          });
     
    }

    _prev = () => {
        let { currentIndex, translateValue, imagesCountPerSlide, slideWidth, imagesCount } = this.state; 
        if(currentIndex <= 0){
            currentIndex = 0;
            translateValue = 0;
        }else {
            currentIndex-=imagesCountPerSlide + (imagesCountPerSlide - (imagesCount%imagesCountPerSlide));
            translateValue = translateValue + slideWidth - (slideWidth/imagesCountPerSlide) * (imagesCountPerSlide - (imagesCount%imagesCountPerSlide));
        }
        console.log(currentIndex, translateValue)
        this.setState({
            currentIndex,
            translateValue,
          });
    }

    _getContainerWidth = () => {
        const {slideWidth, imagesCount, imagesCountPerSlide, slideMargin} = this.state;
        const containerWidth  = imagesCountPerSlide > 1 ?
                (slideWidth * imagesCount / imagesCountPerSlide) + ((imagesCount-2)* slideMargin) :
                (slideWidth * imagesCount / imagesCountPerSlide);
        return containerWidth;
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.swipStart !== nextState.swipStart){
            return false;
        }
        return true;
    }
    

    render(){
        const {slideWidth, translateValue, images, imagesCountPerSlide} = this.state;
        return(
            <div className="carousel-slider" style={{maxWidth: `${slideWidth}px`}}>
                <div className={`carousel-container ${imagesCountPerSlide > 1 ? 'desktop' : ''}`}
                     style={{
                        transform: `translateX(${translateValue}px)`,
                        transition: 'transform ease-out 0.30s',
                        width: `${this._getContainerWidth()}px`
                      }} 
                      onTouchStart={this._swipStart.bind(this)}
                      onTouchEnd={this._swipEnd.bind(this)}
                      >

                    { images.map( (url, i) => <Slide key={i}>
                        <Image src={url} id={`carousel-image-${i+1}`} 
                            className="carousel-image" />
                            <h1>Image Title {i+1}</h1>
                    </Slide>)}
                    
                </div>
                      {
                          imagesCountPerSlide === 1 && <React.Fragment>
                                <NextArrow  onClick={this._next}/>
                                <PrevArrow  onClick={this._prev}/>
                          </React.Fragment>
                      }
                {imagesCountPerSlide > 1 && <div className="carosel-nav-desktop">
                    <PrevBtn onClick={this._prev} />
                    <NextBtn onClick={this._next} />
                </div>}
            </div>
        );
    }
}
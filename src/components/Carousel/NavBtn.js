import React from 'react';
import {Arrow} from './SVGIcons';

export const NextBtn = ({onClick}) => 
    <button onClick={(e) => onClick(e)} 
        className="carousel-button next">
        Next
    </button>
   

export const PrevBtn = ({onClick}) => <button onClick={(e) => onClick(e)} 
    className="carousel-button prev">
    Prev
</button>

export const NextArrow = ({onClick}) => <React.Fragment>
        <button onClick={(e) => onClick(e)} 
            className="carousel-arrow next">
            <Arrow width="24" alt="Next"color="#2b73a1" />
        </button>
        <div className="carousel-arrow-conatiner next"></div>
    </React.Fragment>

export const PrevArrow = ({onClick}) => <React.Fragment>
    <button onClick={(e) => onClick(e)} 
        className="carousel-arrow prev">
        <Arrow width="24"  transform='rotate(180)' color="#2b73a1" />
    </button> 
    <div className="carousel-arrow-conatiner prev"></div>
</React.Fragment>

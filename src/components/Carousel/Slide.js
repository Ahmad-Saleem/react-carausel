import React, { PureComponent } from 'react';

export default class Slide extends PureComponent {
    render(){
        return(
            <div className="carousel-slide">
                {this.props.children}
            </div>
        );
    }
}
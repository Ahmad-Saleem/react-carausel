import React, { PureComponent } from 'react';
export default class Image extends PureComponent {
    render(){
        return(
            <img id={this.props.id} className={this.props.className}
            src={this.props.src} alt="" />
        );
    }
}
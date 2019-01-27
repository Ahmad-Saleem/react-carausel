import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Slider from './components/Carousel/Slider';
import { Arrow } from './components/Carousel/SVGIcons';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('render Slider', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Slider />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('render Arrow', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Arrow />, div);
  ReactDOM.unmountComponentAtNode(div);
});

import React from 'react';
import fullWidthBanner from '../../../../assets/images/full_width_banner.png';
import { CarouselWrapper } from './style';
import './style.scss';
import Slider from 'react-slick';

function Hero(props) {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
  };
  return (
    <Slider className="hero container" {...settings}>
      <div className="banner">
        <div className="banner-content">
          <p className="collection">SUMMER COLLECTION 2019</p>
          <h4 className="title">
            Colorful summer dresses are already in store
          </h4>
          <a href="#" className="btn-learn">
            LEARN MORE
          </a>
        </div>
      </div>
      <div className="banner">
        <div className="banner-content">
          <p className="collection">SUMMER COLLECTION 2019</p>
          <h4 className="title">
            Colorful summer dresses are already in store
          </h4>
          <a href="#" className="btn-learn">
            LEARN MORE
          </a>
        </div>
      </div>
      <div className="banner">
        <div className="banner-content">
          <p className="collection">SUMMER COLLECTION 2019</p>
          <h4 className="title">
            Colorful summer dresses are already in store
          </h4>
          <a href="#" className="btn-learn">
            LEARN MORE
          </a>
        </div>
      </div>
    </Slider>
  );
}

export default Hero;

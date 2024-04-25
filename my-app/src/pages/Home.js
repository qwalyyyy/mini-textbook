import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import goat from './images/goat.jpeg';
import fall from './images/fall.jpg';
import rocket from './images/rocket.jpg';
import freeToPlay from './images/free.jpg';
import payToPlay from './images/pay.jpg';

class Home extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    return (
      <div className="home-container">
        <div className="slider-container">
          <Slider ref={(slider) => (this.slider = slider)} {...settings}>
            <div>
              <div className="image-wrapper">
                {/* Image 1 */}
                <img src={goat} alt="goat" className="slider-image" />
                {/* Left arrow */}
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="slider-arrow prev"
                  onClick={() => this.slider.slickPrev()}
                />
                {/* Right arrow */}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="slider-arrow next"
                  onClick={() => this.slider.slickNext()}
                />
              </div>
            </div>
            <div>
              <div className="image-wrapper">
                {/* Image 2 */}
                <img src={fall} alt="fall" className="slider-image" />
                {/* Left arrow */}
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="slider-arrow prev"
                  onClick={() => this.slider.slickPrev()}
                />
                {/* Right arrow */}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="slider-arrow next"
                  onClick={() => this.slider.slickNext()}
                />
              </div>
            </div>
            <div>
              <div className="image-wrapper">
                {/* Image 3 */}
                <img src={rocket} alt="rocket" className="slider-image" />
                {/* Left arrow */}
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="slider-arrow prev"
                  onClick={() => this.slider.slickPrev()}
                />
                {/* Right arrow */}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="slider-arrow next"
                  onClick={() => this.slider.slickNext()}
                />
              </div>
            </div>
          </Slider>
        </div>

        <div className="button-images-container">
          <div className="button-image-wrapper">
            <Link to="/free-to-play" className="image-button" style={{ backgroundImage: `url(${freeToPlay})` }}>
              <span className="button-text">MARKET</span>
            </Link>
          </div>
          <div className="button-image-wrapper">
            <Link to="/pay-to-play" className="image-button" style={{ backgroundImage: `url(${payToPlay})` }}>
              <span className="button-text">PLAYLIST</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
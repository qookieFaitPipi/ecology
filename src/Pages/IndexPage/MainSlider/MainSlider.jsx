import React from 'react';
import styles from './MainSlider.module.scss';

// carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// images
import cr1 from './../../../Assets/images/carousel/cr1.svg';

const TopSlider = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className={styles.topSlider}>
      <Carousel responsive={responsive} className={styles.topSliderContent} autoPlay>
        <div className={styles.topSliderItem}>
          <img className={styles.topSliderItemImage} src={cr1} alt="sliderItemImage" />
        </div>
        <div className={styles.topSliderItem}>
          <img className={styles.topSliderItemImage} src={cr1} alt="sliderItemImage" />
        </div>
      </Carousel>
    </div>
  )
}

export default React.memo(TopSlider);
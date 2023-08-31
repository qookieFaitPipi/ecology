import React from 'react';
import styles from './Partners.module.scss';

// carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// images
import pt1 from './../../../Assets/images/partners/pt1.png';
import pt2 from './../../../Assets/images/partners/pt2.png';
import pt3 from './../../../Assets/images/partners/pt3.png';
import pt4 from './../../../Assets/images/partners/pt4.jpg';

import pt5 from './../../../Assets/images/partners/pt5.jpg';
import pt6 from './../../../Assets/images/partners/pt6.png';

const Partners = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <div className={styles.partnersTitle} id='scrollPartners'>Наши заказчики и партнёры</div>
      <Carousel responsive={responsive} className={styles.partners} id='scrollPartners'>

      <div className={styles.partnersItem}>
        <img className={styles.partnersItemImage} width="300px"  src={pt1} alt="" />
      </div>

      <div className={styles.partnersItem}>
        <img className={styles.partnersItemImage} width="300px"  src={pt2} alt="" />
      </div>

      <div className={styles.partnersItem}>
        <img className={styles.partnersItemImage} width="300px"  src={pt3} alt="" />
      </div>

      <div className={styles.partnersItem}>
        <img className={styles.partnersItemImage} width="150px"  src={pt4} alt="" />
      </div>

      <div className={styles.partnersItem}>
        <img className={styles.partnersItemImage} width="150px" src={pt5} alt="" />
        <div className={styles.partnersItemText}>ООО «ПСК «СИТИ-Инжиниринг»</div>

      </div>

      <div className={styles.partnersItem}>
        <img className={styles.partnersItemImage} width="250px" src={pt6} alt="" />
      </div>

      </Carousel>
    </>
  )
}

export default React.memo(Partners);
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
    <div className={styles.partners}>
      <div className={styles.partnersTitle} id='scrollPartners'>Наши заказчики и партнёры</div>
      <Carousel responsive={responsive} className={styles.partnersCarousel} id='scrollPartners'>
      
      <div className={styles.partnersCarouselItem}>
        <img width="250px" src={pt6} alt="ООО «ТрансКомИнжиниринг»" />
      </div>

      <div className={styles.partnersCarouselItem}>
        <img width="300px" style={{marginBottom: '20px'}} src={pt3} alt="ООО «БАЛТМОР-проект»" />
      </div>

      <div className={styles.partnersCarouselItem}>
        <img className={styles.partnersItemImage} width="300px" style={{marginBottom: '50px'}}  src={pt1} alt="ОАО «Ультрамар»" />
      </div>

      <div className={styles.partnersCarouselItem} style={{fontSize: '30px'}}>
        <i style={{marginBottom: '15px'}}>ООО «ТЭС И»</i>
      </div>

      <div className={styles.partnersCarouselItem}>
        <img width="300px" style={{marginBottom: '10px'}} src={pt2} alt="ОАО «Хотьковский автомост»" />
      </div>

      <div className={styles.partnersCarouselItem}>
        <img width="150px" src={pt5} alt="ООО «ПСК «СИТИ-Инжиниринг»" />
        <div className={styles.partnersCarouselItemText}>ООО «ПСК «СИТИ-Инжиниринг»</div>
      </div>

      <div className={styles.partnersCarouselItem}>
        <img width="150px"  src={pt4} alt="ООО «МТ групп»" />
      </div>
      </Carousel>
    </div>
  )
}

export default React.memo(Partners);
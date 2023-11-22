import React from 'react';
import styles from './News.module.scss';

// components
import NewsItem from './NewsItem/NewsItem';

// carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const News = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
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
    <div className={styles.news}>
      <div className={styles.newsTitle} id='scrollNews'>Новости</div>
      <Carousel responsive={responsive} className={styles.newsContent}>
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </Carousel>
    </div>
  )
}

export default React.memo(News);
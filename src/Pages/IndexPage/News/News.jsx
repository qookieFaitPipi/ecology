import React, { useEffect, useState } from 'react';
import styles from './News.module.scss';

// axios
import axios from 'axios';

// components
import NewsItem from './NewsItem/NewsItem';

// carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const News = () => {
  const [news, setNews] = useState([]);
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

  useEffect(() => {
    axios.get('https://backend.tpe.su/get_eci_news').then((res) => {
      setNews(res.data);
    })
  }, []);

  return (
    <div className={styles.news}>
      <div className={styles.title} id='scrollNews'>Новости</div>
      <Carousel responsive={responsive} className={styles.container}>
        {news.map((news) =>
          <NewsItem
            key={news.id}
            date={news.date} 
            text={news.text}
            img={news.imageURL}
            link={news.link}
            url={news.url}
          />
        )}
      </Carousel>
    </div>
  )
}

export default React.memo(News);
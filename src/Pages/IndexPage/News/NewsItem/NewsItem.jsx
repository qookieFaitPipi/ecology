import React from 'react';
import styles from './NewsItem.module.scss';

// images
import nw1 from './../../../../Assets/images/news/nw1.png';

const NewsItem = () => {
  return (
    <div className={styles.newsItem}>
      <div className={styles.newsItemImageBlock}>
        <img className={styles.newsItemImage} src={nw1} alt="" />
      </div>
      <div className={styles.newsItemInfoBlock}>
        <div className={styles.newsItemInfoDate}><i>09.09.2022</i></div>
        <div className={styles.newsItemInfoText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
      </div>
    </div>
  )
}

export default React.memo(NewsItem);
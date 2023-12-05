import React from 'react';
import styles from './NewsItem.module.scss';

import nw2 from './../../../../Assets/images/news/nw2.png';

const NewsItem = (props) => {
  return (
    <div className={styles.newsItem}>
      <a className={styles.newsItemContent} href={props.index ? nw2 :props.img}>
        <div className={styles.newsItemImageBlock}>
          <img className={styles.newsItemImage} src={props.img} alt="" />
        </div>
        <div className={styles.newsItemInfoBlock}>
          <div className={styles.newsItemInfoDate}><i>{props.date}</i></div>
          <div className={styles.newsItemInfoText}>{props.text}</div>
        </div>
      </a>
    </div>
  )
}

export default React.memo(NewsItem);
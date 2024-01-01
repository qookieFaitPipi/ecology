import React from 'react';
import styles from './NewsItem.module.scss';

const NewsItem = ({img, text, date, link, url}) => {
  return (
    <div className={styles.news}>
      <a className={styles.container} href={url}>
        <img className={styles.newsImage} src={img} alt="news" />
        <div className={styles.newsInfo}>
          <div className={styles.newsInfoDate}><i>{date}</i></div>
          <div className={styles.newsInfoText}>{text}</div>
        </div>
      </a>
    </div>
  )
}

export default React.memo(NewsItem);
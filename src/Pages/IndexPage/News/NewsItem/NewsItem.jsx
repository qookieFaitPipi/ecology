import React, { useEffect, useState } from 'react';
import styles from './NewsItem.module.scss';

import nw2 from './../../../../Assets/images/news/nw2.png';
import nw3 from './../../../../Assets/images/news/nw3.png';

const NewsItem = (props) => {
  const [height, setHeight] = useState();
  
  useEffect(() => {
    let elem = document.querySelectorAll('#newsItem');

    let res = 0;
    for(let i=0;i<elem.length;i++) {
      if(elem[i].offsetHeight > res) {
        res = elem[i].offsetHeight;
      }
    }

    setHeight(res);
  }, []);

  return (
    <div className={styles.news} id='newsItem' style={{height: height}}>
      <a className={styles.container} href={props.index === 1 ? nw2 : props.index === 2 ? nw3 : props.img}>
        <img className={styles.newsImage} src={props.img} alt="news" />
        <div className={styles.newsInfo}>
          <div className={styles.newsInfoDate}><i>{props.date}</i></div>
          <div className={styles.newsInfoText}>{props.text}</div>
        </div>
      </a>
    </div>
  )
}

export default React.memo(NewsItem);
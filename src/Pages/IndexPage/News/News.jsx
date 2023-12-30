import React from 'react';
import styles from './News.module.scss';

// components
import NewsItem from './NewsItem/NewsItem';

// carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// images
import nw1 from './../../../Assets/images/news/nw1.jpg';
import nw2 from './../../../Assets/images/news/nw2.png';
import test from './../../../Assets/images/news/test2.png';
import nw3 from './../../../Assets/images/news/nw3.png';

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
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className={styles.news}>
      <div className={styles.title} id='scrollNews'>Новости</div>
      <Carousel responsive={responsive} className={styles.container}>
        <NewsItem index={2} text={'Уважаемые коллеги! Поздравляем вас с наступающим Новым годом и Рождеством! Желаем крепкого здоровья, личного счастья, оптимизма! Успехов и новых достижений в вашей многогранной и плодотворной работе! Пусть все задуманное сбудется, а радость будет частой гостьей в вашем доме!'} date={'29.12.2024'} img={nw3}/>
        <NewsItem index={0} text={'Уважаемые коллеги, поздравляем вас с Днем проектировщика!\nМы желаем вам неисчерпаемого вдохновения, интересных проектов,\nуспешной реализации задуманного и благополучного завершения начатого!\nЗдоровья, творческих идей и благополучия!'} date={'16.11.2023'} img={nw1}/>
        <NewsItem index={1} text={'АО «ЭСП» по заказу ООО «БАЛТМОР-проект» разработан раздел «Мероприятия по охране окружающей среды» проектной документации по объекту «Строительство железнодорожных путей необщего пользования ОАО «БСМЗ». Объект расположен в г.Санкт-Петербург, относится к объектам транспортной инфраструктуры, является линейным объектом и предназначен для обслуживания ОАО «БСМЗ». 01.08.2023 г. получено положительное заключение негосударственной экспертизы по объекту.'} date={'01.08.2023'} img={test}/>
      </Carousel>
    </div>
  )
}

export default React.memo(News);
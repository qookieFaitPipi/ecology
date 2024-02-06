import React from 'react';
import styles from './Footer.module.scss';

// files
import fl1 from './../../Assets/files/fl1.pdf';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainBlock}>
          <div className={styles.contacts}>
            <div className={styles.title} id='scrollFooter'>Контакты</div>
            <div className={styles.text}>Адрес: 196084, Россия, Санкт-Петербург, <br /> Малая Митрофаньевская улица, д.4, литер Л, офис 315</div>
            <div className={styles.text}>Телефон: +7 (812) 948-55-99</div>
            <div className={styles.text}>Email: info@eci.su</div>
          </div>
          <div className={styles.contacts}>
            <div className={styles.title}>СОУТ</div>
            <a href={fl1} className={styles.text}>Сводная ведомость результатов проведения СОУТ</a>
          </div>
        </div>
        <div className={styles.bottomBlock}>
          AO «ЭСП» 2024 Все права защищены
        </div>
      </div>
    </div>
  )
}

export default React.memo(Footer);
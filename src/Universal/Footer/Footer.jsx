import React from 'react';
import styles from './Footer.module.scss';

// images
import logo from './../../Assets/images/logoZnak.png';
import logo2 from './../../Assets/images/logoZnak2.png';


// files
import fl1 from './../../Assets/files/fl1.pdf';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerMainBlock}>
          <div className={styles.footerContacts}>
            <div className={styles.footerContactsTitle}>Контакты</div>
            <div className={styles.footerContactsText}>196084, Россия, Санкт-Петербург, <br /> Малая Митрофаньевская улица, д.4, литер Л, офис 315</div>
            <div className={styles.footerContactsText}>+7 (812) 948-55-99</div>
            <div className={styles.footerContactsText}>info@eci.su</div>
          </div>
          <div className={styles.footerContacts}>
            <div className={styles.footerContactsTitle}>СОУТ</div>
            <a href={fl1} className={styles.footerContactsText}>Сводная ведомость результатов проведения СОУТ</a>
          </div>
        </div>
        <div className={styles.footerBottomBlock}>
          <div>ЭСП 2023 Все права защищены</div>
          <img className={styles.footerLogo} src={logo} alt="" />
          <div>ЭСП 2023 Все права защищены</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Footer);
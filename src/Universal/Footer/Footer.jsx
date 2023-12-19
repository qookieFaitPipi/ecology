import React from 'react';
import styles from './Footer.module.scss';

// files
import fl1 from './../../Assets/files/fl1.pdf';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerMainBlock}>
          <div className={styles.footerContacts}>
            <div className={styles.footerContactsTitle} id='scrollFooter'>Контакты</div>
            <div className={styles.footerContactsText}><b>Адрес:</b> 196084, Россия, Санкт-Петербург, <br /> Малая Митрофаньевская улица, д.4, литер Л, офис 315</div>
            <div className={styles.footerContactsText}><b>Телефон:</b> +7 (812) 948-55-99</div>
            <div className={styles.footerContactsText}><b>Email:</b> info@eci.su</div>
          </div>
          <div className={styles.footerContacts}>
            <div className={styles.footerContactsTitle}>СОУТ</div>
            <a href={fl1} className={styles.footerContactsText}>Сводная ведомость результатов проведения СОУТ</a>
          </div>
        </div>
        <div className={styles.footerBottomBlock}>
          AO «ЭСП» 2023 Все права защищены
        </div>
      </div>
    </div>
  )
}

export default React.memo(Footer);
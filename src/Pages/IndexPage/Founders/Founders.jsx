import React from 'react';
import styles from './Founders.module.scss';

// images
import fd1 from './../../../Assets/images/founders/wr1.jpg';

const Founders = () => {
  return (
    <div className={styles.founders}>
      <div className={styles.foundersContent}>

        <div className={styles.foundersTitleBlock}>
          <div className={styles.foundersTitle}>Руководство</div>
        </div>

        <div className={styles.foundersItem}>
          <div className={styles.foundersItemImageBlock}>
            <img className={styles.foundersItemImage} src={fd1} alt="founder" />
            <div className={styles.foundersItemTitle}>Генеральный директор</div>
          </div>
          <div className={styles.foundersItemTextBlock}>
            <div className={styles.foundersItemName}>Савченко Андрей Владимирович</div>
            <div className={styles.foundersItemText}>Награды<br />2014 г. – Награжден почетной грамота НП дорожных проектных организаций "РОДОС"; <br />2016 г. – Объявлена благодарность Комитета по развитию транспортной инфраструктуры Санкт-Петербурга. <br />2018 г. – Благодарственное письмо Департамента транспорта и дорожно-благоустроительного комплекса мэрии города Новосибирска «За высокий профессионализм и значительный вклад в развитие дорожно-строительного комплекса города Новисибирска».</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default React.memo(Founders);
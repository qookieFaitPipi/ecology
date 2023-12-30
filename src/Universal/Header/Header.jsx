import React from 'react'
import styles from './Header.module.scss';

// images
import logo from './../../Assets/images/logo.png';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoBlock}>
          <img className={styles.logo} src={logo} alt="" />
          <div className={styles.supTitle}>Оберегаем окружающую среду в каждом проекте</div>
        </div>
        <div className={styles.navBlock}>
          <div className={styles.navItem} onClick={() => window.scrollTo({ top: document.getElementById('scrollAbout').offsetTop - 120, behavior: 'smooth'})}>О компании</div>
          <div className={styles.navItem} onClick={() => window.scrollTo({ top: document.getElementById('scrollTools').offsetTop - 120, behavior: 'smooth'})}>Виды работ</div>
          <div className={styles.navItem} onClick={() => window.scrollTo({ top: document.getElementById('scrollNews').offsetTop - 120, behavior: 'smooth'})}>Новости</div>
          <div className={styles.navItem} onClick={() => window.scrollTo({ top: document.getElementById('scrollFooter').offsetTop - 120, behavior: 'smooth'})}>Контакты</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Header);
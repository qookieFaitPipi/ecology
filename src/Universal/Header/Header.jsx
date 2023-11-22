import React from 'react'
import styles from './Header.module.scss';

// images
import logo2 from './../../Assets/images/logo2.png';


const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerLogoBlock}>
          <img className={styles.headerLogo} src={logo2} alt="" />
          <div className={styles.headerSupTitle}>Оберегаем окружающую среду в каждом проекте</div>
        </div>
        <div className={styles.headerNavBlock}>
          <div className={styles.headerNavItem} onClick={() => window.scrollTo({ top: document.getElementById('scrollAbout').offsetTop - 130, behavior: 'smooth'})}>О компании</div>
          <div className={styles.headerNavItem} onClick={() => window.scrollTo({ top: document.getElementById('scrollTools').offsetTop - 130, behavior: 'smooth'})}>Виды работ</div>
          <div className={styles.headerNavItem} onClick={() => window.scrollTo({ top: document.getElementById('scrollNews').offsetTop - 130, behavior: 'smooth'})}>Новости</div>
          <div className={styles.headerNavItem} onClick={() => window.scrollTo({ top: document.getElementById('scrollFooter').offsetTop - 130, behavior: 'smooth'})}>Контакты</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Header);
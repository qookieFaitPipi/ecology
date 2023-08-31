import React from 'react'
import styles from './Header.module.scss';

// images
import logo2 from './../../Assets/images/logo2.png';


const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerLogoBlock}>
          <img style={{width: '500px', height: '80px'}} src={logo2} alt="" />
          <div className={styles.headerSupTitle}>Оберегаем окружающую среду в каждом проекте</div>
        </div>
        <div className={styles.headerNavBlock}>
          <div className={styles.headerNavItem} onClick={() => window.scroll({top: 350, behavior: 'smooth'})}>О компании</div>
          <div className={styles.headerNavItem} onClick={() => window.scroll({top: 800, behavior: 'smooth'})}>Виды работ</div>
          <div className={styles.headerNavItem} onClick={() => window.scroll({top: 1450, behavior: 'smooth'})}>Новости</div>
          <div className={styles.headerNavItem} onClick={() => window.scroll({top: 2000, behavior: 'smooth'})}>Контакты</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Header);
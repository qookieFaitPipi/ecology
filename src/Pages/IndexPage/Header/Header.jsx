import React from 'react'
import styles from './Header.module.scss';

// images
import logo from './../../../Assets/images/logo.jpg';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerLeftBlock}>
          <img className={styles.headerLogo} src={logo} alt='logo'/>
          <div className={styles.headerTitleBlock}>
            <div className={styles.headerTitle}>ЭКОЛОГИЯ СТРОИТЕЛЬСТВА И ПРОИЗВОДСТВА</div>
            <div className={styles.headerTagline}>Какая-нибудь подпись</div>    
          </div>
        </div>
        <div className={styles.headerNavBlock}>
          <div className={styles.headerNavItem}>
            О компании
          </div>
          <div className={styles.headerNavItem}>
            Наши новости
          </div>
          <div className={styles.headerNavItem}>
            Руководство
          </div>
          <div className={styles.headerNavItem}>
            Контакты
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Header);
import React from 'react';
import styles from './Logo.module.scss';

// images
import bigLogo from './../../../Assets/images/bigLogo.svg';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.logoContent}>
        <img className={styles.logoImage} src={bigLogo} alt="bigLogo" />
      </div>
    </div>
  )
}

export default React.memo(Logo);
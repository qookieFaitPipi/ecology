import React from 'react';
import styles from './Logo.module.scss';

// images
import bigLogo from './../../../Assets/images/bigLogo.svg';

import big from './../../../Assets/images/big.png';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.logoContent}>
        <img className={styles.logoImage} src={big} alt="bigLogo" />
      </div>
    </div>
  )
}

export default React.memo(Logo);
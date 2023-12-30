import React from 'react';
import styles from './Bigpage.module.scss';

// images
import big from './../../../Assets/images/big.png';

const Bigpage = () => {
  return (
    <div className={styles.bigpage}>
      <div className={styles.container}>
        <img className={styles.image} src={big} alt="bigLogo" />
      </div>
    </div>
  )
}

export default React.memo(Bigpage);
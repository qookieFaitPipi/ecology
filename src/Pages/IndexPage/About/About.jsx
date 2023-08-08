import React from 'react';
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutTitle}>О компании</div>
        <div className={styles.aboutText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas atque totam dolor quos dolores ipsam maxime voluptates, perspiciatis dicta architecto cumque, alias natus quibusdam, aliquam enim? Mollitia odio quis voluptatibus.</div>
      </div>
    </div>
  )
}

export default React.memo(About);
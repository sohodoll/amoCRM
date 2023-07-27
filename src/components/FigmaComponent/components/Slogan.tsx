import styles from './Intro/styles.module.css'
import fireLogo from 'assets/images/logos/fireLogo.png'

export const Slogan = () => {
  return (
    <span className={styles.sloganWrapper}>
      <img src={fireLogo} alt='fireLogo' />
      <p className={styles.slogan}>Future of Esports</p>
    </span>
  )
}

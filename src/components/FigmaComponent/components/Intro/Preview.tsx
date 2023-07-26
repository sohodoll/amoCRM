import styles from './styles.module.css'
import fireLogo from 'assets/images/logos/fireLogo.png'
import highlight from 'assets/images/highlight.png'

export const Preview = () => {
  return (
    <div className={styles.previewWrapper}>
      <div className={styles.preview}>
        <span className={styles.sloganWrapper}>
          <img src={fireLogo} alt='fireLogo' />
          <p className={styles.slogan}>Future of Esports</p>
        </span>
        <div className={styles.titleWrapper}>
          <h1>
            Unleash The Next{' '}
            <span className={styles.highlightWord}>
              Generation <img className={styles.highlight} src={highlight} alt='highlight' />
            </span>{' '}
            Of Gaming
          </h1>
        </div>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.
        </p>
        <div className={styles.controls}>
          <span className={styles.activeButton}>Explore More</span>
          <span className={styles.button}>View our team</span>
        </div>
      </div>
      <div className={styles.introImage}></div>
    </div>
  )
}

import styles from './styles.module.css'
import highlight from 'assets/images/highlight.png'
import { Socials } from './Socials'
import { Slogan } from '../Slogan'

export const Preview = () => {
  return (
    <div className={styles.previewWrapper}>
      <Socials />
      <div className={styles.preview}>
        <Slogan />
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

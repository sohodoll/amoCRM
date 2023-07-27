import { Slogan } from '../Slogan'
import styles from './styles.module.css'
import secondMainImage from 'assets/images/secondMainImage.png'
import firstSlide from 'assets/images/firstSmallSlide.png'
import secondSlide from 'assets/images/secondSmallSlide.png'
import thirdSlide from 'assets/images/thirdSmallSlide.png'

export const Features = () => {
  return (
    <div className={styles.features}>
      <div className={styles.featuresWrapper}>
        <img className={styles.secondMainImage} src={secondMainImage} alt='secondMainImage' />
        <div className={styles.featuresDescriptionWrapper}>
          <Slogan />
          <div className={styles.titleWrapper}>
            <h1>Customize Your Own Character</h1>
          </div>
          <p className={styles.subtitle}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae.
          </p>
          <div className={styles.slider}>
            <img className={styles.activeSlide} src={firstSlide} alt='firstSmallSlide' />
            <img src={secondSlide} alt='secondSmallSlide' />
            <img src={thirdSlide} alt='thirdSmallSlide' />
          </div>
        </div>
      </div>
      <p className={styles.note}>
        I need much more time to finish the layout and make the mobile versions than I have right now. I think this already shows some of my
        abilities to create html.
      </p>
    </div>
  )
}

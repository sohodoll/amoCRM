import { Intro } from './components'
import { Features } from './components/Features'
import styles from './styles.module.css'

export const FigmaComponent = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.wrapper}>
        <Intro />
        <Features />
      </div>
    </div>
  )
}

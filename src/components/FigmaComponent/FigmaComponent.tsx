import { Intro } from './components'
import styles from './styles.module.css'

export const FigmaComponent = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.wrapper}>
        <Intro />
      </div>
    </div>
  )
}

import { Header } from '../Header'
import { Layer } from './Layer'
import { Preview } from './Preview'
import styles from './styles.module.css'

export const Intro = () => {
  return (
    <div className={styles.intro}>
      <Header />
      <Layer />
      <Preview />
    </div>
  )
}

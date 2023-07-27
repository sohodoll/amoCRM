import { Header, TimerComponent } from 'components'
import styles from './styles.module.css'

export const Timer = () => {
  return (
    <div>
      <Header />
      <h1 className={styles.title}>Timer</h1>
      <TimerComponent />
    </div>
  )
}

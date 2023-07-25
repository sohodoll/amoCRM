import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export const Header = () => {
  return (
    <div className={styles.header}>
      <button>
        <Link to='/timer'>Timer App</Link>
      </button>
      <button>
        <Link to='/figma'>Figma Layout</Link>
      </button>
    </div>
  )
}

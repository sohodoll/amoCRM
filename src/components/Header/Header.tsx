import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'

export const Header = () => {
  return (
    <div className={styles.header}>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/timer'>Timer App</NavLink>
      <NavLink to='/figma'>Figma Layout</NavLink>
    </div>
  )
}

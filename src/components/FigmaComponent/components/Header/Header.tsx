import styles from './styles.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSide}></div>
      <nav className={styles.mid}>
        <ul className={styles.nav}>
          <li className={styles.active}>Home</li>
          <li>About</li>
          <li>Team</li>
          <li>Shop</li>
          <li>Pages</li>
        </ul>
      </nav>
      <div className={styles.rightSide}>
        <div className={styles.cart}></div>
        <span className={styles.contact}>Contact Us</span>
      </div>
    </header>
  )
}

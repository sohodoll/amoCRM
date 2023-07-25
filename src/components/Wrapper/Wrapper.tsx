import { FC } from 'react'
import styles from './styles.module.css'

type WrapperProps = {
  children: React.ReactNode
}

export const Wrapper: FC<WrapperProps> = (props) => {
  return <div className={styles.wrapper}>{props.children}</div>
}

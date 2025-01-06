import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'


export default function Header() {
  return (
    <div className={styles.header}>
        <p>
          Users
          <div className={styles.icon}><FontAwesomeIcon icon={faUserSecret} />
          </div>
          </p>
    </div>
  )
}

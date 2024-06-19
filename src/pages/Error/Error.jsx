import { Link } from 'react-router-dom'
import styles from './Error.module.scss'

/**
 * Composant pour afficher une erreur 404.
 * @module Error
 * @returns {JSX.Element} Le composant représentant l'erreur 404.
 */
function Error() {
  return (
    <div className={styles.error}>
      <h1> 404</h1>
      <h3>Oups! The page you requested was not found.</h3>
      <Link to="/">Back to homepage</Link>
    </div>
  )
}

export default Error
import style from './Loader.module.scss'

/**
 * Composant pour afficher un indicateur de chargement.
 * @module Loader
 * @returns {JSX.Element} Le composant représentant l'indicateur de chargement.
 */
function Loader() {
  return (
    <div className={style.loader}>
    Loading...
    </div>
  )
}

export default Loader
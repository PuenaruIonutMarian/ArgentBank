import style from './featureItem.module.scss'

/**
 * Composant FeatureItem pour afficher un élément de fonctionnalité avec une icône, un titre et une description.
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.icon - L'URL de l'icône à afficher.
 * @param {string} props.title - Le titre de la fonctionnalité.
 * @param {string} props.description - La description de la fonctionnalité.
 * @returns {JSX.Element} Le composant FeatureItem rendu.
 */
const FeatureItem = ({icon, title, description}) => {
  return (
    <div className={style.featureItem}>
      <img src={icon} alt={title} className={style.featureIcon} />
      <h3 className={style.featureItemTitle}>{title}</h3>
      <p className={style.featureItemDescription}>{description}</p>
    </div>
  )
}

export default FeatureItem
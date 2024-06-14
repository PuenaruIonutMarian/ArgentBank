import style from './featureItem.module.scss'

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
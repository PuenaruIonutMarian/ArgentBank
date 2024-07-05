import style from './hero.module.scss';

/**
 * Composant Hero affichant le contenu principal mis en avant.
 * @returns {JSX.Element} Composant Hero.
 */
const Hero = () => {
  return (
    <div className={style.hero}>
      <section className={style.heroContent}>
        <h2 className={style.srOnly}>Contenu promu</h2>
        <p className={style.subtitle}>Aucuns frais.</p>
        <p className={style.subtitle}>Aucun dépôt minimum.</p>
        <p className={style.subtitle}>Taux d'intérêt élevés.</p>
        <p className={style.text}>Ouvrez un compte d'épargne avec Argent Bank dès aujourd'hui !</p>
      </section>
    </div>
  );
};

export default Hero;

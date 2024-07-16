import style from './hero.module.scss';

/**
 * Composant Hero affichant le contenu principal mis en avant.
 * @returns {JSX.Element} Composant Hero.
 */
const Hero = () => {
  return (
    <div className={style.hero}>
      <section className={style.heroContent}>
        <h2 className={style.srOnly}>Promoted Content</h2>
        <p className={style.subtitle}>No fees.</p>
        <p className={style.subtitle}>No minimum deposit.</p>
        <p className={style.subtitle}>High interest rates.</p>
        <p className={style.text}>Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
};

export default Hero;

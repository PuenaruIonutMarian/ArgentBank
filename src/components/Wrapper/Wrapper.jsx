import style from './wrapper.module.scss';

/**
 * Composant Wrapper utilisé pour envelopper le contenu avec une classe conditionnelle basée sur l'état d'édition.
 * @param {Object} props - Les propriétés du composant.
 * @param {boolean} props.isEditing - Indique si le mode d'édition est activé.
 * @param {ReactNode} props.children - Les éléments enfants à rendre à l'intérieur du Wrapper.
 * @returns {JSX.Element} Composant Wrapper avec la classe appropriée selon l'état d'édition.
 */
const Wrapper = ({ children, isEditing }) => {
  return (
    <main className={isEditing ? style.mainEditing : style.main}>
      {children}
    </main>
  );
};

export default Wrapper;

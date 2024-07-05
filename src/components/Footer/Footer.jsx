import style from './footer.module.scss'

/**
 * Composant Footer pour afficher les informations de copyright.
 * @returns {JSX.Element} Le composant Footer rendu.
 */
const Footer = () => {
    /**
     * Obtient l'année courante.
     * @returns {number} L'année courante.
     */
    const getCurrentYear = () => {
        return new Date().getFullYear();
    }

    return (
        <div className={style.footer}>
            <p className={style.footerText}>Copyright {getCurrentYear()} Argent Bank</p>
        </div>
    )
}

export default Footer
import style from './footer.module.scss'
const Footer = () => {
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
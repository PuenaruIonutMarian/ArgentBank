import style from './navbar.module.scss'
import { Link } from 'react-router-dom'
import argentBankLogo from '../../assets/images/argentBankLogo.png'


const Navbar = () => {
  return (
    <nav className={style.mainNav}>
            <Link to="/" className={style.mainNavLogo}>
                <img className={style.mainNavLogoImage} src={argentBankLogo} alt="Argent Bank Logo" /> 
            </Link>
            <h1 className={style.srOnly}>Argent Bank</h1>
        <div></div>
    </nav>
  )
}

export default Navbar

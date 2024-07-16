import style from './navbar.module.scss';
import { Link } from 'react-router-dom';
import argentBankLogo from '../../assets/images/argentBankLogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { FaUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { logout } from '../../features/auth/authSlice';

/**
 * Composant Navbar affichant la barre de navigation principale.
 * Affiche le logo Argent Bank et les liens de navigation en fonction de l'état de connexion de l'utilisateur.
 * @returns {JSX.Element} Composant Navbar.
 */
const Navbar = () => {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();

  /**
   * Gère la déconnexion de l'utilisateur.
   * Déclenche l'action de déconnexion à l'aide du Redux dispatch.
   */
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className={style.mainNav}>
      <Link to="/" className={style.mainNavLogo}>
        <img className={style.mainNavLogoImage} src={argentBankLogo} alt="Logo Argent Bank" />
      </Link>
      <h1 className={style.srOnly}>Argent Bank</h1>
      <div className={style.mainNavItems}>
        {!token ? (
          <Link to="/signin" className={style.mainNavItem}>
            <FaUserCircle /> <span>Sign In</span>
          </Link>
        ) : (
          <>
            <Link to="/user/profile" className={style.mainNavItem}>
              <FaUserCircle /> <span>{user ? user.firstName : 'Profil'}</span>
            </Link>
            <Link to="/" className={style.mainNavItem} onClick={handleLogout}>
              <MdLogout /> <span>Sign Out</span>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import style from './navbar.module.scss';
import { Link} from 'react-router-dom';
import argentBankLogo from '../../assets/images/argentBankLogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { FaUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { logout } from '../../features/auth/authSlice';

const Navbar = () => {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className={style.mainNav}>
      <Link to="/" className={style.mainNavLogo}>
        <img className={style.mainNavLogoImage} src={argentBankLogo} alt="Argent Bank Logo" />
      </Link>
      <h1 className={style.srOnly}>Argent Bank</h1>
      <div className={style.mainNavItems}>
        {!token ? (
          <Link to="/signin" className={style.mainNavItem}>
            <FaUserCircle /> <span>Sign in</span>
          </Link>
        ) : (
          <>
            <Link to="/user/profile" className={style.mainNavItem}>
              <FaUserCircle /> <span>{user ? user.firstName : 'Profile'}</span>
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


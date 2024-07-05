import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserProfile } from '../../features/user/userApi';
import style from './userProfile.module.scss';
import BankAccount from '../../components/BankAccount/BankAccount';
import Header from '../../components/Header/Header';
import Wrapper from '../../components/Wrapper/Wrapper';
import Loader from '../../components/Loader/Loader';

/**
 * Composant représentant le profil utilisateur.
 * @returns {JSX.Element} Le composant de profil utilisateur.
 */
const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const userStatus = useSelector((state) => state.user.status);
  const isEditing = useSelector((state) => state.user.isEditing);
  const token = useSelector((state) => state.auth.token);

  /**
   * Utilise un effet pour récupérer le profil utilisateur lorsque le jeton est présent et le statut de l'utilisateur est 'idle'.
   */
  useEffect(() => {
    if (token && userStatus === 'idle') {
      dispatch(fetchUserProfile());
    }
  }, [dispatch, token, userStatus]);

  return (
    <Wrapper isEditing={isEditing}>
      <div className={style.userProfile}>
        {userStatus === 'loading' && <Loader />}
        {userStatus === 'succeeded' && user && (
          <>
            <Header firstName={user.firstName} lastName={user.lastName} isEditing={isEditing} />
            <h2 className={style.srOnly}>Accounts</h2>
            <BankAccount />
          </>
        )}
        {userStatus === 'failed' && <p>Error loading user data</p>}
      </div>
    </Wrapper>
  );
};

export default UserProfile;

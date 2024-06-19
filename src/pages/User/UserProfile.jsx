import { useSelector } from 'react-redux';
import style from './userProfile.module.scss';
import BankAccount from '../../components/BankAccount/BankAccount';
import Header from '../../components/Header/Header';
import Wrapper from '../../components/Wrapper/Wrapper';

const UserProfile = () => {
  const user = useSelector((state) => state.user.data);
  const userStatus = useSelector((state) => state.user.status);
  const isEditing = useSelector((state) => state.user.isEditing);

  return (
    <Wrapper isEditing={isEditing}>
    <div className={style.userProfile}>
      
      {userStatus === 'loading' && <p>Loading...</p>}
      {userStatus === 'succeeded' && user && (
      <>
        <Header firstName={user.firstName} lastName={user.lastName} />
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

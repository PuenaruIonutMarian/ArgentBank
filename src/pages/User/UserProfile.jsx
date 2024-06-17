import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../../features/user/userApi';
import style from './userProfile.module.scss';
import BankAccount from '../../components/BankAccount/BankAccount';
import Header from '../../components/Header/Header';
import Wrapper from '../../components/Wrapper/Wrapper';

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const userStatus = useSelector((state) => state.user.status);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (userStatus === 'idle' && token) {
      dispatch(fetchUserProfile());
    }
  }, [userStatus, dispatch, token]);

  return (
    <Wrapper>
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




// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUserProfile } from '../../features/user/userApi';
// import style from './userProfile.module.scss';
// import BankAccount from '../../components/BankAccount/BankAccount';
// import Header from '../../components/Header/Header';
// import Wrapper from '../../components/Wrapper/Wrapper';

// const UserProfile = () => {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.user.data);
//   const userStatus = useSelector((state) => state.user.status);

//   useEffect(() => {
//     if (userStatus === 'idle') {
//       dispatch(fetchUserProfile());
//     }
//   }, [userStatus, dispatch]);

//   return (
//     <Wrapper>
//     <div className={style.userProfile}>
      
//       {userStatus === 'loading' && <p>Loading...</p>}
//       {userStatus === 'succeeded' && user && (
//       <>
//         <Header firstName={user.firstName} lastName={user.lastName} />
//         <h2 className={style.srOnly}>Accounts</h2>
//         <BankAccount />
//       </>
//       )}
//       {userStatus === 'failed' && <p>Error loading user data</p>}
//     </div>
//     </Wrapper>
//   );

  
// };

// export default UserProfile;


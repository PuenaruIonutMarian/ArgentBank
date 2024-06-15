import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../../features/user/userApi';

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const userStatus = useSelector((state) => state.user.status);

  useEffect(() => {
    if (userStatus === 'idle') {
      dispatch(fetchUserProfile());
    }
  }, [userStatus, dispatch]);

  return (
    <div>
      <h1>User Profile</h1>
      {userStatus === 'loading' && <p>Loading...</p>}
      {userStatus === 'succeeded' && user && (
        <div>
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
        </div>
      )}
      {userStatus === 'failed' && <p>Error loading user data</p>}
    </div>
  );
};

export default UserProfile;


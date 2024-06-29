import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../../features/user/userApi';
import style from './header.module.scss';
import { setIsEditing } from '../../features/user/userSlice';

const Header = ({ firstName, lastName, isEditing }) => {
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const handleEditClick = () => {
    dispatch(setIsEditing(true)); 
  };

  const handleSaveClick = () => {
    dispatch(updateUserProfile({ firstName: newFirstName, lastName: newLastName, token }));
    dispatch(setIsEditing(false)); 
  };

  return (
    <div className={style.header}>
      {isEditing ? (
        <div>
          <h1 className={style.headerTitleEditing }>Welcome Back</h1>
          <div className={style.InputContainer}>
            <input
              type="text"
              value={newFirstName}
              onChange={(e) => setNewFirstName(e.target.value)}
              className={style.editFirstName}
            />
            <input
              type="text"
              value={newLastName}
              onChange={(e) => setNewLastName(e.target.value)}
              className={style.editLastName}
            />
          </div>
          <div className={style.buttonContainer}>
            <button className={style.SaveEditButton} onClick={handleSaveClick}>Save</button>
            <button className={style.CancelEditButton} onClick={() => dispatch(setIsEditing(false))}>Cancel</button>
          </div>
        </div>
      ) : (
        <>
          <h1 className={style.headerTitle}>
            Welcome Back <br /> {firstName} {lastName}!
          </h1>
          <button className={style.editButton} onClick={handleEditClick}>
            Edit Name
          </button>
        </>
      )}
    </div>
  );
};

export default Header;

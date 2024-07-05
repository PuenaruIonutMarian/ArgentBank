import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../../features/user/userApi';
import style from './header.module.scss';
import { setIsEditing } from '../../features/user/userSlice';

/**
 * Composant Header affichant le titre de bienvenue et permettant d'éditer le nom de l'utilisateur.
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.firstName - Le prénom de l'utilisateur.
 * @param {string} props.lastName - Le nom de l'utilisateur.
 * @param {boolean} props.isEditing - Indique si l'utilisateur est en mode édition.
 * @returns {JSX.Element} Composant Header.
 */
const Header = ({ firstName, lastName, isEditing }) => {
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  /**
   * Gère le clic sur le bouton d'édition.
   * Active le mode édition en dispatchant setIsEditing(true).
   */
  const handleEditClick = () => {
    dispatch(setIsEditing(true));
  };

  /**
   * Gère le clic sur le bouton de sauvegarde.
   * Met à jour le profil de l'utilisateur avec les nouveaux prénom et nom,
   * puis désactive le mode édition en dispatchant setIsEditing(false).
   */
  const handleSaveClick = () => {
    dispatch(updateUserProfile({ firstName: newFirstName, lastName: newLastName, token }));
    dispatch(setIsEditing(false));
  };

  return (
    <div className={style.header}>
      {isEditing ? (
        <div>
          <h1 className={style.headerTitleEditing}>Bienvenue de nouveau</h1>
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
            <button className={style.SaveEditButton} onClick={handleSaveClick}>Enregistrer</button>
            <button className={style.CancelEditButton} onClick={() => dispatch(setIsEditing(false))}>Annuler</button>
          </div>
        </div>
      ) : (
        <>
          <h1 className={style.headerTitle}>
            Bienvenue de nouveau <br /> {firstName} {lastName} !
          </h1>
          <button className={style.editButton} onClick={handleEditClick}>
            Modifier le nom
          </button>
        </>
      )}
    </div>
  );
};

export default Header;

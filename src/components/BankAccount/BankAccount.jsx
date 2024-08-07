import {UserAccounts} from "../../data/UserAccounts";
import style from './bankAccount.module.scss'
import { useSelector } from 'react-redux';

/**
 * Composant BankAccount pour afficher les comptes bancaires de l'utilisateur.
 * @returns {JSX.Element} Le composant BankAccount rendu.
 */
const BankAccount = () => {
  /**
   * Récupère l'état d'édition depuis le store Redux.
   * @type {boolean}
   */
  const isEditing = useSelector((state) => state.user.isEditing);

  return (
    <>
      {UserAccounts.map((account) => (
        <section key={account.id} className={isEditing ? style.accountEditing : style.account}>
          <div className={style.accountContentWrapper}>
            <h3 className={style.accountTitle}>Argent Bank {account.name}</h3>
            <p className={style.accountAmount}>$ {account.balance.toLocaleString("en")}</p>
            <p className={style.accountAmountDescription}>{account.type} Balance</p>
          </div>
          <div className={`${style.accountButtonWrapper}`}>
            <button className={isEditing ? style.editTransactionButton : style.transactionButton} type="button">
              View transactions
            </button>
          </div>
        </section>
      ))}
    </>
  )
}

export default BankAccount
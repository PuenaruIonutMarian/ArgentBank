import {UserAccounts} from "../../data/UserAccounts";
import style from './bankAccount.module.scss'

const BankAccount = () => {
  return (
        <>
      {UserAccounts.map((account) => (
        <section key={account.id} className={style.account}>
          <div className={style.accountContentWrapper}>
            <h3 className={style.accountTitle}>Argent Bank {account.name}</h3>
            <p className={style.accountAmount}>$ {account.balance.toLocaleString("en")}</p>
            <p className={style.accountAmountDescription}>{account.type} Balance</p>
          </div>
          <div className={`${style.accountButtonWrapper}`}>
          <button className={style.transactionButton} type="button">
            View transactions
          </button>
        </div>
        </section>
      ))}
    </>
  )
}

export default BankAccount
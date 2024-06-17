import style from './header.module.scss'

const Header = ({firstName, lastName}) => {


  return (
    <div className={style.header}>
    <h1 className={style.headerTitle}>Welcome Back <br /> {firstName} {lastName}!</h1>
    <button className={style.editButton}>Edit Name</button>
    </div>
  )
}

export default Header
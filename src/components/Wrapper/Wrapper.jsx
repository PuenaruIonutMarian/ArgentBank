import style from './wrapper.module.scss'

const Wrapper = ({children}) => {
  return (
    <main className={style.main}>
      {children}
    </main>
  );
}

export default Wrapper
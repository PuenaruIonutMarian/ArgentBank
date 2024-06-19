import style from './wrapper.module.scss';

const Wrapper = ({ children, isEditing }) => {
  return (
    <main className={isEditing ? style.mainEditing : style.main}>
      {children}
    </main>
  );
};

export default Wrapper;

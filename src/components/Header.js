import style from "./Header.module.css";

const Header = ({ title, descr }) => {
  return (
    <header className={style.root}>
      <div className={style.forest}></div>
      <div className={style.container}>
          <h1>{title ? title : null}</h1>
          <p>{descr ? descr : null}</p>
      </div>
    </header>
  );
}

export default Header;
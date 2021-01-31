import style from "./Layout.module.css";

const Layout = ({ id, title, urlBg, colorBg, descr }) => {
  const styleBg = {
    ...(urlBg ? {backgroundImage: `url(${urlBg})`}: {}),
    ...(colorBg ? {backgroundColor: colorBg}: {})
  };
  return (
    <section 
      className={style.root}
      id={id}
      style={styleBg}
    >
      <div className={style.wrapper}>
        <article>
          <div className={style.title}>
            <h3>{title ? title : null}</h3>
            <span className={style.separator}></span>
          </div>
          <div className={`${style.desc} ${style.full}`}>
            <p>{descr ? descr : null}</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Layout;
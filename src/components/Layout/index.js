import layout from './style.module.css';

const Layout = ({ title, descr, urlBg, colorBg }) => {
  const styleRoot = urlBg ? { backgroundImage: `url(${urlBg})` } : { background: `${colorBg}` };

  return (
    <section className={layout.root} style={styleRoot}>
      <div className={layout.wrapper}>
        <article>
          <div className={layout.title}>
            {title && <h3>{title}</h3>}
            <span className={layout.separator}></span>
          </div>
          <div className={`${layout.desc} ${layout.full}`}>
            {descr && <p>{descr}</p>}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Layout;
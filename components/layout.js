import Header from "./header";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Meta from "./meta.js";


export default function Layout({ children, home }) {
  return (
    <>
      <Meta />
      <main>
        <Header />
        <div className={styles.container}>
          <section className={utilStyles.headingMd}>
            <p>Hello! I'm Dan, a software engineer and this is my blog!</p>
          </section>
          <section
            className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
          >
            <h2 className={utilStyles.headingLg}>Blog</h2>
          </section>
          {children}
        </div>
      </main>
    </>
  );
}

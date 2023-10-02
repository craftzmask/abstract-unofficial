import styles from './NavBar.module.css'

const NavBar = () => {

  return (
    <nav className={styles.navbar}>

      <ul className={styles.ul}>
        <li>
          <a className={`${styles.a} ${styles.abstract}`} href="https://www.abstract.com/">
            Abstract
          </a>
        </li>
        <li>
          <a className={`${styles.a} ${styles.helpCenter}`} href="/">
            Help Center
          </a>
        </li>
      </ul>

      <ul className={styles.ul}>
        <li>
          <a className={`${styles.a} ${styles.submitRequest}`} href="https://help.abstract.com/hc/en-us/articles/360050382291-Contact-Support">
            Submit a request
          </a>
        </li>
        <li>
          <a className={`${styles.a} ${styles.signIn}`} href="https://goabstract.zendesk.com/auth/v2/login/signin">
            Sign in
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
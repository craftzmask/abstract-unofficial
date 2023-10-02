import styles from './Hero.module.css'

const Hero = () => {

  return (
    <form className={styles.hero}>
      <label className={styles.label} htmlFor="search">
        How can we help?
      </label>
      <div className={styles.inputControl}>
        <input
          className={styles.input}
          type="text"
          name="search"
          id="search"
          placeholder="Search"
        />
        <i className={`bx bx-arrow-back bx-rotate-180 ${styles.i}`} ></i>
      </div>
    </form>
  )
}

export default Hero
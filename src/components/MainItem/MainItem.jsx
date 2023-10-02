import styles from './MainItem.module.css'

const MainItem = ({ title, content, imgSrc, link }) => {

  return (
    <div className={styles.item}>
      <img className={styles.itemImg} src={imgSrc} alt="img" />
      <div className={styles.itemContent}>
        <p className={styles.title}>{title}</p>
        <p className={styles.content}>{content}</p>
        <a className={styles.learnMore} href={link}>
          Learn More
          <i className={`bx bx-arrow-back bx-rotate-180 ${styles.i}`} ></i>
        </a>
      </div>
    </div>
  )
}

export default MainItem
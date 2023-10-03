import styles from './Footer.module.css'
import s from './FooterItem.module.css'
import Logo from '../Logo'

const FooterItem = ({ title, links }) => {
  return (
    <div className={s.footerItem}>
      <h3 className={s.title}>{title}</h3>
      <ul className={s.ul}>
        {links.map(link=> <li key={link}><a className={s.a} href="#">{link}</a></li>)}
      </ul>
    </div>
  )
}

const Footer = () => {
  const items = [
    {
      id: 1,
      title: 'Abstract',
      links: ['Start Trial', 'Pricing', 'Download']
    },
    {
      id: 2,
      title: 'Resources',
      links: ['Blog', 'Help Center', 'Release Notes', 'Status']
    },
    {
      id: 3,
      title: 'Community',
      links: ['Twitter', 'Linkedin', 'Facebook', 'Dribbble', 'Podcast']
    },
    {
      id: 4,
      title: 'Company',
      links: ['About Us', 'Careers', 'Legal']
    }
  ]

  return (
    <footer className={styles.footer}>
      <section className={styles.mainFooter}>
        {items.map(item => <FooterItem key={item.id} {...item} />)}
        <div className={styles.copyRight}>
          <Logo />
          <p style={{ marginTop: "1rem", lineHeight: 1.5 }}>© Copyright 2023</p>
          <p style={{ lineHeight: 1.5 }}>Abstract Studio Design, Inc.</p>
          <p style={{ lineHeight: 1.5 }}>All rights reserved</p>
        </div>
      </section>
    </footer>
  )
}

export default Footer
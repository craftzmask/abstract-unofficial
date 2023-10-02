import styles from './Main.module.css'
import MainItem from '../MainItem/MainItem'

const Main = () => {
  const items = [
    {
      id: 1,
      title: 'Using Abstract',
      content: 'Abstract lets you manage, version, and document your designs in one place.',
      imgSrc: '/assets/item1.png',
      link: 'https://help.abstract.com/hc/en-us/categories/360005436612-Using-Abstract'
    },
    {
      id: 2,
      title: 'Manage your account',
      content: 'Configure your account settings, such as your email, profile details, and password.',
      imgSrc: '/assets/item2.png',
      link: 'https://help.abstract.com/hc/en-us/categories/360005449431-Manage-your-account'
    },
    {
      id: 3,
      title: 'Manage organizations, teams, and projects',
      content: 'Use Abstract organizations, teams, and projects to organize your people and your work.',
      imgSrc: '/assets/item3.png',
      link: 'https://help.abstract.com/hc/en-us/categories/360005449531-Manage-organizations-teams-and-projects'
    },
    {
      id: 4,
      title: 'Manage billing',
      content: 'Change subscriptions and payment details.',
      imgSrc: '/assets/item4.png',
      link: 'https://help.abstract.com/hc/en-us/categories/360005436672-Manage-billing'
    },
    {
      id: 5,
      title: 'Authenticate to Abstract',
      content: 'Set up and configure SSO, SCIM, and Just-in-Time provisioning.',
      imgSrc: '/assets/item5.png',
      link: 'https://help.abstract.com/hc/en-us/categories/360005436592-Authenticate-to-Abstract'
    },
    {
      id: 6,
      title: 'Abstract support',
      content: 'Get in touch with a human.',
      imgSrc: '/assets/item6.png',
      link: 'https://help.abstract.com/hc/en-us/articles/360050382291-Contact-Support'
    },
  ]

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        {items.map(item => <MainItem key={item.id} {...item} />)}
      </section>
    </main>
  )
}

export default Main
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Soda from '../components/Soda'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Soda></Soda>
    </div>
  )
}

export default Home

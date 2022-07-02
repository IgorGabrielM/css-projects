import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Soda from '../components/soda/Soda'
import Calculator from '../components/calculator/Calculator'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Soda></Soda>
      <Calculator></Calculator>
    </div>
  )
}

export default Home

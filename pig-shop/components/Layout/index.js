import Head from 'next/head'
import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pig Shop Home Page</title>
      </Head>
      <header>
        <h1>PIG SHOP</h1>
      </header>
      <main>{children}</main>
    </div>
  )
}
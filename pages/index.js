import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import styles from '../styles/Home.module.css'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
 
            
      <main className={styles.main}>
       

        <div className={styles.grid}>
  

          <a href="/posts/blog" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Find out what UserDAO is and how it works</p>
          </a>

          <a
            href="https://market.oceanprotocol.com/"
            className={styles.card}
          >
            <h3>Get Data &rarr;</h3>
            <p>Purchuse access to UserDAO generated datasets</p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h3>Join &rarr;</h3>
            <p>
              Recieve a share of UserDAO generated revenue
            </p>
          </a>
        </div>
      </main>
     
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

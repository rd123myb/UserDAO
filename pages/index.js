import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section> */}

      <main className={styles.main}>
        <div className={styles.grid}>
          <Link href="/posts/blog">
            <a className={styles.card}>
              <h3>Learn &rarr;</h3>
              <p>Find out what UserDAO is and how it works</p>
            </a>
          </Link>

          <Link href="https://market.oceanprotocol.com/">
            <a className={styles.card}>
              <h3>Get Data &rarr;</h3>
              <p>Purchase access to UserDAO generated datasets</p>
            </a>
          </Link>

          <Link href="/create-profile">
            <a className={styles.card}>
              <h3>Join &rarr;</h3>
              <p>Receive a share of UserDAO generated revenue</p>
            </a>
          </Link>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstSurvey() {
  return (
    <Layout>
      <Head>
        <title>First Survey</title>
      </Head>
      <h1>First Survey</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
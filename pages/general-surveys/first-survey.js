import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import React, {Component} from 'react';
import * as Survey from 'survey-react';
import 'survey-react/survey.css'
import SignupForm from "../../components/surveys/signupForm"


export default function FirstSurvey() {

  


  return (
    <Layout>
      <Head>
        <title>First Survey</title>
      </Head>
      <h1>First Survey</h1>
      <body>
      
      </body>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}

import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";
import React from 'react';
import * as Survey from 'survey-react';
import 'survey-react/survey.css'
import {json} from "../components/surveys/signupForm"


export default function FirstSurvey() {

  


  return (
    <Layout>
      <Head>
        <title>Sign up to UserDAO</title>
      </Head>
      <h1>Hi there, create a private profile</h1>
      <body>
      <Survey.Survey
        json={json}/>
      </body>
     
    </Layout>
  );
}

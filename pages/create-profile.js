import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";
import React from 'react';
import * as Survey from 'survey-react';
import 'survey-react/survey.css'
import {json} from "../components/surveys/profile"


export default function FirstSurvey() {

  


  return (
    <Layout>
      <Head>
        <title>Sign up to UserDAO</title>
      </Head>
      <h1>Create Private Profile</h1>
      <body>
      <Survey.Survey
        json={json}/>
      </body>
     
    </Layout>
  );
}

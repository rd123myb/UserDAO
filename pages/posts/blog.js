
// import utilStyles from "../../styles/utils.module.css";
// import { getSortedPostsData } from "../lib/posts";
// import Link from "next/link";
// import Date from "../../components/date";


// export default function Home({ allPostsData }) {
//   return (
//     <Layout home>
//       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
//         <h2 className={utilStyles.headingLg}>Blog</h2>
//         <ul className={utilStyles.list}>
//           {allPostsData.map(({ id, date, title }) => (
//             <li className={utilStyles.listItem} key={id}>
//               <Link href={`/posts/${id}`}>
//                 <a>{title}</a>
//               </Link>
//               <br />
//               <small className={utilStyles.lightText}>
//                 <Date dateString={date} />
//               </small>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </Layout>
//   );
// }

// export default function hi (){
//     <a> hello</a>
// }

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }


import Link from 'next/link'
import Layout from '../../components/layout'

export default function FirstPost({ allPostsData }) {
  return (
    <Layout>
      <h1>So why is it priced at zero?</h1>
      
        
          <p> UserDAO is a DataDao usecase that gives users the tools they need to generate and monitize structured data from the opinions.
              This data is valuable to companies who can use it to develop products with better market fit. This can result in increased revenue and a durable competitive advantages.
              Currently, this data is largley gathered by either user testing, focus groups or surveys that don't incentivise the users adequatly. Furthermore, much siloed within companies 
              and thier own qualitative research programmes, leaving countless potential for great product improvements unrealised at the expense of
               consumers around the world.
          </p>

          <p> UserDAO is a decentralized and open-source platform for meeting this data demand in an open marketplace.
               The inbuilt surveys and analysis tools are desinged to turn your thoughts and preferences about every aspect of
               a given product into valuable data that companies can use to improve thier quality and serve the market demand more optimally.
               This is the goal of almost every business, and because this data is able to help them do this, your opinion is worth something.
           </p>
           <p>Now with the power of Blockchain, DAO's and Decentralized finance, qualitative data engines like UserDAO give
               everyday consumers a market for thier opinions on the products they enjoy, all while helping smaller companies, that otherwise
               wouldn't have the resources to gather thier own data, the ability to compete with larger companies in the data driven economy.
           </p>

      
    </Layout>
  )
}

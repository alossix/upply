import React from "react";

const index = () => {
  return <div>Test title page!</div>;
};

export default index;

// import Link from "next/link";
// import dbConnect from "../utils/dbConnect";
// import Company from "../models/Company.model";

// const Index = ({ companies }) => (
//   <>
//     {companies.map((company) => (
//       <div key={company._id}>
//         <div className="card">
//           <img src={company.logoUrl} />
//           <h5 className="company-name">{company.companyName}</h5>
//           <div className="main-content">
//             <div className="company-info">
//               <p className="pros-list">List of Pros</p>
//               <ul>
//                 {company.prosList.map((pro, index) => (
//                   <li key={index}>{pro}</li>
//                 ))}
//               </ul>
//               <p className="cons-list">List of Cons</p>
//               <ul>
//                 {company.consList.map((con, index) => (
//                   <li key={index}>{con}</li>
//                 ))}
//               </ul>
//             </div>

//             <div className="btn-container">
//               <Link href="/[id]/edit" as={`/${pet._id}/edit`}>
//                 <button className="btn edit">Edit</button>
//               </Link>
//               <Link href="/[id]" as={`/${pet._id}`}>
//                 <button className="btn view">View</button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     ))}
//   </>
// );

// /* Retrieves company data from mongodb database */
// export async function getServerSideProps() {
//   await dbConnect();

//   /* find all the data in our database */
//   const result = await Company.find({});
//   const companies = result.map((doc) => {
//     const company = doc.toObject();
//     company._id = company._id.toString();
//     return company;
//   });

//   return { props: { companies: companies } };
// }

// export default Index;

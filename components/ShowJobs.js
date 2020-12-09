import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const ShowJobs = (props) => {
  const [jobs, setJobs] = useState([]);
  const userIdFromAuth0 = props.user.sub;

  useEffect(() => {
    axios
      .post(
        // `https://upply.work/api/job/fetch`,
        `http://localhost:3000/api/job/fetch`,
        { userIdFromAuth0 }
      )
      .then((info) => {
        setJobs(info.data.data);
        // console.log(info.data.data);
      });
  }, []);

  return (
    <section className="show-jobs-container">
      {jobs.map((job, index) => {
        return (
          <div className="job-card" key={index}>
            <h3>Company name: {job.companyName}</h3>
            <h3>Job title: {job.jobTitle}</h3>
            <Link href={job.jobListingUrl}>
              <a>Click to visit job listing</a>
            </Link>
          </div>
        );
      })}

      <style jsx>{`
        .show-jobs-container {
          display: flex;
          flex-wrap: wrap;
        }
        .job-card {
          width: 300px;
          margin: 1rem;
        }
      `}</style>
    </section>
  );
};

export default ShowJobs;

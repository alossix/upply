import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import JobCard from "./JobCard";

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
        console.log(info.data.data);
      });
  }, []);

  return (
    <section className="show-jobs-container">
      {jobs.map((job, index) => {
        return <JobCard job={job} key={index}></JobCard>;
      })}
      <style jsx>{`
        .show-jobs-container {
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
    </section>
  );
};

export default ShowJobs;

import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "./JobCard";

const ShowJobs = (props) => {
  const userIdFromAuth0 = props.user.sub;
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const jobInfo = await axios.post(
        // `https://upply.work/api/job/fetch`,
        `http://localhost:3000/api/job/fetch`,
        { userIdFromAuth0 }
      );
      console.log(jobInfo);
      setJobs(jobInfo.data.data);
    };
    fetchJobs();
  }, []);

  return (
    <section className="show-jobs-inner-container">
      {jobs.map((job, index) => {
        return <JobCard job={job} key={index}></JobCard>;
      })}
      <style jsx>{`
        .show-jobs-inner-container {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          border-top: 2px solid black;
          border-bottom: 2px solid black;
          height: 50vh;
          overflow: auto;
        }
      `}</style>
    </section>
  );
};

export default ShowJobs;

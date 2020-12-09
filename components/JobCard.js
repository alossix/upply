import React from "react";
import Link from "next/link";

const JobCard = (props) => {
  const { job } = props;

  const classSetter = () => {
    return `${job.status} bar`;
  };
  return (
    <div className="job-card">
      <div className="status-holder">
        <div className={classSetter()}>{job.status}</div>
        {job.bookmarked ? (
          <img
            className="bookmark-img"
            src="/bookmarked.png"
            alt="bookmarked"
          ></img>
        ) : (
          <img
            className="bookmark-img"
            src="/bookmark-empty.png"
            alt="bookmarked"
          ></img>
        )}
      </div>
      <h3 className="status-entry">
        {job.jobTitle}, {job.companyName}
      </h3>
      <div className="job-info-section">
        {job.jobLocation ? (
          <div>
            <p>
              <strong>Location: </strong>
              {job.jobLocation}
            </p>
          </div>
        ) : null}
        {job.salary ? (
          <p>
            <strong>Salary: </strong>
            {job.salary}
          </p>
        ) : null}
        {job.notes.length > 0 ? (
          <div>
            <p>
              <strong>Notes:</strong>
            </p>
            <ul>
              {job.notes.map((note, i) => (
                <li key={i}>{note}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="bottom-row">
          <div className="urls">
            {job.companyUrl ? (
              <Link href={job.companyUrl}>
                <a>
                  Company website
                  <br />
                </a>
              </Link>
            ) : null}
            {job.jobListingUrl ? (
              <Link href={job.jobListingUrl}>
                <a>
                  Job listing page
                  <br />
                </a>
              </Link>
            ) : null}
          </div>
          <img src="/edit.png" alt="edit"></img>
        </div>
      </div>
      <style jsx>{`
        .job-card {
          width: 350px;
          border-radius: 15px;
          border: 2px solid black;
          position: relative;
          margin: 1rem 0rem;
        }
        .status-holder {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
          height: 3rem;
        }
        .bar {
          text-transform: capitalize;
          width: 100%;
          padding: 0.5rem;
          border-top-left-radius: 13px;
          border-top-right-radius: 13px;
          color: white;
        }
        h3 {
          margin: 1rem 0rem;
        }
        .job-info-section {
          margin-left: 1rem;
        }
        .open {
          background-color: white;
          color: black;
          border-bottom: 2px solid black;
        }

        .applied {
          background-color: #7096db;
        }
        .interviews {
          background-color: #264b96;
        }
        .offer {
          background-color: #006f3c;
        }
        .bookmark-img {
          width: 20px;
          height: 32px;
          position: absolute;
          right: 1rem;
          top: 4px;
        }
        .job-info-section {
          padding: 0.5rem;
        }
        .status-entry {
          text-transform: capitalize;
        }
        .bottom-row {
          display: flex;
          justify-content: space-between;
        }
        .bottom-row img {
          width: 32px;
          margin-right: 2px;
        }
        ul {
          padding-left: 2rem;
        }
      `}</style>
    </div>
  );
};

export default JobCard;

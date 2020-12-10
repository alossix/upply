import React, { useState, useEffect } from "react";
import { useFetchUser } from "../../../lib/user";
import Layout from "../../../components/layout";
import axios from "axios";
import Link from "next/link";

const indexStack = () => {
  const { user, loading } = useFetchUser();
  const [jobs, setJobs] = useState([]);
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyUrl, setCompanyUrl] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [jobListingUrl, setJobListingUrl] = useState("");
  const [status, setStatus] = useState("open");
  const [bookmarked, setBookmarked] = useState(false);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (user) {
      const userIdFromAuth0 = user.sub;
      axios
        .post(`https://upply.work/api/job/fetch`, { userIdFromAuth0 })
        .then((jobInfo) => {
          setJobs(jobInfo.data.data);
        });
    }
  }, [user]);

  const formSubmitHandler = (event) => {
    const userIdFromAuth0 = user.sub;
    event.preventDefault();
    axios
      .post("https://upply.work/api/job", {
        bookmarked,
        jobTitle,
        companyName,
        companyUrl,
        jobLocation,
        jobListingUrl,
        salary,
        notes,
        status,
        userIdFromAuth0,
      })
      .then((jobsResponse) => setJobs([jobsResponse.data.data, ...jobs]))
      .then(() => {
        setJobTitle("");
        setCompanyName("");
        setCompanyUrl("");
        setJobLocation("");
        setSalary("");
        setJobListingUrl("");
        setStatus("open");
        // setBookmarked(false);
        setNotes([]);
      });
  };

  const bookmarkHandler = (job) => {
    const id = job._id;
    let newBookmarkState;
    if (job.bookmarked) {
      newBookmarkState = false;
      job.bookmarked = newBookmarkState;
      setBookmarked(newBookmarkState);
    } else {
      newBookmarkState = true;
      job.bookmarked = newBookmarkState;
      setBookmarked(newBookmarkState);
    }
    axios.post("https://upply.work/api/job/update", {
      id,
      newBookmarkState,
    });
  };

  const classSetter = (job) => {
    return `${job.status} bar`;
  };

  return (
    <Layout user={user} loading={loading}>
      {user ? (
        <div className="stack-page">
          <h1>Your Application Stack</h1>
          <div className="show-jobs-container">
            {jobs.map((job, index) => {
              return (
                <div className="job-card" key={index}>
                  <div className="status-holder">
                    <h2 className={classSetter(job)}>{job.status}</h2>
                    <img
                      className="bookmark-img"
                      src={
                        job.bookmarked
                          ? "/bookmarked.png"
                          : "/bookmark-empty.png"
                      }
                      alt="bookmarked"
                      onClick={() => bookmarkHandler(job)}
                    ></img>
                  </div>
                  <div className="job-info-section">
                    <h2 className="status-entry">
                      {job.jobTitle}, {job.companyName}
                    </h2>
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
                      <Link
                        href="/user/stack/[id]"
                        as={`/user/stack/${job._id}`}
                      >
                        <a title="Click to edit">
                          <img src="/edit.png" alt="edit"></img>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="edit-job-container">
            <h2>Add a new job listing to your Stack</h2>
            <form className="stack-form" onSubmit={formSubmitHandler}>
              <div className="stack-form-container-left">
                <div className="row-1">
                  <label>
                    Job Title: *<br />
                    <input
                      type="text"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                    ></input>
                  </label>
                  <label>
                    Company Name: *<br />
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    ></input>
                  </label>
                </div>
                <div className="row-2">
                  <label>
                    Company Website URL: <br />
                    <input
                      type="string"
                      value={companyUrl}
                      onChange={(e) => setCompanyUrl(e.target.value)}
                    ></input>
                  </label>
                  <label>
                    Job Location: <br />
                    <input
                      type="text"
                      value={jobLocation}
                      onChange={(e) => setJobLocation(e.target.value)}
                    ></input>
                  </label>
                </div>
                <div className="row-3">
                  <label>
                    Salary: <br />
                    <input
                      type="text"
                      value={salary}
                      onChange={(e) => setSalary(e.target.value)}
                    ></input>
                  </label>
                  <label>
                    Job Listing URL: <br />
                    <input
                      type="string"
                      value={jobListingUrl}
                      onChange={(e) => setJobListingUrl(e.target.value)}
                    ></input>
                  </label>
                </div>
                <div className="status-area">
                  <p>Current Status:</p>
                  <div className="statuses">
                    <div>
                      <input
                        type="radio"
                        id="open"
                        name="status"
                        value="open"
                        onChange={() => setStatus("open")}
                      ></input>
                      <label htmlFor="open">Open</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="applied"
                        name="status"
                        value="applied"
                        onChange={() => setStatus("applied")}
                      ></input>
                      <label htmlFor="applied">Applied</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="interviews"
                        name="status"
                        value="interviews"
                        onChange={() => setStatus("interviews")}
                      ></input>
                      <label htmlFor="interviews">Interviews</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="offer"
                        name="status"
                        value="offer"
                        onChange={() => setStatus("offer")}
                      ></input>
                      <label htmlFor="offer">Offer Received</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stack-form-container-right">
                <div className="text-area">
                  <label>
                    Add Notes: <br />
                    <textarea
                      type="text"
                      rows="13"
                      cols="50"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    ></textarea>
                  </label>
                </div>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
          <style jsx>{`
            h1 {
              padding: 0.5rem;
            }
            h2 {
              font-size: 2rem;
            }
            .stack-page {
              display: flex;
              flex-direction: column;
            }
            .show-jobs-container {
              align-items: center;
              height: 55vh;
              display: flex;
              justify-content: space-between;
              flex-wrap: wrap;
              border-top: 2px solid black;
              border-bottom: 2px solid black;
              overflow: auto;
            }
            .stack-form {
              display: flex;
              justify-content: space-between;
              flex-wrap: wrap;
            }
            .row-1 {
              display: flex;
              justify-content: space-between;
            }
            .row-1 input {
              min-width: 20vw;
              margin-bottom: 1rem;
              margin-right: 1rem;
            }
            .row-2 {
              display: flex;
              justify-content: space-between;
            }
            .row-2 input {
              min-width: 20vw;
              margin-bottom: 1rem;
              margin-right: 1rem;
            }
            .row-3 {
              display: flex;
              justify-content: space-between;
            }
            .row-3 input {
              min-width: 20vw;
              margin-bottom: 1rem;
              margin-right: 1rem;
            }
            .stack-form button {
              width: 10rem;
            }
            .status-area {
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              margin-right: 1rem;
            }
            .statuses {
              display: flex;
              justify-content: space-between;
              flex-wrap: wrap;
            }
            .statuses input {
              margin: 0.5rem;
            }
            .job-card {
              width: 400px;
              min-height: 350px;
              border-radius: 15px;
              border: 2px solid black;
              position: relative;
              margin: 1rem;
              transition: transform 0.2s;
            }
            .job-card:hover {
              transform: scale(1.05);
            }
            .status-holder {
              display: flex;
              justify-content: space-between;
              font-weight: 200;
              text-transform: uppercase;
            }
            .bar {
              width: 100%;
              padding: 0.6rem 1rem 0.4rem 1.5rem;
              border-top-left-radius: 13px;
              border-top-right-radius: 13px;
              color: white;
            }
            h3 {
              margin: 1rem 0.5rem;
            }
            .job-info-section {
              padding: 1rem 1.5rem;
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
              width: 23px;
              height: 32px;
              position: absolute;
              right: 1rem;
              top: -3px;
              transition: transform 0.2s;
            }
            .status-entry {
              text-transform: capitalize;
            }
            .bottom-row {
              display: flex;
              justify-content: space-between;
              position: absolute;
              bottom: 0px;
              width: 100%;
              padding-bottom: 0.5rem;
            }
            .bottom-row img {
              width: 32px;
              margin-right: 2rem;
            }
            .bottom-row img:hover {
              cursor: pointer;
            }
            ul {
              padding-left: 2rem;
            }
          `}</style>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </Layout>
  );
};

export default indexStack;

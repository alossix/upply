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
        // .post(`https://upply.work/api/job/fetch`, { userIdFromAuth0 })
        // .post(`http://localhost:3000/api/job/fetch`, { userIdFromAuth0 })
        .post(`/api/job/fetch`, { userIdFromAuth0 })
        .then((jobInfo) => {
          setJobs(jobInfo.data.data);
        });
    }
  }, [user]);

  const formSubmitHandler = (event) => {
    const userIdFromAuth0 = user.sub;
    event.preventDefault();
    axios
      // .post("https://upply.work/api/job", {
      // .post("http://localhost:3000/api/job", {
      .post("/api/job", {
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
    // axios.post("https://upply.work/api/job/update", {
    // axios.post("http://localhost:3000/api/job/update", {
    axios.post("/api/job/update", {
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
                    <h3 className={classSetter(job)}>{job.status}</h3>
                    <img
                      title="Click to bookmark"
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
                      {job.jobTitle} • {job.companyName}
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
              <div className="stack-form-container">
                <div className="stack-form-container-left">
                  <div className="row-1">
                    <label>
                      Job Title: *<br />
                      <input
                        className="text-input"
                        type="text"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                      ></input>
                    </label>
                    <label>
                      Company Name: *<br />
                      <input
                        className="text-input"
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
                        className="text-input"
                        type="string"
                        value={companyUrl}
                        onChange={(e) => setCompanyUrl(e.target.value)}
                      ></input>
                    </label>
                    <label>
                      Job Location: <br />
                      <input
                        className="text-input"
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
                        className="text-input"
                        type="text"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                      ></input>
                    </label>
                    <label>
                      Job Listing URL: <br />
                      <input
                        className="text-input"
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
                        rows="11"
                        cols="50"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                      ></textarea>
                    </label>
                  </div>
                </div>
              </div>
              <button className="stack-form-button" type="submit">
                Submit
              </button>
            </form>
          </div>
          <style jsx>{`
            h1 {
              padding: 0.5rem 0rem;
            }
            h2 {
              font-size: 2rem;
            }
            h3 {
              font-size: 1.8rem;
              font-weight: 200;
              text-transform: uppercase;
            }
            p {
              margin: 0.25rem 0rem;
            }
            .stack-page {
              display: flex;
              flex-direction: column;
              max-width: 90vw;
              margin-top: 2rem;
            }
            .show-jobs-container {
              height: 650px;
              display: flex;
              justify-content: flex-start;
              align-items: flex-start;
              flex-wrap: wrap;
              border-top: 2px solid black;
              border-bottom: 2px solid black;
              overflow: auto;
            }
            .job-card {
              width: 360px;
              min-height: 275px;
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
            }
            .bar {
              width: 100%;
              padding: 0.6rem 1rem 0.4rem 1.5rem;
              border-top-left-radius: 13px;
              border-top-right-radius: 13px;
              color: white;
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
            .bookmark-img:hover {
              cursor: pointer;
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
            .edit-job-container h2 {
              margin: 1.5rem 0rem;
            }
            .stack-form {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              flex-wrap: wrap;
            }
            .stack-form-container {
              display: flex;
              flex-wrap: wrap;
              justify-content: flex-start;
            }
            .stack-form-container-right {
              margin-left: 5rem;
            }
            .row-1 {
              display: flex;
              justify-content: space-between;
            }
            .row-2 {
              display: flex;
              justify-content: space-between;
            }
            .row-3 {
              display: flex;
              justify-content: space-between;
            }
            .text-input {
              min-width: 20vw;
              margin: 0 1rem 1rem 0;
              padding: 0.5rem;
              font-size: 1.5rem;
              border-radius: 15px;
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
            textarea {
              border-radius: 15px;
              padding-left: 0.5rem;
              font-size: 1.5rem;
            }
            .stack-form-button {
              font-weight: bold;
              font-size: 1.4rem;
              width: 90px;
              color: #fff;
              background-color: #000;
              padding: 0.8rem 2rem;
              margin-top: 3rem;
              border: 3px solid black;
              border-radius: 15px;
            }
            .stack-form-button:hover {
              color: #000;
              background-color: #fff;
            }
            .stack-form-button:focus {
              outline: none;
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

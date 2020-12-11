import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useFetchUser } from "../../../lib/user";
import Layout from "../../../components/layout";
import axios from "axios";

const id = () => {
  const router = useRouter();
  const { user, loading } = useFetchUser();
  const { id } = router.query;
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyUrl, setCompanyUrl] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [jobListingUrl, setJobListingUrl] = useState("");
  const [status, setStatus] = useState("open");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (user) {
      // axios.post(`https://upply.work/api/job/query`, { id }).then((j) => {
      // axios.post(`http://localhost:3000/api/job/query`, { id }).then((j) => {
      axios.post(`/api/job/query`, { id }).then((j) => {
        setJobTitle(j.data.data.jobTitle);
        setCompanyName(j.data.data.companyName);
        setCompanyUrl(j.data.data.companyUrl);
        setJobLocation(j.data.data.jobLocation);
        setSalary(j.data.data.salary);
        setJobListingUrl(j.data.data.jobListingUrl);
        setStatus(j.data.data.status);
        setNotes(j.data.data.notes);
      });
    }
  }, [user]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    axios
      // .post("https://upply.work/api/job/query/update", {
      // .post("http://localhost:3000/api/job/query/update", {
      .post("/api/job/query/update", {
        jobTitle,
        companyName,
        companyUrl,
        jobLocation,
        jobListingUrl,
        salary,
        notes,
        status,
        id,
      })
      .then(() => {
        setJobTitle("");
        setCompanyName("");
        setCompanyUrl("");
        setJobLocation("");
        setSalary("");
        setJobListingUrl("");
        setStatus("open");
        setNotes([]);
        router.push("/user/stack");
      });
  };

  const deleteHandler = () => {
    console.log(`in deleteHandler, this is the id: ${id}`);
    axios
      // .post("https://upply.work/api/job/delete", { id })
      // .post("http://localhost:3000/api/job/delete", { id })
      .post("/api/job/delete", { id })
      .then(() => router.push("/user/stack"))
      .catch((err) => console.log(err));
  };

  return (
    <Layout user={user} loading={loading}>
      {user ? (
        <div className="edit-job-container">
          <h1>
            Edit Job Listing{" "}
            <strong>
              {jobTitle} (ID#{id})
            </strong>
          </h1>
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
                <button className="stack-form-button" type="submit">
                  Submit
                </button>
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
                <button
                  className="delete-button"
                  type="submit"
                  onClick={() => deleteHandler()}
                >
                  Delete Job
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <style jsx>{`
        .edit-job-container {
          max-width: 90vw;
          margin: 2.5rem auto;
        }
        h1 {
          margin: 1.5rem 0rem;
        }

        .stack-form {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex-wrap: wrap;
          max-width: 80vw;
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
        button {
          font-weight: bold;
          font-size: 1.4rem;
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
        button:focus {
          outline: none;
        }
        .delete-button {
          background-color: #bf212f;
          color: #fff;
          border: 3px solid #bf212f;
        }
        .delete-button:hover {
          color: #bf212f;
          background-color: #fff;
        }
      `}</style>
    </Layout>
  );
};

export default id;

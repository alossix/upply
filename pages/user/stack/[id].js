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
      axios.post(`http://localhost:3000/api/job/query`, { id }).then((j) => {
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
      .post("http://localhost:3000/api/job/query/update", {
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
      .post("http://localhost:3000/api/job/delete", { id })
      .then(() => router.push("/user/stack"))
      .catch((err) => console.log(err));
  };

  return (
    <Layout user={user} loading={loading}>
      {user ? (
        <div className="edit-job-container">
          <h2>Edit Job Listing ID# {id}</h2>
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
            <button className="submit-button" type="submit">
              Submit
            </button>
            <button
              className="delete-button"
              type="submit"
              onClick={() => deleteHandler()}
            >
              Delete this entry
            </button>
          </form>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <style jsx>{`
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
        .bookmarked {
          padding: 1rem 0rem;
        }
      `}</style>
    </Layout>
  );
};

export default id;

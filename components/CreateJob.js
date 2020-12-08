import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateJob = (props) => {
  const userIdFromAuth0 = props.user.sub;
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyUrl, setCompanyUrl] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [jobListingUrl, setJobListingUrl] = useState("");
  const [status, setStatus] = useState("open");
  const [bookmarked, setBookmarked] = useState(false);
  const [notes, setNotes] = useState([]);

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    // const formSubmit = await axios.post("https://upply.work/api/job", {
    const formSubmit = await axios.post("http://localhost:3000/api/job", {
      userIdFromAuth0,
      jobTitle,
      companyName,
      companyUrl,
      jobLocation,
      jobListingUrl,
      status,
      notes,
      bookmarked,
    });
  };

  return (
    <div className="stack-form">
      <h3>Add Company and Job Info</h3>
      <form onSubmit={formSubmitHandler}>
        <label>
          Job Title: * <br />
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          ></input>
        </label>
        <label>
          Company Name: * <br />
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          ></input>
        </label>
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
        <label>
          Add Notes: <br />
          <textarea
            type="text"
            rows="10"
            cols="50"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </label>
        <div>
          <p>Current Status:</p>
          <input
            type="radio"
            id="open"
            name="status"
            value="open"
            onChange={() => setStatus("open")}
          ></input>
          <label htmlFor="open">Open</label>
          <input
            type="radio"
            id="applied"
            name="status"
            value="applied"
            onChange={() => setStatus("applied")}
          ></input>
          <label htmlFor="applied">Applied</label>
          <input
            type="radio"
            id="interviews"
            name="status"
            value="interviews"
            onChange={() => setStatus("interviews")}
          ></input>
          <label htmlFor="interviews">Interviews</label>
          <input
            type="radio"
            id="offer"
            name="status"
            value="offer"
            onChange={() => setStatus("offer")}
          ></input>
          <label htmlFor="offer">Offer Received</label>
        </div>
        <div className="bookmarked">
          <label htmlFor="bookmarked">Bookmark this listing: </label>
          <input
            type="checkbox"
            id="bookmarked"
            name="bookmarked"
            value={bookmarked}
            onClick={() => setBookmarked(!bookmarked)}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
      <style jsx>
        {`
          .stack-form {
            padding: 1rem;
          }
          .stack-form form {
            display: flex;
            flex-direction: column;
            max-width: 50vw;
          }
          .stack-form label input {
            width: 100%;
          }
          .stack-form label textarea {
            width: 100%;
          }
          .bookmarked {
            padding: 1rem 0rem;
          }
        `}
      </style>
    </div>
  );
};

export default CreateJob;

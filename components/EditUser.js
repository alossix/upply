import React, { useState } from "react";
import axios from "axios";
import Router from "next/router";

const EditUser = (props) => {
  const userIdFromAuth0 = props.user.sub;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const postUser = async () => {
      // const userInfo = await axios.post("https://upply.work/api/user", {
      // const userInfo = await axios.post("http://localhost:3000/api/user", {
      const userInfo = await axios.post("/api/user", {
        userIdFromAuth0,
        firstName,
        lastName,
      });
      await console.log(userInfo);
    };

    const postJob = async () => {
      const jobTitle = "Your Dream Role";
      const companyName = "FavoriteCo";
      const status = "open";
      const salary = "Money can't buy you happiness";
      // const jobInfo = await axios.post("https://upply.work/api/job", {
      // const jobInfo = await axios.post("http://localhost:3000/api/job", {
      const jobInfo = await axios.post("/api/job", {
        userIdFromAuth0,
        jobTitle,
        companyName,
        status,
        salary,
      });
      await console.log(jobInfo);
      await Router.push("/user/stack");
    };

    postUser();
    postJob();
  };

  return (
    <div className="landing-page-form">
      <h2>Please enter your details to get started...</h2>
      <form onSubmit={formSubmitHandler}>
        <input type="hidden" value={userIdFromAuth0}></input>
        <label htmlFor="firstName">First name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          placeholder={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>

        <label htmlFor="lastName">Last name:</label>
        <input
          type="text"
          value={lastName}
          placeholder={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></input>

        <button type="submit">Submit</button>
      </form>
      <style jsx>{`
        .landing-page-form {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 3rem;
        }
        form {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        label {
          padding-top: 1rem;
        }
        input {
          padding: 1rem;
          border-radius: 15px;
          width: 200px;
        }
        input:focus {
          outline: none;
        }
        button {
          font-weight: bold;
          color: #fff;
          font-size: 1.4rem;
          background-color: #000;
          padding: 0.8rem 2rem;
          width: 200px;
          margin: 1rem 0rem;
          cursor: pointer;
          border: 3px solid black;
          border-radius: 15px;
        }
        button:hover {
          color: #000;
          background-color: #fff;
        }
        button:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default EditUser;

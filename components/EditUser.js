import React, { useState } from "react";
import axios from "axios";
import Router from "next/router";

const EditUser = (props) => {
  const userIdFromAuth0 = props.user.sub;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // const formSubmit = await axios.post("https://upply.work/api/user", {
    const postUser = async () => {
      const userInfo = await axios.post("http://localhost:3000/api/user", {
        userIdFromAuth0,
        firstName,
        lastName,
      });
      await console.log(userInfo);
    };

    const postJob = async () => {
      const jobTitle = "Your Dream Role";
      const companyName = "FavoriteCo";
      const jobInfo = await axios.post("http://localhost:3000/api/job", {
        userIdFromAuth0,
        jobTitle,
        companyName,
      });
      await console.log(jobInfo);
      await Router.push("/user/stack");
    };

    postUser();
    postJob();
  };

  return (
    <div className="landing-page-form">
      <form onSubmit={formSubmitHandler}>
        <input type="hidden" value={userIdFromAuth0}></input>
        <label>
          First name:
          <input
            type="text"
            value={firstName}
            placeholder={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </label>
        <label>
          Last name:
          <input
            type="text"
            value={lastName}
            placeholder={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </label>
        <button type="submit">Submit</button>
      </form>
      <style jsx>{`
        .landing-page-form form {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
};

export default EditUser;

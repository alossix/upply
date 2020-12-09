import React, { useState, useEffect } from "react";
import axios from "axios";
import Router from "next/router";

const indexLanding = (props) => {
  const { user, loading } = props;
  const userIdFromAuth0 = props.sub;
  console.log(userIdFromAuth0);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const H3Component = ({ user }) => {
    return <h3>Please edit your user details...</h3>;
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    // const formSubmit = await axios.post("https://upply.work/api/user", {
    const formSubmit = await axios
      .post("http://localhost:3000/api/user", {
        userIdFromAuth0,
        email,
        firstName,
        lastName,
      })
      .then((res) => {
        console.log(res);
        Router.push("/user/stack");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="landing-page-form">
      {loading ? (
        <h3>Edit your user details...</h3>
      ) : (
        <H3Component user={user} />
      )}
      <form onSubmit={formSubmitHandler}>
        <input type="hidden" value={userIdFromAuth0}></input>
        <label>
          First name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </label>
        <label>
          Last name:
          <input
            type="text"
            value={lastName}
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

export default indexLanding;

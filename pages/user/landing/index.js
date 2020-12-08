import { useFetchUser } from "../../../lib/user";
import Layout from "../../../components/layout";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Router from "next/router";

const indexLanding = () => {
  const { user, loading } = useFetchUser({ required: true });
  const [userIdFromAuth0, setUserIdFromAuth0] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const H3Component = ({ user }) => {
    setUserIdFromAuth0(user.sub);
    setEmail(user.name);
    return <h3>Please edit your user details {user.name}...</h3>;
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    // const formSubmit = await axios.post("https://upply.work/api/company", {
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
    <Layout user={user} loading={loading}>
      <div className="landing-page-form">
        {loading ? (
          <h3>Please edit your user details...</h3>
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
    </Layout>
  );
};

export default indexLanding;

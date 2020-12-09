import React, { useEffect, useState } from "react";
import axios from "axios";
import Router from "next/router";

const EditUser = (props) => {
  const userIdFromAuth0 = props.user.sub;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [user, setUser] = useState(props.user);

  useEffect(() => {
    const userFetch = async () => {
      const userInfo = await axios.post(
        // `https://upply.work/api/user/fetch`,
        `http://localhost:3000/api/user/fetch`,
        { userIdFromAuth0 }
      );
      await setUser(userInfo.data.data);
      await setFirstName(userInfo.data.data[0].firstName);
      await setLastName(userInfo.data.data[0].lastName);
    };
    userFetch();
  }, []);

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    // const formSubmit = await axios.post("https://upply.work/api/user", {
    const formSubmit = await axios
      .post("http://localhost:3000/api/user", {
        userIdFromAuth0,
        firstName,
        lastName,
      })
      .then((res) => {
        Router.push("/user/stack");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="landing-page-form">
      <h3>{userIdFromAuth0}</h3>
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

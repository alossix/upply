import React, { useState } from "react";
import axios from "axios";
import { useFetchUser } from "../lib/user";

const db = () => {
  const [firstName, setFirstName] = useState("");
  const { user } = useFetchUser({ required: true });

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event.target);
    axios
      .post("/api/test", { firstName })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          Test input
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </label>
        <img src="jobhunt.png" alt="upply"></img>
        <h2>{user.family_name}</h2>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default db;

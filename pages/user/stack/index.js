import React, { useState, useEffect } from "react";
import CreateCompany from "../../../components/CreateCompany";
import { useFetchUser } from "../../../lib/user";

const ShowStack = (props) => {
  return <CreateCompany user={props.user} />;
};

const indexStack = (props) => {
  const [stackState, setStackState] = useState(false);
  const { user } = useFetchUser();

  return (
    <div className="stack">
      <h2>Your Stack</h2>
      <h3 onClick={() => setStackState(true)}>
        Add new company or job listing
      </h3>
      {stackState ? <ShowStack user={user} /> : null}
    </div>
  );
};

export default indexStack;

import React, { useState } from "react";
import CreateCompany from "../../../components/CreateCompany";

const ShowStack = () => {
  return <CreateCompany />;
};

const indexStack = () => {
  const [stackState, setStackState] = useState(false);

  return (
    <div className="stack">
      <h2>Your Stack</h2>
      <h3 onClick={() => setStackState(true)}>Create new Stack</h3>
      {stackState ? <ShowStack /> : null}
    </div>
  );
};

export default indexStack;

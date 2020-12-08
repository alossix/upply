import React, { useState, useEffect } from "react";
import CreateJob from "../../../components/CreateJob";
import { useFetchUser } from "../../../lib/user";
import Layout from "../../../components/layout";
import ShowJobs from "./ShowJobs";

const indexStack = () => {
  const [stackState, setStackState] = useState(false);
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user}>
      <h2>Your Stack</h2>
      <button onClick={() => setStackState(true)}>
        Add new company or job listing
      </button>
      {user ? <ShowJobs user={user}></ShowJobs> : null}
      {stackState ? <CreateJob user={user} /> : null}
    </Layout>
  );
};

export default indexStack;
